"use client";

import React, { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Smartphone, 
  CreditCard, 
  Inbox, 
  ShieldCheck, 
  Zap, 
  Users, 
  Sparkles,
  Lock,
  Workflow,
  ArrowRight
} from "lucide-react";

export interface HighlightCardProps {
  title: string;
  description: string[] | string;
  icon?: ReactNode;
  iconName?: string;
  actionText?: string;
  href?: string;
  className?: string;
}

function resolveIcon(icon?: ReactNode, iconName?: string): ReactNode {
  if (icon) return icon;
  switch (iconName) {
    case 'meta':
    case 'business':
      return <Building2 className="w-5 h-5 text-current" />;
    case 'phone':
      return <Smartphone className="w-5 h-5 text-current" />;
    case 'payment':
    case 'card':
      return <CreditCard className="w-5 h-5 text-current" />;
    case 'inbox':
      return <Inbox className="w-5 h-5 text-current" />;
    case 'consent':
    case 'shield':
      return <ShieldCheck className="w-5 h-5 text-current" />;
    case 'rates':
    case 'zap':
      return <Zap className="w-5 h-5 text-current" />;
    case 'users':
      return <Users className="w-5 h-5 text-current" />;
    case 'lock':
      return <Lock className="w-5 h-5 text-current" />;
    case 'workflow':
      return <Workflow className="w-5 h-5 text-current" />;
    default:
      return <Sparkles className="w-5 h-5 text-current" />;
  }
}

const HighlightCard: FC<HighlightCardProps> = ({ 
  title, 
  description, 
  icon, 
  iconName, 
  actionText = "DISCOVER MORE",
  href,
  className 
}) => {
  const renderedIcon = resolveIcon(icon, iconName);

  const cardInner = (
    <div
      className={cn(
        "group cursor-pointer rounded-[28px] sm:rounded-[32px] border border-zinc-200/90 bg-white p-7 sm:p-8 lg:p-9 shadow-soft hover:shadow-soft-lg hover:border-zinc-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full w-full relative overflow-hidden",
        className
      )}
    >
      <div>
        {/* Top-left squircle icon badge */}
        <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-100 group-hover:scale-105 group-hover:border-zinc-300 transition-all duration-300 mb-6 sm:mb-7">
          <div className="w-6 h-6 text-zinc-800 group-hover:text-brand-700 transition-colors flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-current [&>svg]:stroke-[1.75]">
            {renderedIcon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-ink-950 tracking-tight mb-3 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <div className="text-sm text-ink-500 leading-relaxed space-y-1.5">
          {Array.isArray(description) ? (
            description.map((line, idx) => (
              <p key={idx} className="leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* Bottom action link */}
      <div className="mt-8 sm:mt-10 pt-2 flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-ink-950 group-hover:text-brand-600 transition-colors">
        <span>{actionText}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full w-full no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-[28px] sm:rounded-[32px]">
        {cardInner}
      </a>
    );
  }

  return cardInner;
};

export default HighlightCard;
