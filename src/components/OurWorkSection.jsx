import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Impor Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Impor Swiper styles
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


// Data untuk setiap proyek (gambar, judul, deskripsi)
const projectsData = [
    { id: 1, image: project1, title: 'Dashboard Analytics', description: 'Pengembangan dashboard monitoring sistem PBB & BPHTB Realtime dengan menampilkan grafik data yang informatif.' },
    { id: 2, image: project2, title: 'Sistem Informasi Geografis', description: 'Pemetaan digital untuk analisis Zona Nilai Tanah (ZNT) dan potensi wilayah.' },
    { id: 3, image: project3, title: 'Rapat Koordinasi', description: 'Presentasi dan koordinasi proyek bersama jajaran pemerintah daerah untuk memastikan keselarasan tujuan.' },
    { id: 4, image: project4, title: 'Aplikasi Host to Host', description: 'Implementasi sistem pembayaran online Host to Host (H2H) yang terintegrasi dengan berbagai Bank Daerah.' },
    { id: 5, image: project5, title: 'Manajemen Data Wajib Pajak', description: 'Aplikasi untuk manajemen data wajib pajak yang terstruktur dan mudah diakses.' },
    { id: 6, image: project6, title: 'Pelatihan & Sosialisasi', description: 'Pelatihan dan sosialisasi penggunaan aplikasi kepada para stakeholder di lingkungan pemerintah daerah.' },
    { id: 7, image: project7, title: 'Dashboard Monitoring Pajak', description: 'Dashboard interaktif yang menampilkan data dari berbagai sumber untuk monitoring pajak daerah secara komprehensif.' },
    { id: 8, image: project8, title: 'Aplikasi e-SPTPD', description: 'Sistem Pelaporan Pajak Daerah secara online (e-SPTPD) untuk memudahkan Wajib Pajak.' },
    { id: 9, image: project9, title: 'Pendampingan Wajib Pajak', description: 'Tim kami memberikan pendampingan langsung kepada Wajib Pajak untuk memastikan kelancaran implementasi sistem.' },
    { id: 10, image: project10, title: 'Peta Zona Nilai Tanah', description: 'Hasil akhir dari survey dan pemetaan berupa Peta Zona Nilai Tanah (ZNT) yang detail dan akurat.' },
    { id: 11, image: project11, title: 'Peta Blok PBB', description: 'Pembuatan dan pemutakhiran Peta Blok PBB sebagai dasar pengelolaan Pajak Bumi dan Bangunan.' },
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
                                // Tampilan saat layar >= 640px
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                // Tampilan saat layar >= 1024px
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="pb-12" // Padding bawah untuk pagination
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
            

            {/* Modal Pop-up */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)} // Menutup modal saat area gelap diklik
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat kontennya diklik
                        >
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OurWorkSection;