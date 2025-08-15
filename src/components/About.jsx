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
          I am currently a second-year undergrad at Indira Gandhi Delhi Technical University for Women. I have explored ML/DL, LangChain, MERN Stack, and DSA in Java. I have participated in over 25+ ideathons and hackathons. 
          I am currently working on my skills in web development and Deep Learning. I am always up for learning new things and exploring new technologies.
          Apart from that, I love to watch movies and explore new places. Right now, I am working on a few personal projects, a research paper, and practicing DSA.
          Connect with me on{" "}
          <a
            href="https://codolio.com/profile/HansujaB"
            className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
          >
            Codilio
          </a>
        </p>
      </div>
    </div>
  );
}
