import { useState, useRef, useEffect } from "react";
import { Github, Globe } from "lucide-react";

/* ─────────────────────────────────────────────
   PROJECT DATA (updated from resume)
───────────────────────────────────────────── */
const FILTER_TAGS = ["All", "AI/ML", "JS/TS", "Python", "npm package", "Rust"];

const projects = [
  {
    id: 1,
    title: "AgRe-CLI",
    tagline: "Agent Ready in a few commands",
    description:
      "Published npm CLI that makes any web project AI-crawlable via a single npx command — zero config. Supports 8 frameworks with auto route scanning, llms.txt generation, robots.txt patching, and a scored crawlability audit (0–100, A–F).",
    demoLink: "https://www.npmjs.com/package/agre-cli",
    githubLink: "https://github.com/HansujaB/AgRe",
    tags: ["JS/TS", "npm package"],
    technologies: ["TypeScript", "Node.js", "npm", "Vitest", "CI/CD"],
    visual: "terminal",
    accent: "#22d3ee",
  },
  {
    id: 2,
    title: "SprintLens",
    tagline: "Hours of Analysis → 60 seconds",
    description:
      "CLI and Claude Code skill that cuts sprint analysis from hours to under 60 seconds. Joins GitHub, Linear, Sentry, and PagerDuty signals to generate manager, employee, and executive reports with DORA metrics — no backend, no dashboard.",
    demoLink: "https://www.npmjs.com/package/sprintlens",
    githubLink: "https://github.com/HansujaB/sprintlens",
    tags: ["JS/TS", "npm package"],
    technologies: ["TypeScript", "Node.js", "Claude API", "Coral"],
    visual: "sprint",
    accent: "#a78bfa",
  },
  {
    id: 3,
    title: "CareLoop",
    tagline: "AI care memory for families",
    description:
      "Mobile app where parents build an AI care memory (allergies, medications, routines) shared via secure token. Multimodal ingestion via voice (Groq Whisper), text, and medical record OCR into Mem0 semantic memory. Caregivers get AI shift briefings and live Q&A.",
    demoLink: "https://youtube.com/shorts/1BCZu9-OWrM?feature=share",
    githubLink: "https://github.com/HansujaB/CareLoop",
    tags: ["AI/ML", "JS/TS", "Python"],
    technologies: ["Expo", "React Native", "FastAPI", "Mem0", "Groq", "Firebase"],
    visual: "careloop",
    accent: "#34d399",
  },
  {
    id: 4,
    title: "RAG Insights Engine",
    tagline: "Full-stack RAG platform",
    description:
      "Full-stack retrieval-augmented generation platform with FAISS vector search and LLM-based querying. Configurable chunking, multi-parameter experimentation, FastAPI backend with document management, and a React dashboard with real-time analytics.",
    demoLink: "https://drive.google.com/drive/folders/193xHFQr-r-cSdTkje03fg3es-sQhC7hl?usp=sharing",
    githubLink: "https://github.com/HansujaB/rag-insights-engine",
    tags: ["AI/ML", "Python"],
    technologies: ["React.js", "FastAPI", "FAISS", "Llama", "Python"],
    visual: "rag",
    accent: "#f59e0b",
  },
  {
    id: 5,
    title: "shs-cli",
    tagline: "Shamir s Secret Sharing over GF(257)",
    description:
      "Rust CLI for Shamir s Secret Sharing — t-of-n threshold reconstruction via Lagrange interpolation over GF(257). Zero unsafe code, no external crypto dependencies. Published to crates.io.",
    demoLink: "https://crates.io/crates/shs-cli",
    githubLink: "https://github.com/HansujaB/shs-cli",
    tags: ["Rust"],
    technologies: ["Rust", "Finite Field Arithmetic", "CLI", "Cryptography"],
    visual: "shs",
    accent: "#fb923c",
  },
  {
    id: 6,
    title: "Driver Pulse",
    tagline: "Real-time safety and earnings coach for Uber drivers",
    description:
      "Edge-first system that turns raw phone sensor data into actionable safety alerts and earnings coaching for ride-hailing drivers — in real time, with no extra hardware. Presented to UBER Engineers at the Banglore Office.",
    demoLink: "https://driver-pulse-seven.vercel.app/",
    githubLink: "https://github.com/HansujaB/Driver-pulse-uber",
    tags: ["AI/ML", "JS/TS"],
    technologies: ["React", "FastAPI", "Real-time Analytics", "Edge Computing"],
    visual: "driver",
    accent: "#f43f5e",
  },
];

