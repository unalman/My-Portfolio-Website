"use client";

import { contact, profile } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading title={t("contact.title")} />

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-sm text-zinc-500">
              <span className="text-accent">$</span> ping {profile.name.toLowerCase().replace(/\s+/g, "-")}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              {contact.heading[language]}
            </h3>
            <p className="mt-5 leading-relaxed text-zinc-400">{contact.blurb[language]}</p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
              >
                {profile.email}
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-edge-strong px-6 py-3 font-mono text-sm text-zinc-200 transition-colors hover:border-accent/60 hover:text-accent"
              >
                github
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-edge-strong px-6 py-3 font-mono text-sm text-zinc-200 transition-colors hover:border-accent/60 hover:text-accent"
              >
                linkedin
              </a>
            </div>

            <p className="mt-10 font-mono text-xs text-zinc-600">
              1 packets transmitted, 1 received,{" "}
              <span className="text-accent">0% packet loss</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
