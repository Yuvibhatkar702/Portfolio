import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("https://portfolio-2c43.onrender.com/api/contact", formData);
      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <motion.div
        className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Me
          <span className="block w-16 h-1 bg-indigo-500 mt-2 mx-auto animate-pulse rounded-full"></span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
          >
            <FaPaperPlane className="animate-bounce" />
            Send Message
          </button>

          {status && (
            <p className={`mt-4 text-sm text-center ${status.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
