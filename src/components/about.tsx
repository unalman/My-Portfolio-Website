"use client";

import { about } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading title={t("about.title")} />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="space-y-5 leading-relaxed text-zinc-400">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph[language]}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-edge bg-panel p-6">
              <p className="font-mono text-xs text-accent">
                <span className="text-zinc-600">$</span> cat quick-facts.yml
              </p>
              <dl className="mt-5 space-y-4">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label.tr}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="font-mono text-xs text-zinc-500">
                      {fact.label[language].toLowerCase().replace(/\s+/g, "_")}:
                    </dt>
                    <dd className="text-sm text-zinc-200">{fact.value[language]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
