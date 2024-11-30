'use client';
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      question: "About Me",
      answer: (
        <>
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
        </>
      ),
    },
    {
      question: "My Journey",
      answer:
        "I started my journey with web development through HTML, CSS, and JavaScript. Over time, I’ve expanded my skill set to work with modern frameworks like React and Vue.",
    },
    {
      question: "My Goals",
      answer:
        "I’m always learning and seeking new challenges. I aim to work on projects that blend technology and creativity to improve user experiences and solve complex problems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <section className="container mx-auto px-4 space-y-12">
        <h2 className="mt-20 text-4xl font-extrabold text-center text-gray-100"></h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div
                className="flex justify-between items-center p-5 cursor-pointer border-b border-gray-700"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold">{section.question}</h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-blue-400" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 p-5" : "max-h-0"
                }`}
              >
                <p className="text-base text-gray-300">{section.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
