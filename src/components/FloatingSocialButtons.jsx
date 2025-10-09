import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, X } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

const FloatingSocialButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/966598001569',
      bg: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      href: 'tel:+966598001569',
      bg: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:contact@riyadhrepairingservices.com',
      bg: 'bg-red-500 hover:bg-red-600',
    },
    {
      icon: <FaFacebookF className="w-4 h-4" />,
      label: 'Facebook',
      href: 'https://facebook.com',
      bg: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://instagram.com',
      bg: 'bg-pink-500 hover:bg-pink-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Social Links */}
      <div
        className={`flex flex-col items-end gap-3 mb-3 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-end gap-3 rounded-full shadow-lg transition-all duration-500 transform hover:translate-x-[-5px] ${link.bg} text-white`}
            style={{
              padding: '10px 16px',
              width: isOpen ? 'auto' : '48px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              transitionDelay: isOpen ? `${index * 70}ms` : '0ms',
            }}
          >
            <span
              className={`text-sm font-medium transition-all duration-500 ease-in-out ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
              }`}
            >
              {link.label}
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30">
              {link.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative bg-[#14b8a6] hover:bg-[#0f9a8a] text-white p-4 rounded-full shadow-2xl transform transition-all duration-500 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}

        {/* Pulse animation when closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#14b8a6] animate-ping opacity-75"></span>
            <span
              className="absolute inset-2 rounded-full bg-[#14b8a6] animate-ping opacity-50"
              style={{ animationDelay: '0.5s' }}
            ></span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingSocialButtons;
