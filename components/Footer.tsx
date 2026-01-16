
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold">E</span>
              </div>
              <span className="text-xl font-bold uppercase tracking-tighter">Executive Motors</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              The official distributor of BMW in Bangladesh. Providing premium automotive experiences since 2003.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'YT'].map(social => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Showroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service & Parts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Test Drive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Locations</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <p className="font-bold text-white mb-1 uppercase tracking-tight">Main Showroom</p>
                <p>222 Bir Uttam Mir Shawkat Sarak, Dhaka</p>
              </li>
              <li>
                <p className="font-bold text-white mb-1 uppercase tracking-tight">Service Center</p>
                <p>Tejgaon Industrial Area, Dhaka</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Stay updated with the latest releases and events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="px-6 py-3 bg-white text-black font-bold text-xs uppercase hover:bg-blue-600 hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <p>© 2024 Executive Motors Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
