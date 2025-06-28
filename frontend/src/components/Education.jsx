import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUniversity,
  FaChalkboardTeacher,
  FaSchool,
  FaTools,
  FaLaptopCode
} from 'react-icons/fa';

const timeline = [
  {
    year: 'Sep 2023 – Jun 2026',
    title: 'B.Tech in Information Technology (CGPA: 8.6)',
    place: 'JD College of Engineering and Management, Nagpur',
    icon: <FaLaptopCode className="text-indigo-400 text-2xl" />
  },
  {
    year: 'Sep 2020 – Jul 2023',
    title: 'Diploma in Information Technology (77.16%)',
    place: 'Government Polytechnic, Amravati',
    icon: <FaUniversity className="text-purple-400 text-2xl" />
  },
  {
    year: 'Aug 2018 – Jul 2020',
    title: 'ITI in ICT-SM (76%)',
    place: 'Government Industrial Training Institute, Amravati',
    icon: <FaTools className="text-yellow-400 text-2xl" />
  },
  {
    year: '2018',
    title: 'SSC (10th) – 60%',
    place: 'Ganeshdas Rathi Vidyalaya, Amravati',
    icon: <FaSchool className="text-pink-400 text-2xl" />
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block">
          Education
          <span className="block w-16 h-1 bg-indigo-500 mt-2 mx-auto animate-pulse rounded-full"></span>
        </h2>

        <div className="relative border-l border-indigo-500/40 pl-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-2 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-white/10 rounded-full absolute -left-[2.25rem] top-1 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-indigo-300 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.place}</p>
                <span className="text-indigo-400 text-sm">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Floating Icons */}
      <FaGraduationCap className="text-indigo-500 text-4xl absolute top-10 left-10 opacity-10 animate-float" />
      <FaUniversity className="text-purple-400 text-4xl absolute top-1/2 left-6 opacity-10 animate-float-rev" />
      <FaChalkboardTeacher className="text-pink-400 text-5xl absolute bottom-16 right-10 opacity-10 animate-pulse" />
      <FaTools className="text-yellow-300 text-3xl absolute bottom-8 left-20 opacity-10 animate-float-slow" />
    </section>
  );
};

export default Education;
