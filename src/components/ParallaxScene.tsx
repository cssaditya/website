import React from 'react';
import { motion } from 'framer-motion';

const ParallaxScene = () => {
  return (
    <div className="absolute inset-0">
      {/* Background layer */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black"
      />
      
      {/* Stars layer */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute w-32 h-32 bg-accent/20 rounded-full blur-xl"
             style={{ left: '20%', top: '30%' }} />
        <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
             style={{ right: '25%', bottom: '40%' }} />
      </motion.div>
    </div>
  );
};

export default ParallaxScene;