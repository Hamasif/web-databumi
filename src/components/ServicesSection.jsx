import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaMobileAlt, FaGlobe, FaMousePointer, FaPrint } from 'react-icons/fa';
import { IoDuplicateOutline } from "react-icons/io5";

// Impor semua logo mitra dari folder assets
import mitra1 from '../assets/partners/mitra1.png';
import mitra2 from '../assets/partners/mitra2.png';
import mitra3 from '../assets/partners/mitra3.png';
import mitra4 from '../assets/partners/mitra4.png';
import mitra5 from '../assets/partners/mitra5.png';
import mitra6 from '../assets/partners/mitra6.png';
import mitra7 from '../assets/partners/mitra7.png';
import mitra8 from '../assets/partners/mitra8.png';
import mitra9 from '../assets/partners/mitra9.png';
import mitra10 from '../assets/partners/mitra10.png';
import mitra11 from '../assets/partners/mitra11.png';
import mitra12 from '../assets/partners/mitra12.png';
import mitra13 from '../assets/partners/mitra13.png';
import mitra14 from '../assets/partners/mitra14.png';
import mitra15 from '../assets/partners/mitra15.png';
import mitra16 from '../assets/partners/mitra16.png';
import mitra17 from '../assets/partners/mitra17.png';
import mitra18 from '../assets/partners/mitra18.png';
import mitra19 from '../assets/partners/mitra19.png';
import mitra20 from '../assets/partners/mitra20.png';
import mitra21 from '../assets/partners/mitra21.png';
import mitra22 from '../assets/partners/mitra22.png';
import mitra23 from '../assets/partners/mitra23.png';
import mitra24 from '../assets/partners/mitra24.png';
import mitra25 from '../assets/partners/mitra25.png';
import mitra26 from '../assets/partners/mitra26.png';
import mitra27 from '../assets/partners/mitra27.png';
import mitra28 from '../assets/partners/mitra28.png';
import mitra29 from '../assets/partners/mitra29.png';
import mitra30 from '../assets/partners/mitra30.png';
import mitra31 from '../assets/partners/mitra31.png';
import mitra32 from '../assets/partners/mitra32.png';
import mitra33 from '../assets/partners/mitra33.png';
import mitra34 from '../assets/partners/mitra34.png';
import mitra35 from '../assets/partners/mitra35.png';
import mitra36 from '../assets/partners/mitra36.png';


// Data untuk layanan yang ditawarkan
const services = [
  { icon: FaRocket, title: 'UX DESIGN' },
  { icon: IoDuplicateOutline, title: 'INTERFACE DESIGN' },
  { icon: FaMobileAlt, title: 'APP DEVELOPMENT' },
  { icon: FaGlobe, title: 'WEB DEVELOPMENT' },
  { icon: FaMousePointer, title: 'SOFTWARE SOLUTIONS' },
  { icon: FaPrint, title: 'PRINT MEDIA' },
];

// Data untuk logo mitra
const partners = [
  { id: 1, src: mitra1, alt: 'Badan Kab. Pamekasan' },
  { id: 2, src: mitra2, alt: 'Badan Kota Batu' },
  { id: 3, src: mitra3, alt: 'Bank Jatim' },
  { id: 4, src: mitra4, alt: 'Bapenda Kab. Sidoarjo' },
  { id: 5, src: mitra5, alt: 'Bapenda Kab. Barru' },
  { id: 6, src: mitra6, alt: 'Bapenda Kab. Blitar' },
  { id: 7, src: mitra7, alt: 'Bapenda Kab. Sampang' },
  { id: 8, src: mitra8, alt: 'Bapenda Kab. Sumenep' },
  { id: 9, src: mitra9, alt: 'Bapenda Kab. Wajo' },
  { id: 10, src: mitra10, alt: 'Bapenda Kota Parepare' },
  { id: 11, src: mitra11, alt: 'Bapenda Kab. Wakatobi' },
  { id: 12, src: mitra12, alt: 'Bapenda Kab. Lombok Tengah' },
  { id: 13, src: mitra13, alt: 'Bapenda Kab. Pemalang' },
  { id: 14, src: mitra14, alt: 'Bapenda Kab. Luwu Timur' },
  { id: 15, src: mitra15, alt: 'Bapenda Kab. Pinrang' },
  { id: 16, src: mitra16, alt: 'Bapenda Kab. Banyuasin' },
  { id: 17, src: mitra17, alt: 'Bapenda Kab. Gowa' },
  { id: 18, src: mitra18, alt: 'Bapenda Kota Tangerang Selatan' },
  { id: 19, src: mitra19, alt: 'Bapenda Kota Bekasi KASDA' },
  { id: 20, src: mitra20, alt: 'Bapenda Kab. Luwu Utara' },
  { id: 21, src: mitra21, alt: 'Bapenda Kab. Sidrap' },
  { id: 22, src: mitra22, alt: 'Bapenda Kota Palembang' },
  { id: 23, src: mitra23, alt: 'Batu Paradise' },
  { id: 24, src: mitra24, alt: 'Menu Resto' },
  { id: 25, src: mitra25, alt: 'BKD Kab. Lumajang' },
  { id: 26, src: mitra26, alt: 'BPKD Kab. Blitar' },
  { id: 27, src: mitra27, alt: 'BPKAD Kab. Kutai Kartanegara' },
  { id: 28, src: mitra28, alt: 'Bapenda BPKD Kab. Lingga' },
  { id: 29, src: mitra29, alt: 'BPPD Kab. Nunukan' },
  { id: 30, src: mitra30, alt: 'BPPKAD Kab. Karimun' },
  { id: 31, src: mitra31, alt: 'BPPKAD Kota Pare-Pare' },
  { id: 32, src: mitra32, alt: 'BPRD Kota Batam' },
  { id: 33, src: mitra33, alt: 'BPRD Kab. Barru' },
  { id: 34, src: mitra34, alt: 'Dino Park' },
  { id: 35, src: mitra35, alt: 'The House' },
  { id: 36, src: mitra36, alt: 'Pos Indonesia' },
];


const ServiceWeOffer = () => {
  // Varian animasi untuk container (grid)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda antar animasi anak-anaknya
      },
    },
  };

  // Varian animasi untuk item di dalam grid
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  
  // Varian animasi untuk judul
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  return (
    <div id="services">
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- Bagian Layanan --- */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Service We Offer
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-blue-500 dark:bg-blue-700 text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <Icon className="text-4xl sm:text-5xl mb-4" />
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg">{service.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>

          {/* --- Bagian Mitra --- */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mt-20 sm:mt-24 mb-12"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Trusted by Some of Amazing
          </motion.h2>

          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {partners.map((partner) => (
              <motion.div 
                key={partner.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center h-24 sm:h-28 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600"
                variants={itemVariants}
              >
                <img src={partner.src} alt={partner.alt} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ServiceWeOffer;
