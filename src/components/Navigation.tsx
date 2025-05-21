import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-white text-2xl font-bold"
          >
            UNBOX
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">About</a>
            <a href="#drops" className="text-white/80 hover:text-white transition-colors duration-200">Drops</a>
            <a href="#creators" className="text-white/80 hover:text-white transition-colors duration-200">Creators</a>
            <button className="bg-accent hover:bg-accent-light px-6 py-2 rounded-full text-white transition-colors duration-300">
              Sign Up
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className={`md:hidden overflow-hidden bg-black/90 backdrop-blur-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <a href="#about" className="block text-white/80 hover:text-white py-2 transition-colors duration-200">About</a>
          <a href="#drops" className="block text-white/80 hover:text-white py-2 transition-colors duration-200">Drops</a>
          <a href="#creators" className="block text-white/80 hover:text-white py-2 transition-colors duration-200">Creators</a>
          <button className="w-full bg-accent hover:bg-accent-light px-6 py-2 rounded-full text-white transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;