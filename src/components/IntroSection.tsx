import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-charcoal relative">
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading mb-6"
            variants={itemVariants}
          >
            The <span className="text-blood-red">Ultimate</span> Mystery Experience
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            variants={itemVariants}
          >
            Every month, we curate a collection of premium items that remain a mystery until you open the box. Our expert team handpicks each item to ensure maximum value and excitement.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            {[
              {
                number: '01',
                title: 'Exclusive Items',
                description: 'Each box contains products you won\'t find anywhere else, specially created for our subscribers.'
              },
              {
                number: '02',
                title: 'Premium Quality',
                description: 'Only the finest materials and craftsmanship make it into our mystery boxes.'
              },
              {
                number: '03',
                title: 'Guaranteed Value',
                description: 'Every box contains items worth at least twice what you pay - guaranteed.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-black/30 p-8 rounded-lg relative overflow-hidden glow-on-hover"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="absolute -top-2 -left-2 text-6xl font-heading text-blood-red/20">
                  {item.number}
                </span>
                <h3 className="text-xl font-heading mb-4 relative z-10">{item.title}</h3>
                <p className="text-white/80 relative z-10">{item.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blood-red to-transparent"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;