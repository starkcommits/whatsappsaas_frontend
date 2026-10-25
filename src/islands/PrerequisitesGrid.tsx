"use client";

import React from "react";
import HighlightCard from "@/components/ui/highlight-card";
import { Building2, Smartphone, CreditCard } from "lucide-react";

export default function PrerequisitesGrid() {
  const items = [
    {
      title: "Meta Business Account",
      description: [
        "A verified or standard Meta Business Account (business.facebook.com).",
        "If you run Facebook or Instagram ads, you likely already have one ready."
      ],
      icon: <Building2 className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Dedicated Phone Number",
      description: [
        "A mobile or landline number able to receive SMS or voice OTP.",
        "Must not be currently registered on the consumer or Business mobile app."
      ],
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Direct Meta Billing",
      description: [
        "Link your credit or debit card inside Meta Business Manager.",
        "Meta bills you at standard conversation rates with zero middleman markup."
      ],
      icon: <CreditCard className="w-8 h-8 text-emerald-400" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch justify-items-center">
      {items.map((item, idx) => (
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
