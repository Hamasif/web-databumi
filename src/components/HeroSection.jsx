import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Fungsi untuk menangani klik dan scroll ke section 'about-us'
  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="home">
      <section className="relative h-screen w-full flex items-center text-white overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/bg.png')` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Kontainer untuk menyamakan alignment dengan Navbar */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Konten yang sudah di-align */}
          <motion.div
            className="max-w-2xl text-left" // Mengatur lebar maksimum untuk teks
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              PT. DATA BUMI <br /> INDONESIA
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl text-gray-200"
              variants={itemVariants}
            >
              We make things easier
            </motion.p>
            <motion.div variants={itemVariants}>
              {/* Menambahkan event onClick pada tombol */}
              <button
                onClick={handleExploreClick}
                className="mt-8 inline-flex items-center px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300"
              >
                Explore
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