/* ─────────────────────────────────────────────
   INTERSECTION OBSERVER HOOK
───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   VISUAL: AgRe-CLI Terminal
───────────────────────────────────────────── */
function TerminalVisual({ hovered, accent }) {
  const lines = [
    { text: "$ npx agre-cli init", delay: 0 },
    { text: "Scanning routes...", delay: 600 },
    { text: "Generating llms.txt...", delay: 1100 },
    { text: "Patching robots.txt...", delay: 1600 },
    { text: "", delay: 2000 },
    { text: "Crawlability Score", delay: 2100 },
    { text: "94 / 100  Grade: A+", delay: 2400, highlight: true },
    { text: "8 frameworks detected", delay: 2800 },
  ];
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!hovered) { setVisibleCount(0); return; }
    lines.forEach((l, i) => {
      setTimeout(() => setVisibleCount(c => Math.max(c, i + 1)), l.delay);
    });
  }, [hovered]);

  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 240,
      background: "#0d0d0d",
      borderRadius: 14,
      padding: "20px 22px",
      fontFamily: "JetBrains Mono, monospace",
      fontSize: 12.5,
      overflow: "hidden",
      position: "relative",
    }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 16, alignItems: "center" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca41" }} />
        <span style={{ marginLeft: 10, color: "#555", fontSize: 11 }}>agre-cli — zsh</span>
      </div>
      {lines.slice(0, visibleCount).map((l, i) => (
        <div key={i} style={{
          color: l.highlight ? accent : l.text.startsWith("$") ? "#e2e8f0" : l.text.includes("...") ? "#86efac" : "#6b7280",
          marginBottom: 4, lineHeight: 1.6,
          fontWeight: l.highlight ? 700 : 400,
        }}>
          {l.text || "\u00A0"}
          {i === visibleCount - 1 && hovered && (
            <span style={{
              display: "inline-block", width: 7, height: 13,
              background: accent, marginLeft: 2, verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }} />
          )}
        </div>
      ))}
      <div style={{
        position: "absolute", bottom: 16, right: 16,
        background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)",
        borderRadius: 8, padding: "4px 10px",
        fontSize: 10, color: accent, fontWeight: 700, letterSpacing: "0.08em",
      }}>Agent Ready in a few commands</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: SprintLens DORA Metrics
