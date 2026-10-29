import { portfolio } from "@/content/portfolio";
import { Gear } from "./icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 py-10 font-code text-xs text-mute">
      <Gear className="h-3.5 w-3.5 animate-spin-slow text-arc/50" />
      <p>
        {"// © "}{new Date().getFullYear()} {portfolio.name} · built with next.js + tailwind
      </p>
    </footer>
  );
}
