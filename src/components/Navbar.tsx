"use client"; // needs useState for the mobile menu toggle

import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import { DownloadIcon, MenuIcon, XIcon } from "./icons";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "leadership", href: "#leadership" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-line bg-panel/85 px-5 shadow-[0_0_24px_rgba(34,211,238,0.12)] backdrop-blur">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-mist">
          nathan<span className="text-arc">.</span>reyna
        </a>

        {/* Desktop links — little pill buttons */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 font-code text-[13px] font-medium text-mute transition-colors hover:bg-night hover:text-arc"
            >
              {link.label}
            </a>
          ))}
          <a
            href={portfolio.resumeFile}
            download
            className="btn-primary ml-2 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-code text-[13px] font-semibold"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="text-mist md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile dropdown — rounded card under the pill */}
      {open && (
        <div className="mx-auto mt-2 max-w-3xl rounded-3xl border border-line bg-panel p-4 shadow-[0_0_24px_rgba(34,211,238,0.12)] md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2.5 font-code text-sm font-medium text-mute hover:bg-night hover:text-arc"
              >
                {link.label}
              </a>
            ))}
            <a href={portfolio.resumeFile} download className="btn btn-primary mt-2 w-fit">
              <DownloadIcon className="h-4 w-4" />
              resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
