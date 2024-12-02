'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-20 z-0"></div>

        {/* Semi-Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="container mx-auto px-8 relative z-20">
          <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-12">
            My Projects
          </h2>

          {/* Carousel Wrapper */}
          <div className="relative flex items-center justify-center">
            {/* Previous Button */}
            <button
              className="absolute left-0 bg-blue-500 text-white rounded-full p-4 hover:bg-blue-600 z-30"
              onClick={handlePrev}
            >
              ◀
            </button>

            {/* Projects */}
            <div className="flex justify-center items-center relative w-full h-[70vh]">
              {projects.map((project, index) => {
                const position =
                  index === currentIndex
                    ? "center"
                    : index === (currentIndex + 1) % projects.length
                    ? "right"
                    : index === (currentIndex - 1 + projects.length) % projects.length
                    ? "left"
                    : "hidden";

                const isCenter = position === "center";
                const isSide = position === "left" || position === "right";

                return (
                  <Link
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute transform transition-all duration-700 ${
                      isCenter
                        ? "z-30 scale-100 top-0"
                        : isSide
                        ? "z-20 scale-90 top-10"
                        : "hidden"
                    } ${position === "left" ? "translate-x-[-70%]" : ""} ${
                      position === "right" ? "translate-x-[70%]" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-[50vw] h-[80vh] md:w-[30vw] bg-gray-800 rounded-lg shadow-xl overflow-hidden relative">
                      {/* Language Tag */}
                      <span className="absolute top-4 right-4 bg-blue-400 text-white text-xs font-semibold rounded-full px-3 py-1 shadow-md">
                        {project.language}
                      </span>

                      {/* Project Image */}
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={`${project.name} thumbnail`}
                          width={400}
                          height={250}
                          className="w-full h-3/5 object-cover rounded-t-lg"
                        />
                      )}

                      {/* Project Name */}
                      <h3 className="text-2xl font-bold text-blue-300 p-4">
                        {project.name}
                      </h3>

                      {/* Project Description */}
                      <p className="text-gray-300 px-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              className="absolute right-0 bg-blue-500 text-white rounded-full p-4 hover:bg-blue-600 z-30"
              onClick={handleNext}
            >
              ▶
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
