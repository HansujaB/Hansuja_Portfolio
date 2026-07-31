import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  ArrowDown,
} from "lucide-react";

const ROLES = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Open Source Contributor",
  "UBER SHE++",
];

const SKILLS = [
  "IGDTUW",
  "CSE-AI",
  "ML & DL",
  "MERN Stack",
  "LangChain",
  "Java DSA",
];

const c = {
  bg: "#0a0a0d",
  panel: "#0f0f12",
  border: "#232128",
  text: "#f2efec",
  muted: "#8b8790",
  faint: "#57545c",
  purple: "#9377f5",
  purpleBright: "#b6a3ff",
  amber: "#e2ac5c",
};

export default function HeroAbout() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // FIX: activeTab was missing
  const [activeTab, setActiveTab] = useState("me.jpeg");

  // Better React-based image fallback
  const [imageError, setImageError] = useState(false);

  const ref = useRef(null);

  // Typing animation
  useEffect(() => {
    const full = ROLES[roleIndex];

    let timeout;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => {
        setDisplayed(full.slice(0, displayed.length + 1));
      }, 65);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1700);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Intersection observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "0 24px",
        paddingTop: 80,
        maxWidth: 1220,
        margin: "0 auto",
        background: c.bg,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* ================= LEFT ================= */}

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0)"
              : "translateY(24px)",
            transition:
              "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* whoami */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 22,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: c.faint,
            }}
          >
            <span style={{ color: c.purple }}>~</span>

            <span>whoami</span>

            <span
              style={{
                animation: "blink 1.1s step-end infinite",
                color: c.purple,
              }}
            >
              ▋
            </span>
          </div>

          {/* Name */}

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontOpticalSizing: "auto",
              fontSize: "clamp(2.7rem, 6.4vw, 5rem)",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              marginBottom: 18,
              color: c.text,
            }}
          >
            Hansuja
            <br />

            <span
              style={{
                fontStyle: "italic",
                color: c.purpleBright,
                fontWeight: 500,
              }}
            >
              Budhiraja
            </span>
          </h1>

          {/* Role animation */}

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
              color: c.muted,
              marginBottom: 30,
              minHeight: 24,
            }}
          >
            <span style={{ color: c.purple }}>
              role
            </span>

            <span style={{ color: c.faint }}>.</span>

            <span style={{ color: c.purpleBright }}>
              current
            </span>

            <span style={{ color: c.faint }}>
              () {"->"}{" "}
            </span>

            <span style={{ color: c.amber }}>
              "{displayed}
            </span>

            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: c.amber,
                marginLeft: 1,
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }}
            />

            {displayed.length ===
              ROLES[roleIndex].length &&
              !deleting && (
                <span style={{ color: c.amber }}>
                  "
                </span>
              )}
          </div>

          {/* About */}

          <div
            style={{
              marginBottom: 30,
              maxWidth: 540,
            }}
          >
            <div
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
                fontSize: 12,
                color: c.faint,
                marginBottom: 8,
              }}
            >
              {"/* about */"}
            </div>

            <p
              style={{
                fontSize:
                  "clamp(0.95rem, 1.8vw, 1.05rem)",
                color: c.muted,
                lineHeight: 1.75,
              }}
            >
              Pre-final year at IGDTUW, CSE-AI. I
              like solving problems and building
              things that hold up outside a demo.
              Ping me at 3am — decent odds I'm still
              awake and debugging something.
            </p>
          </div>

          {/* Skills */}

          <div
            style={{
              fontFamily:
                "'JetBrains Mono', monospace",
              fontSize: 13,
              lineHeight: 1.9,
              color: c.faint,
              marginBottom: 40,
              maxWidth: 560,
            }}
          >
            <span style={{ color: c.purple }}>
              const
            </span>{" "}
            skills = [
            {SKILLS.map((skill, index) => (
              <span key={skill}>
                <span style={{ color: c.amber }}>
                  "{skill}"
                </span>

                {index < SKILLS.length - 1
                  ? ", "
                  : ""}
              </span>
            ))}
            ];
          </div>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <a
              href="#projects"
              className="btn-accent"
              style={btnAccent}
            >
              <Code size={16} />
              View Projects
            </a>

            <a
              href="#contact"
              className="btn-outline"
              style={btnOutline}
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          {/* Socials */}

          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/HansujaB"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              aria-label="GitHub"
              onMouseEnter={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  socialHover
                )
              }
              onMouseLeave={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  socialStyle
                )
              }
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              aria-label="LinkedIn"
              onMouseEnter={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  socialHover
                )
              }
              onMouseLeave={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  socialStyle
                )
              }
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:hansujaigdtuwcseai@gmail.com"
              style={socialStyle}
              aria-label="Email"
              onMouseEnter={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  socialHover
                )
              }
              onMouseLeave={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  socialStyle
                )
              }
            >
              <Mail size={18} />
            </a>

            <span
              style={{
                color: c.border,
                fontSize: 16,
              }}
            >
              /
            </span>

            <a
              href="https://codolio.com/profile/HansujaB"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
                fontSize: 12,
                color: c.purple,
                textDecoration: "none",
                borderBottom: `1px solid ${c.purple}44`,
                paddingBottom: 2,
              }}
            >
              coding profiles →
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0)"
              : "translateY(24px)",
            transition:
              "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div
            style={{
              background: c.panel,
              border: `1px solid ${c.border}`,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: `0 40px 80px -40px ${c.purple}33`,
            }}
          >
            {/* Editor header */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${c.border}`,
              }}
            >
              {/* Traffic lights */}

              <div
                style={{
                  display: "flex",
                  gap: 6,
                  padding: "0 14px",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: c.faint,
                      opacity: 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Tabs */}

              {["me.jpeg", "profile.py"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveTab(tab)
                    }
                    style={{
                      fontFamily:
                        "'JetBrains Mono', monospace",
                      fontSize: 12,
                      padding: "12px 16px",

                      background:
                        activeTab === tab
                          ? c.bg
                          : "transparent",

                      color:
                        activeTab === tab
                          ? c.text
                          : c.faint,

                      border: "none",

                      borderRight: `1px solid ${c.border}`,

                      borderTop:
                        activeTab === tab
                          ? `2px solid ${c.amber}`
                          : "2px solid transparent",

                      cursor: "pointer",
                    }}
                  >
                    {tab}
                  </button>
                )
              )}

              <div style={{ flex: 1 }} />

              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#6ee7b7",
                  opacity: 0.7,
                  marginRight: 16,
                }}
              />
            </div>

            {/* ================= PHOTO TAB ================= */}

            {activeTab === "me.jpeg" && (
              <div>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    background: imageError
                      ? c.purple
                      : "#000",
                  }}
                >
                  {!imageError ? (
                    <img
                      src="/IMG_hansuja.jpeg"
                      alt="Hansuja Budhiraja"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={() =>
                        setImageError(true)
                      }
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        fontSize: 64,
                        fontWeight: 700,
                        color: "white",
                        fontFamily:
                          "'Fraunces', serif",
                      }}
                    >
                      H
                    </div>
                  )}
                </div>

                {/* Image status */}

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    padding: "10px 16px",
                    borderTop: `1px solid ${c.border}`,
                    fontFamily:
                      "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: c.faint,
                  }}
                >
                  <span>
                    1600 × 1200 · JPEG
                  </span>

                  <span
                    style={{
                      color: imageError
                        ? c.muted
                        : c.amber,
                    }}
                  >
                    ●{" "}
                    {imageError
                      ? "fallback"
                      : "loaded"}
                  </span>
                </div>
              </div>
            )}

            {/* ================= CODE TAB ================= */}

            {activeTab === "profile.py" && (
              <div
                style={{
                  padding: "20px 0",
                  fontFamily:
                    "'JetBrains Mono', monospace",
                  fontSize: 13.5,
                  lineHeight: 1.85,
                }}
              >
                <CodeLine n={1}>
                  <K>class</K>{" "}
                  <T>Hansuja</T>(
                  <T color={c.purpleBright}>
                    Engineer
                  </T>
                  ):
                </CodeLine>

                <CodeLine n={2}>
                  <Indent />
                  college = <S>"IGDTUW"</S>
                </CodeLine>

                <CodeLine n={3}>
                  <Indent />
                  branch = <S>"CSE-AI"</S>
                </CodeLine>

                <CodeLine n={4}>
                  <Indent />
                  year = <N>3</N>
                </CodeLine>

                <CodeLine n={5}>
                  {" "}
                </CodeLine>

                <CodeLine n={6}>
                  <Indent />
                  <K>def</K>{" "}
                  <T color={c.purpleBright}>
                    status
                  </T>
                  (self):
                </CodeLine>

                <CodeLine n={7}>
                  <Indent />
                  <Indent />
                  <K>return</K>{" "}
                  <S>
                    "shipping something, always"
                  </S>
                </CodeLine>

                <CodeLine n={8}>
                  {" "}
                </CodeLine>

                <CodeLine n={9} muted>
                  <C>{"# >>> "}</C>

                  <span
                    style={{
                      color: c.muted,
                    }}
                  >
                    Hansuja().stats()
                  </span>
                </CodeLine>

                <CodeLine n={10} muted>
                  <span
                    style={{
                      color: c.faint,
                    }}
                  >
                    {"{ "}
                  </span>

                  competitions:{" "}
                  <S>"20+"</S>, ideas:{" "}
                  <S>"∞"</S>, learning:{" "}
                  <S>"24/7"</S>

                  <span
                    style={{
                      color: c.faint,
                    }}
                  >
                    {" }"}
                  </span>
                </CodeLine>
              </div>
            )}
          </div>

          <div
            style={{
              fontFamily:
                "'JetBrains Mono', monospace",
              fontSize: 11.5,
              color: c.faint,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            click a tab to switch files
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          gap: 6,

          color: c.faint,
          textDecoration: "none",

          animation:
            "bounce 2s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontFamily:
              "'JetBrains Mono', monospace",
            letterSpacing: "0.1em",
          }}
        >
          scroll
        </span>

        <ArrowDown size={15} />
      </a>

      {/* CSS */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform:
              translateX(-50%)
              translateY(0);
          }

          50% {
            transform:
              translateX(-50%)
              translateY(8px);
          }
        }

        .hero-grid {
          position: relative;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns:
              1.05fr 0.95fr !important;
          }
        }

        @media (max-width: 899px) {
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

/* ==============================
   Code editor helper components
================================ */

function CodeLine({ n, children, muted }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "0 20px",
        opacity: muted ? 0.75 : 1,
      }}
    >
      <span
        style={{
          width: 22,
          flexShrink: 0,
          color: "#3d3a42",
          userSelect: "none",
          fontSize: 12.5,
        }}
      >
        {n}
      </span>

      <span style={{ color: c.text }}>
        {children}
      </span>
    </div>
  );
}

function Indent() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 20,
      }}
    />
  );
}

function K({ children }) {
  return (
    <span style={{ color: c.purple }}>
      {children}
    </span>
  );
}

// Changed prop from `c` to `color` to avoid confusing
// it with the global `c` theme object.
function T({ children, color = c.text }) {
  return (
    <span style={{ color }}>
      {children}
    </span>
  );
}

function S({ children }) {
  return (
    <span style={{ color: c.amber }}>
      {children}
    </span>
  );
}

function N({ children }) {
  return (
    <span style={{ color: c.purpleBright }}>
      {children}
    </span>
  );
}

function C({ children }) {
  return (
    <span style={{ color: c.faint }}>
      {children}
    </span>
  );
}

/* ==============================
   Styles
================================ */

const socialStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 38,
  height: 38,

  borderRadius: 9,

  border: `1px solid ${c.border}`,

  background: "#111015",

  color: c.muted,

  textDecoration: "none",

  transition: "all 0.2s",
};

const socialHover = {
  ...socialStyle,

  borderColor: c.purple,

  color: c.purpleBright,

  background: `${c.purple}1a`,
};

const btnAccent = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,

  padding: "11px 20px",

  borderRadius: 9,

  fontSize: 14,
  fontWeight: 500,

  background: c.purple,

  color: "#0a0a0d",

  textDecoration: "none",
};

const btnOutline = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,

  padding: "11px 20px",

  borderRadius: 9,

  fontSize: 14,
  fontWeight: 500,

  border: `1px solid ${c.border}`,

  color: c.text,

  textDecoration: "none",
};