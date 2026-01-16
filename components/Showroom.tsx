
import React, { useState } from 'react';
import { VEHICLES } from '../constants';
import { Vehicle } from '../types';

const Showroom: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Sedan', 'SUV', 'Electric', 'Coupe'];

  const filteredVehicles = filter === 'All' 
    ? VEHICLES 
    : VEHICLES.filter(v => v.type === filter);

  return (
    <section id="showroom" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">The Showroom</h2>
            <p className="text-gray-400 max-w-md">Browse our exclusive collection of high-performance luxury vehicles.</p>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-white/20 text-gray-400 hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.model}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest rounded">
            {vehicle.series}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-serif mb-2">{vehicle.model}</h3>
        <p className="text-blue-400 font-bold mb-4">{vehicle.price}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-white/5">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Power</p>
            <p className="text-sm font-medium">{vehicle.power}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">0-60 MPH</p>
            <p className="text-sm font-medium">{vehicle.acceleration}</p>
          </div>
        </div>

        <button className="w-full py-3 border border-white/20 group-hover:bg-white group-hover:text-black transition-all text-sm font-bold uppercase tracking-widest">
          View Configuration
        </button>
      </div>
    </div>
  );
};

export default Showroom;
