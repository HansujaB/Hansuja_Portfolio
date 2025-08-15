"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div
      className="opacity-90 w-4/5 h-96 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-xl">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-2xl text-bold mb-20 text-white relative z-20")}>
        ABOUT ME
      </h1>
      <p className="w-5/6 text-center mt-2 text-neutral-300 relative z-20">
        I am currently second year undergrad at Indira Gandhi Delhi Technical University for women. I have explored ML/DL , Langchain , Mern Stack and DSA in Java. I have participated in over 25+ ideathons and hackathons. 
        I am currenlty working on my skills in web development and Deep Learning. I am always up for learning new things and exploring new technologies.
        Apart from that I love to watch movies and explore new places. Right now I am working on a few personal projects, a research paper and practising DSA.
        Connect with me on <a href="https://codolio.com/profile/HansujaB">Codilio</a>
      </p>
    </div>
    </div>
  );
}
