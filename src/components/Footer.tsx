import React from 'react';
import { Package, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-void-black text-white/80 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Package className="w-8 h-8 text-blood-red mr-2" />
              <span className="font-heading text-xl tracking-wider text-white">MYSTERY BOX</span>
            </div>
            <p className="mb-6">
              Premium mystery boxes delivered to your door. Each box is carefully curated to provide an unforgettable unboxing experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-blood-red transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-blood-red transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-blood-red transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-blood-red transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-white mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Previous Boxes', 'Pricing', 'Register'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-blood-red transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-white mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3">
              {['FAQ', 'Shipping', 'Returns', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-blood-red transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-white mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
            <p className="mb-4">Subscribe to get updates on new box releases and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 py-2 px-4 bg-charcoal outline-none border border-white/10 focus:border-blood-red rounded-l-md"
              />
              <button
                type="submit"
                className="bg-blood-red text-white py-2 px-4 rounded-r-md hover:bg-ruby transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Premium Mystery Box. All rights reserved.</p>
          <p className="mt-2">Designed with ♥ for the curious and adventurous.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;