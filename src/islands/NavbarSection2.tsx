"use client";

import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Menu, X, Check } from "lucide-react";

export interface NavItem {
  label: string;
  href?: string;
  panelId?: "product" | "solutions" | "pricing";
}

export interface ProductCard {
  title: string;
  href: string;
  description?: string;
  mediaType?: "component" | "image";
  component?: ReactNode;
  badge?: string;
}

export interface MenuPanel {
  id: NonNullable<NavItem["panelId"]>;
  items: ProductCard[];
}

export interface NavbarSection2Props {
  currentPath?: string;
  loginUrl?: string;
  signupUrl?: string;
}

function OnoLogo() {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      <svg
        viewBox="0 0 38 26"
        width={38}
        height={26}
        fill="none"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <circle cx={10.5} cy={13} r={6.5} stroke="#0E8A68" strokeWidth={3} />
        <line x1={16.5} y1={13} x2={21.5} y2={13} stroke="#12A57D" strokeWidth={3} strokeLinecap="round" />
        <circle cx={27.5} cy={13} r={6.5} stroke="#0E8A68" strokeWidth={3} />
      </svg>
      <span className="font-extrabold tracking-tight font-display text-xl text-ink-950 leading-none">
        ONO
      </span>
    </div>
  );
}

function SharedInboxPreview() {
  return (
    <div className="relative z-10 flex w-full flex-col gap-1.5 rounded-lg border border-zinc-800/80 bg-zinc-950 p-2 shadow-sm font-sans text-[9px] leading-tight text-zinc-300">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-1 text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-white">Aarav Sharma</span>
          <span className="rounded bg-emerald-950/60 px-1 py-0.5 text-[7.5px] font-bold text-emerald-400 border border-emerald-800/50">VIP Lead</span>
        </div>
        <span className="text-[7.5px] text-zinc-500">10:42 AM</span>
      </div>
      <div className="space-y-1 pt-0.5">
        <div className="rounded bg-zinc-900/90 p-1.5 text-zinc-300">
          "Can I confirm our team consultation tomorrow at 3pm?"
        </div>
        <div className="rounded bg-emerald-950/40 p-1.5 text-emerald-300 border border-emerald-900/40">
          "Slot confirmed! Shared calendar invite sent."
        </div>
      </div>
    </div>
  );
}

function TemplatePreview() {
  return (
    <div className="relative z-10 flex w-full flex-col gap-1.5 rounded-lg border border-zinc-800/80 bg-zinc-950 p-2 shadow-sm font-sans text-[9px] leading-tight text-zinc-300">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-1">
        <span className="font-mono text-[8px] text-zinc-400">appointment_confirmed</span>
        <span className="flex items-center gap-0.5 rounded bg-emerald-950/80 px-1 py-0.5 text-[7.5px] font-bold text-emerald-400 border border-emerald-800/60">
          <Check className="size-2.5" /> APPROVED
        </span>
      </div>
      <div className="rounded bg-zinc-900/90 p-1.5 text-zinc-300">
        Hello &#123;&#123;1&#125;&#125;, your booking for &#123;&#123;2&#125;&#125; is confirmed with our team.
      </div>
      <div className="flex gap-1 pt-0.5">
        <span className="rounded bg-zinc-800/90 px-1.5 py-0.5 text-[8px] text-zinc-300">📅 View Details</span>
        <span className="rounded bg-zinc-800/90 px-1.5 py-0.5 text-[8px] text-zinc-300">Reschedule</span>
      </div>
    </div>
  );
}

