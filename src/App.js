import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import CompanyHistorySection from './components/CompanyHistorySection';
import ServicesSection from './components/ServicesSection';
import OurWorkSection from './components/OurWorkSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import TestimoniSection from './components/TestimoniSection';

// Anda mungkin perlu mengimpor file CSS utama di sini jika ada
// import './App.css'; 

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Navbar akan tampil di atas semua section */}
      <Navbar />
      
      {/* Setiap section akan dipanggil secara berurutan */}
      <main>
        <HeroSection />
        <AboutSection />
        <HowWeWorkSection />
        <CompanyHistorySection />
        <ServicesSection />
        <OurWorkSection />
        <TestimoniSection />
        <TeamSection />
      </main>

      {/* Footer akan berada di bagian paling bawah */}
      <Footer />
    </div>
  );
}

export default App;