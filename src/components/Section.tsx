// Shared wrapper for each page section: "// label" + heading + content.
// `id` is what the navbar links to (e.g. <a href="#experience">).

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-14 sm:py-20">
      <p className="font-code text-sm font-medium text-arc">{"// "}{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
