"use client";

import { experience } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title={t("experience.title")}
          lead={t("experience.lead")}
        />

        <div className="relative border-l border-edge pl-8">
          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${i}`} delay={80}>
                <article className="relative">
                  <span
                    className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink"
                    aria-hidden
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {job.role[language]}{" "}
                      <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-zinc-500">
                      {job.period[language]}
                    </p>
                  </div>

                  <p className="mt-2 text-sm text-zinc-400">{job.summary[language]}</p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex gap-3 text-sm text-zinc-400">
                        <span className="mt-px shrink-0 text-accent" aria-hidden>
                          ▹
                        </span>
                        {highlight[language]}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-edge bg-panel-2 px-2.5 py-1 font-mono text-xs text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
