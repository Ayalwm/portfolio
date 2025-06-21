'use client'
import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gray-950 flex items-center p-6 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.1)_0%,_transparent_70%)]"></div>
      
      {/* Floating image - positioned more intentionally */}
      <div className="absolute right-0 bottom-0 w-1/2 max-w-md h-3/4">
        <div className="relative w-full h-full">
          <Image
            src="/image/profile.png"
            alt="Ayalnesh"
            fill
            className="object-contain object-right-bottom opacity-90 hover:opacity-100 transition-opacity duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-950 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Text content - more prominent */}
      <div className="relative z-10 text-left max-w-2xl mx-8 md:mx-16 lg:mx-24">
        <div className="mb-8">
          <span className="text-blue-400 font-mono">Hello, I'm</span>
          <h1 className="text-5xl md:text-7xl font-light text-white mt-2 mb-4 leading-tight">
            Ayalnesh
          </h1>
          <div className="w-16 h-0.5 bg-gray-600 my-6"></div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-md">
            Software Engineer crafting solutions through code and creativity.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <Link 
            href="#projects"
            className="group flex items-center text-lg text-white hover:text-blue-400 transition-colors"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ayallinked/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-lg text-white hover:text-blue-400 transition-colors"
          >
            Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h4m-4 4h4m6-6a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6h4a6 6 0 016 6v4z" />
            </svg>
          </Link>
          <Link 
            href="https://www.canva.com/design/DAGX9ynHlaI/2JfciXLDi1-t5weUQcXSdg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-lg text-white hover:text-blue-400 transition-colors"
          >
            View Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}