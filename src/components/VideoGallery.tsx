"use client"; // needs useState for clip switching

import { useState } from "react";

// One player + a thumbnail strip when a project has multiple clips.
// Accepts local files ("/videos/clip.mp4") or YouTube links.
function youtubeId(src: string) {
  return src.match(/(?:youtu\.be\/|v=|embed\/)([\w-]+)/)?.[1];
}

export default function VideoGallery({
  videos,
  title,
}: {
  videos: readonly string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const src = videos[active];
  const ytId = youtubeId(src);
  const isYoutube = src.includes("youtu");

  return (
    <div>
      {/* main player */}
      {isYoutube && ytId ? (
        <iframe
          src={`https://www.youtube.com/embed/${ytId}`}
          className="aspect-video w-full"
          allowFullScreen
          title={`${title} demo`}
        />
      ) : (
        <video
          key={src} // remount when the clip changes so it loads fresh
          src={src}
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full bg-night"
        />
      )}

      {/* thumbnail strip — only shown when there's more than one clip */}
      {videos.length > 1 && (
        <div className="grid grid-cols-4 gap-2 p-2">
          {videos.map((clip, i) => {
            const clipYt = youtubeId(clip);
            return (
              <button
                key={clip}
                onClick={() => setActive(i)}
                aria-label={`Play clip ${i + 1}`}
                className={`overflow-hidden rounded-lg border-2 transition-all hover:-translate-y-0.5 ${
                  i === active ? "border-arc" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                {clip.includes("youtu") && clipYt ? (
                  <img src={`https://img.youtube.com/vi/${clipYt}/0.jpg`} alt="" className="h-14 w-full object-cover" />
                ) : (
                  <video
                    src={`${clip}#t=0.5`} // show an early frame as the thumbnail
                    muted
                    preload="metadata"
                    className="pointer-events-none h-14 w-full bg-night object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
