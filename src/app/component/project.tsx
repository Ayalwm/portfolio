'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (direction) => {
    setCurrentIndex((prevIndex) => 
      direction === 'next' 
        ? (prevIndex + 1) % projects.length 
        : (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="p-10">
      <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="container mx-auto px-8 relative z-20">
          <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8">My Projects</h2>

          <div className="relative flex items-center justify-center">
            <button className="absolute left-0 bg-blue-500 text-white rounded-full p-4 hover:bg-blue-600 z-30" onClick={() => handleChange('prev')}>◀</button>

            {/* Carousel Container */}
            <div className="flex justify-center items-center p-5 m-5 relative w-full h-[50vh] md:h-[60vh]">
              {projects.map((project, index) => {
                const position = index === currentIndex ? "center" : (index === (currentIndex + 1) % projects.length ? "right" : (index === (currentIndex - 1 + projects.length) % projects.length ? "left" : "hidden"));
                const isCenter = position === "center";
                const isSide = position === "left" || position === "right";

                return (
                  <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={`absolute transform transition-all duration-700 ${isCenter ? "z-30 scale-120 top-0 hover:scale-105" : isSide ? "z-20 scale-90 top-10" : "hidden"} ${position === "left" ? "translate-x-[-120%]" : ""} ${position === "right" ? "translate-x-[120%]" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                    <div className="w-[50vw] h-[70vh] md:w-[30vw] md:h-[50hv] bg-gray-800 rounded-lg overflow-hidden shadow-xl relative">
                      <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-semibold rounded-full px-3 py-1 shadow-md">{project.language}</span>
                      {project.image && <Image src={project.image} alt={`${project.name} thumbnail`} width={350} height={250} className="w-full h-3/5 object-cover rounded-t-lg" />}
                      <div className="p-4 h-2/5 overflow-auto no-scrollbar">
                        <h3 className="text-2xl font-bold text-blue-300 p-4">{project.name}</h3>
                        <p className="text-gray-300 px-4">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <button className="absolute right-0 bg-blue-500 text-white rounded-full p-4 hover:bg-blue-600 z-30" onClick={() => handleChange('next')}>▶</button>
          </div>
        </div>
      </section>
    </div>
  );
}
