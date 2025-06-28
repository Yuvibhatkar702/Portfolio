import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    year: 'Jan 2024 – Mar 2024',
    title: '🏆 Hackathon Winner',
    role: 'Project: AI-Based E-Health Solution',
    org: 'Inter-College Hackathon',
  },
  {
    year: 'Nov 2023 – Jan 2024',
    title: 'Frontend Developer Intern',
    role: 'UI Development & Integration',
    org: 'EduSkill',
  },
  {
    year: 'Jun 2023 – Jul 2023',
    title: 'Remote Intern – Compiler Tech',
    role: 'C++ Compiler Analysis',
    org: 'Internshala / Compilers Tech'
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
        <div className="border-l-4 border-indigo-500 pl-6">
          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-indigo-500 mb-1">
                <FaBriefcase />
                <span className="text-sm">{item.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
