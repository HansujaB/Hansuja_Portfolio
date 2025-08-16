import { ThreeDCardDemo } from "./ProjectCard";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "FinBuddy",
    description: "FinBuddy is a modern FinTech web application developed during a Google Developer Student Clubs (GDSC) Hackathon.",
    image: "FinBuddy.png",
    demoLink: "https://gdsc-hackk.vercel.app/",
    githubLink: "https://github.com/HansujaB/FinTech-gdsc-Hackathon",
    technologies: ["React.js","Node.js", "Tailwind CSS", "MongoDB","Chart.js"]
  },
  {
    id: 2,
    title: "Hirrd",
    description: "A full-stack job portal for recruiters and candidates , tracks applications and job postings in real time.",
    image: "Hirrd.png",
    demoLink: "hirrd-pi-blond.vercel.app",
    githubLink: "https://github.com/HansujaB/Project_Hirrd",
    technologies: ["React.js", "Tailwind CSS", "Supabase", "Clerk"]
  },
  {
    id: 3,
    title: "SMS Spam Classifier",
    description: "SMS Spam Classifier leverages machine learning and NLP to analyze and predict whether a given SMS message is spam. ",
    image: "SpamClassifier.png",
    demoLink: "https://sms-spam-classifier-n3ea.onrender.com",
    githubLink: "https://github.com/HansujaB/SMS_spam_classifier",
    technologies: ["Stremalit", "Python", "NLP", "Multinomial Naive Bais", "Render"]
  },
  {
    id: 4,
    title: "TinyStories SLM Model",
    description: "This project implements a small language model (SLM) inspired by GPT-2, trained from scratch on the TinyStories dataset to generate stories for 3-4 yr olds. ",
    image: "SLM.png",
    demoLink: "",
    githubLink: "https://github.com/HansujaB/Small-Language-Model-Tiny-Stories",
    technologies: ["Transformers", "Pytorch", "SLM"]
  },
  {
    id: 5,
    title: "Whatsapp Chat Analyzer",
    description: "A powerful tool that extracts and visualizes insights from exported WhatsApp chat data. This project analyzes message trends, identifies the most active users, generates word clouds, performs emoji analysis, and maps user activity across time.",
    image: "WCA.png",
    demoLink: "https://whatsapp-chat-analyser-2nbu.onrender.com",
    githubLink: "https://github.com/HansujaB/Whatsapp-Chat-Analyser",
    technologies: ["Python", "StreamLit","NLP","Matplotlib", "Render"]
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
        const maxIndex = projects.length - 2; 
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    const maxIndex = projects.length - 2; 
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    const maxIndex = projects.length - 2;
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-normal">
            My Projects
          </h1>
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
        </div>
      </div>
    </div>
  );
}