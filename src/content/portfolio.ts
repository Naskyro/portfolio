// ============================================================================
//  PORTFOLIO CONTENT — THIS IS THE ONLY FILE YOU NEED TO EDIT
//  ----------------------------------------------------------------------------
//  Every word, link, and list on the site comes from the object below.
//  Change text, save the file, and the site updates.
//
//  Resume: the button downloads `public/resume.pdf` — replace that file with
//  a newer PDF anytime and the site serves it automatically.
//
//  Photos: drop images into `public/images/` and update the `headshot` /
//  `image` fields below (e.g. "/images/my-photo.jpg").
// ============================================================================

// These types describe the shape of each section — your editor uses them to
// autocomplete fields and flag mistakes.
export type Job = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type Project = {
  name: string;
  tagline: string;
  featured: boolean;
  description: string;
  tech: string[];
  image: string;        // cover image, e.g. "/images/x.png"
  videos: string[];     // [] = hidden; clips e.g. ["/videos/demo.mp4"] or YouTube links
  screenshots: string[]; // [] = hidden; list of image paths
  link: string;         // "" = hidden; GitHub/demo URL
  // Optional "how it works" flow diagram + "why it mattered" stats.
  // Omit it entirely for projects that don't need one.
  flow?: {
    steps: { label: string; sub: string }[];
    impact: { big: string; small: string }[];
  };
};

