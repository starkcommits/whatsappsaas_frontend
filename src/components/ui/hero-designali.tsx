"use client";

import React, { type FC, type ReactNode } from "react";
import { ReactTyped } from "react-typed";
import { cn } from "@/lib/utils";

// --- Sine Wave Generator for Emerald / Cyan Dynamic Hue ---
function PhaseOscillator(this: any, options: { phase?: number; offset?: number; frequency?: number; amplitude?: number }) {
  this.init(options || {});
}

PhaseOscillator.prototype = {
  init: function (options: { phase?: number; offset?: number; frequency?: number; amplitude?: number }) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 155; // 155° = Emerald / WhatsApp Green
    this.frequency = options.frequency || 0.0015;
    this.amplitude = options.amplitude || 35; // Swings from 120° (Vibrant Green) to 190° (Teal / Cyan)
    this.currentValue = this.offset;
  },
  update: function () {
    this.phase += this.frequency;
    this.currentValue = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.currentValue;
  },
  value: function () {
    return this.currentValue;
  },
};

// --- Physics Particle Node ---
function RibbonNode(this: any) {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

// --- Fluid Silk Ribbon Line ---
function RibbonLine(this: any, options: { spring: number }, EConfig: any, mousePos: { x: number; y: number }) {
  this.init(options || {}, EConfig, mousePos);
}

RibbonLine.prototype = {
  init: function (options: { spring: number }, EConfig: any, mousePos: { x: number; y: number }) {
    this.spring = options.spring + 0.1 * Math.random() - 0.05;
    this.friction = EConfig.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    this.E = EConfig;
    this.pos = mousePos;
    for (let i = 0; i < EConfig.size; i++) {
      const node = new (RibbonNode as any)();
      node.x = mousePos.x;
      node.y = mousePos.y;
      this.nodes.push(node);
    }
  },
  update: function () {
    let springForce = this.spring;
    let node0 = this.nodes[0];
    node0.vx += (this.pos.x - node0.x) * springForce;
    node0.vy += (this.pos.y - node0.y) * springForce;

    for (let i = 0, len = this.nodes.length; i < len; i++) {
      let node = this.nodes[i];
      if (i > 0) {
        let prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * springForce;
        node.vy += (prevNode.y - node.y) * springForce;
        node.vx += prevNode.vx * this.E.dampening;
        node.vy += prevNode.vy * this.E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      springForce *= this.E.tension;
    }
  },
  draw: function (ctx: CanvasRenderingContext2D) {
    if (this.nodes.length < 2) return;
    let currNode: any;
    let nextNode: any;
    let midX = this.nodes[0].x;
    let midY = this.nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(midX, midY);

    const limit = this.nodes.length - 2;
    let a = 1;
    for (; a < limit; a++) {
      currNode = this.nodes[a];
      nextNode = this.nodes[a + 1];
      midX = 0.5 * (currNode.x + nextNode.x);
      midY = 0.5 * (currNode.y + nextNode.y);
      ctx.quadraticCurveTo(currNode.x, currNode.y, midX, midY);
    }

    currNode = this.nodes[a];
    nextNode = this.nodes[a + 1];
    if (currNode && nextNode) {
      ctx.quadraticCurveTo(currNode.x, currNode.y, nextNode.x, nextNode.y);
    }
    ctx.stroke();
    ctx.closePath();
  },
};

// --- Main Canvas Controller ---
export function renderCanvas(canvasId = "canvas") {
  if (typeof window === "undefined") return () => {};

  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let isRunning = true;
  let animationFrameId: number;

  const EConfig = {
    debug: false,
    friction: 0.5,
    trails: 65,
    size: 45,
    dampening: 0.025,
    tension: 0.99,
  };

  const mousePos = {
    x: window.innerWidth / 2,
    y: 260,
  };

  let lines: any[] = [];

  function resizeCanvas() {
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  function initLines() {
    lines = [];
    for (let i = 0; i < EConfig.trails; i++) {
      lines.push(
        new (RibbonLine as any)(
          { spring: 0.45 + (i / EConfig.trails) * 0.025 },
          EConfig,
          mousePos
        )
      );
    }
  }

  const colorOscillator = new (PhaseOscillator as any)({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 35,
    frequency: 0.0015,
    offset: 155, // WhatsApp Green / Emerald
  });

  function updatePosition(clientX: number, clientY: number) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mousePos.x = clientX - rect.left;
    mousePos.y = clientY - rect.top;
  }

  function onFirstInteraction(e: MouseEvent | TouchEvent) {
    if ("touches" in e && e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    } else if ("clientX" in e) {
      updatePosition(e.clientX, e.clientY);
    }
    initLines();
  }

  function handleMouseMove(e: MouseEvent) {
    updatePosition(e.clientX, e.clientY);
  }

  function handleTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function renderLoop() {
    if (!isRunning || !ctx || !canvas) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Subtle WhatsApp emerald ribbon stroke
    const currentHue = Math.round(colorOscillator.update());
    ctx.strokeStyle = `hsla(${currentHue}, 85%, 38%, 0.038)`;
    ctx.lineWidth = 7;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      line.update();
      line.draw(ctx);
    }

    animationFrameId = window.requestAnimationFrame(renderLoop);
  }

  // Setup
  resizeCanvas();
  initLines();
  renderLoop();

  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("mousemove", onFirstInteraction, { once: true });
  document.addEventListener("touchstart", onFirstInteraction, { once: true });
  document.addEventListener("mousemove", handleMouseMove, { passive: true });
  document.addEventListener("touchmove", handleTouchMove, { passive: true });

  const handleFocus = () => {
    if (!isRunning) {
      isRunning = true;
      renderLoop();
    }
  };

  const handleBlur = () => {
    // Keep running or pause gently
  };

  window.addEventListener("focus", handleFocus);
  window.addEventListener("blur", handleBlur);

  // Return cleanup function
  return () => {
    isRunning = false;
    window.cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resizeCanvas);
    document.removeEventListener("mousemove", onFirstInteraction);
    document.removeEventListener("touchstart", onFirstInteraction);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("focus", handleFocus);
    window.removeEventListener("blur", handleBlur);
  };
}

// --- TypeWriter Component using react-typed ---
export interface TypeWriterProps {
  strings: string[];
  className?: string;
}

export const TypeWriter: FC<TypeWriterProps> = ({ strings, className }) => {
  return (
    <span className={className}>
      <ReactTyped
        loop
        typeSpeed={60}
        backSpeed={25}
        strings={strings}
        smartBackspace
        backDelay={1600}
        loopCount={0}
        showCursor
        cursorChar="|"
      >
        <span>{strings[0] || ""}</span>
      </ReactTyped>
    </span>
  );
};

// --- Shine Border Component ---
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
