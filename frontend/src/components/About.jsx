import React from 'react';
import { FaLaptopCode, FaRocket, FaBrain, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          About Me
          <span className="block w-16 h-1 bg-indigo-500 mt-2 mx-auto animate-pulse rounded-full"></span>
        </h2>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-6 md:p-10 text-lg leading-relaxed text-gray-200">
          <p>
            Hello! I'm <strong className="text-indigo-400">Yuvraj Bhatkar</strong>, a passionate Full-Stack Developer skilled in crafting responsive, high-performance web applications using the MERN stack. My journey began with a deep interest in solving real-world problems through code — and it has grown into a mission to create seamless digital experiences.
          </p>

          <p className="mt-6">
            I thrive in environments where I can learn continuously and explore new technologies. I’m particularly focused on mastering data structures and algorithms to write optimized, maintainable code that scales well in production.
          </p>
        </div>

        {/* Mission / Quote Box */}
        <div className="mt-10 max-w-3xl mx-auto text-center relative px-6 py-6 border-l-4 border-indigo-500 bg-white/5 backdrop-blur-md rounded-lg shadow-md">
          <FaQuoteLeft className="absolute top-2 left-4 text-indigo-400 text-2xl opacity-30" />
          <p className="text-xl italic text-indigo-200">
            “Code is not just syntax — it’s how I build, learn, and help solve real-world problems.”
          </p>
          <span className="block mt-4 text-sm text-indigo-400">— Yuvraj Bhatkar</span>
        </div>
      </div>

      {/* Floating Icons */}
      <FaLaptopCode className="text-indigo-400 text-3xl absolute top-10 left-10 animate-bounce-slow opacity-20" />
      <FaRocket className="text-purple-400 text-3xl absolute bottom-16 right-12 animate-ping-slow opacity-20" />
      <FaBrain className="text-yellow-300 text-3xl absolute top-1/2 right-1/4 animate-float-slow opacity-20" />
    </section>
  );
};

export default About;
