import Section from "./Section";
import { portfolio } from "@/content/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="about me" title="A bit about me">
      <div className="space-y-5 text-lg leading-relaxed text-mute">
        {portfolio.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {portfolio.skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>

      <p className="mt-10 font-code text-xs font-medium text-arc">{"// off the clock"}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {portfolio.interests.map((interest) => (
          <span key={interest} className="chip">
            {interest}
          </span>
        ))}
      </div>
    </Section>
  );
}
