import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

// Impor Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Data testimoni (contoh)
const testimonials = [
  {
    name: 'Budi Santoso',
    company: 'Pemda Kab. Sidoarjo',
    comment: 'Layanan yang diberikan sangat profesional dan hasilnya melebihi ekspektasi. Aplikasi yang dibangun sangat memudahkan pekerjaan kami sehari-hari.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12', // Avatar placeholder
  },
  {
    name: 'Citra Lestari',
    company: 'Bapenda Kota Batu',
    comment: 'Tim Data Bumi sangat responsif dan solutif. Proses survey dan pemetaan berjalan lancar dan data yang dihasilkan sangat akurat. Sangat direkomendasikan!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Agus Wijaya',
    company: 'Bank Jatim',
    comment: 'Integrasi sistem pembayaran Host-to-Host berjalan tanpa kendala. Dukungan teknis 24 jam benar-benar membantu kami. Kerjasama yang luar biasa.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Rina Hartati',
    company: 'Dinas Lingkungan Hidup',
    comment: 'Aplikasi eRetribusi yang dikembangkan sangat inovatif dan berhasil meningkatkan efisiensi penarikan retribusi di daerah kami. Tampilannya juga user-friendly.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
];


const TestimoniSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika pengiriman data ke backend
    console.log('Data yang dikirim:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Pesan sukses hilang setelah 5 detik
  };

  return (
    <div id="testimoni">
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Testimoni & Ulasan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dengar langsung dari para mitra yang telah mempercayakan solusinya kepada kami.
          </p>
        </motion.div>

        {/* --- Testimonial Slider --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testi.comment}"</p>
                  </div>
                  <div className="flex items-center">
                    <img src={testi.avatar} alt={testi.name} className="w-14 h-14 rounded-full mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testi.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testi.company}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testi.rating)].map((_, i) => <FaStar key={i} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        {/* --- Form Komentar --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
              Punya Pertanyaan atau Ulasan?
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">Bagikan pengalaman atau pertanyaan Anda di sini.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Nama</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Nama Anda" required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 focus:ring-0 transition"/>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Alamat Email" required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 focus:ring-0 transition"/>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Pesan</label>
              <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleInputChange} placeholder="Tulis komentar atau pertanyaan Anda..." required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 focus:ring-0 transition"></textarea>
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Kirim Komentar
              </motion.button>
            </div>
          </form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 flex items-center justify-center gap-2 p-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg"
              >
                <FaCheckCircle />
                <p>Terima kasih! Komentar Anda telah terkirim.</p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default TestimoniSection;

