import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import fordImage from '../../assets/fordImage.jpg';
import heroImage from '../../assets/HeroImage2.jpg';

const Hero = ({ title, subtitle, children }) => {
  const images = [fordImage, heroImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="NoirAutoSpa Background"
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            {subtitle}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
