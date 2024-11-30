import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./projects";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <section id="projects" className="container mx-auto p-16">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-100">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer relative"
            >
              {/* Language Tag */}
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold rounded-full px-3 py-1 shadow-md">
                {project.language}
              </span>

              {/* Project Image */}
              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.name} thumbnail`}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}

              {/* Project Name */}
              <h3 className="font-bold text-xl mb-2 text-gray-100">
                {project.name}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 line-clamp-3">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
