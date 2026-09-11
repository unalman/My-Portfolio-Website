"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language";

const links = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#experience", labelKey: "nav.experience" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const slug = "sadik-unal-cokunlu";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm text-zinc-200 transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>
          {slug}
        </a>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            className="font-mono text-sm text-accent transition-colors hover:text-accent/80"
            aria-label={language === "tr" ? "Switch to English" : "Türkçe'ye geç"}
          >
            {language === "tr" ? "EN" : "TR"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-edge text-zinc-300 transition-colors hover:border-edge-strong md:hidden"
        >
          <span
            className={`h-px w-5 bg-current transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-edge bg-ink/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm text-zinc-300 transition-colors hover:text-accent"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setLanguage(language === "tr" ? "en" : "tr");
                  setOpen(false);
                }}
                className="font-mono text-sm text-accent transition-colors hover:text-accent/80"
              >
                {language === "tr" ? "EN" : "TR"}
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
