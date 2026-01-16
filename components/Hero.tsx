
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Experience Excellence</p>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            Sheer Driving <br /> Pleasure.
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            Discover the future of automotive luxury with Executive Motors. Where innovation meets unmatched craftsmanship.
          </p>
          <div className="flex gap-4">
            <a href="#showroom" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
              Explore Models
            </a>
            <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Our Legacy
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10 hidden lg:block">
        <div className="container mx-auto px-6 py-8 flex justify-between text-center">
          <div>
            <p className="text-3xl font-serif">0-60 MPH</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">In 3.5 Seconds</p>
          </div>
          <div className="w-px bg-white/10"></div>
          <div>
            <p className="text-3xl font-serif">650 HP</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Electric Precision</p>
          </div>
          <div className="w-px bg-white/10"></div>
          <div>
            <p className="text-3xl font-serif">300+ Miles</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Extended Range</p>
          </div>
          <div className="w-px bg-white/10"></div>
          <div>
            <p className="text-3xl font-serif">Luxury</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Standard Feature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
