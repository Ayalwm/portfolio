'use client';
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <div className="w-20 h-0.5 bg-gray-700 mx-auto"></div>
        </div>

        {/* Bio */}
        <div className="mb-16">
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a Software Engineering student at Bahir Dar University and an intern at{' '}
              <a href="https://simtrak.in/" className="text-blue-400 hover:underline" target="_blank">
                Simtrak Solutions
              </a>.
            </p>
            <p>
              I build practical solutions with modern technologies, focusing on clean code and user experience.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-blue-400 mb-6">Experience</h2>
          <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-400 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/image/simtrak.png" 
                  alt="Simtrak" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">SDE Intern</h3>
                <p className="text-gray-400 text-sm mb-3">Simtrak Solutions • Oct 2024 - Present</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Developed React applications with responsive UI</li>
                  <li>• Built APIs using FastAPI</li>
                  <li>• Collaborated with cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-light text-blue-400 mb-6">Education</h2>
          <div className="border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium">Bahir Dar University</h3>
            <p className="text-gray-400 text-sm mb-3">BSc in Software Engineering • Expected 2026</p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default About;