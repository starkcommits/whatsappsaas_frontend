"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AnimatedHeroProps {
  badgeText?: string;
  badgeUrl?: string;
  staticTitle?: string;
  titles?: string[];
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  footerNote?: string;
  className?: string;
}

function Hero({
  badgeText = "One-time license • 7-day refund guarantee",
  badgeUrl,
  staticTitle = "Every customer conversation on WhatsApp,",
  titles: propTitles,
  subtitle = "Get lifetime access for $50 (about INR 4,199) one-time. No monthly fees, no markup on WhatsApp messages.",
  primaryButtonText = "Get lifetime access",
  primaryButtonUrl,
  secondaryButtonText = "See how it works",
  secondaryButtonUrl = "/how-it-works",
  footerNote = "Built on Meta's WhatsApp Business Platform (Cloud API).",
  className,
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () =>
      propTitles && propTitles.length > 0
        ? propTitles
        : [
            "in one shared inbox",
            "with zero monthly fees",
            "with direct Meta rates",
            "with verified consent",
            "built for growing teams",
          ],
    [propTitles]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2400);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div
      className={cn(
        "relative w-full rounded-[32px] border border-zinc-200/90 bg-white p-8 sm:p-12 md:p-16 shadow-soft-lg overflow-hidden text-center",
        className
      )}
    >
      {/* Background Micro-Grid & Ambient Emerald Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[34rem] h-56 bg-brand-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-7">
        
        {/* Top Badge */}
        {badgeText && (
          <div>
            {badgeUrl ? (
              <a
                href={badgeUrl}
                className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200/80 text-brand-700 hover:bg-brand-100/80 transition-colors px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold shadow-xs"
              >
                <span>{badgeText}</span>
                <MoveRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200/80 text-brand-700 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold shadow-xs">
                <span>{badgeText}</span>
              </div>
            )}
          </div>
        )}

        {/* Dynamic Animated Heading */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-950 font-display leading-[1.15]">
            <span className="block">{staticTitle}</span>
            <span className="relative flex w-full justify-center overflow-hidden text-center min-h-[1.3em] pt-1 text-brand-600">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-extrabold"
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  animate={
                    titleNumber === index
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? -70 : 70,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h2>

          {subtitle && (
            <p className="mt-2 text-base sm:text-lg md:text-xl leading-relaxed tracking-normal text-ink-500 max-w-2xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
          {primaryButtonText && (
            <a
              href={primaryButtonUrl || "#"}
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto gap-2.5 font-bold shadow-soft"
              >
                <span>{primaryButtonText}</span>
                <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          )}

          {secondaryButtonText && (
            <a
              href={secondaryButtonUrl || "#"}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 text-zinc-900 border-zinc-200/90 hover:bg-zinc-50 shadow-xs"
              >
                <span>{secondaryButtonText}</span>
              </Button>
            </a>
          )}
        </div>

        {/* Bottom Attribution Note */}
        {footerNote && (
          <p className="text-xs text-ink-400 font-mono pt-1">
            {footerNote}
          </p>
        )}

      </div>
    </div>
  );
}

function HeroDemo() {
  return (
    <div className="block w-full">
      <Hero />
    </div>
  );
}

export { Hero, HeroDemo, Hero as AnimatedCta };
export default Hero;
