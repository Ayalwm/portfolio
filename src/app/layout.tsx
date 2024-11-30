'use client';
import './globals.css'; // Apply global Tailwind styles
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu visibility

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the menu on click

  return (
    <html lang="en" className="scroll-smooth bg-gray-900">
      <body className="bg-gray-900 text-white font-sans">
        <header className="bg-gray-900 text-white p-4 fixed w-full z-30"> {/* Adjust z-index to ensure the navbar is on top */}
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold">
              <Link href="/">My Portfolio</Link>
            </h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex scroll-smooth space-x-6">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>

            {/* Mobile Navigation (Hamburger Menu) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 text-white w-full absolute top-16 left-0 p-4 transition-all duration-300 ease-in-out">
              <ul className="space-y-4">
                <li><Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              </ul>
            </div>
          )}
        </header>

        <main className="pt-16 min-h-screen">{children}</main> {/* Adjusted margin for header */}
      </body>
    </html>
  );
}
