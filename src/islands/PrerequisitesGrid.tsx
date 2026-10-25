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
      icon: <Building2 className="w-6 h-6" />,
      href: "/how-it-works",
      actionText: "SETUP GUIDE"
    },
    {
      title: "Dedicated Phone Number",
      description: [
        "A mobile or landline number able to receive SMS or voice OTP.",
        "Must not be currently registered on the consumer or Business mobile app."
      ],
      icon: <Smartphone className="w-6 h-6" />,
      href: "/how-it-works",
      actionText: "REQUIREMENTS"
    },
    {
      title: "Direct Meta Billing",
      description: [
        "Link your credit or debit card inside Meta Business Manager.",
        "Meta bills you at standard conversation rates with zero middleman markup."
      ],
      icon: <CreditCard className="w-6 h-6" />,
      href: "/how-it-works",
      actionText: "BILLING INFO"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
      {items.map((item, idx) => (
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
