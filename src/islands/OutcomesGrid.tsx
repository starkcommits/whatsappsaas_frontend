"use client";

import React from "react";
import HighlightCard from "@/components/ui/highlight-card";
import { Inbox, ShieldCheck, Zap } from "lucide-react";

export default function OutcomesGrid() {
  const outcomes = [
    {
      title: "Shared Team Inbox",
      description: [
        "Replace chaotic personal phones with a shared workspace.",
        "Multiple agents work the inbox simultaneously,",
        "assign chats, and leave private internal notes."
      ],
      icon: <Inbox className="w-6 h-6" />,
      href: "/features",
      actionText: "EXPLORE INBOX"
    },
    {
      title: "Consent Ledger",
      description: [
        "Broadcast campaigns without getting banned.",
        "Deliver approved templates only to contacts who agreed.",
        "Inbound STOP replies automatically unsubscribe contacts."
      ],
      icon: <ShieldCheck className="w-6 h-6" />,
      href: "/features",
      actionText: "VIEW LEDGER"
    },
    {
      title: "Direct Meta Rates",
      description: [
        "Protect your margins with zero message markup.",
        "Pay a single one-time software license.",
        "Connect directly to Meta's Cloud API at baseline rates."
      ],
      icon: <Zap className="w-6 h-6" />,
      href: "/pricing",
      actionText: "VIEW PRICING"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
      {outcomes.map((item, idx) => (
        <HighlightCard
          key={idx}
          title={item.title}
          description={item.description}
          icon={item.icon}
          href={item.href}
          actionText={item.actionText}
        />
      ))}
    </div>
  );
}
