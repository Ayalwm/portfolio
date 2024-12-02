'use client';
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <section className="container mx-auto px-4 py-12 space-y-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-400">About Me</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all transform hover:scale-105">
            <p className="text-lg text-gray-300">
              I'm currently in my 4th year of Software Engineering at Bahir Dar University, and I also work as an intern at{" "}
              <a
                href="https://simtrak.in/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simtrak Solutions
              </a>
              .<br />
              I’m passionate about solving real-world problems through code. I believe that technology can improve lives and bring meaningful change to the world.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-400">Experience</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex-shrink-0">
              <Image
                src="/path-to-company-logo.png"
                width={200}
                height={200}
                alt="Company Logo"
                className="w-24 h-24 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                SDE Intern
              </h3>
              <p className="text-sm text-gray-400 mb-4">Simtrak Solutions | Oct 2024 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developing React-based software solutions with a focus on creating dynamic and responsive UI/UX designs to enhance user engagement.</li>
                <li>Collaborating in building and integrating APIs using FastAPI to improve functionality and ensure seamless user experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
