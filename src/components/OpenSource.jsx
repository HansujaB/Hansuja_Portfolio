import { useRef, useEffect, useState } from "react";
import { GitPullRequest, Users, Star, ExternalLink, GitMerge, Award } from "lucide-react";

// off-white used across all components
const OW = "#FFFFFF";

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

// ── Python OSS contributions ────────────────────────────────────
const pythonPRs = [
  {
    id: 1,
    repo: "MNE-Tools/mne-python",
    repoUrl: "https://github.com/mne-tools/mne-python",
    prTitle: "ENH: Add initial BCI2000 .dat reader (preload-only)- #13699",
    prUrl: "https://github.com/mne-tools/mne-python/pull/13699",
    status: "merged",
    description: "Add BCI2000 .dat reader to MNE-Python, enabling users to load and analyze BCI2000 data files within the MNE framework.",
    number: "#1",
  },
  {
    id: 2,
    repo: "MNE-Tools/mne-testing-data",
    repoUrl: "https://github.com/mne-tools/mne-testing-data",
    prTitle: "ENH : Add BCI2k .dat test dataset- #133",
    prUrl: "https://github.com/mne-tools/mne-testing-data/pull/133",
    status: "merged",
    description: "Add a BCI2000 .dat test dataset to the MNE testing data repository.",
    number: "#2",
  },
  {
    id: 3,
    repo: "MNE-Tools/mne-python",
    repoUrl: "https://github.com/mne-tools/mne-python",
    prTitle: "ENH: add cmap parameter to Evoked.animate_topomap - #13756",
    prUrl: "https://github.com/mne-tools/mne-python/pull/13756",
    status: "merged",
    description: "Adds a cmap parameter to Evoked.animate_topomap, allowing users to specify the colormap used for the animated topomap",
    number: "#3",
  },
  {
    id: 4,
    repo: "MNE-Tools/mne-python",
    repoUrl: "https://github.com/mne-tools/mne-python",
    prTitle: "ENH: allow per-channel colors in raw.plot via channel name dict keys- #13765",
    prUrl: "https://github.com/mne-tools/mne-python/pull/13765",
    status: "merged",
    description: "Adds support for per‑channel color overrides in raw.plot by allowing the color dict to be keyed by channel names",
    number: "#4",
  },
  {
    id: 5,
    repo: "MNE-Tools/mne-python",
    repoUrl: "https://github.com/mne-tools/mne-python",
    prTitle: "FIX: raise clear ValueError when no ECG events found in create_ecg_epochs- #13771",
    prUrl: "https://github.com/mne-tools/mne-python/pull/13771",
    status: "merged",
    description: "Fixes misleading TypeError when no ECG events are found.",
    number: "#5",
  },
  {
    id: 6,
    repo: "MNE-Tools/mne-python",
    repoUrl: "https://github.com/mne-tools/mne-python",
    prTitle: "FIX: remap lowpass <= 0 to Nyquist in GDF/EDF reader- #13769",
    prUrl: "https://github.com/mne-tools/mne-python/pull/13769",
    status: "merged",
    description: "Fixes the issue where lowpass filters <= 0 were not properly remapped to the Nyquist frequency in GDF/EDF readers.",
    number: "#6",
  },
];

function PRCard({ pr, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1c1c1c",
        border: `1px solid ${hovered ? "#333" : "#252525"}`,
        borderRadius: 14,
        padding: "20px 24px",
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.35)" : "none",
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Merge icon */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#22c55e",
          flexShrink: 0,
        }}
      >
        <GitMerge size={16} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#ffffff",
            }}
          >
            {pr.repo}
          </span>
          <span
            style={{
              padding: "1px 8px",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 99,
              fontSize: 10,
              color: "#22c55e",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            merged
          </span>
        </div>
        <a
          href={pr.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            color: hovered ? "#818cf8" : "#f4f4f5",
            textDecoration: "none",
            marginBottom: 6,
            transition: "color 0.2s",
            lineHeight: 1.4,
          }}
        >
          {pr.prTitle} <span style={{ color: "#ffffff", fontWeight: 400 }}>{pr.number}</span>
        </a>
        <p style={{ fontSize: 12.5, color: "#ffffff", lineHeight: 1.55 }}>{pr.description}</p>
      </div>
    </div>
  );
}

