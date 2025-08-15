"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="opacity-90 w-full max-w-5xl min-h-[24rem] relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-xl p-6 sm:p-10">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1
          className={cn(
            "text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-white relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-center"
          )}
        >
          About Me
        </h1>
        <p className="w-full sm:w-5/6 text-sm sm:text-base text-center mt-2 text-neutral-300 relative z-20 leading-relaxed">
  I am a 
  <span className="font-bold text-white drop-shadow-[0_0_3px_#ffffff]"> second-year undergraduate student </span>
  at Indira Gandhi Delhi Technical University for Women, pursuing a deep interest in technology and innovation.
  My journey so far has led me to explore 
  <span className="font-bold text-white drop-shadow-[0_0_3px_#ffffff]">Machine Learning, Deep Learning, LangChain, MERN Stack, 
  and Data Structures & Algorithms in Java</span> , enabling me to build both analytical and development skills.
  Over the past year, I have actively participated in 
  <span className="font-bold text-white drop-shadow-[0_0_3px_#ffffff]"> 25+ ideathons and hackathons, </span>
  where I have worked on diverse problem statements, collaborated with talented teams, and honed my ability to deliver impactful solutions under tight deadlines.

  At present, I am expanding my expertise in 
  <span className="font-bold text-white drop-shadow-[0_0_3px_#ffffff]"> web development and deep learning, </span>
   while simultaneously working on several personal projects and contributing to a research paper.
  I have a strong passion for 
  <span className="font-bold text-white drop-shadow-[0_0_3px_#ffffff]"> exploring emerging technologies </span>
  and experimenting with creative approaches to real-world challenges.
  My learning philosophy revolves around curiosity, adaptability, and the belief that growth comes from stepping beyond comfort zones.

  Outside the academic sphere, I enjoy watching movies, exploring new places, and seeking experiences that broaden my perspective.
  I thrive in collaborative environments that challenge me to think differently and push boundaries.

  Connect with me on{" "}
  <a
    href="https://codolio.com/profile/HansujaB"
    className="font-bold text-white drop-shadow-[0_0_3px_#ffffff] hover:text-fuchsia-300 transition-colors"
  >
    Codolio
  </a>.
</p>

      </div>
    </div>
  );
}
