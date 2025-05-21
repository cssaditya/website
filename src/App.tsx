import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParallaxScene from './components/ParallaxScene';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <CustomCursor />
      <Navigation />

      <main className="relative">
        <section className="h-screen relative overflow-hidden">
          <ParallaxScene />
          
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
                UNBOX THE UNKNOWN
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Limited edition creator drops. Exclusive collectibles.
                <br />A surprise in every box.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent-light px-8 py-4 rounded-full text-white font-medium text-lg transition-colors duration-300"
              >
                GET NOTIFIED
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="scroll-indicator"
          >
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </motion.div>
        </section>

        <TestimonialsSection />
      </main>
    </>
  );
}

export default App;