export default function OpenSource() {
  const [headerRef, headerVisible] = useReveal();
  const [bodyRef, bodyVisible] = useReveal();

  return (
    <section id="opensource" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          marginBottom: 64,
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}
      >
        <span className="section-label">// open source</span>
        <h2 className="section-title">Open Source</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Contributions to the community — merged PRs, mentorship, and collaborative work.
        </p>
      </div>

      <div
        ref={bodyRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          opacity: bodyVisible ? 1 : 0,
          transform: bodyVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}
        className="oss-grid"
      >
        {/* ── LEFT: Python OSS ───────────────────────────────── */}
        <div>
          {/* Header row: Python OSS + 6 Merged + 2 MNE-Python info tags */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            {/* Python OSS pill */}
            <div
              style={{
                padding: "8px 14px",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 16 }}>🐍</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#60a5fa", fontFamily: "'JetBrains Mono', monospace" }}>
                Python OSS
              </span>
            </div>

            {/* 6 Merged PRs pill */}
            <div
              style={{
                padding: "6px 14px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <GitMerge size={12} style={{ color: "#22c55e" }} />
              <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600 }}>6 Merged PRs</span>
            </div>

            {/* MNE tag 1 — what it is */}
            <div
              style={{
                padding: "6px 12px",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.22)",
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span style={{ fontSize: 12 }}>⭐</span>
              <span style={{ fontSize: 11, color: "#a5b4fc", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
                MNE Tools
              </span>
            </div>

            {/* MNE tag 2 — library scale */}
            <div
              style={{
                padding: "6px 12px",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.22)",
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span style={{ fontSize: 11 }}>🧠</span>
              <span style={{ fontSize: 11, color: "#a5b4fc", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
                EEG / MEG Analysis
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {pythonPRs.map((pr, i) => (
              <PRCard key={pr.id} pr={pr} index={i} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Snowscript WoC Mentorship ───────────────── */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div
              style={{
                padding: "8px 14px",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 16 }}>❄️</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#818cf8", fontFamily: "'JetBrains Mono', monospace" }}>
                AI/ML Circle
              </span>
            </div>
            <div
              style={{
                padding: "6px 14px",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Award size={12} style={{ color: "#6366f1" }} />
              <span style={{ fontSize: 12, color: "#818cf8", fontWeight: 600 }}>Mentor</span>
            </div>
          </div>

          {/* Snowscript WoC card */}
          <div
            style={{
              background: "#1c1c1c",
              border: "1px solid #252525",
              borderRadius: 20,
              overflow: "hidden",
              marginBottom: 24,
            }}
          >
            {/* Header banner */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(129,140,248,0.08))",
                borderBottom: "1px solid #252525",
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(99,102,241,0.2)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                ❄️
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f4f4f5", marginBottom: 2 }}>
                  Snowscript Winter of Code
                </h3>
                <p style={{ fontSize: 13, color: OW }}>
                  AI/ML Circle — Mentor
                </p>
              </div>
            </div>

            <div style={{ padding: "24px 28px" }}>
              <p style={{ fontSize: 14, color: OW, lineHeight: 1.7, marginBottom: 24 }}>
                Managed 3 projects as <strong style={{ color: "#f4f4f5" }}>AI/ML mentor</strong> for Snowscript's Winter of Code programme,
                guiding 10+ contributors through machine learning projects , assigning issues and reviewing 12+ pull requests.
              </p>
              <a
                href="https://github.com/GDG-IGDTUW/AI-ML-2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  padding: "9px 18px",
                  marginTop: 8,
                  marginBottom: 16,
                }}
              >
                View Repository (GDG AIML 2)
              </a>
              {/* Stat pills */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                {[
                  { icon: <Users size={14} />, label: "Managed 3 Projects", color: "#6366f1" },
                  { icon: <GitPullRequest size={14} />, label: "AI/ML Track", color: "#22c55e" },
                  { icon: <Star size={14} />, label: "Open Source", color: "#f59e0b" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      background: `${stat.color}12`,
                      border: `1px solid ${stat.color}30`,
                      borderRadius: 99,
                    }}
                  >
                    <span style={{ color: stat.color }}>{stat.icon}</span>
                    <span style={{ fontSize: 12, color: stat.color, fontWeight: 600 }}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Projects managed */}
              <p style={{ fontSize: 12, color: OW, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Projects Mentored
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { name: "SmileCam", desc: "A real-time computer vision photobooth built with React and Flask that automatically captures photos when users smile." },
                  { name: "Quantwise", desc: "A modern portfolio analysis platform built with React and Flask that turns raw market data into actionable financial intelligence." },
                  { name: "WhatsApp Chat Analyser", desc: "A NLP based tool for analyzing WhatsApp chat data and extracting insights." },
                ].map((p, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px 14px",
                      background: "#111",
                      borderRadius: 10,
                      borderLeft: "3px solid #6366f1",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", display: "block", marginBottom: 3 }}>{p.name}</span>
                    <span style={{ fontSize: 12, color: OW }}>{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .oss-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
