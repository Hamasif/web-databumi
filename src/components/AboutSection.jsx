import { motion, easeInOut } from 'framer-motion'; 

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  };

  return (
    // ID "about-us" ditambahkan di sini
    <div id="about-us" className="w-full bg-white dark:bg-gray-900 pt-16" style={{ minHeight: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
      <section className="relative py-8 sm:py-12 lg:py-16 xl:py-24 w-full">
        {/* Latar Belakang Abstrak */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" style={{ overflow: 'hidden' }}>
          <div className="absolute top-4 sm:top-8 lg:top-16 right-4 sm:right-8 lg:right-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-96 xl:h-96 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-16 left-4 sm:left-8 lg:left-20 w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 xl:w-80 xl:h-80 bg-secondary-100/20 dark:bg-secondary-900/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Logo */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8 lg:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-xl">
                  <img
                    src="/logo.png"
                    alt="DataBumi Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 object-contain"
                    onError={(e) => {
                      const target = e.target;
                      target.style.display = 'none';
                      const sibling = target.nextElementSibling;
                      if (sibling) sibling.style.display = 'block';
                    }}
                  />
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl hidden">SI</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl font-bold font-heading text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 leading-tight px-2"
            >
              About DataBumi
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-400 font-body max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-4"
            >
              PT. DATABUMI INDONESIA didirikan tanggal 10 Februari Tahun 2016 berbadan Hukum Perseroan Terbatas mendapatkan izin usaha dari Kementerian Hukum dan Ham tanggal 13 Februari 2016 , merupakan perusahaan yang bergerak dalam bidang Jasa Konsultan Teknologi Informasi, Jasa Survey dan Pemetaan, dan Manajemen sumber daya manusia.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
            >
              <div className="mb-3 sm:mb-4 lg:mb-6">
                <h2 className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold text-gray-800 dark:text-gray-200 font-heading mb-2 sm:mb-3 lg:mb-4">We make things easier</h2>
                <div className="w-6 sm:w-8 lg:w-12 xl:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
              </div>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 dark:text-gray-300 font-body leading-relaxed px-2">
                Kami menawarkan kerjasama dengan berbagai perusahaan nasional maupun Pemerintah Daerah pada berbagai bentuk pekerjaan sesuai dengan bidang keahlian kami dengan menjunjung tingkat Disiplin dan kinerja yang baik dalam menjalankan amanah yang telah diberikan dengan Motto “ The Best Service with the best quality”.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;