import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeDownload = () => {
  return (
    <section
      id="resume"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center"
    >
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Download My Resume</h2>

        <a
          href="/Yuvraj_Bhatkar_Resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaDownload className="animate-bounce" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeDownload;
