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
    <CardContainer className="inter-var w-full">
      <CardBody className="relative group/card shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0f0d20]/50 dark:border-white/[0.2] border-black/[0.1] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto h-[500px] sm:h-[540px] lg:h-[600px] rounded-xl p-4 sm:p-6 lg:p-8 border flex flex-col">
        {/* Title - Fixed height */}
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-600 dark:text-white h-12 sm:h-14 lg:h-14 flex items-start">
          <span className="line-clamp-2">
            {projectData.title}
          </span>
        </CardItem>
        
        {/* Description - Fixed height */}
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm lg:text-base mt-2 dark:text-neutral-300 h-16 sm:h-16 lg:h-24 overflow-hidden">
          <p className="line-clamp-3 sm:line-clamp-4">
            {projectData.description}
          </p>
        </CardItem>
        
        {/* Image - Fixed height */}
        <CardItem translateZ="100" className="w-full mt-3 sm:mt-4 flex-shrink-0">
          <img
            src={projectData.image}
            height="1000"
            width="1000"
            className="h-40 sm:h-48 lg:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" 
          />
        </CardItem>
       
        {/* Technologies - Fixed height with scrolling if needed */}
        <CardItem translateZ="80" className="mt-3 sm:mt-4 flex-1 flex flex-col justify-start">
          {projectData.technologies && projectData.technologies.length > 0 && (
            <div className="h-16 sm:h-18 lg:h-20 overflow-y-auto">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {projectData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm lg:text-sm rounded-md whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardItem>
       
        {/* Action buttons - Fixed at bottom */}
        <div className="flex justify-between items-center mt-auto pt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={projectData.demoLink}
            target="__blank"
            className="px-4 sm:px-5 lg:px-6 py-2 lg:py-3 rounded-xl text-sm sm:text-sm lg:text-base font-normal dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200">
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={projectData.githubLink}
            target="__blank"
            className="px-4 sm:px-5 lg:px-6 py-2 lg:py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm sm:text-sm lg:text-base font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">
            View Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}