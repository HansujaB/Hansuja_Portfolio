import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function CyberpunkBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-gray-900 to-purple-900/30" />
      
      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 69, 255, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Secondary Grid for Depth */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0px 0px', '-25px -25px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }}
      />

      {/* Large Floating Orb - Top Left */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 69, 255, 0.25) 0%, rgba(139, 69, 255, 0.12) 50%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          x: { duration: 1.2, ease: "easeOut" },
          y: { duration: 1.2, ease: "easeOut" },
          scale: { 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          }
        }}
      />

      {/* Large Floating Orb - Bottom Right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
          scale: [0.8, 1, 0.9],
        }}
        transition={{ 
          x: { duration: 1.5, ease: "easeOut" },
          y: { duration: 1.5, ease: "easeOut" },
          scale: { 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          }
        }}
      />

      {/* Medium Orb - Center Left */}
      <motion.div
        className="absolute top-1/2 left-20 w-64 h-64 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(139, 69, 255, 0.12) 50%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.025 - 100,
          scale: [0.9, 1.2, 0.9],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          x: { duration: 1, ease: "easeOut" },
          y: { duration: 1, ease: "easeOut" },
          scale: { 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Additional Glowing Orbs */}
      <motion.div
        className="absolute top-16 right-1/3 w-48 h-48 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.7, 1.1, 0.8],
          opacity: [0.4, 0.8, 0.5],
          x: mousePosition.x * 0.012,
          y: mousePosition.y * 0.018,
        }}
        transition={{ 
          scale: { 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.1, ease: "easeOut" },
          y: { duration: 1.1, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/2 w-36 h-36 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.6, 1.2, 0.9],
          opacity: [0.3, 0.7, 0.4],
          x: mousePosition.x * -0.018,
          y: mousePosition.y * 0.022,
        }}
        transition={{ 
          scale: { 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 4.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.9, ease: "easeOut" },
          y: { duration: 0.9, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-1/3 left-16 w-28 h-28 rounded-full blur-lg"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.8, 1.3, 0.7],
          opacity: [0.35, 0.75, 0.45],
          x: mousePosition.x * 0.02,
          y: mousePosition.y * -0.012,
        }}
        transition={{ 
          scale: { 
            duration: 5.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3.8, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.2, ease: "easeOut" },
          y: { duration: 1.2, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-2/3 right-20 w-40 h-40 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(219, 39, 119, 0.22) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.9, 1.1, 0.85],
          opacity: [0.4, 0.8, 0.5],
          x: mousePosition.x * -0.015,
          y: mousePosition.y * 0.025,
          rotate: [0, 90, 180]
        }}
        transition={{ 
          scale: { 
            duration: 6.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 4.2, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.3, ease: "easeOut" },
          y: { duration: 1.3, ease: "easeOut" },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/2 w-20 h-20 rounded-full blur-md"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.32) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.5, 1.4, 0.6],
          opacity: [0.3, 0.9, 0.4],
          x: mousePosition.x * 0.025 + 50,
          y: mousePosition.y * -0.02,
        }}
        transition={{ 
          scale: { 
            duration: 4.8, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 h-52 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(139, 69, 255, 0.1) 50%, transparent 100%)'
        }}
        animate={{
          scale: [0.8, 1.15, 0.9],
          opacity: [0.25, 0.6, 0.35],
          x: mousePosition.x * -0.008,
          y: mousePosition.y * 0.015,
        }}
        transition={{ 
          scale: { 
            duration: 8.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 6.2, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.6, ease: "easeOut" },
          y: { duration: 1.6, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-12 left-1/4 w-16 h-16 rounded-full blur-sm"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.4, 1.6, 0.5],
          opacity: [0.4, 1, 0.5],
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.028,
        }}
        transition={{ 
          scale: { 
            duration: 3.2, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 2.8, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.7, ease: "easeOut" },
          y: { duration: 0.7, ease: "easeOut" }
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 69, 255, 0.3) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.5, 1, 0.7],
          opacity: [0.3, 0.8, 0.4],
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.02,
        }}
        transition={{ 
          scale: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full blur-lg"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.8, 1.3, 0.6],
          opacity: [0.4, 0.9, 0.3],
          x: mousePosition.x * -0.025,
          y: mousePosition.y * -0.015,
        }}
        transition={{ 
          scale: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1, ease: "easeOut" },
          y: { duration: 1, ease: "easeOut" }
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0 ? 'rgba(139, 69, 255, 0.6)' : 
                         i % 3 === 1 ? 'rgba(236, 72, 153, 0.6)' : 
                         'rgba(6, 182, 212, 0.6)',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`
            }}
            animate={{
              y: [-20, -120, -20],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
    </div>
  );
}