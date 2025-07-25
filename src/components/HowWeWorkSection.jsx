import React from 'react';
import { motion } from 'framer-motion';

const HowWeWorkSection = () => {
  // Data yang relevan untuk section ini
  const values = [
    {
      title: 'Application Development',
      description: 'Sebagai Developer sudah banyak aplikasi yang telah kami bangun terutama bidang pajak daerah seperti (SISMIOP, POSPBB, e- BPHTB, e-SPTPD, SIMPATDA, dll.) dengan Brand SiPRIDA (Sistem Informasi Pajak dan retribusi daerah)',
      highlight: 'Application',
    },
    {
      title: 'Land and Building Tax Survey',
      description: 'Kami juga fokus di bidang jasa survey dan pemetaan Pajak Bumi dan Bangunan, Penilaian Tanah dan Bangunan dan Zona Nilai Tanah',
      highlight: 'Survey',
    },
    {
      title: 'Geographic Information System',
      description: 'Pengembangan Sistem Informasi Geografis Seperti : Smart Map PBB Web (Sig Web), Profile Wajib Pajak KPP, GIS Tracking, Pendataan Berbasis Android dll',
      highlight: 'GIS',
    },
    {
      title: 'Payment Gateway (Host to Host)',
      description: 'Pembayaran Online dengan Bank antara Lain : Bank BJB, Bank BTN, Bank BRI, Bank Kepri Riau, Bank Jatim, Bank Sulsel, Bank Kaltim, Bank NTT, Kantor Pos',
      highlight: 'Payment',
    },
  ];

  return (
    // Menambahkan ID 'services' agar bisa di-scroll dari Navbar
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            How We Work on Our Project
          </h2>
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 font-body max-w-3xl mx-auto leading-relaxed">
            Dengan Tenaga Ahli yang sudah berpengalaman di bidangnya kami yakin dapat memberikan pelayanan dan kualitas terbaik bagi anda, dengan dukungan penuh dan pendampingan secara rutin dengan customer service dan technical support 24 Jam.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group" // Group untuk mengontrol state hover pada elemen anak
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-800/30">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
                    {value.highlight}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-body text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
