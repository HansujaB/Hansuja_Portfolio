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
    description: "A full-stack job portal for recruiters and candidates, tracks applications and job postings in real time.",
    image: "Hirrd.png",
    demoLink: "hirrd-pi-blond.vercel.app",
    githubLink: "https://github.com/HansujaB/Project_Hirrd",
    technologies: ["React.js", "Tailwind CSS", "Supabase", "Clerk"]
  },
  {
    id: 3,
    title: "SMS Spam Classifier",
    description: "SMS Spam Classifier leverages machine learning and NLP to analyze and predict whether a given SMS message is spam.",
    image: "SpamClassifier.png",
    demoLink: "https://sms-spam-classifier-n3ea.onrender.com",
    githubLink: "https://github.com/HansujaB/SMS_spam_classifier",
    technologies: ["Streamlit", "Python", "NLP", "Multinomial Naive Bayes", "Render"]
  },
  {
    id: 4,
    title: "TinyStories SLM Model",
    description: "This project implements a small language model (SLM) inspired by GPT-2, trained from scratch on the TinyStories dataset to generate stories for 3-4 yr olds.",
    image: "SLM.png",
    demoLink: "",
    githubLink: "https://github.com/HansujaB/Small-Language-Model-Tiny-Stories",
    technologies: ["Transformers", "PyTorch", "SLM"]
  },
  {
    id: 5,
    title: "WhatsApp Chat Analyzer",
    description: "A powerful tool that extracts and visualizes insights from exported WhatsApp chat data. This project analyzes message trends, identifies the most active users, generates word clouds, performs emoji analysis, and maps user activity across time.",
    image: "WCA.png",
    demoLink: "https://whatsapp-chat-analyser-2nbu.onrender.com",
    githubLink: "https://github.com/HansujaB/Whatsapp-Chat-Analyser",
    technologies: ["Python", "Streamlit","NLP","Matplotlib", "Render"]
  }
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(2);

  // Set cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else {
        setCardsPerView(2); // Laptop and above: 2 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = projects.length - cardsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    const maxIndex = projects.length - cardsPerView;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    const maxIndex = projects.length - cardsPerView;
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
  };

  const maxDots = projects.length - cardsPerView + 1;

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-2 sm:mb-2 text-center">
            <h1 className="mb-4 py-4 text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
              My Projects
            </h1>
          </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons - Hide on mobile if only 1 card visible */}
          {cardsPerView > 1 || currentIndex > 0 ? (
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 group ${
                currentIndex === 0 
                  ? 'bg-white/5 cursor-not-allowed' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}>
              <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${
                currentIndex === 0 
                  ? 'text-white/50' 
                  : 'text-white group-hover:scale-110'
              }`} />
            </button>
          ) : null}
          
          {cardsPerView > 1 || currentIndex < projects.length - cardsPerView ? (
            <button
              onClick={goToNext}
              disabled={currentIndex >= projects.length - cardsPerView}
              className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 group ${
                currentIndex >= projects.length - cardsPerView
                  ? 'bg-white/5 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-white/20'
              }`}>
              <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${
                currentIndex >= projects.length - cardsPerView
                  ? 'text-white/50'
                  : 'text-white group-hover:scale-110'
              }`} />
            </button>
          ) : null}

          {/* Cards Container */}
          <div className="overflow-hidden px-8 sm:px-12 lg:px-16">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}>
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={`flex-shrink-0 flex justify-center ${
                    cardsPerView === 1 ? 'w-full' : 'w-1/2'
                  }`}>
                  <ThreeDCardDemo project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          {maxDots > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: maxDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-xs sm:text-sm">
              Showing {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, projects.length)} of {projects.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

