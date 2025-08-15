"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";
import img from './assets/img.jpg';

export function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="opacity-90 w-full max-w-6xl min-h-[28rem] relative overflow-hidden bg-slate-900 flex flex-col lg:flex-row items-center justify-center rounded-xl p-6 sm:p-10 gap-8">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative z-20 flex-shrink-0">
          <div className="w-64 h-80 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600 rounded-full p-1">
            <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-6xl font-bold">
              </div>
              <img 
                src={img} 
                alt="Hansuja" 
                className="w-full h-full object-cover"
              />
             
            </div>
          </div>
        </div>

        <div className="relative z-20 flex-1 text-center lg:text-left">
          <h1 className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600"
          )}>
            Hey there!
          </h1>
          
          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full">
              IGDTUW
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold rounded-full">
              CSE-AI
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
              2nd Year
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
              ML & DL
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
              MERN Stack
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
              LangChain
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full">
              Java DSA
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs font-bold rounded-full">
              20+ Competitions
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 relative z-20 leading-relaxed mb-4">
            I'm a passionate tech enthusiast who loves turning crazy ideas into reality , you can ping me even at 3am I might be awake ;D .
            Currently diving deep into the world of AI and web development, one hackathon at a time.
          </p>

          <p className="text-sm sm:text-base text-neutral-300 relative z-20 leading-relaxed mb-4">
            When I'm not coding, you'll find me binge-watching movies, reading a book or exploring new places. 
            I believe the best learning happens when you step out of your comfort zone!
          </p>

          <p className="text-sm sm:text-base text-neutral-300 relative z-20 leading-relaxed">
            Always excited to collaborate on innovative projects and push the boundaries of what's possible! 
            Want healthy competition? let's connect on{" "}
            <a
              href="https://codolio.com/profile/HansujaB"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
            >
              Codolio ✨
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}