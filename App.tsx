
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showroom from './components/Showroom';
import AIConcierge from './components/AIConcierge';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="w-12 h-px bg-blue-500"></div>
                <h3 className="text-2xl font-serif">Innovation First</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Leading the way in automotive technology with groundbreaking electric drivetrains and intelligent driver assistance.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-px bg-blue-500"></div>
                <h3 className="text-2xl font-serif">Supreme Comfort</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Hand-crafted interiors using the finest materials, designed to provide an oasis of calm amidst the journey.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-px bg-blue-500"></div>
                <h3 className="text-2xl font-serif">Dynamic Power</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Experience true precision. Our M performance vehicles are engineered to deliver track-level excitement on every road.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Showroom />

        {/* Brand Story */}
        <section id="about" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-20 grayscale"
              alt="Brand background"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Crafting the Future of Mobility Since 2003.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Executive Motors has been the sole representative of the BMW brand in Bangladesh for over two decades. 
              Our commitment to excellence goes beyond selling cars; we provide a lifestyle built on reliability, 
              luxury, and unmatched performance.
            </p>
            <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-600 hover:text-white transition-all">
              Discover Our History
            </button>
          </div>
        </section>

        {/* Services CTA */}
        <section id="services" className="py-24 bg-neutral-900">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
                alt="Service showcase"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-serif">Uncompromising <br /> After-Sales Support</h2>
              <p className="text-gray-400 leading-relaxed">
                Your journey with us doesn't end at the showroom. Our state-of-the-art service center and certified technicians 
                ensure your vehicle performs at its peak, using only genuine BMW parts and the latest diagnostic tools.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Genuine Parts</h4>
                  <p className="text-sm text-gray-500">Only the best for your engine.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Express Service</h4>
                  <p className="text-sm text-gray-500">Back on the road in no time.</p>
                </div>
              </div>
              <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Schedule Service
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <AIConcierge />
    </div>
  );
}

export default App;