───────────────────────────────────────────── */
function SprintVisual({ hovered, accent }) {
  const metrics = [
    { label: "Deploy Freq", value: 87, unit: "/wk" },
    { label: "Lead Time", value: 62, unit: "hrs" },
    { label: "MTTR", value: 44, unit: "min" },
    { label: "Change Fail", value: 8, unit: "%" },
  ];
  const sources = ["GitHub", "Linear", "Sentry", "PagerDuty"];
  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 240,
      background: "#0d0d0d", borderRadius: 14,
      padding: "20px 22px", fontFamily: "JetBrains Mono, monospace", overflow: "hidden",
    }}>
      <div style={{ fontSize: 11, color: "#555", marginBottom: 14, letterSpacing: "0.1em" }}>DORA METRICS | SPRINT 42</div>
      {metrics.map((m, i) => (
        <div key={m.label} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#a1a1aa", marginBottom: 4 }}>
            <span>{m.label}</span>
            <span style={{ color: accent, fontWeight: 700 }}>{m.value}{m.unit}</span>
          </div>
          <div style={{ height: 5, background: "#1e1e1e", borderRadius: 99, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: hovered ? m.value + "%" : "0%",
              background: "linear-gradient(90deg," + accent + "88," + accent + ")",
              borderRadius: 99,
              transition: "width 0.7s cubic-bezier(0.4,0,0.2,1) " + (i * 120) + "ms",
            }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 18, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {sources.map(s => (
          <span key={s} style={{
            fontSize: 10, padding: "3px 8px",
            background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)",
            borderRadius: 99, color: accent, fontWeight: 600,
          }}>{s}</span>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 10, color: "#555" }}>Analysis in under 60s | No backend | No dashboard</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: CareLoop Memory Graph
───────────────────────────────────────────── */
function CareLoopVisual({ hovered, accent }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!hovered) { setStep(0); return; }
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 900);
    const t3 = setTimeout(() => setStep(3), 1600);
    const t4 = setTimeout(() => setStep(4), 2400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [hovered]);

  const memories = [
    { icon: "🌿", label: "No peanuts" },
    { icon: "💊", label: "Metformin 8am" },
    { icon: "📅", label: "Nap at 2pm" },
    { icon: "🎙", label: "Voice note added" },
  ];

  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 260,
      background: "#060d0a",
      borderRadius: 14,
      padding: "18px 16px",
      fontFamily: "JetBrains Mono, monospace",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Header */}
      <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", marginBottom: 14 }}>
        CARELOOP · MEMORY FLOW
      </div>

      {/* 3-column flow */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>

        {/* PARENT */}
        <div style={{
          flex: 1,
          background: "#0f1a13",
          border: `1px solid ${step >= 1 ? accent + "55" : "#1a1a1a"}`,
          borderRadius: 10, padding: "10px 8px",
          textAlign: "center",
          transition: "all 0.4s ease",
          boxShadow: step >= 1 ? `0 0 16px ${accent}22` : "none",
        }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>👩</div>
          <div style={{ fontSize: 9, color: accent, fontWeight: 700 }}>PARENT</div>
          <div style={{ fontSize: 8, color: "#555", marginTop: 4, lineHeight: 1.4 }}>adds info once</div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{
            fontSize: 10, color: step >= 2 ? accent : "#333",
            transition: "color 0.4s ease",
          }}>→</div>
          <div style={{ fontSize: 7, color: "#444", lineHeight: 1.2, textAlign: "center" }}>
            voice<br/>OCR
          </div>
        </div>

        {/* AI MEMORY */}
        <div style={{
          flex: "0 0 72px",
          background: step >= 2 ? accent + "12" : "#0f1a13",
          border: `1.5px solid ${step >= 2 ? accent + "88" : "#1a1a1a"}`,
          borderRadius: 12, padding: "10px 4px",
          textAlign: "center",
          transition: "all 0.5s ease",
          boxShadow: step >= 2 ? `0 0 24px ${accent}33` : "none",
        }}>
          <div style={{ fontSize: 22, marginBottom: 4 }}>🧠</div>
          <div style={{ fontSize: 8, color: accent, fontWeight: 700 }}>MEM0</div>
          <div style={{ fontSize: 7, color: "#555", marginTop: 2 }}>semantic</div>
        </div>

        {/* Arrow 2 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{
            fontSize: 10, color: step >= 3 ? accent : "#333",
            transition: "color 0.4s ease",
          }}>→</div>
          <div style={{ fontSize: 7, color: "#444", lineHeight: 1.2, textAlign: "center" }}>
            AI<br/>brief
          </div>
        </div>

        {/* CAREGIVER */}
        <div style={{
          flex: 1,
          background: step >= 3 ? "#0a1218" : "#0a0a0a",
          border: `1px solid ${step >= 3 ? "#60a5fa55" : "#1a1a1a"}`,
          borderRadius: 10, padding: "10px 8px",
          textAlign: "center",
          transition: "all 0.4s ease",
          boxShadow: step >= 3 ? "0 0 16px rgba(96,165,250,0.15)" : "none",
        }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>🤝</div>
          <div style={{ fontSize: 9, color: "#60a5fa", fontWeight: 700 }}>CAREGIVER</div>
          <div style={{ fontSize: 8, color: "#555", marginTop: 4, lineHeight: 1.4 }}>gets briefed instantly</div>
        </div>
      </div>

      {/* Memory chips — appear one by one */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 8, color: "#555", marginBottom: 6, letterSpacing: "0.08em" }}>STORED MEMORIES</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {memories.map((m, i) => (
            <div key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "3px 8px",
              background: step >= 2 && i < step ? accent + "12" : "#111",
              border: `1px solid ${step >= 2 && i < step ? accent + "44" : "#1e1e1e"}`,
              borderRadius: 6,
              fontSize: 9, color: step >= 2 && i < step ? accent : "#444",
              opacity: step >= 2 && i < step ? 1 : 0.3,
              transition: `all 0.35s ease ${i * 120}ms`,
            }}>
              <span>{m.icon}</span> {m.label}
            </div>
          ))}
        </div>
      </div>

      {/* The key insight — no repeated Qs */}
      <div style={{
        background: step >= 4 ? accent + "0e" : "#0a0a0a",
        border: `1px solid ${step >= 4 ? accent + "44" : "#1a1a1a"}`,
        borderRadius: 8, padding: "7px 10px",
        transition: "all 0.5s ease",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontSize: 12 }}>{step >= 4 ? "✅" : "⏳"}</span>
        <span style={{ fontSize: 9, color: step >= 4 ? "#e2e8f0" : "#444", lineHeight: 1.4, transition: "color 0.4s" }}>
          {step >= 4
            ? "Caregiver never asks parents the same question twice"
            : "Building care memory..."}
        </span>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────
   VISUAL: RAG Vector Search
───────────────────────────────────────────── */
function RAGVisual({ hovered, accent }) {
  const docs = ["Q1 Report", "Research.pdf", "Contracts", "Meeting Notes", "Tech Spec"];
  const bars = [0.92, 0.78, 0.65, 0.51, 0.39];
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!hovered) { setStep(0); return; }
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 900);
    const t3 = setTimeout(() => setStep(3), 1500);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [hovered]);

  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 240,
      background: "#0d0a06", borderRadius: 14,
      padding: "18px 20px", fontFamily: "JetBrains Mono, monospace", overflow: "hidden",
    }}>
      <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", marginBottom: 12 }}>FAISS VECTOR SEARCH</div>
      <div style={{
        background: "#1a1208", border: "1px solid " + (step >= 1 ? accent + "55" : "#222"),
        borderRadius: 8, padding: "6px 12px",
        fontSize: 11, color: step >= 1 ? accent : "#555",
        marginBottom: 12, transition: "all 0.4s ease",
      }}>
        {step >= 1 ? 'Query: "What were Q1 risks?"' : "Awaiting query..."}
      </div>
      <div style={{ fontSize: 10, color: "#555", marginBottom: 8 }}>Retrieved chunks:</div>
      {docs.map((d, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 8, marginBottom: 5,
          opacity: step >= 2 ? 1 : 0.2,
          transition: "opacity 0.4s ease " + (i * 80) + "ms",
        }}>
          <span style={{ fontSize: 10, color: "#a1a1aa", flex: 1 }}>📄 {d}</span>
          <div style={{ width: 60, height: 4, background: "#1e1e1e", borderRadius: 99, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: step >= 2 ? (bars[i] * 100) + "%" : "0%",
              background: "linear-gradient(90deg," + accent + "88," + accent + ")",
              borderRadius: 99, transition: "width 0.5s ease " + (i * 80) + "ms",
            }} />
          </div>
          <span style={{ fontSize: 10, color: accent, width: 32, textAlign: "right" }}>
            {step >= 2 ? bars[i].toFixed(2) : "--"}
          </span>
        </div>
      ))}
      <div style={{
        marginTop: 10, background: "#111",
        border: "1px solid " + (step >= 3 ? accent + "44" : "#1a1a1a"),
        borderRadius: 8, padding: "6px 10px",
        fontSize: 10, color: step >= 3 ? "#e2e8f0" : "#444",
        transition: "all 0.5s ease", lineHeight: 1.5,
      }}>
        {step >= 3
          ? "LLM: Q1 risks — supply chain (92%) and regulatory uncertainty (78%)"
          : "LLM generating answer..."}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: shs-cli Secret Splitting
