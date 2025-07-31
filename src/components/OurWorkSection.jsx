import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Impor Swiper React components (DIKEMBALIKAN)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Impor Swiper styles (DIKEMBALIKAN)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Impor gambar proyek Anda dari folder assets
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';
import project6 from '../assets/projects/project6.png';
import project7 from '../assets/projects/project7.png';
import project8 from '../assets/projects/project8.png';
import project9 from '../assets/projects/project9.png';
import project10 from '../assets/projects/project10.png';
import project11 from '../assets/projects/project11.png';
import project12 from '../assets/projects/project12.png';

// Ikon untuk tombol close
const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
);

// Data untuk setiap proyek
const projectsData = [
    { id: 1, image: project1, title: 'Sosialisasi e-SPTPO', description: 'Sosialisasi dan Penyuluhan e-SPTPO kepada Badan Pendanaan Daerah Kabupaten Blitar.' },
    { id: 2, image: project2, title: 'Sosialisasi GeoMaps', description: 'Sosialisasi GeoMaps dari PT Data Bumi di Kota Makassar.' },
    { id: 3, image: project3, title: 'HAKI SiPRIDA', description: 'Sertifikat Surat Pencatatan Ciptaan untuk PT DATA BUMI aplikasi SiPRIDA.' },
    { id: 4, image: project4, title: 'Aplikasi Host to Host', description: 'Implementasi sistem pembayaran online H2H yang terintegrasi dengan berbagai Bank Daerah.' },
    { id: 5, image: project5, title: 'HAKI GeoMaps', description: 'Sertifikat Surat Pencatatan Ciptaan untuk PT DATA BUMI aplikasi GeoMaps.' },
    { id: 6, image: project6, title: 'Pelaksanaan Penilaian Individu PBB P2', description: 'Objek Pajak yang pernah kami laksanakan pada kegiatan Penilaian Individual PBB B2 di Kota Lombok.' },
    { id: 7, image: project7, title: 'Pelaksanaan Penilaian Individu PBB P2', description: 'Pelaporan Kegiatan yang pernah kami laksanakan pada kegiatan Penilaian Individual PBB B2.' },
    { id: 8, image: project8, title: 'Pelaksanaan Penilaian Individu PBB P2', description: 'Tim di lapangan  pada kegiatan Penilaian Individual PBB B2.' },
    { id: 9, image: project9, title: 'Pengukuran Bidang BUMI', description: 'Pengukuran bidang BUMI dilakukan oleh TIM lapangan PT DATA BUMI di Kabupaten Blitar.' },
    { id: 10, image: project10, title: 'Survey Zona Nilai Tanah', description: 'Survey zona nilai tanah dilakukan oleh TIM lapangan PT DATA BUMI di Kabupaten Blitar.' },
    { id: 11, image: project11, title: 'Survey Batas Desa', description: 'Survey batas desa dilakukan oleh TIM lapangan PT DATA BUMI dan juga aparat desa di Kabupaten Blitar.' },
    { id: 12, image: project12, title: 'Rapat Koordinasi Sistem Parkir Gate E-parkir', description: 'Rapat koordinasi sitem parkir gate e-parkir dishub di Kota Batu' },
];

const OurWorkSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="our-work">
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                            Our Work
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    </motion.div>

                    {/* Tampilan utama kembali menggunakan Swiper/Slider */}
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
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                            className="pb-12"
                        >
                            {projectsData.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <div
                                        className="group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>
            
            {/* Modal Pop-up Minimalis */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-xl max-h-[85vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors z-10"
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </button>

                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="w-full h-auto rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OurWorkSection;