export type LeadershipRole = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const portfolio: {
  name: string;
  firstName: string;
  title: string;
  school: string;
  tagline: string;
  resumeFile: string;
  headshot: string;
  email: string;
  links: { linkedin: string; github: string };
  about: string[];
  interests: string[];
  experience: Job[];
  projects: Project[];
  leadership: LeadershipRole[];
  skills: string[];
} = {
  // ----------------------------- Basics ------------------------------------
  name: "Nathan Reyna",
  firstName: "Nathan",
  title: "Electrical & Computer Engineering Student",
  school: "The University of Texas at Austin",
  tagline:
    "ECE junior at UT Austin working at the intersection of hardware and AI — two-time Dell system architecture intern and Professional Development Director at UT SHPE.",

  resumeFile: "/resume.pdf",

  // Your photo in public/images/
  headshot: "/images/headshot.jpg",

  // ----------------------------- Contact -----------------------------------
  email: "nathanreyna2020@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/nathan-reyna-17303b284",
    github: "https://github.com/Naskyro",
  },

  // ------------------------------ About -------------------------------------
  about: [
    "I'm a junior studying Electrical and Computer Engineering at UT Austin, focused on computer architecture and hardware design. I've spent two summers at Dell Technologies on the CSG System Architecture team — most recently building an AI pipeline that turns raw component datasheets into production-ready PCB footprints and schematic symbols.",
    "I'm also a research assistant at the Texas Advanced Computing Center (TACC), and I serve as Professional Development Director for UT SHPE, where I built a corporate sponsorship and alumni outreach program that has raised $17,000+ for our 400+ member chapter.",
  ],

  // --------------------------- Interests ------------------------------------
  // Shown as chips in the About section — the non-engineering side of you.
  interests: [
    "Brazilian jiu-jitsu",
    "Muay Thai",
    "avid basketball fan",
    "piano (10+ yrs)",
  ],

  // ---------------------------- Experience ----------------------------------
  // Add, remove, or reorder entries — the section renders whatever is here.
  experience: [
    {
      role: "Computer Architecture + Software Engineering Intern",
      company: "Dell Technologies",
      location: "Austin, TX",
      dates: "May 2026 – Aug 2026",
      bullets: [
        "Built a first-of-its-kind AI tool in Python that reads raw component datasheets, extracts critical specs, and generates production-ready PCB footprints and schematic symbols — replacing a third-party vendor process that previously took 3 months",
        "Solved a multi-domain problem spanning AI integration, technical document parsing, and PCB manufacturing standards (IPC-7351B), delivering outputs with near-perfect reliability",
        "Wrote custom Python conversion pipelines that transform generated outputs into Cadence-compatible formats — a seamless end-to-end flow from raw datasheet to production-ready library parts with no manual intervention",
      ],
    },
    {
      role: "Computer Architecture Intern",
      company: "Dell Technologies",
      location: "Austin, TX",
      dates: "May 2025 – Aug 2025",
      bullets: [
        "Used Cadence Allegro PCB Editor for high-level board design, gaining hands-on schematic and layout experience alongside senior system architects and PCB engineers",
        "Researched NVIDIA Blackwell GPU and NPU architectures for Dell's Pro Max Plus mobile workstation line, analyzing performance trade-offs and future technology trends",
        "Collaborated with the CTO's team and Marketing to align technical capabilities with customer use cases and assess potential market impact",
      ],
    },
    {
      role: "Research Assistant",
      company: "Texas Advanced Computing Center (TACC)",
      location: "Austin, TX",
      dates: "Jan 2025 – Present",
      bullets: [
        "Help researchers and faculty present their work in TACC's high-end visualization laboratory — preparing demos that translate complex research into large-scale visual displays",
        "Produce case studies highlighting student projects and research outcomes",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "YETI",
      location: "Austin, TX",
      dates: "Jun 2024 – Aug 2024",
      bullets: [
        "Developed and validated a comprehensive weather dataset that drove both immediate and long-term business value",
        "Delivered weather insights and analyses to senior stakeholders, influencing strategic ad optimization decisions",
        "Identified customer behavior patterns linked to specific temperature thresholds, producing actionable reports on weather–product correlations",
      ],
    },
  ],

  // ----------------------------- Projects -----------------------------------
  // Fields per project:
  //   link        — "" hides the button; or a GitHub/demo URL
  //   videos      — [] hides it; or clips in public/videos/, e.g.
  //                 ["/videos/demo.mp4"] — YouTube links also work
  //   screenshots — [] hides it; or a list of image paths, e.g.
  //                 ["/images/shot1.png", "/images/shot2.png"]
  projects: [
    {
      name: "Datasheet-to-Component AI Tool",
      tagline: "Datasheet in → PCB library part out",
      featured: true,
      description:
        "An AI pipeline built with Python and large language models that ingests raw component datasheets, extracts pinouts and package specs, and generates production-ready PCB footprints and schematic symbols in Cadence-compatible formats — compressing a vendor process that took months into minutes.",
      tech: ["Python", "LLMs", "PDF parsing", "IPC-7351B", "Cadence Allegro"],
      image: "/images/project-pcb-placeholder.svg",
      videos: [],
      screenshots: [],
      link: "", // e.g. "https://github.com/your-handle/datasheet-tool"
      flow: {
        steps: [
          { label: "datasheet.pdf", sub: "raw component specs" },
          { label: "AI extraction", sub: "pinouts + packages" },
          { label: "part generation", sub: "footprint + symbol" },
          { label: "cadence export", sub: "python pipelines" },
          { label: "library part", sub: "production-ready" },
        ],
        impact: [
          { big: "3 mo → min", small: "3rd-party vendor turnaround vs. tool runtime" },
          { big: "in-house", small: "cut reliance on costly external vendors" },
          { big: "0 manual", small: "steps from datasheet to production part" },
        ],
      },
    },
    {
      name: "Command Post",
      tagline: "Ops platform for a $1.2M towing company",
      featured: true,
      description:
        "A full-stack internal ops platform I built for Galindo's Towing & Transport — React, TypeScript, Cloudflare Workers, D1/SQLite, and Drizzle — covering accounts, dispatch, work orders, payroll/timeclock, Stripe payouts, compliance & claims recovery, and vehicle disposition. 12 modules on a 50-table schema with role-based access and field-level audit logging, running the company's operations in production since May 2026.",
      tech: ["React", "TypeScript", "Cloudflare Workers", "D1 / SQLite", "Drizzle", "Stripe"],
      image: "/images/project-commandpost-placeholder.svg",
      videos: [
        "/videos/commandpost-1.mp4",
        "/videos/commandpost-2.mp4",
        "/videos/commandpost-3.mp4",
        "/videos/commandpost-4.mp4",
      ],
      screenshots: [], // e.g. ["/images/cp-dashboard.png", "/images/cp-finance.png"]
      link: "", // live site or repo URL, if shareable
      flow: {
        steps: [
          { label: "manual ops", sub: "paper + spreadsheets" },
          { label: "12 modules", sub: "dispatch · orders · accounts" },
          { label: "d1 + drizzle", sub: "50-table schema" },
          { label: "rbac + audit", sub: "field-level logging" },
          { label: "live ops", sub: "whole company, one app" },
        ],
        impact: [
          { big: "12", small: "modules — accounts through vehicle disposition" },
          { big: "50+", small: "tables under field-level audit logging" },
          { big: "$1.2M", small: "of company revenue running on Command Post" },
        ],
      },
    },
  ],

  // ---------------------------- Leadership ----------------------------------
  leadership: [
    {
      role: "Professional Development Director",
      org: "Society of Hispanic Professional Engineers (SHPE), UT Austin",
      dates: "Mar 2026 – Present",
      bullets: [
        "Designed and implemented a scalable CRM-based corporate sponsorship and alumni outreach strategy for a 400+ member engineering organization, generating $17,000+ in sponsorship revenue within three months",
        "Manage the Professional Development Committee and coordinate initiatives with 4 committee chairs across corporate outreach, workshops, and member engagement",
        "Coordinate alumni and industry engagement through LinkedIn outreach, professional networking events, and mentorship initiatives for SHPE members",
      ],
    },
    {
      role: "Founder & President",
      org: "8819 Arc-Tech Bears Robotics Team (FRC)",
      dates: "2021 – 2024",
      bullets: [
        "Founded and led the team through eleven district, state, and world championship competitions",
        "Managed 40+ members and organized $15,000 in fundraising for competitions",
        "Built a program that enabled minority students to learn and grow in STEM fields",
      ],
    },
    {
      role: "Treasurer",
      org: "Project West Campus",
      dates: "Dec 2025 – Present",
      bullets: [
        "Built and manage the annual budget for weekly homeless outreach programs",
        "Secured $5,000/year in recurring donations through sponsor outreach",
        "Optimized spending to maximize meals and supplies per dollar — distributed 400+ meals to the Austin area",
      ],
    },
  ],

  // --------------------------- Skills ---------------------------------------
  // Shown as simple chips in the About section. Edit freely.
  skills: [
    "Python",
    "C / ARM Assembly",
    "Java / JavaScript",
    "SQL",
    "Cadence Allegro",
    "KiCad",
    "Solidworks",
    "Google Cloud",
  ],
};

export type Portfolio = typeof portfolio;
