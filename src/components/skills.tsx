"use client";

import { marqueeTechnologies, skillCategories } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      {marqueeTechnologies.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-edge bg-panel px-3.5 py-1.5 font-mono text-sm text-zinc-400 transition-colors hover:border-accent/40 hover:text-zinc-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title={t("skills.title")}
          lead={t("skills.lead")}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 2) * 100}>
              <div className="h-full rounded-lg border border-edge bg-panel p-6 transition-colors hover:border-accent/40">
                <p className="font-mono text-xs text-accent">
                  <span className="text-zinc-600">~/</span>
                  {category.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-100">
                  {category.title[language]}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {category.description[language]}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-zinc-300">
                        {skill.name}
                        {skill.note ? (
                          <span className="ml-2 font-mono text-xs text-zinc-600">
                            · {skill.note[language]}
                          </span>
                        ) : null}
                      </span>
                      {category.id === "languages" && (
                        <span className="flex shrink-0 gap-1" aria-hidden>
                          {Array.from({ length: 5 }).map((_, dot) => (
                            <span
                              key={dot}
                              className={`h-1 w-4 rounded-full ${
                                dot < skill.level ? "bg-accent" : "bg-zinc-800"
                              }`}
                            />
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden border-y border-edge py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee">
            <MarqueeRow />
            <MarqueeRow />
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>
      </div>
    </section>
  );
}
