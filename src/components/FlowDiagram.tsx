import type { Project } from "@/content/portfolio";
import { Fragment } from "react";

// "How it works" pipeline + "why it mattered" stats for a project card.
// Data lives in the project's `flow` field in portfolio.ts.
// Vertical stack on mobile, horizontal pipeline on desktop —
// the dashed connectors animate like data flowing through a bus.
export default function FlowDiagram({ flow }: { flow: NonNullable<Project["flow"]> }) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-night/60 p-5">
      <p className="font-code text-xs text-arc">{"// how it works"}</p>

      <div className="mt-4 flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {flow.steps.map((step, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <>
                <div className="flow-dash-v mx-auto h-7 w-0.5 md:hidden" />
                <div className="flow-dash-h hidden h-0.5 w-7 shrink-0 md:block" />
              </>
            )}
            <div className="flex-1 rounded-xl border border-line bg-panel px-3 py-2.5 text-center">
              <p className="font-code text-xs font-semibold text-mist">{step.label}</p>
              <p className="mt-0.5 font-code text-[10px] text-mute">{step.sub}</p>
            </div>
          </Fragment>
        ))}
      </div>

      <p className="mt-6 font-code text-xs text-arc">{"// why it mattered"}</p>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {flow.impact.map((item, i) => (
          <div key={i} className="rounded-xl border border-line bg-panel px-4 py-3 text-center">
            <p className="font-code text-lg font-semibold text-arc">{item.big}</p>
            <p className="mt-1 text-xs leading-relaxed text-mute">{item.small}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
