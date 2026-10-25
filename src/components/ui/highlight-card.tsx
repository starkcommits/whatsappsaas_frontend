"use client";

import React, { type FC, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
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
  Workflow
} from "lucide-react";

export interface HighlightCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  iconName?: string;
  className?: string;
}

function resolveIcon(icon?: ReactNode, iconName?: string): ReactNode {
  if (icon) return icon;
  switch (iconName) {
    case 'meta':
    case 'business':
      return <Building2 className="w-8 h-8 text-emerald-400" />;
    case 'phone':
      return <Smartphone className="w-8 h-8 text-emerald-400" />;
    case 'payment':
    case 'card':
      return <CreditCard className="w-8 h-8 text-emerald-400" />;
    case 'inbox':
      return <Inbox className="w-8 h-8 text-emerald-400" />;
    case 'consent':
    case 'shield':
      return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
    case 'rates':
    case 'zap':
      return <Zap className="w-8 h-8 text-emerald-400" />;
    case 'users':
      return <Users className="w-8 h-8 text-emerald-400" />;
    case 'lock':
      return <Lock className="w-8 h-8 text-emerald-400" />;
    case 'workflow':
      return <Workflow className="w-8 h-8 text-emerald-400" />;
    default:
      return <Sparkles className="w-8 h-8 text-emerald-400" />;
  }
}

const HighlightCard: FC<HighlightCardProps> = ({ title, description, icon, iconName, className }) => {
  const renderedIcon = resolveIcon(icon, iconName);

  return (
    <div className={cn("group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full flex justify-center", className)}>
      <Card className="text-white rounded-2xl border border-[#1E3A5F]/60 bg-gradient-to-br from-[#07111F] via-[#0B1B2E] to-[#07111F] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-emerald-500/40 hover:shadow-emerald-950/20 w-full max-w-[360px] flex flex-col justify-between h-full">
        
        {/* Glow & animated background light artifacts */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-emerald-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Card Content */}
        <div className="p-8 relative z-10 flex flex-col items-center text-center flex-1 justify-between">
          <div className="flex flex-col items-center w-full">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse"></div>

              <div className="p-5 sm:p-6 rounded-full backdrop-blur-lg border border-[#1E3A5F]/80 bg-gradient-to-br from-[#10233B] to-[#07111F] shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-emerald-500/20">
                <div className="transform group-hover:rotate-180 transition-transform duration-700 flex items-center justify-center">
                  {renderedIcon}
                </div>
              </div>
            </div>

            <h3 className="mb-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse transform group-hover:scale-105 transition-transform duration-300">
              {title}
            </h3>

            <div className="space-y-1.5 max-w-sm">
              {description.map((line, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center pt-6">
            <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </Card>
    </div>
  );
};

export default HighlightCard;
