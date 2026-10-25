"use client";

import React, { useEffect, useState, useRef, type ReactNode } from "react";
import { Plus, CheckCircle2, Play, ArrowRight } from "lucide-react";
import {
  renderCanvas,
  ShineBorder,
  TypeWriter,
} from "@/components/ui/hero-designali";

interface HeroProps {
  signupUrl?: string;
  priceUSD?: number;
  priceINR?: string;
  children?: ReactNode;
}

export function Hero({
  signupUrl = "https://app.flexing.in/signup",
  priceUSD = 50,
  priceINR = "₹4,199",
  children,
}: HeroProps) {
  // Short capability words rotating in TypeWriter (matching Designali style)
  const talkAbout = [
    "Shared Team Inbox",
    "Approved Meta Templates",
    "WhatsApp Flows",
    "Opt-in Consent Tracking",
    "Zero Markup Broadcasts",
    "Live Team Assignment",
    "Cloud API Integration",
  ];

  // Interactive Cursor Follower state
  const heroRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const cleanup = renderCanvas("canvas");
    return () => {
      cleanup?.();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#E7F8EE] via-[#F2FAF5] to-white border-b border-emerald-100/80">
      <section
        id="hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 select-none cursor-default"
      >
        {/* Subtle WhatsApp-Green Grid Pattern across the entire hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 max-md:hidden top-[100px] -z-10 h-[550px] w-full bg-transparent bg-[linear-gradient(to_right,#C8EDD9_1px,transparent_1px),linear-gradient(to_bottom,#C8EDD9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-45 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_35%,#000_70%,transparent_110%)]"
        />

        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-200/40 via-emerald-100/20 to-transparent blur-3xl opacity-70"
        />

        {/* Interactive Glowing Cursor Follower Effect */}
        {cursorVisible && (
          <div
            className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out max-md:hidden"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer glowing emerald halo */}
              <div className="w-9 h-9 rounded-full border border-emerald-500/80 bg-emerald-400/20 shadow-[0_0_24px_rgba(16,185,129,0.55)] animate-pulse" />
              {/* Center crisp dot */}
              <div className="absolute w-2 h-2 rounded-full bg-emerald-600 shadow-sm" />
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Announcement Pill */}
          <div className="mb-6 mt-4 sm:justify-center md:mb-8 md:mt-4">
            <div className="relative inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-white/95 px-4 py-1.5 text-xs text-ink-700 shadow-soft backdrop-blur-sm transition-all hover:border-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono font-medium text-emerald-950">
                Lifetime License: ${priceUSD} ({priceINR}) • Zero Monthly Subscriptions
              </span>
              <a
                href="/pricing"
                className="ml-1 flex items-center font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Pricing details →
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-5xl w-full">
            
            {/* Center Hero Card with Sharp Corners and 4 Embedded Corner Pluses */}
            <div className="relative mx-auto w-full border border-emerald-400/70 bg-white/80 py-10 px-6 sm:py-14 sm:px-12 backdrop-blur-md [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">
              {/* 4 Corner Plus Icons — Exactly Embedded on the 90-degree Corner Vertices */}
              <Plus
                strokeWidth={4}
                className="text-emerald-500 absolute -left-5 -top-5 h-10 w-10 z-20 pointer-events-none"
              />
              <Plus
                strokeWidth={4}
                className="text-emerald-500 absolute -bottom-5 -left-5 h-10 w-10 z-20 pointer-events-none"
              />
              <Plus
                strokeWidth={4}
                className="text-emerald-500 absolute -right-5 -top-5 h-10 w-10 z-20 pointer-events-none"
              />
              <Plus
                strokeWidth={4}
                className="text-emerald-500 absolute -bottom-5 -right-5 h-10 w-10 z-20 pointer-events-none"
              />

              <h1 className="flex flex-col text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] text-ink-950 font-display">
                <span>
                  Your complete platform for{" "}
                  <span className="text-emerald-600 block sm:inline bg-gradient-to-r from-emerald-600 via-[#128C7E] to-emerald-700 bg-clip-text text-transparent">
                    WhatsApp Business.
                  </span>
                </span>
              </h1>

              {/* Status Badge */}
              <div className="flex items-center mt-5 justify-center gap-2">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <p className="text-xs font-mono font-medium text-emerald-800">
                  Available Now • Built on Meta Cloud API • Zero Message Markup
                </p>
              </div>
            </div>

            {/* Sub-headline (matching "Welcome to my creative playground! I'm Ali") */}
            <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink-950 font-display tracking-tight">
              Welcome to ONO! Calm, reliable WhatsApp operations for{" "}
              <span className="text-emerald-600 font-extrabold">growing teams</span>
            </h2>

            {/* Dynamic TypeWriter Rotating Words (matching "I am an expert in design like UI UX") */}
            <p className="text-ink-600 py-4 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
              Connect your Meta WhatsApp number, import consent-tagged contacts, and scale support with{" "}
              <span className="text-emerald-700 font-bold underline decoration-emerald-400 decoration-2 underline-offset-4">
                <TypeWriter strings={talkAbout} />
              </span>
              .
            </p>

            {/* Interactive CTAs with ShineBorder */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-2">
              <a href={signupUrl} className="w-full sm:w-auto inline-block">
                <ShineBorder
                  borderWidth={2}
                  borderRadius={14}
                  duration={12}
                  className="cursor-pointer h-auto w-full sm:w-auto p-1 bg-white/95 shadow-soft-lg hover:shadow-emerald-500/20 transition-shadow"
                  color={["#25D366", "#128C7E", "#075E54"]}
                >
                  <div className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors shadow-sm w-full">
                    <span>Get lifetime access (${priceUSD})</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </ShineBorder>
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-200/90 bg-white/90 hover:bg-white text-ink-800 font-semibold text-sm sm:text-base shadow-soft hover:shadow-md transition-all"
              >
                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                <span>See how it works</span>
              </a>
            </div>

            {/* 4-Item Fact Strip with Verified Icons */}
            <div className="mt-8 pt-5 border-t border-emerald-200/70 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-ink-700">
              <div className="flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pay once (${priceUSD})</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No message markup</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>7-day refund</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Consent built in</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-ink-500 font-mono">
              Built on Meta's WhatsApp Business Platform (Cloud API).
            </p>

            {/* Product Preview Slot (Centered Showcase Frame) */}
            {children && (
              <div className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto">
                {children}
              </div>
            )}

          </div>
        </div>

        {/* Dynamic Fluid Silk Ribbon Canvas */}
        <canvas
          id="canvas"
          className="pointer-events-none absolute inset-0 mx-auto w-full h-full z-0"
        />
      </section>
    </main>
  );
}

export default Hero;
