import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavDrawerProps {
  productLinks: NavItem[];
  mainLinks: NavItem[];
  loginUrl: string;
  signupUrl: string;
}

export default function MobileNavDrawer({
  productLinks,
  mainLinks,
  loginUrl,
  signupUrl,
}: MobileNavDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Accessible Focus Trap & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the drawer or close button when opened
    const drawerEl = drawerRef.current;
    if (drawerEl) {
      const focusableElements = drawerEl.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && drawerEl) {
        const focusable = drawerEl.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg text-ink-700 hover:text-ink-950 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-ink-950/40 backdrop-blur-xs transition-opacity duration-200 animate-fade-rise"
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <div
              ref={drawerRef}
              className="relative w-full max-w-sm bg-white border-l border-ink-100 shadow-xl flex flex-col justify-between p-6 overflow-y-auto z-10 animate-fade-rise"
            >
              <div>
                {/* Header: Brand & Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-ink-100">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-xl text-ink-950 tracking-tight">
                      ONO
                    </span>
                    <span className="text-[10px] font-mono text-brand-700 bg-brand-50 border border-brand-200/60 px-2 py-0.5 rounded-full font-bold">
                      MENU
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="p-2 rounded-lg text-ink-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                    aria-label="Close navigation menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Sections */}
                <div className="py-4 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-ink-500 px-3 py-2 font-mono">
                    Product
                  </div>
                  {productLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleClose}
                      className="block px-3 py-2 text-base font-medium text-ink-900 hover:bg-ink-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="text-xs font-bold uppercase tracking-wider text-ink-500 px-3 py-2 pt-4 font-mono">
                    Navigation
                  </div>
                  {mainLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleClose}
                      className="block px-3 py-2 text-base font-medium text-ink-900 hover:bg-ink-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-ink-100 space-y-3">
                <a
                  href={loginUrl}
                  className="block w-full py-2.5 text-center text-sm font-semibold text-ink-700 hover:text-ink-950 border border-ink-100 rounded-xl transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  data-app-cta="true"
                >
                  Login
                </a>
                <a
                  href={signupUrl}
                  className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-soft transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  data-app-cta="true"
                >
                  Get lifetime access
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
