import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// Impor Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Impor semua foto tim dari folder assets
import foto1 from '../assets/team/foto1.png';
import foto2 from '../assets/team/foto2.png';
import foto3 from '../assets/team/foto3.png';
import foto4 from '../assets/team/foto4.png';
import foto5 from '../assets/team/foto5.png';
import foto6 from '../assets/team/foto6.png';
import foto7 from '../assets/team/foto7.png';
import foto8 from '../assets/team/foto8.png';
import foto9 from '../assets/team/foto9.png';
import foto10 from '../assets/team/foto10.png';
import foto11 from '../assets/team/foto11.png';
import foto12 from '../assets/team/foto12.png';
import foto13 from '../assets/team/foto13.png';
import foto14 from '../assets/team/foto14.png';
import foto15 from '../assets/team/foto15.png';


// Data anggota tim
const teamMembers = [
  { id: 1, name: 'Tantan Taufik, SE', role: 'Ahli PBB dan Bangunan', image: foto1, bgColor: 'bg-red-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 2, name: 'Surya Adi Pratama, M. Ec, Dev', role: 'Ahli Pajak dan Bangunan', image: foto2, bgColor: 'bg-blue-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 3, name: 'Iman Rosmana, ST', role: 'Ahli PBB dan Bangunan', image: foto3, bgColor: 'bg-green-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 4, name: 'Muhammad Yasin, ST', role: 'Ahli Survey dan Pemetaan', image: foto4, bgColor: 'bg-red-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 5, name: 'Seniarwan, S.P., M.Si', role: 'Ahli Pajak dan Keuangan', image: foto5, bgColor: 'bg-blue-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 6, name: 'Armansyah, ST', role: 'Ahli Survey dan Pemetaan', image: foto6, bgColor: 'bg-green-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 7, name: 'Arifin Permana, ST', role: 'Ahli Pajak dan Penilaian Properti', image: foto7, bgColor: 'bg-gray-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 8, name: 'Nasrullah, SP', role: 'Ahli Pajak dan Bangunan', image: foto8, bgColor: 'bg-blue-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 9, name: 'Agung Gunawan, ST', role: 'Ahli PBB dan Penilaian Properti', image: foto9, bgColor: 'bg-blue-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 10, name: 'Argho Mahendra Brata, ST', role: 'Ahli Geodesi', image: foto10, bgColor: 'bg-gray-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 11, name: 'Meet Aliv Ermija, S.Pd', role: 'Ahli Pajak', image: foto11, bgColor: 'bg-red-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 12, name: 'Mabrur, SP', role: 'Ahli Pajak', image: foto12, bgColor: 'bg-blue-100', socials: { linkedin: '#', twitter: '#' } },
  { id: 13, name: 'Jabbar, S.Kom', role: 'Ahli Programer Web Development', image: foto13, bgColor: 'bg-blue-100', socials: { linkedin: '#', github: '#' } },
  { id: 14, name: 'Muh. Handharbeni, S.Kom', role: 'Ahli Programer Web Development', image: foto14, bgColor: 'bg-red-100', socials: { linkedin: '#', github: '#' } },
  { id: 15, name: 'Saichul Huda Romadlon, S.Kom', role: 'Ahli Programer Web Development', image: foto15, bgColor: 'bg-gray-100', socials: { linkedin: '#', github: '#' } },
];


const TeamSection = () => {

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };

  return (
    <div id="team">
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            The Awesome Team
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="pb-16"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  <div className="relative">
                    <div className={`h-48 ${member.bgColor}`}></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    {/* Overlay saat hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                      variants={overlayVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl"><FaLinkedin /></a>
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl"><FaTwitter /></a>
                      {member.socials.github && <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-3xl"><FaGithub /></a>}
                    </motion.div>
                  </div>
                  <div className="p-6 pt-20">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-blue-500 dark:text-blue-400 font-semibold">{member.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default TeamSection;