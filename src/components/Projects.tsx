import Section from "./Section";
import { portfolio, type Project } from "@/content/portfolio";
import { ArrowUpRightIcon } from "./icons";
import FlowDiagram from "./FlowDiagram";
import VideoGallery from "./VideoGallery";

// Card media: show the demo video gallery if the project has clips,
// else the cover image.
function Media({ project, className }: { project: Project; className: string }) {
  if (project.videos.length > 0) {
    return <VideoGallery videos={project.videos} title={project.name} />;
  }
  return <img src={project.image} alt="" className={className} />;
}

// Row of clickable screenshots — each opens full-size in a new tab.
function Screenshots({ project }: { project: Project }) {
  if (project.screenshots.length === 0) return null;
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {project.screenshots.map((src, i) => (
        <a key={i} href={src} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={`${project.name} screenshot ${i + 1}`}
            className="h-24 w-full rounded-xl border border-line object-cover transition-all hover:scale-[1.03] hover:border-arc"
          />
        </a>
      ))}
    </div>
  );
}

function TechChips({ tech }: { tech: readonly string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="chip text-[11px]">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const featured = portfolio.projects.filter((p) => p.featured);
  const rest = portfolio.projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="projects" title="Things I've built">
      {/* Featured projects — big cards with video/image */}
      <div className="space-y-8">
        {featured.map((project) => (
          <article key={project.name} className="card overflow-hidden">
            <Media project={project} className="h-52 w-full border-b border-line object-cover" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-mist">{project.name}</h3>
                  <p className="mt-1 font-code text-sm font-medium text-arc">{project.tagline}</p>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    View project <ArrowUpRightIcon />
                  </a>
                )}
              </div>
              <p className="mt-4 leading-relaxed text-mute">{project.description}</p>
              {project.flow && <FlowDiagram flow={project.flow} />}
              <Screenshots project={project} />
              <TechChips tech={project.tech} />
            </div>
          </article>
        ))}
      </div>

      {/* Other projects — card grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <article key={project.name} className="card overflow-hidden">
            <Media project={project} className="h-40 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-mist">{project.name}</h3>
                  <p className="mt-1 font-code text-xs font-medium text-arc">{project.tagline}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon shrink-0"
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mute">{project.description}</p>
              <Screenshots project={project} />
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
