"use client";

import React, { type FC, type ReactNode } from "react";
import { ReactTyped } from "react-typed";
import { cn } from "@/lib/utils";

// ============================================================================
// 1. Fluid Canvas Cursor Trail Simulation (Spring Physics + WhatsApp Palette)
// ============================================================================

interface OscillatorOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

class PhaseOscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  currentValue: number;

  constructor(options: OscillatorOptions = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 160; // 160° = WhatsApp Emerald/Teal
    this.frequency = options.frequency || 0.0018;
    this.amplitude = options.amplitude || 25; // Swings 135° (Green) to 185° (Teal)
    this.currentValue = this.offset;
  }

  update(): number {
    this.phase += this.frequency;
    this.currentValue = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.currentValue;
  }
}

class TrailNode {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

interface PhysicsConfig {
  trails: number;
  size: number;
  friction: number;
  dampening: number;
  tension: number;
}

class TrailLine {
  spring: number;
  friction: number;
  nodes: TrailNode[] = [];
  config: PhysicsConfig;
  targetPos: { x: number; y: number };

  constructor(springBase: number, config: PhysicsConfig, targetPos: { x: number; y: number }) {
    this.spring = springBase + 0.08 * Math.random() - 0.04;
    this.friction = config.friction + 0.01 * Math.random() - 0.005;
    this.config = config;
    this.targetPos = targetPos;

    for (let i = 0; i < config.size; i++) {
      const node = new TrailNode();
      node.x = targetPos.x;
      node.y = targetPos.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let springForce = this.spring;
    const node0 = this.nodes[0];
    node0.vx += (this.targetPos.x - node0.x) * springForce;
    node0.vy += (this.targetPos.y - node0.y) * springForce;

    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * springForce;
        node.vy += (prev.y - node.y) * springForce;
        node.vx += prev.vx * this.config.dampening;
        node.vy += prev.vy * this.config.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      springForce *= this.config.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.nodes.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

    const limit = this.nodes.length - 2;
    let a = 1;
    for (; a < limit; a++) {
      const current = this.nodes[a];
      const next = this.nodes[a + 1];
      const midX = 0.5 * (current.x + next.x);
      const midY = 0.5 * (current.y + next.y);
      ctx.quadraticCurveTo(current.x, current.y, midX, midY);
    }

    const current = this.nodes[a];
    const next = this.nodes[a + 1];
    if (current && next) {
      ctx.quadraticCurveTo(current.x, current.y, next.x, next.y);
    }

    ctx.stroke();
    ctx.closePath();
  }
}

/**
 * Renders an interactive, spring-interpolated fluid cursor trail on the specified canvas.
 * - Respects prefers-reduced-motion
 * - Scales properly with devicePixelRatio
 * - Fades gracefully when cursor is idle to conserve resources
 * - Cleans up event listeners and animation frames
 */
export function renderCanvas(canvasId = "canvas"): () => void {
  if (typeof window === "undefined") return () => {};

  // Check prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let isRunning = true;
  let animId = 0;
  let dpr = 1;
  let width = 0;
  let height = 0;

  // Spring physics parameters tuned for organic, elegant fluidity
  const config: PhysicsConfig = {
    trails: 50,
    size: 38,
    friction: 0.52,
    dampening: 0.025,
    tension: 0.99,
  };

  const mousePos = { x: -1000, y: -1000 };
  let activity = 0; // 0 (idle/invisible) to 1 (active movement)
  let lastMoveTime = 0;
  let lines: TrailLine[] = [];

  const colorOscillator = new PhaseOscillator({
    offset: 160,
    amplitude: 25,
    frequency: 0.0018,
  });

  function resize() {
    if (!canvas || !ctx) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = canvas.parentElement;
    const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
    width = rect.width;
    height = rect.height;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function initLines(initialX: number, initialY: number) {
    lines = [];
    mousePos.x = initialX;
    mousePos.y = initialY;
    for (let i = 0; i < config.trails; i++) {
      lines.push(
        new TrailLine(
          0.44 + (i / config.trails) * 0.024,
          config,
          mousePos
        )
      );
    }
  }

  function handlePointerMove(e: MouseEvent | TouchEvent) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    if (lines.length === 0) {
      initLines(relX, relY);
    }

    mousePos.x = relX;
    mousePos.y = relY;
    activity = Math.min(activity + 0.15, 1);
    lastMoveTime = performance.now();
  }

  function render(timestamp: number) {
    if (!isRunning || !ctx || !canvas) return;

    // Smoothly decay activity when cursor stops moving
    const elapsedSinceMove = timestamp - lastMoveTime;
    if (elapsedSinceMove > 60) {
      activity *= 0.95;
    }

    if (activity < 0.002) {
      // Clear canvas when completely idle to eliminate unnecessary paint cycles
      ctx.clearRect(0, 0, width, height);
      animId = window.requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Subtle WhatsApp emerald/teal hue
    const hue = Math.round(colorOscillator.update());
    const alpha = (0.05 * activity).toFixed(4);

    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = `hsla(${hue}, 80%, 35%, ${alpha})`;
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Soft glow
    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgba(18, 140, 126, ${(0.15 * activity).toFixed(3)})`;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      line.update();
      line.draw(ctx);
    }
    ctx.restore();

    animId = window.requestAnimationFrame(render);
  }

  // Initial setup
  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("mousemove", handlePointerMove, { passive: true });
  window.addEventListener("touchmove", handlePointerMove, { passive: true });

  const handleVisibilityChange = () => {
    if (document.hidden) {
      isRunning = false;
      window.cancelAnimationFrame(animId);
    } else {
      if (!isRunning) {
        isRunning = true;
        lastMoveTime = performance.now();
        animId = window.requestAnimationFrame(render);
      }
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Start loop
  animId = window.requestAnimationFrame(render);

  // Return cleanup
  return () => {
    isRunning = false;
    window.cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", handlePointerMove);
    window.removeEventListener("touchmove", handlePointerMove);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
}

// ============================================================================
// 2. TypeWriter Component (ReactTyped with 80ms type, 20ms back, 1s pause)
// ============================================================================

export interface TypeWriterProps {
  strings: string[];
  className?: string;
}

export const TypeWriter: FC<TypeWriterProps> = ({ strings, className }) => {
  return (
    <span className={cn("inline-flex items-baseline", className)} aria-live="polite">
      <ReactTyped
        strings={strings}
        typeSpeed={80}
        backSpeed={20}
        backDelay={1000}
        smartBackspace={true}
        loop={true}
        showCursor={true}
        cursorChar="|"
      >
        {/* Visible SSR fallback text to guarantee zero layout shifts and immediate readability */}
        <span>{strings[0] || ""}</span>
      </ReactTyped>
    </span>
  );
};

// ============================================================================
// 3. ShineBorder Component (Animated WhatsApp Green Border)
// ============================================================================

export type TColorProp = string | string[];

export interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: ReactNode;
}

export function ShineBorder({
  borderRadius = 14,
  borderWidth = 2,
  duration = 10,
  color = ["#25D366", "#128C7E", "#075E54"],
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid place-items-center rounded-2xl bg-white p-1 text-black",
        className
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
              Array.isArray(color) ? color.join(",") : color
            },transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[var(--border-radius)] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear] pointer-events-none`}
      />
      {children}
    </div>
  );
}

export default renderCanvas;
