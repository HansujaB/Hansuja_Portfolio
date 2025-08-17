import React, { useState, useCallback } from "react";

// Optimized SkillCard with lighter animations
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  const cardStyle = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(20px) scale(1.02)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
    transition: 'transform 0.2s ease-out',
    willChange: 'transform'
  };

  const glareStyle = {
    background: isHovered 
      ? `radial-gradient(circle at ${((mousePos.x + 20) / 40) * 100}% ${((mousePos.y + 20) / 40) * 100}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`
      : 'transparent',
    transition: 'background 0.2s ease-out'
  };

  return (
    <div className="w-full">
      <div
        className="relative cursor-pointer rounded-2xl overflow-hidden group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle}
      >
        {/* Card Background */}
        <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 h-[200px] flex flex-col justify-center">
          
          {/* Gradient Background */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 rounded-2xl`} 
          />
          
          {/* Glare Effect */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none z-10"
            style={glareStyle}
          />
          
          {/* Content */}
          <div className="relative z-20 text-center space-y-4">
            {/* Icon or Number */}
            <div className="flex justify-center mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {index + 1}
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-200">
              {skill.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-200 leading-relaxed">
              {skill.description}
            </p>
          </div>
          
          {/* Hover Border Effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
        </div>
        
        {/* Enhanced Shadow on Hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10 scale-110`} />
      </div>
    </div>
  );
};

const skills = [
  {
    title: "Languages",
    description: "Python, Java, C++",
    gradient: "from-purple-600 to-indigo-500"
  },
  {
    title: "Frontend Development", 
    description: "React.js, TypeScript, JavaScript, Tailwind CSS, Three.js, Motion",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "UI/UX Design",
    description: "Figma, Wix Studio, Prototyping, Canva",
    gradient: "from-pink-500 to-fuchsia-500"
  },
  {
    title: "Backend Development",
    description: "Flask, Node.js, MongoDB, Supabase",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "Version Control & Tools",
    description: "Git, GitHub, Render, Vercel, AWS, Docker, CI/CD, Firebase, Clerk",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "ML/DL",
    description: "LangChain, Scikit-Learn, NumPy, Pandas, TensorFlow, PyTorch, Core ML/DL Algorithms",
    gradient: "from-fuchsia-500 to-violet-500"
  }
];

// Main Skills Showcase Component
export default function SkillsShowcase() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h1 className="mb-4 py-4 text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
              My Skills
            </h1>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <SkillCard skill={skill} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}