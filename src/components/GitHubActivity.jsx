import { useRef, useEffect, useState } from "react";
import { Github, ExternalLink, RefreshCw } from "lucide-react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function GitHubActivity() {
  const [headerRef, headerVisible] = useReveal();
  const [bodyRef, bodyVisible]     = useReveal();
  const [imgLoaded, setImgLoaded]  = useState(false);
  const [imgError, setImgError]    = useState(false);
  const [key, setKey]              = useState(0); // for refresh

  const username = "HansujaB";
  const heatmapUrl = `https://ghchart.rshah.org/${username}`;

  return (
    <section id="github" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          marginBottom: 48,
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}
      >
        <span className="section-label">// github activity</span>
        <h2 className="section-title">GitHub Contributions</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A year of commits, pull requests, and open-source work on{" "}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6366f1", textDecoration: "none" }}
          >
            @{username}
          </a>
          .
        </p>
      </div>

      {/* Heatmap card */}
      <div
        ref={bodyRef}
        style={{
          background: "#1c1c1c",
          border: "1px solid #252525",
          borderRadius: 20,
          overflow: "hidden",
          opacity: bodyVisible ? 1 : 0,
          transform: bodyVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}
      >
        {/* Card header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: "1px solid #252525",
            background: "#1a1a1a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Github size={18} style={{ color: "#a1a1aa" }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>
              {username}
            </span>
            <span style={{ fontSize: 13, color: "#71717a" }}>· Contribution graph</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              onClick={() => { setImgLoaded(false); setImgError(false); setKey((k) => k + 1); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                background: "transparent",
                border: "1px solid #252525",
                borderRadius: 8,
                color: "#71717a",
                fontSize: 12,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "#a1a1aa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#252525"; e.currentTarget.style.color = "#71717a"; }}
              title="Refresh"
            >
              <RefreshCw size={12} /> Refresh
            </button>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                background: "transparent",
                border: "1px solid #252525",
                borderRadius: 8,
                color: "#71717a",
                fontSize: 12,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "#a1a1aa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#252525"; e.currentTarget.style.color = "#71717a"; }}
            >
              <ExternalLink size={12} /> View GitHub
            </a>
          </div>
        </div>

        {/* Heatmap area */}
        <div
          style={{
            padding: "36px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 180,
            position: "relative",
          }}
        >
          {/* Loading skeleton */}
          {!imgLoaded && !imgError && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: 120,
                  background: "linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%)",
                  backgroundSize: "200% 100%",
                  borderRadius: 10,
                  animation: "shimmer 1.5s infinite",
                }}
              />
              <p style={{ fontSize: 12, color: "#71717a", fontFamily: "'JetBrains Mono', monospace" }}>
                loading contribution graph...
              </p>
            </div>
          )}

          {/* Error state */}
          {imgError && (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p style={{ color: "#71717a", fontSize: 14, marginBottom: 12 }}>
                Couldn't load contribution graph. The ghchart.rshah.org API may be temporarily unavailable.
              </p>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: 13 }}
              >
                <Github size={14} /> View on GitHub
              </a>
            </div>
          )}

          {/* Actual heatmap SVG */}
          <img
            key={key}
            src={heatmapUrl}
            alt={`${username}'s GitHub contribution graph`}
            style={{
              width: "100%",
              maxWidth: "100%",
              display: imgError ? "none" : "block",
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.5s ease",
              filter: "invert(1) hue-rotate(220deg) saturate(0.8) brightness(1.1)",
              /* ↑ Inverts the green heatmap to match our indigo accent on dark bg */
            }}
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(false); }}
          />
        </div>

        {/* Footer legend */}
        <div
          style={{
            padding: "12px 32px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 8,
            borderTop: "1px solid #1a1a1a",
          }}
        >
          <span style={{ fontSize: 11, color: "#71717a" }}>Less</span>
          {["rgba(99,102,241,0.1)", "rgba(99,102,241,0.3)", "rgba(99,102,241,0.55)", "rgba(99,102,241,0.8)", "#6366f1"].map(
            (c, i) => (
              <div
                key={i}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: c,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              />
            )
          )}
          <span style={{ fontSize: 11, color: "#71717a" }}>More</span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
