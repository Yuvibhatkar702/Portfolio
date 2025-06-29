import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPaperPlane
} from 'react-icons/fa';

const Hero = ({
  name = 'Yuvraj Bhatkar',
  title = 'Full-Stack Developer | DSA & Java Enthusiast',
  typewriterText = ['Web Developer', 'AI/ML Learner', 'Problem Solver'],
  imageUrl = '/src/assets/profile.png',
  resumeUrl = '/Yuvraj_Bhatkar_Resume.pdf',
  githubUrl = 'https://github.com/Yuvibhatkar702',
  linkedinUrl = 'https://www.linkedin.com/in/yuvraj-bhatkar-b50a0327b'
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-20 relative">
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-12 z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Hi, I'm <span className="text-indigo-400">{name}</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-3">
            {title}
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="bg-gray-800 text-indigo-300 font-mono px-4 py-2 rounded-md inline-block mb-6 shadow-md"
          >
            <TypeAnimation
              sequence={typewriterText.flatMap(text => [text, 2000])}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              <FaPaperPlane /> Let’s Connect
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              <FaDownload /> View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl text-white hover:text-indigo-400 transition transform hover:scale-125" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl text-blue-400 hover:text-indigo-500 transition transform hover:scale-125" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Image + Icons) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 transform rotate-3">
            <div className="absolute inset-0 border-4 border-indigo-400 rounded-xl rotate-12 z-0"></div>
            <img
              src='/src/assets/profile.jpg'
              alt="Yuvraj Bhatkar"
              className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Floating Tech Icons */}
          <FaReact className="text-blue-500 text-3xl absolute -top-6 left-4 animate-pulse drop-shadow" />
          <FaNodeJs className="text-green-500 text-3xl absolute top-4 -right-6 animate-bounce drop-shadow" />
          <FaDatabase className="text-yellow-500 text-3xl absolute bottom-4 right-4 animate-ping drop-shadow" />
          <FaCode className="text-purple-500 text-3xl absolute -bottom-6 left-8 animate-spin-slow drop-shadow" />
        </motion.div>
      </div>

      {/* Floating Circles */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-20 right-16 w-5 h-5 border border-white rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;
