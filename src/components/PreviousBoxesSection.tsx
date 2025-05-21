import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const PreviousBoxesSection: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  
  const previousBoxes = [
    {
      title: "Midnight Luxury",
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A collection of premium black and gold items, including a limited edition watch and leather accessories.",
      date: "October 2024"
    },
    {
      title: "Crimson Edition",
      image: "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Ruby-themed items featuring a designer scarf, premium headphones, and exclusive fragrance.",
      date: "September 2024"
    },
    {
      title: "Platinum Collection",
      image: "https://images.pexels.com/photos/9638690/pexels-photo-9638690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Silver-toned luxury featuring custom jewelry, premium stationery, and a limited edition decanter.",
      date: "August 2024"
    },
    {
      title: "Eclipse Box",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Night sky theme with constellation map, premium telescope, and hand-crafted ceramic items.",
      date: "July 2024"
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
    <section id="previous" className="section bg-charcoal">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-4">
            Previous <span className="text-blood-red">Boxes</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Take a look at some of our past mystery boxes. Each one is uniquely curated around a captivating theme.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {previousBoxes.map((box, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden aspect-[3/4] bg-void-black group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredBox(index)}
              onMouseLeave={() => setHoveredBox(null)}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <img
                src={box.image}
                alt={box.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-300"
              />
              
              {/* Red border overlay */}
              <div className="absolute inset-0 border-2 border-blood-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-blood-red text-sm mb-2 font-body tracking-wider">{box.date}</p>
                <h3 className="text-xl font-heading mb-2">{box.title}</h3>
                <p className="text-white/80 text-sm transition-all duration-300 max-h-0 overflow-hidden group-hover:max-h-24">
                  {box.description}
                </p>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-blood-red rounded-full p-3 cursor-pointer">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/80 mb-6">
            Missed out on these incredible boxes? Don't worry - our upcoming boxes are even more exciting.
          </p>
          <a
            href="#register"
            className="btn btn-primary"
          >
            RESERVE YOURS NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousBoxesSection;