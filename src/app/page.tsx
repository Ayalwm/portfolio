// src/app/page.tsx

import About from "./component/about";
import Projects from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Hero from "./component/hero";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <section id="about" className="mt-30 text-gray-800">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className=" text-gray-800">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className=" text-gray-800">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
