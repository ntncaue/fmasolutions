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

      {/* About Us Section */}
      <section id="sobre-nos" className="bg-[#161616] py-12 px-5 text-white">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-5">SOBRE NÓS</h2>
          <div className="flex flex-wrap justify-between items-center max-w-screen-lg w-full">
            <div className="flex-1 p-5 text-2xl font-bold" >
              <p className="text-xl mb-5">
                O objetivo principal deste projeto é promover a transição energética para fontes renováveis e sustentáveis como energia solar e eólica, com foco em impacto ambiental, inclusão social e crescimento econômico. Nosso objetivo é contribuir para a construção de um futuro sustentável, reduzindo a dependência de combustíveis fósseis, combatendo as mudanças climáticas e promovendo a justiça social.
              </p>
              <p className="text-xl mb-5">
                Projeções para o Setor Energético:
                Até 2028, as fontes renováveis como solar e eólica devem representar 51% da geração de energia no Brasil, segundo a Empresa de Pesquisa Energética (EPE). Essa transformação destaca a crescente importância das energias limpas na composição da matriz energética nacional, permitindo a redução das emissões de carbono e ajudando no cumprimento das metas climáticas globais.
              </p>
              <p className="text-xl mb-5">
                Pilares do Projeto:
                Inclusão Social: Garantir acesso a tecnologias de energia limpa e acessível, proporcionando oportunidades de desenvolvimento para comunidades carentes e regiões isoladas, promovendo a justiça social.
              </p>
              <p className="text-xl mb-5">
                Crescimento Econômico: Impulsionar o crescimento econômico sustentável por meio da criação de empregos no setor de energias renováveis e tecnologias limpas, como painéis solares, aerogeradores e inovações em armazenamento de energia.
              </p>
              <p className="text-xl mb-5">
                Impacto Ambiental: Contribuir para a redução das emissões de gases de efeito estufa e a mitigação dos efeitos das mudanças climáticas, ao priorizar soluções baseadas em energias renováveis e sustentáveis.
              </p>
              <p className="text-xl mb-5">
                Este projeto visa, portanto, não apenas transformar o setor energético, mas também criar uma sociedade mais justa e resiliente, com acesso universal à energia e soluções sustentáveis que beneficiem todos os setores da sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;