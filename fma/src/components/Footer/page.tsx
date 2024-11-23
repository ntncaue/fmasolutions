"use client"
import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] text-white py-5 text-center font-serif text-sm relative bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2 mt-40">
          <p>&copy; 2024 FMA. Todos os direitos reservados.</p>
          <p>Email: <a href="mailto:contato@fmasolutions.com" className="text-white hover:text-[#3A3030] transition-colors duration-300">contato@fmasolutions.com</a> | Ligue já: <a href="tel:+5511912345678" className="text-white hover:text-[#3A3030] transition-colors duration-300">(11) 91234-5678</a></p>
        </div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/" target="_blank" className="text-white text-2xl hover:text-[#3A3030] transform transition-all duration-300 hover:scale-110"><FaFacebookSquare /></a>
          <a href="https://www.linkedin.com/" target="_blank" className="text-white text-2xl hover:text-[#3A3030] transform transition-all duration-300 hover:scale-110"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;