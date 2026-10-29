import Section from "./Section";
import { portfolio } from "@/content/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Let's connect">
      <div className="rounded-3xl border border-line bg-panel p-8 text-center shadow-[0_0_40px_rgba(34,211,238,0.1)] sm:p-12">
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-mute">
          I&apos;m always happy to talk about computer architecture, hardware
          design, internships, or SHPE. The fastest way to reach me is email.
        </p>

        <a href={`mailto:${portfolio.email}`} className="btn btn-primary mt-7">
          <MailIcon className="h-4 w-4" />
          {portfolio.email}
        </a>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Section>
  );
}
