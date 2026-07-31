import { useRef, useEffect, useState } from "react";

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

/* ── Tech items: { name, icon (SVG path from simpleicons), color } ── */
const skills = [
  {
    title: "Languages",
    accent: "#6366f1",
    items: [
      { name: "Python",     icon: "https://cdn.simpleicons.org/python/3776AB",     color: "#3776AB" },
      { name: "Java",       icon: "https://cdn.simpleicons.org/openjdk/ED8B00",    color: "#ED8B00" },
      { name: "Rust",       icon: "https://cdn.simpleicons.org/rust/ffffff",       color: "#ffffff" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
    ],
  },
  {
    title: "Frontend",
    accent: "#818cf8",
    items: [
      { name: "React",     icon: "https://cdn.simpleicons.org/react/61DAFB",      color: "#61DAFB" },
      { name: "Next.js",   icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",   color: "#ffffff" },
      { name: "Three.js",  icon: "https://cdn.simpleicons.org/threedotjs/ffffff",  color: "#ffffff" },
      { name: "Tailwind",  icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Motion",    icon: "https://cdn.simpleicons.org/framer/0055FF",      color: "#0055FF" },
    ],
  },
  {
    title: "UI / UX Design",
    accent: "#a78bfa",
    items: [
      { name: "Figma",   icon: "https://cdn.simpleicons.org/figma/F24E1E",       color: "#F24E1E" },
      { name: "Canva",   icon: "https://cdn.simpleicons.org/canva/00C4CC",        color: "#00C4CC" },
    ],
  },
  {
    title: "Backend",
    accent: "#6366f1",
    items: [
      { name: "FastAPI",   icon: "https://cdn.simpleicons.org/fastapi/009688",    color: "#009688" },
      { name: "Node.js",   icon: "https://cdn.simpleicons.org/nodedotjs/339933",  color: "#339933" },
      { name: "MongoDB",   icon: "https://cdn.simpleicons.org/mongodb/47A248",    color: "#47A248" },
      { name: "Firebase",  icon: "https://cdn.simpleicons.org/firebase/FFCA28",   color: "#FFCA28" },
      { name: "Supabase",  icon: "https://cdn.simpleicons.org/supabase/3ECF8E",   color: "#3ECF8E" },
    ],
  },
  {
    title: "DevOps & Tools",
    accent: "#818cf8",
    items: [
      { name: "Git",      icon: "https://cdn.simpleicons.org/git/F05032",         color: "#F05032" },
      { name: "Docker",   icon: "https://cdn.simpleicons.org/docker/2496ED",      color: "#2496ED" },
      { name: "GitHub",   icon: "https://cdn.simpleicons.org/github/ffffff",      color: "#ffffff" },
      { name: "Vercel",   icon: "https://cdn.simpleicons.org/vercel/ffffff",      color: "#ffffff" },
      { name: "AWS",      icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900", color: "#FF9900" },
    ],
  },
  {
    title: "AI / ML",
    accent: "#a78bfa",
    items: [
      { name: "LangChain",    icon: "https://cdn.simpleicons.org/langchain/ffffff",       color: "#ffffff" },
      { name: "TensorFlow",   icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",      color: "#FF6F00" },
      { name: "PyTorch",      icon: "https://cdn.simpleicons.org/pytorch/EE4C2C",         color: "#EE4C2C" },
      { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E",     color: "#F7931E" },
      { name: "NumPy",        icon: "https://cdn.simpleicons.org/numpy/013243",           color: "#4dabcf" },
      { name: "Pandas",       icon: "https://cdn.simpleicons.org/pandas/150458",          color: "#e70488" },
    ],
  },
];

function TechChip({ item }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 14px",
        background: hovered ? item.color + "18" : "#0d0d0d",
        border: `1px solid ${hovered ? item.color + "66" : "#252525"}`,
        borderRadius: 8,
        cursor: "default",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? `0 4px 16px ${item.color}22` : "none",
      }}
    >
      {!imgError ? (
        <img
          src={item.icon}
          alt={item.name}
          width={16}
          height={16}
          style={{ objectFit: "contain", flexShrink: 0, filter: "brightness(0.9)" }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span style={{ width: 14, height: 14, display: "inline-block",
          background: item.color + "44", borderRadius: "50%", flexShrink: 0 }} />
      )}
      <span style={{
        fontSize: 14,
        fontWeight: 600,
        color: hovered ? "#f4f4f4" : "#c4c4c8",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.02em",
        transition: "color 0.2s",
      }}>{item.name}</span>
    </div>
  );
}

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        background: "#111",
        border: `1px solid ${hovered ? skill.accent + "50" : "#1e1e1e"}`,
        borderRadius: 16,
        padding: "28px 24px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transform: hovered
          ? `perspective(800px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(10px)`
          : "perspective(800px) rotateX(0) rotateY(0) translateZ(0)",
        transition: hovered ? "none" : "transform 0.4s ease, border-color 0.25s, box-shadow 0.25s",
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${skill.accent}30` : "none",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${skill.accent}, transparent)`,
          opacity: hovered ? 1 : 0.35,
          transition: "opacity 0.3s",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Glow bg */}
      {hovered && (
        <div
          style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(circle at ${((mousePos.x + 8) / 16) * 100}% ${((mousePos.y + 8) / 16) * 100}%, ${skill.accent}10 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Index + Title row */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: skill.accent,
          opacity: 0.6,
          letterSpacing: "0.1em",
        }}>{String(index + 1).padStart(2, "0")}</span>
        <h3 style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#f4f4f5",
          letterSpacing: "-0.01em",
        }}>{skill.title}</h3>
      </div>

      {/* Tech chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {skill.items.map((item) => (
          <TechChip key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible]     = useReveal();

  return (
    <section id="skills" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
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
        <span className="section-label">// skills</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Tools and technologies I work with across the full stack.
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: 20,
          opacity: gridVisible ? 1 : 0,
          transform: gridVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}
      >
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
