"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  height?: number | string; // supports '100%'
  title?: string;
};

export default function LiveEmbed({
  src,
  height = "100%",
  title = "Live preview",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const loadTimeout = useRef<number | null>(null);

  useEffect(() => {
    setLoaded(false);
    setErrored(false);
    if (loadTimeout.current) window.clearTimeout(loadTimeout.current);
    loadTimeout.current = window.setTimeout(() => {
      if (!loaded) setErrored(true);
    }, 8000);
    return () => {
      if (loadTimeout.current) window.clearTimeout(loadTimeout.current);
    };
  }, [src]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
            background: "#0b0f17",
            color: "#9ca3af",
            borderRadius: 12,
            padding: 16,
            textAlign: "center",
          }}
        >
          <div>
            {errored
              ? "Couldn’t load embed. The site may block iframes."
              : "Loading live preview…"}
          </div>
          {errored && (
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                padding: "8px 12px",
                borderRadius: 8,
                background: "#111827",
                color: "#e5e7eb",
                fontSize: 14,
              }}
            >
              Open live site
            </a>
          )}
        </div>
      )}
      <iframe
        src={src}
        title={title}
        style={{
          width: "100%",
          height,
          border: 0,
          borderRadius: 12,
          background: "#0b0f17",
        }}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        onLoad={() => setLoaded(true)}
      />
      {errored && (
        <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              padding: "8px 12px",
              borderRadius: 8,
              background: "#111827",
              color: "#e5e7eb",
              fontSize: 14,
            }}
          >
            Open live site
          </a>
          <span style={{ color: "#9ca3af", fontSize: 12 }}>
            Some sites block embedding via X-Frame-Options/CSP.
          </span>
        </div>
      )}
    </div>
  );
}
