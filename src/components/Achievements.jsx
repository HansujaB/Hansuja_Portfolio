import { useRef, useEffect, useState } from "react";
import { Trophy, Star, Award, Zap, Medal, Users } from "lucide-react";

// ── Achievement data — add your real entries here ──────────────
const achievements = [
  {
    id: 1,
    icon: <Trophy size={28} />,
    title: "Hackathon Winner — GDSC",
    subtitle: "Google Developer Student Clubs",
    description:
      "Built FinBuddy, a full-stack FinTech application, and won the GDSC Hackathon. Competed against 100+ teams across IGDTUW.",
    date: "2024",
    color: "#f59e0b",
    image: null,
  },
  {
    id: 2,
    icon: <Medal size={28} />,
    title: "Achievement Title Here",
    subtitle: "Event / Organisation",
    description:
      "Description of this achievement — replace with your real win, rank, or certification.",
    date: "2024",
    color: "#6366f1",
    image: null,
  },
  {
    id: 3,
    icon: <Award size={28} />,
    title: "Achievement Title Here",
    subtitle: "Event / Organisation",
    description:
      "Description of this achievement — replace with your real win, rank, or certification.",
    date: "2024",
    color: "#22c55e",
    image: null,
  },
  {
    id: 4,
    icon: <Star size={28} />,
    title: "Achievement Title Here",
    subtitle: "Event / Organisation",
    description:
      "Description of this achievement — replace with your real win, rank, or certification.",
    date: "2023",
    color: "#ec4899",
    image: null,
  },
  {
    id: 5,
    icon: <Zap size={28} />,
    title: "20+ Competitions",
    subtitle: "Hackathons & Coding Events",
    description:
      "Participated in 20+ technical competitions including hackathons, coding contests, and design challenges across India.",
    date: "2023–2025",
    color: "#6366f1",
    image: null,
  },
  {
    id: 6,
    icon: <Users size={28} />,
    title: "Achievement Title Here",
    subtitle: "Event / Organisation",
    description:
      "Description of this achievement — replace with your real win, rank, or certification.",
    date: "2024",
    color: "#8b5cf6",
    image: null,
  },
];

function AchievementCard({ achievement }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: 480,
        display: "flex",
        alignItems: "stretch",
        background: "#1c1c1c",
        border: `1px solid ${hovered ? "#333" : "#252525"}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Left colour strip + icon */}
      <div
        style={{
          width: 90,
          background: `${achievement.color}14`,
          borderRight: `1px solid ${achievement.color}30`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          padding: "24px 8px",
          flexShrink: 0,
        }}
      >
        <div style={{ color: achievement.color }}>{achievement.icon}</div>
        <div
          style={{
            width: 3,
            height: 32,
            background: achievement.color,
            borderRadius: 99,
            opacity: 0.5,
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#71717a",
            writingMode: "vertical-lr",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {achievement.date}
        </span>
      </div>

      {/* Right content */}
      <div style={{ padding: "28px 28px 28px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: achievement.color,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {achievement.subtitle}
        </span>
        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#f4f4f5",
            marginBottom: 12,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {achievement.title}
        </h3>
        <p style={{ fontSize: 13.5, color: "#71717a", lineHeight: 1.65 }}>
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const trackRef   = useRef(null);
  const [paused, setPaused] = useState(false);
  const [headerRef, setHeaderRef] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  // Scroll reveal for header
  useEffect(() => {
    if (!headerRef) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(headerRef);
    return () => obs.disconnect();
  }, [headerRef]);

  // Auto-scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId;
    let pos = 0;
    const speed = 0.5; // px per frame

    const half = track.scrollWidth / 2;

    function step() {
      if (!paused) {
        pos += speed;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  // Duplicate array for infinite loop
  const doubled = [...achievements, ...achievements];

  return (
    <section id="achievements" style={{ padding: "100px 0", overflow: "hidden" }}>
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", marginBottom: 56 }}
        ref={(el) => setHeaderRef(el)}
      >
        <span className="section-label">// achievements</span>
        <h2
          className="section-title"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s ease",
          }}
        >
          Milestones & Wins
        </h2>
        <div className="section-divider" />
        <p
          className="section-subtitle"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          Competitions, hackathons, and achievements across my academic journey.
        </p>
      </div>

      {/* Scrolling track */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ overflow: "hidden", width: "100%", cursor: "grab" }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 20,
            willChange: "transform",
            width: "max-content",
            padding: "12px 0",
          }}
        >
          {doubled.map((a, i) => (
            <AchievementCard key={`${a.id}-${i}`} achievement={a} />
          ))}
        </div>
      </div>

      {/* Hint */}
      <p
        style={{
          textAlign: "center",
          marginTop: 24,
          fontSize: 12,
          color: "#71717a",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        hover to pause
      </p>
    </section>
  );
}
