import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

// Data untuk tautan agar mudah diubah
const quickLinks = [
  { name: 'About Us', href: 'about-us' },
  { name: 'Company History', href: 'company-history' },
  { name: 'Services', href: 'services' },
  { name: 'Our Work', href: 'our-work' },
  { name: 'Team', href: 'team' },
];

const Footer = () => {
  // Fungsi untuk menangani klik pada tautan dan melakukan scroll halus
  const handleLinkClick = (event, targetId) => {
    // Mencegah perilaku default dari tag anchor (<a>)
    event.preventDefault(); 
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Melakukan scroll ke elemen target dengan efek halus
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <footer className="bg-[#004A99] text-white pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Kolom Logo dan Nama Perusahaan */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo PT. Data Bumi Indonesia" className="h-14 w-14" />
                <div>
                  <h2 className="text-2xl font-bold">PT. DATA BUMI INDONESIA</h2>
                  <p className="text-sm text-gray-300">We make things easier</p>
                </div>
              </div>
            </div>

            {/* Kolom Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {/* Mengubah tag <a> untuk memanggil fungsi handleLinkClick */}
                    <a
                      href={`#${link.href}`} // href tetap ada untuk aksesibilitas & fallback
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="hover:underline text-gray-200 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom Contact Us */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MdEmail className="text-xl mt-1 flex-shrink-0" />
                  <a href="mailto:databumi@gmail.com" className="hover:underline text-gray-200">
                    databumi@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MdPhone className="text-xl mt-1 flex-shrink-0" />
                  <a href="tel:+623199751799" className="hover:underline text-gray-200">
                    +62 31 997-517-99
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-200">
                    Ruko Pondok Maritim Indah Cluster Bougenville, Jl. Pd. Maritim Indah No.10, Balas Klumprik, Kec. Wiyung, Surabaya, Jawa Timur 60222
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#3876B8] text-white text-center py-4">
        <p className="text-sm">
          © 2025 PT. DATA BUMI INDONESIA – We make things easier. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
