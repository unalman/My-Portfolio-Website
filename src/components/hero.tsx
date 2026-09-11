"use client";

import { profile } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language";

export function Hero() {
  const { language } = useLanguage();
  const service = `${profile.name.toLowerCase().replace(/\s+/g, "-")}.service`;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_55%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12 lg:pb-32 lg:pt-44">
        <div>
          <p className="font-mono text-sm text-zinc-500">
            <span className="text-accent">~/</span>portfolio{" "}
            <span className="text-accent">$</span> whoami
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-edge bg-panel px-3.5 py-1.5 font-mono text-xs text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability[language]}
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
            <span className="text-zinc-600">{"//"}</span> {profile.role[language]}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
            {profile.intro[language]}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
            >
              ./view_projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-edge-strong px-5 py-2.5 font-mono text-sm text-zinc-200 transition-colors hover:border-accent/60 hover:text-accent"
            >
              ./contact_me
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-zinc-600">
            <span className="text-zinc-500">location:</span> {profile.location[language]}
            <span className="mx-2 text-zinc-800">|</span>
            <span className="text-zinc-500">email:</span> {profile.email}
          </p>
        </div>

        <div className="rounded-lg border border-edge bg-panel shadow-[0_0_80px_-20px_rgb(52_211_153/0.25)]">
          <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="ml-3 font-mono text-xs text-zinc-500">
              system — status
            </span>
          </div>
          <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
            <p>
              <span className="text-accent">$</span>{" "}
              <span className="text-zinc-200">systemctl status {service}</span>
            </p>
            <p className="text-accent">● {service}</p>
            <p className="text-zinc-500">
              {"    "}Active: <span className="text-accent">active (running)</span>
            </p>
            <p className="text-zinc-500">
              {"    "}Stack:{" "}
              <span className="text-zinc-300">C# · ASP.NET Core · MongoDB · PostgreSQL</span>
            </p>
            <p className="text-zinc-500">
              {"    "}Uptime: <span className="text-zinc-300">99.99%</span>
            </p>
            <p>
              <span className="text-accent">$</span>{" "}
              <span
                className="inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-accent"
                aria-hidden
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
