"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

// CometCard component
const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className = "",
  children
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [`-${translateDepth}px`, `${translateDepth}px`]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-[1000px] ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformStyle: "preserve-3d",
          boxShadow:
            "rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px",
        }}
        initial={{ scale: 1, z: 0 }}
        whileHover={{
          scale: 1.05,
          z: 50,
          transition: { duration: 0.2 },
        }}
        className="relative rounded-2xl">
        {children}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] opacity-60"
          style={{
            background: glareBackground,
            mixBlendMode: "overlay",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

const skills = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "UI/UX Design",
    description: "Figma, Adobe Creative Suite",
    gradient: "from-pink-500 to-fuchsia-500"
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, MongoDB",
    gradient:"from-violet-500 to-purple-600"
  },
  {
    title: "Mobile Development",
    description: "React Native, Flutter",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "DevOps & Cloud",
    description: "AWS, Docker, CI/CD",
    gradient: "from-purple-600 to-indigo-500"
  },
  {
    title: "Data Science",
    description: "Machine Learning, Analytics",
    gradient: "from-fuchsia-500 to-violet-500"
  }
];


// Individual Skill Card Component
const SkillCard = ({ skill }) => {
  return (
    <CometCard className="w-full">
      <div
        className="flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-6 md:p-8"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
          minHeight: "200px",
        }}>
        
        {/* Main Content */}
        <div className="flex flex-col justify-center flex-1 space-y-4">          
          {/* Title */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white font-mono mb-2">
              {skill.title}
            </h3>
            <p className="text-lg text-white opacity-75 font-mono">
              {skill.description}
            </p>
          </div>
          
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 rounded-[16px]`} />
        </div>
      </div>
    </CometCard>
  );
};

// Main Skills Showcase Component
export default function SkillsShowcase() {
  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0,y: -20 }}
          animate={{ opacity: 1,y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 py-4 text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            My Skills
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0,y: 20 }}
              animate={{ opacity: 1,y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: "easeOut"
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}