import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaCodeBranch
} from 'react-icons/fa';

const skills = {
  frontend: {
    items: ['HTML', 'CSS', 'JavaScript', 'React🔥', 'Tailwind CSS'],
    level: 80
  },
  backend: {
    items: ['Node.js🔥', 'Express.js', 'MongoDB', 'MySQL'],
    level: 70
  },
  languages: {
    items: ['C++', 'Java🔥', 'JavaScript'],
    level: 85
  },
  dsa: [
    'Arrays', 'ArrayList', 'Linked Lists', 'Stacks', 'Queues',
    'Trees', 'Binary Trees', 'BSTs', 'Graphs', 'Tries',
    'Sorting Algorithms', 'Bit Manipulation', 'Recursion',
    'Backtracking', 'Divide & Conquer', 'Dynamic Programming',
    'Segment Trees', 'Time & Space Complexity'
  ]
};

const ProgressBar = ({ label, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-semibold text-indigo-300">{label}</span>
      <span className="text-sm text-indigo-400">{level}%</span>
    </div>
    <div className="w-full bg-white/10 h-3 rounded-full">
      <div
        className="h-full bg-indigo-500 rounded-full transition-all duration-500"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ title, items }) => (
  <motion.div
    className="mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-semibold text-indigo-300 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, index) => {
        const isStrong = skill.includes('🔥');
        return (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            className={`${
              isStrong ? 'bg-orange-500/10 border border-orange-400 text-orange-300' : 'bg-indigo-600/10 border border-indigo-500 text-indigo-300'
            } px-4 py-1 rounded-full text-sm shadow-sm transition`}
          >
            {skill}
          </motion.span>
        );
      })}
    </div>
  </motion.div>
);

const Skills = () => {
  const [showDSA, setShowDSA] = useState(false);

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 inline-block relative">
          Skills
          <span className="block w-16 h-1 bg-indigo-500 mt-2 mx-auto animate-pulse rounded-full"></span>
        </h2>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
          <div>
            <ProgressBar label="Frontend" level={skills.frontend.level} />
            <ProgressBar label="Backend" level={skills.backend.level} />
          </div>
          <div>
            <ProgressBar label="Languages" level={skills.languages.level} />
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <SkillCategory title="Frontend" items={skills.frontend.items} />
          <SkillCategory title="Backend" items={skills.backend.items} />
          <SkillCategory title="Languages" items={skills.languages.items} />

          {/* DSA Collapsible */}
          <motion.div
            className="mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-4 flex justify-between items-center">
              DSA Concepts
              <button
                onClick={() => setShowDSA(!showDSA)}
                className="text-sm text-indigo-400 underline hover:text-indigo-300 transition"
              >
                {showDSA ? 'Hide' : 'Show'}
              </button>
            </h3>
            {showDSA && (
              <div className="flex flex-wrap gap-3 mt-3">
                {skills.dsa.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-indigo-600/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500 text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background Floating Icons */}
      <FaReact className="text-blue-400 text-4xl absolute top-10 left-10 opacity-10 animate-float" />
      <FaNodeJs className="text-green-400 text-4xl absolute bottom-16 right-12 opacity-10 animate-float-rev" />
      <FaJs className="text-yellow-400 text-4xl absolute top-1/2 left-4 opacity-10 animate-pulse" />
      <FaDatabase className="text-indigo-300 text-4xl absolute bottom-8 left-20 opacity-10 animate-float-slow" />
      <FaCodeBranch className="text-pink-300 text-4xl absolute top-1/3 right-6 opacity-10 animate-float" />
    </section>
  );
};

export default Skills;
