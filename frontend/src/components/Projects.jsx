import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  FaCode, FaExternalLinkAlt, FaGithub, FaRocket, FaFilePdf, FaReact, FaVuejs
} from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend.onrender.com/api/projects') // 🔁 Update this to your live Render URL
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects
          <span className="block w-16 h-1 bg-indigo-500 mt-2 mx-auto animate-pulse rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600/10 text-indigo-300 text-sm px-3 py-1 rounded-full border border-indigo-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white text-sm transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaRocket /> Live Demo
                  </a>
                )}
                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFilePdf /> Case Study
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="mt-12">
          <a
            href="https://github.com/Yuvibhatkar702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            More Projects →
          </a>
        </div>
      </div>

      {/* Floating Background Icons */}
      <FaCode className="text-indigo-400 text-5xl absolute top-10 left-10 opacity-10 animate-float" />
      <FaVuejs className="text-green-400 text-5xl absolute bottom-16 right-12 opacity-10 animate-float-rev" />
      <FaReact className="text-blue-400 text-5xl absolute top-1/2 left-4 opacity-10 animate-pulse" />
      <FaExternalLinkAlt className="text-pink-400 text-4xl absolute top-1/3 right-6 opacity-10 animate-float-slow" />
    </section>
  );
};

export default Projects;
