import { motion } from 'framer-motion';

const CompanyHistorySection = () => {
  // Data Visi & Misi
  const visionMission = [
    {
      title: 'Visi Kami',
      description: 'Menjadi perusahaan terdepan dalam bidang Teknologi Informasi dengan sumber daya manusia terpercaya dan handal sehingga mampu bersaing baik dalam skala nasional maupun internasional.',
    },
    {
      title: 'Misi Kami',
      description: 'Memberikan jasa pelayanan terbaik dan kualitas terbaik bagi mitra dengan prinsip kemitraan, efektifitas dan efisiensi solusi, inovasi dan kreatifitas.',
    },
  ];

  // Data milestones lengkap
  const milestones = [
    { period: '2016', title: 'Application', description: ['Pemeliharaan Aplikasi SISMIOP Kab. Pamekasan', 'Pengembangan Sistem Pelayanan PBB Online Kota Makassar', 'dll'] },
    { period: '2016', title: 'Mapping & Survey', description: ['Pemutakhiran basis data dan pemetaan PBB Kota Bekasi', 'Pendataan dan Pemetaan PBB Kab. Luwu Timur', 'dll'] },
    { period: '2016', title: 'Payment Gateway', description: ['Pembayaran Online Pajak Daerah Lainnya Kota Bekasi (Restoran, Hiburan, dll bersama Bank BJB)', 'Pembayaran Online PBB Kota Makassar bersama Bank SulSelBar', 'Pembayaran Online PBB Kab. Nunukan bersama Bank Kaltim', 'Pembayaran PBB Online Bersama Bank Jatim', 'dll'] },
    { period: '2017', title: 'Application', description: ['Aplikasi Dashboard Tapping Box Kab. Lumajang', 'Sistem Pengelola Kas Daerah Kota Bekasi', 'dll'] },
    { period: '2017', title: 'Mapping & Survey', description: ['Updateing Data Spasial Kota Palembang', 'Pemutakhiran Zona Nilai Tanah Kota Palembang', 'Verifikasi Piutang PBB Kota Bekasi', 'Pendataan dan Pemetaan PBB Kab. Luwu Timur', 'dll'] },
    { period: '2017', title: 'Payment Gateway', description: ['Pembayaran PBB Online Kota Batam bersama Bank BJB', 'Pembayaran Online Retribusi Kota Bekasi bersama Bank BJB', 'Pembayaran Online PBB Kota Makassar bersama Kantor Pos dan Giro'] },
    { period: '2018', title: 'Application', description: ['Aplikasi Penerapan Stimulus Kabupaten Barru', 'SIstem Pembayaran PBB Online Kabupaten Luwu Utara', 'Pengembangan etax (Monitorin Pajak dengan Tapiing Box)', 'dll'] },
    { period: '2018', title: 'Mapping & Survey', description: ['Pemutakhiran dan Pembentukan Data PBB Kota Palembang', 'Penilaian Individu PBB Kab. Pemalang', 'Analisa Zona Nilai Tanah Kab. Nunukan', 'dll'] },
    { period: '2018', title: 'Payment Gateway', description: ['Pembangunan Protokol Host to Host Pembanyaran PBB Online dengan Iso 8583 di Bank NTT', 'Pembangunan Protokol Pembayaran Host to Host Pajak Daerah lainnya dan Retribusi Kota Bekasi dengan Iso 8583 di Bank BJB', 'dll'] },
    { period: '2020', title: 'Application', description: ['eBPHTB (Kab. Luwu Utara, Kab. Pamekasan, Kab. Sampang)', 'Aplikasi PBB Online Kab. Kutai Kartanegara', 'Perawatan SIstem PBB & BPHTB Kab. Sidrap', 'POS ONLINE PAYMENT POIN Kantor POS regional 9', 'dll'] },
    { period: '2020', title: 'Mapping & Survey', description: ['Penyesuaian Reklas NJOP Kab. Sampang', 'Pendataan Objek Pajak PBB Kab. Sumenep', 'Pemutakhiran NJOP Kab. Pinrang', 'dll'] },
    { period: '2021', title: 'Application', description: ['eBPHTB (Kutai Kartanegar dan Sampang)', 'Aplikasi Siprida Kab. Blitar', 'Perawatan Sistem PBB & BPHTB Kab. Kutai Kartanegara', 'Aplikasi Simpadda Kota Bekasi', 'Aplikasi ESPTPD (Kota Batu dan Kab. Lingga)', 'eRetribusi Sampah (Dinas Lingkungan Hidup Kota Batu)', 'ePotensi Kota Batu', 'eParkir Kota BAtu', 'Payement Gate Way Kab. Lingga', 'dll'] },
    { period: '2021', title: 'Mapping & Survey', description: ['ZNT (Kab. Wakatobi dan Kab. Pinrang)', 'Pendataan Objek Pajak PBB (Kab. Banyuasin, Kab. Pinrang)', 'dll'] },
    { period: '2022', title: 'Application', description: ['Pengembangan Aplikasi ePADA (Kab. Blitar)', 'Aplikasi Penilaian Kab. Banyuasin', 'Perawatan dan Pengembangan SIstem PBB & BPHTB Kab Kutai Kartanegara', 'Aplikasi Simpadda Kota Bekasi', 'Aplikasi e-Parkir Kota Batu', 'dll'] },
    { period: '2022', title: 'Mapping & Survey', description: ['ZNT (Kab. Pemalang, Kab. Pinrang dan Kab. Lombok Tengah)', 'Pendataan Objek Pajak PBB (Kota Sidrap, Kab. Pinrang)', 'Penilaian Individu (Kab. Pemalang, Kab. Gowa)', 'Pemutakhiran Duta PBB Kota Makassar', 'dll'] },
    { period: '2023', title: 'Application', description: ['Pengembangan Aplikasi ePADA, Pemeliharaan Basis Data Oracle (Kab. Blitar)', 'Aplikasi ePotensi Kab. Banyuasin', 'Perawatan dan Pengembangan Sistem PBB & BPHTB (TTE Berbasis Web) Kab. Kutai Kartanegara', 'Aplikasi SImpadda, Smartmap Web, ePasar, dan Pajak Daerah Lainnya Kota Bekasi', 'Aplikasi eSISMIOP Kab. Pemalang dan Kab. Karimun', 'dll'] },
    { period: '2023', title: 'Mapping & Survey', description: ['ZNT (Kab. Pemalang, Kab. Pinrang, Kab. Blitar dan Kab. Lombok Tengah)', 'Pendataan Objek Pajak PBB (Kota Makassar, Kab. Pemalang, Kab. Blitar dan Kab. Wajo)', 'Penilaian Individu (Kab. Pemalang, Kab. Blitar)', 'dll'] },
    { period: '2024', title: 'Application', description: ['Pengembangan Aplikasi ePADA, Pemeliharaan Basis Data Oracle (Kab. Blitar)','Pengadaan Jasa Sistem Informasi Pengawasan Kapal', 'Pembuatan Aplikasi ePorporasi dan Pengembangan Aplikasi eSismiop dan eBPHTB', 'dll'] },
    { period: '2024', title: 'Mapping & Survey', description: ['Belanja Pemutakhiran Basis Data Objek Pajak PBB', 'Pembuatan Basis Data SISMIOP', 'dll'] },
  ];

  // Mengelompokkan milestones berdasarkan tahun
  const groupedMilestones = milestones.reduce((acc, milestone) => {
    const year = milestone.period;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push({ title: milestone.title, description: milestone.description });
    return acc;
  }, {});

  return (
    // PERBAIKAN: Menghapus style inline yang menyebabkan masalah scroll
    <div id="company-history" className="w-full bg-white dark:bg-gray-900">
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Company History
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          {/* --- Visi & Misi Section --- */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-24">
            {visionMission.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-800/20"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{item.title}</h3>
                <div className="bg-blue-500 text-white p-6 rounded-lg">
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Timeline Section --- */}
          <div className="relative">
            {/* Garis Linimasa */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 hidden lg:block"></div>

            <div className="space-y-16">
              {Object.entries(groupedMilestones).map(([year, sections], index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Konten Kartu Tahunan */}
                  <div className="flex-1 w-full lg:w-5/12">
                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-600">
                      {/* Pil Tahun */}
                      <div className="absolute -top-5 left-1/2 lg:left-auto lg:-right-5 transform -translate-x-1/2 lg:translate-x-0 bg-blue-500 text-white px-5 py-2 rounded-full font-bold shadow-lg transition-colors duration-300 group-hover:bg-blue-600">
                        {year}
                      </div>

                      {/* Daftar Konten */}
                      <div className="space-y-6">
                        {sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                              {section.description.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Titik Linimasa */}
                  <div className="relative z-10 my-6 lg:my-0 lg:mx-6">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                  </div>

                  {/* Spacer untuk sisi lain linimasa */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyHistorySection;
