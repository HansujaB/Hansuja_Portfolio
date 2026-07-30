import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, Globe } from "lucide-react";

const FILTER_TAGS = ["All", "AI/ML", "JS/TS", "Python", "npm packages", "Rust"];

const projects = [
  {
    id: 1,
    title: "FinBuddy",
    description:
      "A modern FinTech web application built during the GDSC Hackathon — tracks budgets, expenses, and financial goals with beautiful visualisations and real-time insights.",
    image: "FinBuddy.png",
    demoLink: "https://gdsc-hackk.vercel.app/",
    githubLink: "https://github.com/HansujaB/FinTech-gdsc-Hackathon",
    tags: ["JS/TS"],
    technologies: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Chart.js"],
  },
  {
    id: 2,
    title: "Hirrd",
    description:
      "Full-stack job portal for recruiters and candidates with real-time application tracking, role-based access, and a sleek recruiter dashboard.",
    image: "Hirrd.png",
    demoLink: "https://hirrd-pi-blond.vercel.app",
    githubLink: "https://github.com/HansujaB/Project_Hirrd",
    tags: ["JS/TS"],
    technologies: ["React.js", "Tailwind CSS", "Supabase", "Clerk"],
  },
  {
    id: 3,
    title: "SMS Spam Classifier",
    description:
      "NLP-powered spam classifier using Multinomial Naive Bayes and TF-IDF vectorisation, deployed on Render with a clean Streamlit UI.",
    image: "SpamClassifier.png",
    demoLink: "https://sms-spam-classifier-n3ea.onrender.com",
    githubLink: "https://github.com/HansujaB/SMS_spam_classifier",
    tags: ["AI/ML", "Python"],
    technologies: ["Streamlit", "Python", "NLP", "Naive Bayes", "Render"],
  },
  {
    id: 4,
    title: "TinyStories SLM",
    description:
      "A small language model inspired by GPT-2, trained from scratch on the TinyStories dataset to generate coherent short stories for 3–4 year-olds using transformers and PyTorch.",
    image: "SLM.png",
    demoLink: "",
    githubLink: "https://github.com/HansujaB/Small-Language-Model-Tiny-Stories",
    tags: ["AI/ML", "Python"],
    technologies: ["Transformers", "PyTorch", "SLM"],
  },
  {
    id: 5,
    title: "WhatsApp Chat Analyzer",
    description:
      "Extracts and visualises rich insights from exported WhatsApp chats — message trends, most active users, word clouds, emoji analysis, and activity heatmaps.",
    image: "WCA.png",
    demoLink: "https://whatsapp-chat-analyser-2nbu.onrender.com",
    githubLink: "https://github.com/HansujaB/Whatsapp-Chat-Analyser",
    tags: ["AI/ML", "Python"],
    technologies: ["Python", "Streamlit", "NLP", "Matplotlib", "Render"],
  },
];

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

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false);

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          background: "#1c1c1c",
          border: `1px solid ${hovered ? "#333" : "#252525"}`,
          borderRadius: 20,
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: hovered ? "0 30px 80px rgba(0,0,0,0.5)" : "none",
          marginBottom: 24,
        }}
        className="featured-card"
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: 340 }}>
          <img
            src={`/${project.image}`}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.5s ease",
              display: "block",
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "linear-gradient(135deg, #1a1a1a, #111)";
            }}
          />
          {/* Featured badge */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              padding: "4px 12px",
              background: "#6366f1",
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 700,
              color: "white",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Featured
          </div>
        </div>
        {/* Content */}
        <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "3px 10px", background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)", borderRadius: 99,
                  fontSize: 11, color: "#818cf8", fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <h3
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#f4f4f5",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 28 }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {project.technologies.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 13, padding: "8px 18px" }}>
              <Github size={14} /> GitHub
            </a>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ fontSize: 13, padding: "8px 18px" }}>
                <Globe size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1c1c1c",
        border: `1px solid ${hovered ? "#333" : "#252525"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.4)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img
          src={`/${project.image}`}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background = "linear-gradient(135deg, #1a1a1a, #111)";
          }}
        />
      </div>
      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                padding: "2px 8px", background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)", borderRadius: 99,
                fontSize: 10, color: "#818cf8", fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#f4f4f5", marginBottom: 10, letterSpacing: "-0.01em" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13.5, color: "#71717a", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.technologies.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 12, padding: "7px 14px", flex: 1, justifyContent: "center" }}>
            <Github size={13} /> GitHub
          </a>
          {project.demoLink ? (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ fontSize: 12, padding: "7px 14px", flex: 1, justifyContent: "center" }}>
              <Globe size={13} /> Demo
            </a>
          ) : (
            <span style={{ flex: 1 }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [headerRef, headerVisible] = useReveal();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const featured = filtered[0];
  const rest     = filtered.slice(1);

  return (
    <section id="projects" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
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
        <span className="section-label">// projects</span>
        <h2 className="section-title">Things I've Built</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A collection of projects across AI/ML, web development, and more.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            style={{
              padding: "8px 20px",
              borderRadius: 99,
              border: `1px solid ${activeFilter === tag ? "#6366f1" : "#252525"}`,
              background: activeFilter === tag ? "rgba(99,102,241,0.18)" : "transparent",
              color: activeFilter === tag ? "#818cf8" : "#71717a",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== tag) {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.color = "#a1a1aa";
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== tag) {
                e.currentTarget.style.borderColor = "#252525";
                e.currentTarget.style.color = "#71717a";
              }
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", color: "#71717a", padding: "60px 0" }}>
          No projects found for this filter yet.
        </div>
      ) : (
        <>
          {/* Featured */}
          {featured && <ProjectCard project={featured} featured />}

          {/* Horizontal grid (2 per row) */}
          {rest.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
                gap: 24,
              }}
            >
              {rest.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:first-child { min-height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
