// "use client";
// import { TypewriterEffect } from "./ui/Typewriter-effect";
// import { Github, Linkedin } from "lucide-react";
// export function TypewriterEffectDemo() {
//   const words = [
//     {
//       text: "Hi ,",
//     },
//     {
//       text: "I",
//     },
//     {
//       text: "am",
//     },
//     {
//   text: "Hansuja",
//   className: "text-pink-500 drop-shadow-[0_0_5px_#ff00ff] drop-shadow-[0_0_15px_#ff00ff]"
// },
// {
//   text: "Budhiraja",
//   className: "text-pink-500 drop-shadow-[0_0_5px_#ff00ff] drop-shadow-[0_0_15px_#ff00ff]"
// }
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center h-[35rem] ">
//       <TypewriterEffect words={words} />
//       <p className="text-neutral-600 dark:text-neutral-200 text-lg  m-10">
//         This is my corner away from chaos.
//       </p>
//        <div className="flex space-x-4 mb-10">
//       <a 
//         href="https://github.com/HansujaB" 
//         target="_blank" 
//         rel="noopener noreferrer"
//       >
//         <Github 
//           className="text-white hover:text-purple-700 transition-colors duration-300" 
//           size={40} 
//         />
//       </a>
//       <a 
//         href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//       >
//         <Linkedin 
//           className="text-white hover:text-purple-700 transition-colors duration-300" 
//           size={40} 
//         />
//       </a>
//   </div>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
//   {/* Purple gradient button */}
//   <button
//     className="w-40 h-10 rounded-xl 
//                bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800
//                border border-transparent 
//                text-white text-sm font-medium 
//                shadow-lg shadow-purple-900/50
//                hover:from-purple-600 hover:via-indigo-600 hover:to-purple-700
//                transition-all duration-300">
//     View Projects
//   </button>


//   {/* Outline gradient button */}
//   <button
//     className="w-40 h-10 rounded-xl 
//                bg-transparent 
//                border-2 border-purple-500 
//                text-purple-300 text-sm font-medium
//                shadow-lg shadow-purple-900/40
//                hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 hover:text-white
//                transition-all duration-300">
//     Contact Me
//   </button>
// </div>

//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import { Github, Linkedin, Sparkles, Code, Coffee, Heart } from "lucide-react";

export function TypewriterEffectDemo() {
  const [currentEmoji, setCurrentEmoji] = useState(0);
  const floatingEmojis = ["✨", "🚀", "💻", "🎯", "⚡", "🔥"];

  // Rotate floating emojis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % floatingEmojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const words = [
    { text: "Hi," },
    { text: "I" },
    { text: "am" },
    {
      text: "Hansuja",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
    },
    {
      text: "Budhiraja",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
    }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
          </div>
        ))}
        
        {/* Larger floating emoji */}
        <div 
          className="absolute text-6xl opacity-20 animate-bounce transition-all duration-1000"
          style={{
            right: "10%",
            top: "20%",
            animationDuration: "3s"
          }}
        >
          {floatingEmojis[currentEmoji]}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <TypewriterEffect words={words} />
        
        {/* Animated subtitle with icons */}
        <div className="flex items-center justify-center gap-2 text-neutral-400 dark:text-neutral-300 text-lg m-8">
          <Code className="w-5 h-5 text-purple-400 animate-pulse" />
          <span className="relative">
            This is my corner away from chaos
            <div className="absolute -top-2 -right-8">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: "3s" }} />
            </div>
          </span>
          <Coffee className="w-5 h-5 text-amber-400 animate-bounce" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/HansujaB"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-slate-800 p-3 rounded-full border-2 border-slate-700 group-hover:border-purple-500 transition-all duration-300 transform group-hover:scale-110">
              <Github className="text-white group-hover:text-purple-300 transition-colors duration-300" size={28} />
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-slate-800 p-3 rounded-full border-2 border-slate-700 group-hover:border-blue-500 transition-all duration-300 transform group-hover:scale-110">
              <Linkedin className="text-white group-hover:text-blue-300 transition-colors duration-300" size={28} />
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="group relative overflow-hidden w-44 h-12 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-medium shadow-xl shadow-purple-900/40 hover:shadow-purple-900/60 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Code className="w-4 h-4" />
                View Projects
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-pulse"></div>
              </div>
            </a>

            <a 
              href="#contact"
              className="group relative overflow-hidden w-44 h-12 rounded-xl bg-transparent border-2 border-purple-500 text-purple-300 font-medium shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-800/50 hover:to-indigo-800/50 hover:text-white hover:border-purple-400 flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 group-hover:animate-pulse group-hover:text-pink-400" />
                Contact Me
              </div>
            </a>
          </div>

        {/* Fun Stats or Additional Info */}
        <div className="mt-8 flex justify-center gap-8 text-xs text-neutral-500">
          <div className="flex flex-col items-center">
            <span className="text-purple-400 font-bold text-lg">20+</span>
            <span>Competitons</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-indigo-400 font-bold text-lg">∞</span>
            <span>Ideas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-pink-400 font-bold text-lg">24/7</span>
            <span>Learning</span>
          </div>
        </div>
      </div>
    </div>
  );
}