"use client"
import React from 'react';
import { useState } from 'react';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null); // Estado para armazenar qual link está carregando

  const handleClick = (link: string) => {
    setLoading(link); // Define o link como carregando
    setTimeout(() => {
      window.location.href = link; // Redireciona após o tempo de "Carregando"
    }, 500); // Ajuste o tempo de redirecionamento após o clique
  };

  return (
    <main className="w-full">

      {/* Hero Section */}
      <section className="bg-[#161616] bg-cover bg-center p-5">
        <div className="text-white">
        <h2 className="xl:text-9xl lg:text-7xl md:text-6xl text-6xl font-bold text-center mb-5 leading-none">
            Energia para um Futuro Sustentável
          </h2>
          <p className="text-2xl font-bold text-right max-w-[50%] ml-auto mt-40 mb-40">
            A energia sustentável é essencial para um futuro equilibrado, promovendo soluções que protejam o meio ambiente,
            incentivem a inclusão social e estimulem o desenvolvimento econômico. Este projeto busca transformar a forma
            como consumimos e produzimos energia, explorando tecnologias inovadoras e acessíveis, com o objetivo de garantir
            um impacto positivo para as próximas gerações.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Home;