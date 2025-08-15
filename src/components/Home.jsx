import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function CyberpunkBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [particleData] = useState(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 6 + 3,
      height: Math.random() * 6 + 3,
      xMovement: Math.random() * 80 - 40,
      shadowBlur: Math.random() * 15 + 8,
      duration: Math.random() * 6 + 4.5,
      delay: Math.random() * 4.5,
      color: i % 3 === 0 ? 'rgba(139, 69, 255, 0.8)' : 
             i % 3 === 1 ? 'rgba(236, 72, 153, 0.8)' : 
             'rgba(6, 182, 212, 0.8)'
    }))
  );

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
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 via-gray-900 to-purple-900/40" />
      
      {/* Primary Grid for Depth */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 12, // Increased from 8
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 69, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Secondary Grid for Depth - Slower */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        animate={{
          backgroundPosition: ['0px 0px', '-25px -25px'],
        }}
        transition={{
          duration: 18, // Increased from 12
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }}
      />

      {/* Large Floating Orb - Top Left */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 69, 255, 0.4) 0%, rgba(139, 69, 255, 0.2) 50%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          x: { duration: 1.2, ease: "easeOut" }, // Increased from 0.8
          y: { duration: 1.2, ease: "easeOut" },
          scale: { 
            duration: 4.5, // Increased from 3
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
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(147, 51, 234, 0.25) 50%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x * -0.04,
          y: mousePosition.y * -0.04,
          scale: [0.8, 1.1, 0.9],
        }}
        transition={{ 
          x: { duration: 1.5, ease: "easeOut" }, // Increased from 1
          y: { duration: 1.5, ease: "easeOut" },
          scale: { 
            duration: 6, // Increased from 4
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          }
        }}
      />

      {/* Medium Orb - Center Left*/}
      <motion.div
        className="absolute top-1/2 left-20 w-80 h-80 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(139, 69, 255, 0.2) 50%, transparent 100%)'
        }}
        animate={{
          x: mousePosition.x * 0.025,
          y: mousePosition.y * 0.035 - 100,
          scale: [0.9, 1.3, 0.9],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          x: { duration: 1.05, ease: "easeOut" }, // Increased from 0.7
          y: { duration: 1.05, ease: "easeOut" },
          scale: { 
            duration: 7.5,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          rotate: {
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Additional Glowing Orbs */}
      <motion.div
        className="absolute top-16 right-1/3 w-60 h-60 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.7, 1.2, 0.8],
          opacity: [0.5, 0.9, 0.6],
          x: mousePosition.x * 0.028,
          y: mousePosition.y * 0.032,
        }}
        transition={{ 
          scale: { 
            duration: 5.25,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3.75,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.9, ease: "easeOut" },
          y: { duration: 0.9, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/2 w-48 h-48 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.6, 1.3, 0.9],
          opacity: [0.4, 0.8, 0.5],
          x: mousePosition.x * -0.035,
          y: mousePosition.y * 0.038,
        }}
        transition={{ 
          scale: { 
            duration: 4.5,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3.3,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.75, ease: "easeOut" },
          y: { duration: 0.75, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-1/3 left-16 w-36 h-36 rounded-full blur-lg"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.8, 1.4, 0.7],
          opacity: [0.4, 0.9, 0.5],
          x: mousePosition.x * 0.04,
          y: mousePosition.y * -0.025,
        }}
        transition={{ 
          scale: { 
            duration: 4.2,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 2.85,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.05, ease: "easeOut" },
          y: { duration: 1.05, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-2/3 right-20 w-52 h-52 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(219, 39, 119, 0.38) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.9, 1.2, 0.85],
          opacity: [0.5, 0.9, 0.6],
          x: mousePosition.x * -0.03,
          y: mousePosition.y * 0.04,
          rotate: [0, 90, 180]
        }}
        transition={{ 
          scale: { 
            duration: 4.8,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3.15,
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.2, ease: "easeOut" },
          y: { duration: 1.2, ease: "easeOut" },
          rotate: {
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/2 w-28 h-28 rounded-full blur-md"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.5) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.5, 1.5, 0.6],
          opacity: [0.4, 1, 0.5],
          x: mousePosition.x * 0.045 + 50,
          y: mousePosition.y * -0.035,
        }}
        transition={{ 
          scale: { 
            duration: 3.6, // Increased from 2.4
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 2.7, // Increased from 1.8
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.6, ease: "easeOut" }, // Increased from 0.4
          y: { duration: 0.6, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.32) 0%, rgba(139, 69, 255, 0.18) 50%, transparent 100%)'
        }}
        animate={{
          scale: [0.8, 1.25, 0.9],
          opacity: [0.3, 0.7, 0.4],
          x: mousePosition.x * -0.02,
          y: mousePosition.y * 0.03,
        }}
        transition={{ 
          scale: { 
            duration: 6.3, // Increased from 4.2
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 4.65, // Increased from 3.1
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 1.35, ease: "easeOut" }, // Increased from 0.9
          y: { duration: 1.35, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-12 left-1/4 w-24 h-24 rounded-full blur-sm"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.6) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.4, 1.8, 0.5],
          opacity: [0.5, 1, 0.6],
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.048,
        }}
        transition={{ 
          scale: { 
            duration: 2.4, // Increased from 1.6
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 2.1, // Increased from 1.4
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.45, ease: "easeOut" }, // Increased from 0.3
          y: { duration: 0.45, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-44 h-44 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 69, 255, 0.5) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.5, 1.1, 0.7],
          opacity: [0.4, 0.9, 0.5],
          x: mousePosition.x * 0.042,
          y: mousePosition.y * 0.038,
        }}
        transition={{ 
          scale: { 
            duration: 3, // Increased from 2
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 2.25, // Increased from 1.5
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.6, ease: "easeOut" }, // Increased from 0.4
          y: { duration: 0.6, ease: "easeOut" }
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full blur-lg"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.55) 0%, transparent 70%)'
        }}
        animate={{
          scale: [0.8, 1.4, 0.6],
          opacity: [0.5, 1, 0.4],
          x: mousePosition.x * -0.04,
          y: mousePosition.y * -0.03,
        }}
        transition={{ 
          scale: { 
            duration: 3.75, // Increased from 2.5
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          opacity: { 
            duration: 3, // Increased from 2
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
          },
          x: { duration: 0.75, ease: "easeOut" }, // Increased from 0.5
          y: { duration: 0.75, ease: "easeOut" }
        }}
      />

      {/* Floating Particles - NO ROTATION */}
      <div className="absolute inset-0 pointer-events-none">
        {particleData.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.shadowBlur}px currentColor`
            }}
            animate={{
              y: [-20, -150, -20],
              x: [0, particle.xMovement, 0],
              opacity: [0, 1, 0.9, 0],
              scale: [0, 1.2, 0.8, 0]
              // No rotation to prevent any cursor-related effects
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-8 mix-blend-overlay"
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