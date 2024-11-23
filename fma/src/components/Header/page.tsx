"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Efeito para monitorar a largura da tela e fechar o menu automaticamente em telas grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Fecha o menu quando a tela for maior ou igual a 768px
      }
    };

    // Adiciona o listener de resize
    window.addEventListener('resize', handleResize);

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-[#372D2D] text-white p-4 rounded-b-xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">FMA SOLUTIONS</h1>
        <nav>
          <ul
            className={`flex gap-4 md:flex-row md:static ${isMenuOpen ? 'flex-col absolute top-[60px] left-0 right-0 bg-black p-4' : 'hidden md:flex'} ${isMenuOpen ? 'block' : ''}`}
          >
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/#sobre-nos" onClick={closeMenu}>Sobre</Link></li>
            <li><Link href="/#servicos" onClick={closeMenu}>Serviços</Link></li>
            <li><Link href="/#equipe" onClick={closeMenu}>Equipe</Link></li>
            <li><Link href="/#contato" onClick={closeMenu}>Contato</Link></li>
          </ul>
        </nav>

        <li className="list-none bg-transparent border-2 border-white rounded px-4 py-2 hover:bg-white hover:text-black"><Link href="#contato" onClick={closeMenu}>Contato</Link></li>

        {/* Ícone do menu hambúrguer */}
        <div className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;