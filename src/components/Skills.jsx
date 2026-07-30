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

const skills = [
  { title: "Languages",            description: "Python · Java · C++",                                                        accent: "#6366f1" },
  { title: "Frontend",             description: "React.js · TypeScript · JavaScript · Tailwind CSS · Three.js · Motion",      accent: "#818cf8" },
  { title: "UI/UX Design",         description: "Figma · Wix Studio · Prototyping · Canva",                                   accent: "#a78bfa" },
  { title: "Backend",              description: "Flask · Node.js · MongoDB · Supabase · Firebase",                            accent: "#6366f1" },
  { title: "DevOps & Tools",       description: "Git · GitHub · Render · Vercel · AWS · Docker · CI/CD · Clerk",              accent: "#818cf8" },
  { title: "AI / ML",              description: "LangChain · Scikit-Learn · NumPy · Pandas · TensorFlow · PyTorch",           accent: "#a78bfa" },
];

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
        background: "#1c1c1c",
        border: `1px solid ${hovered ? skill.accent + "50" : "#252525"}`,
        borderRadius: 16,
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transform: hovered
          ? `perspective(800px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(10px)`
          : "perspective(800px) rotateX(0) rotateY(0) translateZ(0)",
        transition: hovered ? "none" : "transform 0.4s ease, border-color 0.25s, box-shadow 0.25s",
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${skill.accent}30` : "none",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${skill.accent}, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Glow bg */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${((mousePos.x + 8) / 16) * 100}% ${((mousePos.y + 8) / 16) * 100}%, ${skill.accent}12 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Index number */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: skill.accent,
          opacity: 0.6,
          marginBottom: 16,
          letterSpacing: "0.1em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#f4f4f5",
          marginBottom: 14,
          letterSpacing: "-0.01em",
        }}
      >
        {skill.title}
      </h3>

      <p
        style={{
          fontSize: 13.5,
          color: "#71717a",
          lineHeight: 1.7,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {skill.description}
      </p>
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