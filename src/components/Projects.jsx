import { ThreeDCardDemo } from "./ProjectCard";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2560&auto=format&fit=crop",
    demoLink: "https://demo1.com",
    githubLink: "https://github.com/user/project1",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2560&auto=format&fit=crop",
    demoLink: "https://demo2.com",
    githubLink: "https://github.com/user/project2",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2560&auto=format&fit=crop",
    demoLink: "https://demo3.com",
    githubLink: "https://github.com/user/project3",
    technologies: ["Vue.js", "API Integration", "Charts.js"]
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Dashboard for tracking social media performance metrics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2560&auto=format&fit=crop",
    demoLink: "https://demo4.com",
    githubLink: "https://github.com/user/project4",
    technologies: ["React", "D3.js", "Express.js"]
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description: "Secure mobile banking solution with biometric authentication",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2560&auto=format&fit=crop",
    demoLink: "https://demo5.com",
    githubLink: "https://github.com/user/project5",
    technologies: ["React Native", "Firebase", "Stripe API"]
  }
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = projects.length - 2; // Show 2 cards, so max index is length - 2
        return prev >= maxIndex ? 0 : prev + 1; // Reset to 0 when reaching the end
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    const maxIndex = projects.length - 2; // Show 2 cards, so max index is length - 2
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    const maxIndex = projects.length - 2; // Show 2 cards, so max index is length - 2
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p> */}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group">
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group">
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 50}%)`,
              }}>
              {projects.map((project) => (
                <div key={project.id} className="w-1/2 flex-shrink-0 flex justify-center px-4">
                  <ThreeDCardDemo project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: projects.length - 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              Showing {currentIndex + 1}-{Math.min(currentIndex + 2, projects.length)} of {projects.length}
            </span>
          </div>

          {/* Auto-play Toggle */}
          {/* <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-white text-sm transition-colors">
              {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} Auto-slide
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}