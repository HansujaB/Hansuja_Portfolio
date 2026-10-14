import { useEffect, useRef } from "react";

// A bounded particle pool draws outside React's render cycle.
export default function PixelCursor() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const preference = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let particles = [];
    let frame = 0;
    let lastTime = 0;
    let lastSpawn = 0;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      particles = [];
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
    const draw = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles = particles.filter(p => p.life > 0);
      for (const p of particles) {
        p.life -= delta;
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        context.globalAlpha = Math.max(0, p.life / p.duration);
        context.fillStyle = p.color;
        context.fillRect(Math.round(p.x / 4) * 4, Math.round(p.y / 4) * 4, p.size, p.size);
      }
      context.globalAlpha = 1;
      frame = particles.length ? requestAnimationFrame(draw) : 0;
    };
    const spawn = (event) => {
      if (!preference.matches || event.pointerType === "touch") return;
      const now = performance.now();
      const burst = event.type === "pointerdown";
      if (!burst && now - lastSpawn < 28) return;
      lastSpawn = now;
      for (let i = 0; i < (burst ? 12 : 1); i++) {
        const angle = Math.random() * Math.PI * 2;
        particles.push({ x: event.clientX + (burst ? 0 : 12), y: event.clientY + (burst ? 0 : 12), vx: burst ? Math.cos(angle) * 65 : 0, vy: burst ? Math.sin(angle) * 65 : 24, size: burst ? 4 : 6, life: 0.55, duration: 0.55, color: i % 2 ? "#b6a3ff" : "#9377f5" });
      }
      particles = particles.slice(-80);
      if (!frame) { lastTime = now; frame = requestAnimationFrame(draw); }
    };
    const onVisibility = () => { if (document.hidden) clear(); };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", spawn, { passive: true });
    window.addEventListener("pointerdown", spawn, { passive: true });
    window.addEventListener("blur", clear);
    document.documentElement.addEventListener("pointerleave", clear);
    document.addEventListener("visibilitychange", onVisibility);
    preference.addEventListener("change", clear);
    return () => {
      clear();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", spawn);
      window.removeEventListener("pointerdown", spawn);
      window.removeEventListener("blur", clear);
      document.documentElement.removeEventListener("pointerleave", clear);
      document.removeEventListener("visibilitychange", onVisibility);
      preference.removeEventListener("change", clear);
    };
  }, []);
  return <canvas className="pixel-cursor" ref={canvasRef} aria-hidden="true" />;
}
