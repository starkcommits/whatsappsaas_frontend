"use client";

import React from "react";
import HighlightCard from "@/components/ui/highlight-card";
import { Zap, Building2, ShieldCheck } from "lucide-react";

export default function PrinciplesGrid() {
  const principles = [
    {
      title: "One-Time Licensing",
      description: [
        "No recurring monthly software subscriptions.",
        "Pay once for lifetime access to the team inbox,",
        "broadcast campaigns, and WhatsApp Flows."
      ],
      icon: <Zap className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Direct Meta Cloud API",
      description: [
        "Built on Meta's WhatsApp Business Platform.",
        "Connect your own WABA directly via Embedded Signup.",
        "Zero scraping, zero unofficial hacks."
      ],
      icon: <Building2 className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Data Ownership",
      description: [
        "Your contacts and conversation records belong to you.",
        "Export CSVs or delete records at any time.",
        "Full compliance with DPDP Act 2023 & GDPR."
      ],
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch justify-items-center">
      {principles.map((item, idx) => (
        <HighlightCard
          key={idx}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
