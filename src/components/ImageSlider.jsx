// src/components/AutoScrollSlider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import repairingmachine from "../assets/images/repairingmachine.jpg";

const images = [
  repairingmachine,
  repairingmachine,
  repairingmachine,
  repairingmachine,
  repairingmachine,
  repairingmachine,
  repairingmachine,
];

const ImageSlider = () => {
  const duplicated = [...images, ...images]; // For infinite loop illusion

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-30">
      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30,
        }}
      >
        {duplicated.map((src, index) => (
          <div 
            key={index}
            className="relative h-80 w-100 flex-shrink-0 rounded-lg overflow-hidden group"
          >
            <img
              src={src}
              alt={`Washing machine and refrigerator repair service ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay with teal accent on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14b8a6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-semibold text-lg">
                Professional Appliance Repair
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;