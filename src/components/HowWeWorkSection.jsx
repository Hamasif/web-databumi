import { motion, easeInOut } from 'framer-motion';

const HowWeWorkSection = () => {
  // Data yang relevan untuk section ini
  const values = [
    {
      title: 'Application Development',
      description: 'Sebagai Developer sudah banyak aplikasi yang telah kami bangun terutama bidang pajak daerah seperti (SISMIOP, POSPBB, e- BPHTB, e-SPTPD, SIMPATDA, dll.) dengan Brand SiPRIDA (Sistem Informasi Pajak dan retribusi daerah)',
      highlight: 'Application',
    },
    {
      title: 'Land and Bulding Tax Survey',
      description: 'Kami juga fokus di bidang jasa survey dan pemetaan Pajak Bumi dan Bangunan, Penilaian Tanah dan Bangunan dan Zona Nilai Tanah',
      highlight: 'Building',
    },
    {
      title: 'Geographic Information System ',
      description: 'Pengembangan Sistem Informasi Geografis Seperti : Smart Map PBB Web (Sig Web), Profile Wajib Pajak KPP, GIS Tracking, Pendataan Berbasis Android dll',
      highlight: 'Geographic',
    },
    {
      title: 'Payment Gateway (Host to Host)',
      description: 'Pembayaran Online dengan Bank antara Lain : Bank BJB, Bank BTN, Bank BRI, Bank Kepri Riau, Bank Jatim, Bank Sulsel, Bank Kaltim, Bank NTT, Kantor Pos',
      highlight: 'Payment',
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-20"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6 xl:mb-8 px-2">
            How we work on our project
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-400 font-body max-w-xs sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4">
            Dengan Tenaga Ahli yang sudah berpengalaman di bidangnya kami yakin dapat memberikan pelayanan dan kualitas terbaik bagi anda, dengan dukungan penuh dan pendampingan secara rutin dengan customer service dan technical support 24 Jam
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-500 h-full">
                <div className="mb-3 sm:mb-4 lg:mb-6">
  <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 lg:py-2 bg-blue-500 text-white text-xs lg:text-sm font-semibold rounded-full shadow-md">
    {value.highlight}
  </span>
</div>
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-body text-sm lg:text-base leading-relaxed">
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