function PanelCard({
  item,
  compact = false,
  onSelect,
}: {
  item: ProductCard;
  compact?: boolean;
  onSelect?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onSelect?.();
    if (typeof window !== "undefined") {
      const [path, hash] = item.href.split("#");
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const targetPath = (path || "").replace(/\/$/, "");

      if (hash && (targetPath === "" || targetPath === currentPath)) {
        e.preventDefault();
        window.history.pushState(null, "", `#${hash}`);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  if (item.component) {
    return (
      <a
        href={item.href}
        onClick={handleClick}
        className="group relative flex h-[195px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/60 p-3 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/40 block text-left"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(18,165,125,0.08),transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
        {item.component}
        <div className="relative z-10 mt-auto pt-2">
          <div className="flex items-center justify-between">
            <span className="block text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
              {item.title}
            </span>
            <ArrowRight className="size-3 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
          </div>
          {item.description && (
            <p className="mt-0.5 text-[10px] leading-snug text-zinc-400 line-clamp-1">
              {item.description}
            </p>
          )}
        </div>
      </a>
    );
  }

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={
        compact
          ? "group relative flex h-[92px] flex-col justify-center overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/60 p-3 transition-all hover:border-zinc-700 hover:bg-zinc-900/40 block text-left"
          : "group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/60 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/40 block text-left"
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(18,165,125,0.06),transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-1">
          <h4 className={compact ? "text-xs font-semibold text-white" : "text-sm font-semibold text-white"}>
            {item.title}
          </h4>
          {item.badge && (
            <span className="rounded bg-emerald-950/70 border border-emerald-800/50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-400">
              {item.badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-[10.5px] leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
          {item.description}
        </p>
      </div>
      {!compact && (
        <span className="relative z-10 mt-3 inline-flex items-center text-[10px] font-medium text-emerald-400">
          Explore feature <ArrowRight className="ml-1 inline size-3 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </a>
  );
}

function DropdownPanel({ panel, onSelect }: { panel: MenuPanel; onSelect: () => void }) {
  if (panel.id === "product") {
    const [inbox, templates, flows, consent] = panel.items;
    return (
      <div className="grid grid-cols-[1.3fr_1.3fr_1fr] gap-3 bg-black p-4">
        <PanelCard item={inbox} onSelect={onSelect} />
        <PanelCard item={templates} onSelect={onSelect} />
        <div className="flex flex-col gap-2.5">
          <PanelCard item={flows} compact onSelect={onSelect} />
          <PanelCard item={consent} compact onSelect={onSelect} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 bg-black p-4">
      {panel.items.map((item) => (
        <PanelCard key={item.title} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default function NavbarSection2({
  currentPath = "/",
  loginUrl = "https://app.flexing.in/login/",
  signupUrl = "https://app.flexing.in/signup/?utm_source=site",
}: NavbarSection2Props) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { label: "Product", panelId: "product" },
    { label: "Solutions", panelId: "solutions" },
    { label: "Pricing", panelId: "pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const menuPanels: MenuPanel[] = [
    {
      id: "product",
      items: [
        {
          title: "Shared Team Inbox",
          href: "/features#shared-team-inbox",
          description: "Live sync, assignments, team notes & quick replies",
          mediaType: "component",
          component: <SharedInboxPreview />,
        },
        {
          title: "Approved Meta Templates",
          href: "/features#template-editor",
          description: "Sync, build & submit directly to Meta Cloud API",
          mediaType: "component",
          component: <TemplatePreview />,
        },
        {
          title: "WhatsApp Flows",
          href: "/features#whatsapp-flows",
          description: "In-chat interactive forms for leads & bookings",
          badge: "Interactive",
        },
        {
          title: "Consent & Opt-in Tracking",
          href: "/features#consent-tracking",
          description: "QR codes, opt-in links & STOP handling",
          badge: "Compliant",
        },
      ],
    },
    {
      id: "solutions",
      items: [
        {
          title: "Multi-Agent Support",
          href: "/how-it-works",
          description: "Assign chats, prevent collisions with presence indicators, and collaborate via private internal notes.",
        },
        {
          title: "Audience Campaigns",
          href: "/features#campaign-broadcasts",
          description: "Broadcast pre-approved templates to segmented CSV lists with real-time delivery tracking.",
        },
        {
          title: "Security & Tenancy",
          href: "/security",
          description: "Mandatory 2FA for workspace owners, full audit logs, API key hashing, and zero data selling.",
        },
      ],
    },
    {
      id: "pricing",
      items: [
        {
          title: "Lifetime License ($50)",
          href: "/pricing",
          description: "One-time $50 flat payment (approx ₹4,199). Never pay a monthly software subscription.",
          badge: "One-time",
        },
        {
          title: "Zero Message Markup",
          href: "/pricing#meta-rates",
          description: "Pay Meta directly at official Meta Cloud API rates. We take no cut on your conversations.",
          badge: "Wholesale",
        },
        {
          title: "7-Day Refund Guarantee",
          href: "/refund",
          description: "Full refund within 7 days if the platform does not fit your operational workflow.",
        },
      ],
    },
  ];

  const activePanel = menuPanels.find((panel) => panel.id === activeMenu);

  const toggleMenu = (menuId: string) => {
    setActiveMenu((curr) => (curr === menuId ? null : menuId));
  };

  // Close menu on click outside or escape
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-ink-100">
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: ONO Brand Logo */}
        <a
          href="/"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-1"
          aria-label="ONO Home"
        >
          <OnoLogo />
        </a>

        {/* Center: Solace UI Notch Hanging Navbar with Inverted Shoulder Fillets */}
        <div
          ref={navContainerRef}
          className="absolute left-1/2 top-0 hidden w-[680px] -translate-x-1/2 lg:block"
          style={{ filter: "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.22))" }}
        >
          {/* Left Inverted Shoulder Fillet SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -left-[18px] top-0 z-10 text-black"
            aria-hidden="true"
          >
            <path d="M 20 20 L 20 0 L 0 0 C 11.046 0 20 11.046 20 20 Z" fill="currentColor" />
          </svg>

          {/* Right Inverted Shoulder Fillet SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -right-[18px] top-0 z-10 text-black"
            aria-hidden="true"
          >
            <path d="M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z" fill="currentColor" />
          </svg>

          {/* Central Notch Ribbon */}
          <div
            className="relative flex w-full flex-col justify-start overflow-hidden bg-black transition-[height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              height: activePanel ? 275 : 48,
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
            }}
          >
            {/* Top Bar Tabs */}
            <div className="z-20 flex h-12 items-center justify-center px-6">
              <nav className="flex w-full items-center justify-center gap-5 text-xs font-medium text-zinc-400">
                {navItems.map((item) =>
                  item.panelId ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => toggleMenu(item.panelId!)}
                      className={`flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1 outline-none transition-all hover:text-white ${
                        activeMenu === item.panelId
                          ? "bg-zinc-800 text-white font-semibold"
                          : "text-zinc-400"
                      }`}
                      aria-expanded={activeMenu === item.panelId}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${
                          activeMenu === item.panelId ? "rotate-180 text-emerald-400" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`px-2 py-1 transition-colors duration-200 hover:text-white ${
                        currentPath === item.href ? "text-white font-semibold" : "text-zinc-400"
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Expanding Dropdown Mega-Menu */}
            <div
              className={`overflow-hidden border-t border-zinc-900 bg-black transition-all duration-200 ${
                activePanel ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
              }`}
            >
              {activePanel && <DropdownPanel panel={activePanel} onSelect={() => setActiveMenu(null)} />}
            </div>
          </div>
        </div>

        {/* Right: Auth & CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={loginUrl}
            className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
            data-app-cta="true"
          >
            Login
          </a>
          <a
            href={signupUrl}
            className="group flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 active:scale-[0.98]"
            data-app-cta="true"
          >
            Get lifetime access
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Navbar Header */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={signupUrl}
            className="group flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
            data-app-cta="true"
          >
            Get access
            <ArrowRight className="h-3 w-3" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid size-9 place-items-center rounded-lg border border-zinc-200 text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle navigation drawer"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="relative z-40 w-full overflow-hidden border-b border-zinc-800 bg-black text-white shadow-2xl lg:hidden animate-fade-rise">
          <div className="grid gap-1.5 p-4 text-xs">
            {navItems.map((item) => {
              const panel = item.panelId ? menuPanels.find((p) => p.id === item.panelId) : null;
              const isOpen = mobileActiveMenu === item.panelId;

              if (!item.panelId) {
                return (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-zinc-300 hover:bg-white/10 hover:text-white"
                  >
                    <span className="font-medium text-sm">{item.label}</span>
                  </a>
                );
              }

              return (
                <div key={item.label} className="border-b border-zinc-900 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileActiveMenu(isOpen ? null : item.panelId!)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-zinc-300 hover:bg-white/10 hover:text-white"
                  >
                    <span className="font-semibold text-sm">{item.label}</span>
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-400" : ""}`}
                    />
                  </button>
                  {isOpen && panel && (
                    <div className="mx-2 mb-2 grid gap-1.5 border-l border-zinc-800 pl-3 pt-1">
                      {panel.items.map((panelItem) => (
                        <a
                          key={panelItem.title}
                          href={panelItem.href}
                          className="rounded-md px-2.5 py-1.5 hover:bg-white/5 block text-left"
                        >
                          <span className="block text-xs font-medium text-white">{panelItem.title}</span>
                          {panelItem.description && (
                            <span className="mt-0.5 block text-[10px] leading-tight text-zinc-400">
                              {panelItem.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={loginUrl}
                className="w-full text-center py-2 text-xs font-semibold text-zinc-300 hover:text-white rounded-lg border border-zinc-800"
              >
                App Login
              </a>
              <a
                href={signupUrl}
                className="w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs tracking-wide"
              >
                Get Lifetime Access ($50)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
