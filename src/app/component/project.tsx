'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-950 text-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight mb-4">Selected Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-blue-400 font-mono text-sm">0{currentIndex + 1}/0{projects.length}</span>
              <div className="h-px bg-gray-700 flex-1"></div>
            </div>
            
            <h3 className="text-3xl font-medium">{projects[currentIndex].name}</h3>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              {projects[currentIndex].description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-300">
                {projects[currentIndex].language}
              </span>
            </div>
            
            <div className="flex space-x-4 pt-4">
              {projects[currentIndex].link && (
                <Link 
                  href={projects[currentIndex].link} 
                  target="_blank"
                  className="px-6 py-3 bg-transparent border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-white transition-colors"
                >
                  View Project
                </Link>
              )}
            </div>
          </div>

          <div className="relative group">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl border border-gray-800">
              {projects[currentIndex].image && (
                <Image
                  src={projects[currentIndex].image}
                  alt={`${projects[currentIndex].name} thumbnail`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-lg font-medium">{projects[currentIndex].name}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 space-x-4">
          <button 
            onClick={prevProject}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextProject}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-900 opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
}