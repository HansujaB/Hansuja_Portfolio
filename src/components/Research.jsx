import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, BookOpen, Monitor, FileText } from "lucide-react";

// ── Research paper data ────────────
const paper = {
  title: "Empirical Enhancements to Hybrid AES-ECC Steganography using USC-SIPI dataset",
  authors: "Hansuja Budhiraja,Kiran Malik",
  venue: "WcCST 2026 · IEEE · Published",
  abstract:
    "A secure communication framework integrating AES-128-CBC payload encryption, ECC via SECP256R1 for key exchange, inverted LSB embedding in the RGB color space, and lossless WebP compression for efficient transmission.",
  tags: ["Cryptography", "Steganography", "Security", "Image Processing"],
  doiLink: "https://ieeexplore.ieee.org/document/11496298/",
  githubLink: "https://github.com/HansujaB/StegoSheild",
  liveLink: "https://stego-sheild.vercel.app/",
  iframeUrl: "https://stego-sheild.vercel.app/",
};

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

export default function Research() {
  const [headerRef, headerVisible] = useReveal();
  const [cardRef, cardVisible]     = useReveal();
  const [showEmbed, setShowEmbed]  = useState(false);

  return (
    <section id="research" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          marginBottom: 56,
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}
      >
        <span className="section-label">// research</span>
        <h2 className="section-title">Research</h2>
        <div className="section-divider" />
      </div>

      {/* Paper card */}
      <div
        ref={cardRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          background: "#1c1c1c",
          border: "1px solid #252525",
          borderRadius: 20,
          overflow: "hidden",
          opacity: cardVisible ? 1 : 0,
          transform: cardVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}
        className="research-grid"
      >
        {/* Left — paper info */}
        <div style={{ padding: "48px 44px", borderRight: "1px solid #252525", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          {/* Tags */}
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {paper.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "3px 12px",
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    borderRadius: 99,
                    fontSize: 11,
                    color: "#818cf8",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                color: "#f4f4f5",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              {paper.title}
            </h3>

            {/* Authors */}
            <p style={{ fontSize: 13, color: "#6366f1", fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>
              {paper.authors}
            </p>
            <p style={{ fontSize: 13, color: "#71717a", marginBottom: 28 }}>{paper.venue}</p>

            {/* Abstract */}
            <div
              style={{
                padding: "16px 20px",
                background: "#111",
                borderLeft: "3px solid #6366f1",
                borderRadius: "0 8px 8px 0",
                marginBottom: 32,
              }}
            >
              <p style={{ fontSize: 13.5, color: "#a1a1aa", lineHeight: 1.7 }}>{paper.abstract}</p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={paper.doiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: 13, padding: "9px 18px" }}
            >
              <BookOpen size={14} /> DOI / Paper
            </a>
            <a
              href={paper.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: 13, padding: "9px 18px" }}
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={paper.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{ fontSize: 13, padding: "9px 18px" }}
            >
              <Monitor size={14} /> Live Demo
            </a>
          </div>
        </div>

        {/* Right — interactive live preview */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#111",
          }}
        >
          {/* Browser chrome bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderBottom: "1px solid #252525",
              background: "#1a1a1a",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {["#ff5f57","#febc2e","#28c840"].map((c) => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: "#111",
                borderRadius: 6,
                padding: "4px 12px",
                fontSize: 12,
                color: "#71717a",
                fontFamily: "'JetBrains Mono', monospace",
                marginLeft: 8,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {paper.liveLink === "#" ? "your-project-demo.vercel.app" : paper.liveLink}
            </div>
            <a
              href={paper.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#71717a", display: "flex", alignItems: "center" }}
            >
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Embed area */}
          <div style={{ flex: 1, position: "relative", minHeight: 360 }}>
            {paper.iframeUrl ? (
              <iframe
                src={paper.iframeUrl}
                style={{ width: "100%", height: "100%", border: "none", minHeight: 360 }}
                title="Research project live demo"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ) : (
              /* Placeholder when URL not set */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 360,
                  gap: 16,
                  padding: 32,
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 20,
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6366f1",
                  }}
                >
                  <Monitor size={32} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#a1a1aa", fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
                    Live Demo
                  </p>
                  <p style={{ color: "#71717a", fontSize: 13 }}>
                    Set <code style={{ color: "#818cf8" }}>iframeUrl</code> in Research.jsx to embed your live showcase here.
                  </p>
                </div>
                <a
                  href={paper.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                  style={{ fontSize: 13 }}
                >
                  <ExternalLink size={14} /> Open Live Demo
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .research-grid { grid-template-columns: 1fr !important; }
          .research-grid > div:first-child { border-right: none !important; border-bottom: 1px solid #252525; }
        }
      `}</style>
    </section>
  );
}
