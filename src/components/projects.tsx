"use client";

import { projects } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title={t("projects.title")}
          lead={t("projects.lead")}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-lg border border-edge bg-panel p-6 transition-colors hover:border-accent/40">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-accent">$</span> ls ~/projects
                  </p>
                  <span className="rounded-full border border-edge px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {project.status[language]}
                  </span>
                </div>

                <h3 className="mt-5 font-mono text-lg text-zinc-100 transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description[language]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-edge bg-panel-2 px-2.5 py-1 font-mono text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 border-t border-edge pt-4">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                    >
                      [code]
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                    >
                      [demo]
                    </a>
                  ) : null}
                  {project.site ? (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
                    >
                      [site]
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