───────────────────────────────────────────── */
function SHSVisual({ hovered, accent }) {
  const shares = ["S1", "S2", "S3", "S4", "S5"];
  const threshold = 3;
  const hexParts = ["7F3A", "C12E", "04B9", "A8F0", "3391"];
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!hovered) { setStep(0); return; }
    const t1 = setTimeout(() => setStep(1), 200);
    const t2 = setTimeout(() => setStep(2), 900);
    const t3 = setTimeout(() => setStep(3), 1700);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [hovered]);

  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 240,
      background: "#0d0804", borderRadius: 14,
      padding: "18px 20px", fontFamily: "JetBrains Mono, monospace", overflow: "hidden",
    }}>
      <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", marginBottom: 12 }}>
        SHAMIR SECRET SHARING | GF(257)
      </div>
      <div style={{
        textAlign: "center", marginBottom: 14,
        fontSize: 13, color: step >= 1 ? accent : "#555",
        fontWeight: 700, transition: "color 0.4s",
      }}>
        {step >= 1 ? "SECRET SPLIT" : "Secret ready"}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 14 }}>
        {shares.map((s, i) => (
          <div key={s} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            opacity: step >= 2 ? 1 : 0.15,
            transition: "opacity 0.35s ease " + (i * 80) + "ms",
          }}>
            <div style={{
              width: 36, height: 36,
              background: i < threshold ? accent + "22" : "#1a1a1a",
              border: "1px solid " + (i < threshold ? accent + "66" : "#333"),
              borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, color: i < threshold ? accent : "#555",
            }}>{s}</div>
            <span style={{ fontSize: 9, color: "#555" }}>{hexParts[i]}</span>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: 10, color: "#555", textAlign: "center", marginBottom: 10,
        borderTop: "1px solid #1e1e1e", paddingTop: 8,
      }}>
        threshold: {threshold}-of-{shares.length} | Lagrange interpolation
      </div>
      <div style={{
        background: step >= 3 ? accent + "11" : "#111",
        border: "1px solid " + (step >= 3 ? accent + "44" : "#222"),
        borderRadius: 8, padding: "7px 12px",
        fontSize: 10, textAlign: "center",
        color: step >= 3 ? accent : "#444",
        transition: "all 0.5s ease", fontWeight: step >= 3 ? 700 : 400,
      }}>
        {step >= 3 ? "Secret reconstructed | zero unsafe | no deps" : "Awaiting threshold shares..."}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: Driver Pulse Live Dashboard
