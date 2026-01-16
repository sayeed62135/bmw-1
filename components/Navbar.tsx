
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">E</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Executive Motors</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#showroom" className="hover:text-blue-500 transition-colors">Showroom</a>
          <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>

        <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest">
          Book a Test Drive
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
