// pages/404.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-5">404</h1>
      <p className="text-lg text-gray-400 mb-8">
        Oops! A página que você procura não foi encontrada.
      </p>

      {/* Imagem de erro */}
      <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
        <Image
          src="https://http.cat/images/404.jpg" // URL direta da imagem
          alt="Página não encontrada"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Link corrigido */}
      <Link
        href="/"
        className="bg-[#372D2D] text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-[#00000033] transition-transform duration-200 hover:scale-105"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;