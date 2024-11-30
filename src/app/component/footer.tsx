import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
    <div>
      <div className="flex bg-gray-800 p-4 text-gray-100 text-center justify-center space-x-4">
        <p>&copy; {new Date().getFullYear()} Name</p>
        <a href="https://github.com/n" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub size={24} /> {/* GitHub icon */}
        </a>
        <a href="https://www.linkedin.com/in/-b781a5181/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin size={24} /> {/* LinkedIn icon */}
        </a>
      </div>
    </div>
  );
}
