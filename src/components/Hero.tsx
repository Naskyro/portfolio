import { portfolio } from "@/content/portfolio";
import { DownloadIcon, MailIcon, Gear } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-6 pt-36 pb-16 sm:pt-44 md:flex-row md:justify-between"
    >
      <div className="max-w-xl text-center md:text-left">
        {/* status pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 font-code text-xs font-medium text-mute shadow-[0_0_16px_rgba(34,211,238,0.1)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          UT Austin · ECE &apos;28 · Austin, TX
        </span>

        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-mist sm:text-6xl">
          hi, i&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            nathan
          </span>
          <span className="text-arc">.</span>
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-mute">{portfolio.tagline}</p>

        {/* mini terminal — the "computer oriented" bit */}
        <div className="mt-6 rounded-2xl border border-line bg-panel/80 p-4 text-left font-code text-xs leading-6 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
          <p><span className="text-arc">nathan@ece</span><span className="text-mute">:~$ whoami</span></p>
          <p className="text-mute">&gt; hardware × software engineer</p>
          <p className="text-mute">&gt; status: <span className="text-emerald-400">shipping</span></p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href={portfolio.resumeFile} download className="btn btn-primary">
            <DownloadIcon className="h-4 w-4" />
            download_resume.pdf
          </a>
          <a href={`mailto:${portfolio.email}`} className="btn btn-ghost">
            <MailIcon className="h-4 w-4" />
            say_hello
          </a>
        </div>
      </div>

      {/* Headshot — glowing ring + spinning gears for the mechanical vibe.
          Swap the file in public/images/ and update portfolio.ts */}
      <div className="relative shrink-0">
        <Gear className="absolute -top-8 -left-8 h-14 w-14 animate-spin-slow text-arc/40" />
        <Gear className="absolute -bottom-6 -right-6 h-10 w-10 animate-spin-rev text-sky-500/40" />
        <div className="absolute -inset-3 rounded-[2.5rem] border border-arc/30 shadow-[0_0_40px_rgba(34,211,238,0.15)]" />
        <img
          src={portfolio.headshot}
          alt={`${portfolio.name} headshot`}
          className="relative h-48 w-48 rounded-[2rem] border border-arc/40 object-cover object-top sm:h-60 sm:w-60"
        />
      </div>
    </section>
  );
}
