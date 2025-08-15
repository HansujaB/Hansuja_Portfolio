"use client";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import { Github, Linkedin } from "lucide-react";
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Hi ,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
  text: "Hansuja",
  className: "text-pink-500 drop-shadow-[0_0_5px_#ff00ff] drop-shadow-[0_0_15px_#ff00ff]"
},
{
  text: "Budhiraja",
  className: "text-pink-500 drop-shadow-[0_0_5px_#ff00ff] drop-shadow-[0_0_15px_#ff00ff]"
}
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[35rem] ">
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-lg  m-10">
        This is my corner away from chaos.
      </p>
       <div className="flex space-x-4 mb-10">
      <a 
        href="https://github.com/HansujaB" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Github 
          className="text-white hover:text-purple-700 transition-colors duration-300" 
          size={40} 
        />
      </a>
      <a 
        href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Linkedin 
          className="text-white hover:text-purple-700 transition-colors duration-300" 
          size={40} 
        />
      </a>
  </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
  {/* Purple gradient button */}
  <button
    className="w-40 h-10 rounded-xl 
               bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800
               border border-transparent 
               text-white text-sm font-medium 
               shadow-lg shadow-purple-900/50
               hover:from-purple-600 hover:via-indigo-600 hover:to-purple-700
               transition-all duration-300">
    View Projects
  </button>


  {/* Outline gradient button */}
  <button
    className="w-40 h-10 rounded-xl 
               bg-transparent 
               border-2 border-purple-500 
               text-purple-300 text-sm font-medium
               shadow-lg shadow-purple-900/40
               hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 hover:text-white
               transition-all duration-300">
    Contact Me
  </button>
</div>

    </div>
  );
}
