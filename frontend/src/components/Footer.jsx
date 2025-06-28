import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-6 px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://github.com/Yuvibhatkar702"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition transform hover:scale-125"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuvraj-bhatkar-b50a0327b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition transform hover:scale-125"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="yuvibhatkar702@gmail.com"
          className="hover:text-indigo-400 transition transform hover:scale-125"
        >
          <FaEnvelope className="text-xl" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 mb-3">
        © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">Yuvraj Bhatkar</span>. All rights reserved.
      </p>

    </motion.footer>
  );
};

export default Footer;
