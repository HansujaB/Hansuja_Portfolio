import { useRef, useEffect, useState } from "react";
import { Trophy, Star, Award, Zap, Medal, Users } from "lucide-react";

// ── Achievement data — add your real entries here ──────────────
const achievements = [
  {
    id: 1,
    icon: <Trophy size={28} />,
    title: "UBER SHE++ 2026",
    subtitle: "UBER Bangalore",
    description:
      "Selected among top 63 students to attend Uber She++ Event and Hackathon, Advanced to Top 7 teams",
    date: "March 2026",
    color: "#f59e0b",
    image: null,
  },
  {
    id: 2,
    icon: <Medal size={28} />,
    title: "1st Position AI/ML Circle",
    subtitle: "Google Developer Group IGDTUW",
    description:
      "Best Mentee in over 200 freshmen; built projects around Core ML algorithms.",
    date: "Jan 2025",
    color: "#6366f1",
    image: null,
  },
  {
    id: 3,
    icon: <Trophy size={28} />,
    title: "Hack'24 Winner",
    subtitle: "IIIT Delhi",
    description:
      "Built a platform for people to analyse their spendings and the drop in credit score.",
    date: "March 2025",
    color: "#f59e0b",
    image: null,
  },
  {
    id: 4,
    icon: <Star size={28} />,
    title: "National Semi Finalist",
    subtitle: "Flipkart Grid '25 & '26",
    description:
      "Got selected for National Semi Finals for Flipkart Grid for 2 consecutive years",
    date: "2026",
    color: "#ec4899",
    image: null,
  },
  {
    id: 5,
    icon: <Zap size={28} />,
    title: "2nd Position",
    subtitle: "IEEE WIENOVA 2.0",
    description:
      "Developed an AI-powered web app to monitor productivity fluctuation throughout the day and give suggestions to improve it.",
    date: "Feb 2025",
    color: "#6366f1",
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
        width: 520,
        display: "flex",
        alignItems: "stretch",
        background: hovered ? "#1e1e1e" : "#161616",
        border: `1.5px solid ${hovered ? achievement.color + "66" : achievement.color + "22"}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: hovered
          ? `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${achievement.color}22, 0 0 40px ${achievement.color}12`
          : "0 4px 20px rgba(0,0,0,0.25)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Left accent strip */}
      <div
        style={{
          width: 6,
          background: hovered
            ? `linear-gradient(180deg, ${achievement.color}, ${achievement.color}44)`
            : `linear-gradient(180deg, ${achievement.color}88, ${achievement.color}22)`,
          flexShrink: 0,
          transition: "background 0.3s",
        }}
      />

      {/* Icon + date column */}
      <div
        style={{
          width: 80,
          background: achievement.color + "0d",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "24px 8px",
          flexShrink: 0,
        }}
      >
        <div style={{
          color: achievement.color,
          background: achievement.color + "18",
          padding: 12,
          borderRadius: 14,
          display: "flex",
          boxShadow: hovered ? `0 0 20px ${achievement.color}44` : "none",
          transition: "box-shadow 0.3s",
        }}>
          {achievement.icon}
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            color: achievement.color,
            writingMode: "vertical-lr",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            opacity: 0.7,
          }}
        >
          {achievement.date}
        </span>
      </div>

      {/* Right content */}
      <div style={{ padding: "28px 28px 28px 22px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: achievement.color,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 8,
            opacity: 0.9,
          }}
        >
          {achievement.subtitle}
        </span>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "#f4f4f5",
            marginBottom: 10,
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          {achievement.title}
        </h3>
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const trackRef    = useRef(null);
  const wrapRef     = useRef(null);
  const [paused, setPaused] = useState(false);
  const [headerRef, setHeaderRef] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  // pos is tracked in a ref so the rAF loop always has the latest value
  const posRef      = useRef(0);
  const dragRef     = useRef({ active: false, startX: 0, startPos: 0 });

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

  // Auto-scroll animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId;
    const speed = 1.4; // px per frame — faster than before

    function getHalf() { return track.scrollWidth / 2; }

    function step() {
      if (!paused && !dragRef.current.active) {
        posRef.current += speed;
        if (posRef.current >= getHalf()) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  // Mouse-wheel / trackpad horizontal scroll
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const onWheel = (e) => {
      e.preventDefault();
      const half = track.scrollWidth / 2;
      posRef.current = Math.max(0, Math.min(posRef.current + e.deltaY * 0.6, half - 1));
      track.style.transform = `translateX(-${posRef.current}px)`;
    };
    wrap.addEventListener("wheel", onWheel, { passive: false });
    return () => wrap.removeEventListener("wheel", onWheel);
  }, []);

  // Drag-to-scroll
  const onPointerDown = (e) => {
    dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = dragRef.current.startX - e.clientX;
    const half = track.scrollWidth / 2;
    posRef.current = Math.max(0, Math.min(dragRef.current.startPos + delta, half - 1));
    track.style.transform = `translateX(-${posRef.current}px)`;
  };
  const onPointerUp = () => { dragRef.current.active = false; };

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
        ref={wrapRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ overflow: "hidden", width: "100%", cursor: "grab", userSelect: "none" }}
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
          color: "#f4f4f4",
          opacity: 0.35,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        scroll · drag · hover to pause
      </p>
    </section>
  );
}
