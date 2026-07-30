import { useRef, useEffect, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

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

const socials = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    handle: "@HansujaB",
    href: "https://github.com/HansujaB",
    color: "#f4f4f5",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    handle: "Hansuja Budhiraja",
    href: "https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/",
    color: "#60a5fa",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    handle: "hansujaigdtuwcseai@gmail.com",
    href: "mailto:hansujaigdtuwcseai@gmail.com",
    color: "#a78bfa",
  },
];

export default function Contact() {
  const [headerRef, headerVisible] = useReveal();
  const [formRef, formVisible]     = useReveal();

  const [formData, setFormData]   = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState("idle"); // idle | submitting | success | error
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/movlbpow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else throw new Error("failed");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "12px 16px",
    background: "#111",
    border: `1px solid ${errors[field] ? "#ef4444" : "#252525"}`,
    borderRadius: 10,
    color: "#f4f4f5",
    fontSize: 14,
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  });

  return (
    <section id="contact" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
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
        <span className="section-label">// contact</span>
        <h2 className="section-title">Let's Talk</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Got an idea, collab, or just want to say hi? I'm always up for a good conversation.
        </p>
      </div>

      <div
        ref={formRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
          opacity: formVisible ? 1 : 0,
          transform: formVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}
        className="contact-grid"
      >
        {/* Left — info + socials */}
        <div>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#f4f4f5",
              letterSpacing: "-0.02em",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            I'm always open to{" "}
            <span style={{ color: "#6366f1" }}>new opportunities</span>
          </h3>
          <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.7, marginBottom: 40 }}>
            Whether it's a project collaboration, a cool hackathon, a research discussion,
            or anything exciting in tech — drop me a message!
          </p>

          {/* Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial(s.label)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "16px 20px",
                  background: hoveredSocial === s.label ? "#1a1a1a" : "#1c1c1c",
                  border: `1px solid ${hoveredSocial === s.label ? "#333" : "#252525"}`,
                  borderRadius: 14,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  transform: hoveredSocial === s.label ? "translateX(4px)" : "translateX(0)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#71717a", marginBottom: 2 }}>{s.label}</p>
                  <p style={{ fontSize: 14, fontWeight: 500, color: hoveredSocial === s.label ? "#f4f4f5" : "#a1a1aa" }}>
                    {s.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Available badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 28,
              padding: "8px 16px",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 99,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                animation: "ping 1.5s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 500 }}>
              Open to opportunities
            </span>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            background: "#1c1c1c",
            border: "1px solid #252525",
            borderRadius: 20,
            padding: "36px 32px",
          }}
        >
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <CheckCircle2 size={48} style={{ color: "#22c55e", margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
                Message sent!
              </h3>
              <p style={{ color: "#71717a", marginBottom: 24 }}>I'll get back to you soon 🙌</p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-outline"
                style={{ fontSize: 13, margin: "0 auto" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#a1a1aa", marginBottom: 8 }}>
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  style={inputStyle("name")}
                  onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? "#ef4444" : "#252525")}
                />
                {errors.name && <p style={{ fontSize: 12, color: "#ef4444", marginTop: 6 }}>{errors.name}</p>}
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#a1a1aa", marginBottom: 8 }}>
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  style={inputStyle("email")}
                  onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? "#ef4444" : "#252525")}
                />
                {errors.email && <p style={{ fontSize: 12, color: "#ef4444", marginTop: 6 }}>{errors.email}</p>}
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#a1a1aa", marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey! I'd love to collaborate on..."
                  style={{ ...inputStyle("message"), resize: "none", lineHeight: 1.6 }}
                  onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                  onBlur={(e) => (e.target.style.borderColor = errors.message ? "#ef4444" : "#252525")}
                />
                {errors.message && <p style={{ fontSize: 12, color: "#ef4444", marginTop: 6 }}>{errors.message}</p>}
              </div>

              {status === "error" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    borderRadius: 10,
                    marginBottom: 16,
                  }}
                >
                  <AlertCircle size={14} style={{ color: "#ef4444" }} />
                  <span style={{ fontSize: 13, color: "#fca5a5" }}>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-accent"
                style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 14, opacity: status === "submitting" ? 0.7 : 1 }}
              >
                {status === "submitting" ? (
                  <>
                    <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                    Sending...
                  </>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: "1px solid #1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#71717a" }}>
          HB<span style={{ color: "#6366f1" }}>.</span>
        </span>
        <p style={{ fontSize: 13, color: "#71717a" }}>
          Built with React + Vite · {new Date().getFullYear()}
        </p>
      </div>

      <style>{`
        @keyframes ping {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}