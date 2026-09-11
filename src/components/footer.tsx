import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-zinc-500">
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs text-zinc-600">
          Built with <span className="text-zinc-400">Next.js</span> ·{" "}
          <span className="text-zinc-400">TypeScript</span> ·{" "}
          <span className="text-zinc-400">Tailwind CSS</span>
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
        >
          cd ~/top ↑
        </a>
      </div>
    </footer>
  );
}
