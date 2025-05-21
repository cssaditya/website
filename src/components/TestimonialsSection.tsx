import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gamepad, Twitch, Trophy } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex_Gaming",
      role: "Pro Streamer",
      avatar: "A",
      content: "The exclusive collectibles in my PIL box were insane! Can't believe I got that limited edition figurine everyone's been hunting for.",
      icon: <Twitch className="w-5 h-5" />
    },
    {
      name: "MegaPixel",
      role: "Content Creator",
      avatar: "M",
      content: "The mystery element makes it so exciting. Each box feels like a mini-event for my stream. My viewers love the unboxing segments!",
      icon: <Gamepad className="w-5 h-5" />
    },
    {
      name: "RaidBoss",
      role: "Esports Player",
      avatar: "R",
      content: "The in-game perks were worth the price alone. The physical items were just an awesome bonus. Can't wait for the next drop!",
      icon: <Trophy className="w-5 h-5" />
    }
  ];

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
    <section className="section bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Gamer Approved
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-accent/20"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-white/90 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    {testimonial.icon}
                  </div>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;