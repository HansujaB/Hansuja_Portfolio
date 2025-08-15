"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
export function ThreeDCardDemo({ project }) {
  const projectData = project || {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    technologies: [],
    demoLink: "#",
    githubLink: "#"
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0f0d20]/50  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {projectData.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {projectData.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={projectData.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        
        {/* Add technologies if they exist */}
        {projectData.technologies && projectData.technologies.length > 0 && (
          <CardItem translateZ="80" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {projectData.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
        )}
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={projectData.demoLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={projectData.githubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            View Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}