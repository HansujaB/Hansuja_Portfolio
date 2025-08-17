"use client";
import React, { useState, useEffect } from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import { Github, Linkedin, Sparkles, Code, Coffee, Heart } from "lucide-react";

export function TypewriterEffectDemo() {
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
        
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <a 
              href="#projects"
              className="group relative overflow-hidden w-36 sm:w-44 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-medium text-xs sm:text-base shadow-xl shadow-purple-900/40 hover:shadow-purple-900/60 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">View Projects</span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-pulse"></div>
              </div>
            </a>

            <a 
              href="#contact"
              className="group relative overflow-hidden w-36 sm:w-44 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-transparent border-2 border-purple-500 text-purple-300 font-medium text-xs sm:text-base shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-800/50 hover:to-indigo-800/50 hover:text-white hover:border-purple-400 flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-pulse group-hover:text-pink-400 flex-shrink-0" />
                <span className="whitespace-nowrap">Contact Me</span>
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