import React from 'react';
import { motion } from 'framer-motion';

import frdge2 from "../assets/images/frdge2.jpg";
import cold_storage from "../assets/images/cold_storage.jpeg";
import industrial_equipment from "../assets/images/industrial_equipment.jpeg";
import fridge_installation from "../assets/images/fridge_installation.jpg";
import refrigerator_services from "../assets/images/refrigerator_services.png";
import commercial_laundry from "../assets/images/commercial_laundry.jpg";
import home_appliance_repair from "../assets/images/home_appliance_repair.png";
import washing_machine_repear_1 from "../assets/images/washing_machine_repear_1.jpg";
import Commercial_Refrigeraion_1 from "../assets/images/Commercial_Refrigeraion_1.jpg";

const images = [
  { src: washing_machine_repear_1, alt: "Washing Machine Repair Service" },
  { src: frdge2, alt: "Refrigerator Repair" },
  { src: commercial_laundry, alt: "Commercial Laundry Equipment" },
  { src: Commercial_Refrigeraion_1, alt: "Commercial Refrigeration" },
  { src: fridge_installation, alt: "Fridge Installation Service" },
  { src: refrigerator_services, alt: "Refrigerator Maintenance" },
  { src: home_appliance_repair, alt: "Home Appliance Repair" },
  { src: cold_storage, alt: "Cold Storage Solutions" },
  { src: industrial_equipment, alt: "Industrial Equipment Repair" },
];

const ImageSlider = () => {
  const duplicated = [...images, ...images]; // For infinite loop illusion

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-20">
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 40,
        }}
      >
        {duplicated.map((item, index) => (
          <div 
            key={index}
            className="relative h-80 w-96 flex-shrink-0 rounded-2xl overflow-hidden group shadow-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay with teal accent on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14b8a6]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <span className="font-bold text-xl block mb-1">
                  {item.alt}
                </span>
                <span className="text-sm opacity-90">
                  Professional Service in Riyadh
                </span>
              </div>
            </div>
            {/* Teal border on hover */}
            <div className="absolute inset-0 border-4 border-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;