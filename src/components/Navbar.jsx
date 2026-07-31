import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, ChevronDown, Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  {
    label: "Experience",
    href: "#experience",
    children: [
      { label: "Research",    href: "#research" },
      { label: "Open Source", href: "#opensource" },
    ],
  },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(8,8,8,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #252525" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            {/* Logo */}
            <a
              href="#home"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 18,
                color: "#f4f4f5",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              HB<span style={{ color: "#6366f1" }}>.</span>
            </a>

            {/* Desktop nav */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} style={{ position: "relative" }} ref={dropRef}>
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                      style={{
                        display: "flex", alignItems: "center", gap: 4,
                        padding: "6px 14px", background: "transparent",
                        border: "none", cursor: "pointer",
                        color: dropdownOpen ? "#6366f1" : "#a1a1aa",
                        fontSize: 14, fontWeight: 500,
                        fontFamily: "'Inter', sans-serif",
                        borderRadius: 8,
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        style={{
                          transition: "transform 0.2s",
                          transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {dropdownOpen && (
                      <div
                        style={{
                          position: "absolute", top: "calc(100% + 8px)", left: "50%",
                          transform: "translateX(-50%)",
                          background: "#1a1a1a", border: "1px solid #252525",
                          borderRadius: 12, padding: 6, minWidth: 160,
                          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                        }}
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={handleNavClick}
                            style={{
                              display: "block", padding: "8px 14px",
                              color: "#a1a1aa", textDecoration: "none",
                              fontSize: 14, borderRadius: 8,
                              transition: "all 0.15s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(99,102,241,0.12)";
                              e.currentTarget.style.color = "#818cf8";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#a1a1aa";
                            }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    style={{
                      padding: "6px 14px", color: "#a1a1aa",
                      textDecoration: "none", fontSize: 14, fontWeight: 500,
                      borderRadius: 8, transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f4f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Resume CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
              <a
                href="https://drive.google.com/file/d/1vl6ShhXvit1QNmCbsa_MRvDEJKanT1DD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ padding: "8px 18px", fontSize: 13 }}
              >
                Resume <ExternalLink size={12} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="mobile-nav"
              style={{
                background: "transparent", border: "1px solid #252525",
                borderRadius: 8, padding: 8, cursor: "pointer",
                color: "#f4f4f5", display: "flex", alignItems: "center",
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)",
            display: "flex", flexDirection: "column",
            padding: "80px 24px 40px",
          }}
          className="mobile-nav"
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute", top: 20, right: 20,
              background: "transparent", border: "1px solid #252525",
              borderRadius: 8, padding: 8, cursor: "pointer", color: "#f4f4f5",
            }}
          >
            <X size={20} />
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div style={{ padding: "10px 0", color: "#71717a", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={handleNavClick}
                      style={{
                        display: "block", padding: "10px 16px",
                        color: "#a1a1aa", textDecoration: "none",
                        fontSize: 18, fontWeight: 500, borderRadius: 8,
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  style={{
                    display: "block", padding: "10px 0",
                    color: "#f4f4f5", textDecoration: "none",
                    fontSize: 22, fontWeight: 700, borderBottom: "1px solid #1a1a1a",
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <a
            href="https://drive.google.com/file/d/1bBHzyh357Y8IMnHIVttS8v_jjWWZiun3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
            style={{ marginTop: 32, justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            View Resume <ExternalLink size={14} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  );
}
