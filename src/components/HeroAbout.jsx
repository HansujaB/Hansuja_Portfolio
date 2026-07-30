import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Code, ArrowDown, Sparkles, Mail, Terminal, Coffee } from "lucide-react";

const ROLES = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Open Source Contributor",
  "Hackathon Enthusiast",
];

export default function HeroAbout() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting, setDeleting]     = useState(false);
  const [isVisible, setIsVisible]   = useState(false);
  const ref = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const full = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tags = ["IGDTUW", "CSE-AI", "2nd Year", "ML & DL", "MERN Stack", "LangChain", "Java DSA"];

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        paddingTop: 80,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 64,
          width: "100%",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* LEFT — Text */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Greeting badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 99,
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 14, color: "#818cf8", fontFamily: "'JetBrains Mono', monospace" }}>
              $ hello world
            </span>
            <span style={{ animation: "blink 1s step-end infinite", color: "#6366f1" }}>▋</span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 12,
              color: "#f4f4f5",
            }}
          >
            Hansuja
            <br />
            <span style={{ color: "#6366f1" }}>Budhiraja</span>
          </h1>

          {/* Animated role */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
              minHeight: 36,
            }}
          >
            <Terminal size={18} style={{ color: "#71717a", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "#a1a1aa",
              }}
            >
              {displayed}
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1.1em",
                  background: "#6366f1",
                  marginLeft: 2,
                  verticalAlign: "text-bottom",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "#a1a1aa",
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 540,
            }}
          >
            Passionate tech enthusiast at IGDTUW turning wild ideas into real products,
            one hackathon at a time. Deep in AI, full-stack, and open source — you can ping me
            even at 3am, I might be awake&nbsp;😄
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
            <a href="#projects" className="btn-accent">
              <Code size={16} /> View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={16} /> Contact Me
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a
              href="https://github.com/HansujaB"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialStyle)}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialStyle)}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hansujaigdtuwcseai@gmail.com"
              style={socialStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialStyle)}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span style={{ color: "#333", fontSize: 18, userSelect: "none" }}>—</span>
            <a
              href="https://codolio.com/profile/HansujaB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...socialStyle, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", width: "auto", padding: "0 12px", color: "#6366f1", borderColor: "rgba(99,102,241,0.3)" }}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { ...socialHover, color: "#818cf8" })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { ...socialStyle, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", width: "auto", padding: "0 12px", color: "#6366f1", borderColor: "rgba(99,102,241,0.3)" })}
            >
              codolio ✦
            </a>
          </div>
        </div>

        {/* RIGHT — Photo + Stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {/* Photo */}
          <div style={{ position: "relative" }}>
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background: "conic-gradient(from 180deg, #6366f1, #818cf8, #1a1a1a, #6366f1)",
                animation: "spin 6s linear infinite",
              }}
            />
            <div
              style={{
                position: "relative",
                width: 260,
                height: 260,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #080808",
              }}
            >
              <img
                src="/img.jpg"
                alt="Hansuja Budhiraja"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "linear-gradient(135deg, #6366f1, #1a1a1a)";
                  e.target.parentElement.innerHTML += `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:72px;font-weight:900;color:rgba(255,255,255,0.9)">H</div>`;
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { value: "20+", label: "Competitions" },
              { value: "∞",   label: "Ideas" },
              { value: "24/7", label: "Learning" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "16px 24px", background: "#1c1c1c",
                  border: "1px solid #252525", borderRadius: 16, minWidth: 90,
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 24, fontWeight: 700, color: "#6366f1",
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: 12, color: "#71717a", marginTop: 4 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "#71717a",
          textDecoration: "none",
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>scroll</span>
        <ArrowDown size={16} />
      </a>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes spin  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        .hero-grid { position: relative; }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 899px) {
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}

const socialStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 10,
  border: "1px solid #252525",
  background: "#111",
  color: "#a1a1aa",
  textDecoration: "none",
  transition: "all 0.2s",
};

const socialHover = {
  ...socialStyle,
  borderColor: "#6366f1",
  color: "#818cf8",
  background: "rgba(99,102,241,0.12)",
};
