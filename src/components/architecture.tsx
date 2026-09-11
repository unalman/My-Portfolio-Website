"use client";

import { architectureDiagram, principles } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Architecture() {
  const { language, t } = useLanguage();

  return (
    <section id="architecture" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title={t("architecture.title")}
          lead={t("architecture.lead")}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="grid h-full gap-5 sm:grid-cols-2">
              {principles.map((principle, i) => (
                <div
                  key={principle.title.tr}
                  className="rounded-lg border border-edge bg-panel p-6 transition-colors hover:border-accent/40"
                >
                  <p className="font-mono text-xs text-accent">
                    P-0{i + 1}
                  </p>
                  <h3 className="mt-3 font-semibold text-zinc-100">
                    {principle.title[language]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {principle.body[language]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-lg border border-edge bg-panel">
              <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 font-mono text-xs text-zinc-500">
                  reference-architecture.txt
                </span>
              </div>
              <div className="flex-1 overflow-x-auto p-6">
                <pre className="font-mono text-xs leading-relaxed text-zinc-400">
                  {architectureDiagram}
                </pre>
              </div>
              <p className="border-t border-edge px-6 py-4 font-mono text-xs text-zinc-600">
                <span className="text-accent">{"//"}</span> boring boxes,
                explicit queues, observable edges
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
