import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCertificate, FaRobot, FaJava, FaLaptopCode } from 'react-icons/fa';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Try local server first, then fallback to production
    const fetchCertifications = async () => {
      setLoading(true);
      try {
        // First try local server
        const response = await axios.get('http://localhost:5000/api/certifications');
        setCertifications(response.data);
        setError(null);
        console.log('✅ Certificates loaded from local server:', response.data);
      } catch (localError) {
        console.log('❌ Local server failed, trying production server...');
        try {
          // Fallback to production server
          const response = await axios.get('https://yuvistack.onrender.com/api/certifications');
          setCertifications(response.data);
          setError(null);
          console.log('✅ Certificates loaded from production server:', response.data);
        } catch (prodError) {
          console.error('❌ Both servers failed:', { localError, prodError });
          setError('Failed to load certificates');
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchCertifications();
  }, []);

  return (
    <section
      id="certifications"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Certifications
          <span className="block w-16 h-1 bg-indigo-500 mt-2 mx-auto animate-pulse rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {loading ? (
            <div className="col-span-full text-center py-8">
              <div className="text-indigo-400">Loading certificates...</div>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <div className="text-red-400">{error}</div>
            </div>
          ) : certifications.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <div className="text-gray-400">No certificates found</div>
            </div>
          ) : (
            certifications.map((cert, index) => (
              <motion.div
                key={cert._id}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg transition hover:shadow-indigo-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-indigo-300 mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{cert.provider}</p>
                <a
                  href={`/certificate/${cert._id}`}
                  className="inline-block text-sm text-indigo-400 hover:text-indigo-300 transition underline"
                >
                  View Certificate
                </a>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Background Icons */}
      <FaCertificate className="text-yellow-400 text-5xl absolute top-12 left-8 opacity-10 animate-float" />
      <FaLaptopCode className="text-blue-400 text-5xl absolute bottom-20 right-8 opacity-10 animate-float-rev" />
      <FaJava className="text-red-400 text-4xl absolute top-1/2 left-4 opacity-10 animate-float-slow" />
      <FaRobot className="text-green-400 text-4xl absolute top-1/3 right-6 opacity-10 animate-float" />
    </section>
  );
};

export default Certifications;
