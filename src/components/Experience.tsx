import Section from "./Section";
import { portfolio } from "@/content/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="Where I've worked">
      <div className="space-y-8">
        {portfolio.experience.map((job) => (
          <article key={job.company + job.dates} className="card p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-mist">
                {job.role} <span className="font-semibold text-mute">@ {job.company}</span>
              </h3>
              <span className="chip">
                {job.dates} · {job.location}
              </span>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-mute marker:text-arc">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
