type SectionHeadingProps = {
  title: string;
  lead?: string;
};

export function SectionHeading({ title, lead }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-edge" aria-hidden />
      </div>
      {lead ? (
        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">{lead}</p>
      ) : null}
    </div>
  );
}