───────────────────────────────────────────── */
function DriverVisual({ hovered, accent }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!hovered) { setTick(0); return; }
    const id = setInterval(() => setTick(t => t + 1), 800);
    return () => clearInterval(id);
  }, [hovered]);

  const speed = Math.round(28 + Math.sin(tick * 0.7) * 8);
  const accel = (Math.sin(tick * 1.1) * 0.6).toFixed(2);
  const brake = Math.abs(Math.sin(tick * 0.5) * 0.4).toFixed(2);
  const safe = 87 + Math.floor(Math.sin(tick * 0.3) * 5);
  const alert = tick % 5 === 0 && tick > 0;

  const wPoints = Array.from({ length: 20 }, (_, i) => {
    const x = (i / 19) * 100;
    const y = 22 + Math.sin((i + tick) * 0.6) * 14;
    return x + "," + y;
  }).join(" ");

  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 240,
      background: "#0d0108", borderRadius: 14,
      padding: "18px 20px", fontFamily: "JetBrains Mono, monospace", overflow: "hidden",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "center" }}>
        <span style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em" }}>DRIVER PULSE | LIVE</span>
        <span style={{
          fontSize: 10, padding: "2px 8px",
          background: alert ? "rgba(244,63,94,0.2)" : "rgba(52,211,153,0.1)",
          border: "1px solid " + (alert ? "#f43f5e55" : "#34d39955"),
          borderRadius: 99, color: alert ? "#f43f5e" : "#34d399",
          fontWeight: 700, transition: "all 0.3s",
        }}>
          {alert ? "HARD BRAKE" : "SAFE"}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 10 }}>
        <span style={{ fontSize: 32, fontWeight: 800, color: accent, lineHeight: 1 }}>{speed}</span>
        <span style={{ fontSize: 11, color: "#555", marginBottom: 4 }}>mph</span>
        <div style={{ flex: 1 }} />
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, color: "#555" }}>Safety Score</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: safe > 85 ? "#34d399" : "#f59e0b" }}>{safe}</div>
        </div>
      </div>
      <svg width="100%" height="44" viewBox="0 0 100 44" style={{ marginBottom: 10 }}>
        <polyline points={wPoints} fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.7" />
      </svg>
      <div style={{ display: "flex", gap: 8 }}>
        {[{ label: "Accel", value: accel + "g" }, { label: "Brake", value: brake + "g" }, { label: "Edge", value: "5ms" }].map(m => (
          <div key={m.label} style={{
            flex: 1, background: "#111", border: "1px solid #1e1e1e",
            borderRadius: 8, padding: "6px 8px", textAlign: "center",
          }}>
            <div style={{ fontSize: 9, color: "#555" }}>{m.label}</div>
            <div style={{ fontSize: 12, color: accent, fontWeight: 700, marginTop: 2 }}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL SELECTOR
───────────────────────────────────────────── */
function ProjectVisual({ type, hovered, accent }) {
  switch (type) {
    case "terminal": return <TerminalVisual hovered={hovered} accent={accent} />;
    case "sprint":   return <SprintVisual hovered={hovered} accent={accent} />;
    case "careloop": return <CareLoopVisual hovered={hovered} accent={accent} />;
    case "rag":      return <RAGVisual hovered={hovered} accent={accent} />;
    case "shs":      return <SHSVisual hovered={hovered} accent={accent} />;
    case "driver":   return <DriverVisual hovered={hovered} accent={accent} />;
    default:         return null;
  }
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const [cardRef, cardVisible] = useReveal();
  const acc = project.accent;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#111",
        border: "1px solid " + (hovered ? acc + "44" : "#1e1e1e"),
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.35s ease",
        boxShadow: hovered
          ? "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px " + acc + "22"
          : "0 4px 24px rgba(0,0,0,0.2)",
        marginBottom: 28,
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? "translateY(0)" : "translateY(32px)",
        transitionProperty: "opacity, transform, border-color, box-shadow",
        transitionDuration: "0.5s, 0.5s, 0.35s, 0.35s",
      }}
      className="proj-card-grid"
    >
      {/* Visual panel */}
      <div style={{
        position: "relative", background: "#0a0a0a",
        minHeight: 260, display: "flex", alignItems: "stretch",
        padding: 20,
        borderRight: "1px solid " + (hovered ? acc + "22" : "#1a1a1a"),
        transition: "border-color 0.3s ease",
      }}>
        <div style={{ width: "100%", borderRadius: 12, overflow: "hidden" }}>
          <ProjectVisual type={project.visual} hovered={hovered} accent={acc} />
        </div>
        {featured && (
          <div style={{
            position: "absolute", top: 28, left: 28,
            padding: "4px 12px", background: acc, borderRadius: 99,
            fontSize: 10, fontWeight: 700, color: "#000",
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Featured</div>
        )}
      </div>

      {/* Content panel */}
      <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {project.tags.map(t => (
            <span key={t} style={{
              padding: "3px 10px",
              background: acc + "18",
              border: "1px solid " + acc + "33",
              borderRadius: 99, fontSize: 10, color: acc,
              fontFamily: "JetBrains Mono, monospace", fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        <h3 style={{
          fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 800,
          color: "#f4f4f5", marginBottom: 6,
          letterSpacing: "-0.02em", lineHeight: 1.15,
        }}>{project.title}</h3>

        <div style={{
          fontSize: 12, fontFamily: "JetBrains Mono, monospace",
          color: acc, marginBottom: 16, fontWeight: 600, opacity: 0.85,
        }}>
          {project.tagline}
        </div>

        <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.75, marginBottom: 24 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
          {project.technologies.map(t => (
            <span key={t} style={{
              padding: "4px 10px", background: "#1a1a1a",
              border: "1px solid #252525", borderRadius: 99,
              fontSize: 10, fontWeight: 500, color: "#71717a",
              fontFamily: "JetBrains Mono, monospace",
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
            className="btn-outline" style={{ fontSize: 13, padding: "8px 18px" }}>
            <Github size={14} /> GitHub
          </a>
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "8px 18px", background: acc, color: "#000",
                fontWeight: 700, fontSize: 13, borderRadius: 8, border: "none",
                cursor: "pointer", transition: "opacity 0.2s, transform 0.2s",
                textDecoration: "none", fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <Globe size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [headerRef, headerVisible] = useReveal();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.tags.includes(activeFilter));

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section id="projects" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
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
          A collection of projects across AI/ML, web, systems, and more — each with its own interactive preview.
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 52 }}>
        {FILTER_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            style={{
              padding: "8px 20px", borderRadius: 99,
              border: "1px solid " + (activeFilter === tag ? "#6366f1" : "#252525"),
              background: activeFilter === tag ? "rgba(99,102,241,0.18)" : "transparent",
              color: activeFilter === tag ? "#818cf8" : "#71717a",
              fontSize: 13, fontWeight: 500, cursor: "pointer",
              transition: "all 0.2s", fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={e => {
              if (activeFilter !== tag) {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.color = "#a1a1aa";
              }
            }}
            onMouseLeave={e => {
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

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", color: "#71717a", padding: "60px 0" }}>
          No projects found for this filter yet.
        </div>
      ) : (
        <>
          {featured && <ProjectCard project={featured} featured />}
          {rest.length > 0 && rest.map(p => <ProjectCard key={p.id} project={p} />)}
        </>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @media (max-width: 860px) {
          .proj-card-grid { grid-template-columns: 1fr !important; }
          .proj-card-grid > div:first-child {
            min-height: 220px !important;
            border-right: none !important;
            border-bottom: 1px solid #1a1a1a;
          }
        }
        @media (max-width: 480px) {
          .proj-card-grid > div:last-child { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  );
}
