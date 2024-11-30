import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className="h-screen bg-gradient-to-br from-gray-500 to-purple-500 animate-gradient-x text-white flex items-center justify-center relative pt-24" // Added pt-24 for spacing below the navbar
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg%20xmlns%3d%22http%3a//www.w3.org/2000/svg%22%20viewBox%3d%220%200%20100%20100%22%3e%3cpath%20d%3d%22M0%200h100v100H0z%22%20fill%3d%22none%22%20stroke%3d%22rgba(0%2c0%2c0%2c0.1)%22%20stroke-width%3d%221%22%3e%3c/path%3e%3c/svg%3e')]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

        {/* Content Section */}
        <div className="relative z-20 text-center md:text-left max-w-4xl mx-4 md:mx-16 flex flex-col items-center md:items-start space-y-8">
          <h1 className="text-5xl font-bold text-slate-100">
            Hi, I’m Ayalnesh
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
             Software Engineer
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              href="#projects"
              className="bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all"
            >
              See My Work
            </Link>
          </div>
        </div>

        {/* Interactive Image Section */}
        <div className="absolute bottom-0 right-0">
          <div className="relative group w-56 h-56 md:w-80 md:h-80">
            {/* Profile Image with Hover Effects */}
            <Image
              src="/image/image.png" // Your profile image path
              alt="Ayalnesh's Profile"
              width={200}
              height={200}
              className="w-full h-full rounded-full object-cover border-8 border-white shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6"
            />

            {/* Hover Overlay Content */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-white text-center space-y-4">
                <p className="text-lg font-semibold">Let’s Connect!</p>
                <div className="flex justify-center space-x-4">
                  {/* Interactive Links on Hover */}
                  <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" className="bg-blue-500 p-2 rounded-full hover:bg-blue-700 transition-all">
                    LinkedIn
                  </Link>
                  <Link href="#projects" className="bg-green-500 p-2 rounded-full hover:bg-green-700 transition-all">
                    My Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
