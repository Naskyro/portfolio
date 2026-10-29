import Section from "./Section";
import { portfolio } from "@/content/portfolio";

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="leadership" title="Leadership & community">
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.leadership.map((item) => (
          <article key={item.role + item.org} className="card p-6 sm:p-7">
            <span className="chip">{item.dates}</span>
            <h3 className="mt-3 font-display text-xl font-bold text-mist">{item.role}</h3>
            <p className="mt-1 font-code text-xs font-medium text-arc">{item.org}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-mute marker:text-arc">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
