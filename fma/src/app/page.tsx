"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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


      {/* Services Section */}
      <section id="servicos" className="bg-[#161616] py-12 px-5 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">SOLUÇÕES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Energia Renovável",
              link: "/solucoes/energia-renovavel",
            },
            {
              title: "Redução do Consumo Energético",
              link: "/solucoes/reducao-consumo",
            },
            {
              title: "Acesso Universal à Energia",
              link: "/solucoes/acesso-energia",
            },
          ].map((solution, idx) => (
            <div key={idx} className="bg-[#3A3030] rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <div
                onClick={() => handleClick(solution.link)}
                className={`py-2 px-4 bg-[#00000033] text-white border-2 border-black rounded-lg cursor-pointer`}
              >
                {loading === solution.link ? 'Carregando...' : 'Ver mais'}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Team Section */}
      <section id="equipe" className="bg-[#161616] py-12 px-5 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">EQUIPE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Antonio Caue",
              rm: "RM: 558891",
              turma: "Turma: 1TDSPG",
              image: "/Antonio.jpg",
              github: "https://github.com/ntncaue",
              linkedin: "https://linkedin.com/in/ntncaue",
            },
            {
              name: "Felipe Gomes",
              rm: "RM: 557435",
              turma: "Turma: 1TDSPG",
              image: "/Felipe.jpg",
              github: "https://github.com/felipeorikasa",
              linkedin: "https://linkedin.com/in/ntncaue",
            },
            {
              name: "Antonio Caue",
              rm: "RM: 558891",
              turma: "Turma: 1TDSPG",
              image: "/Marcelo.jpg",
              github: "https://github.com/ntncaue",
              linkedin: "https://linkedin.com/in/ntncaue",
            },
          ].map((member, idx) => (
            <div key={idx} className="bg-[#3A3030] rounded-lg p-6 text-center">
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.rm}</p>
              <p className="text-sm text-gray-300 mb-4">{member.turma}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-12 px-5 bg-[#161616] text-white">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Left Text Section */}
            <div>
              <h2 className="text-4xl font-bold text-left mb-5">Contato</h2>
              <p className="text-2xl font-bold  mb-10">Para mais informações sobre atendimento ou serviços, preencha o formulário para resposta por email ou nos ligue.</p>
            </div>
            {/* Right Form Section */}
            <div>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Telefone"
                    className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400"
                  />
                  <select className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg bg-[#161616] text-white">
                    <option value="" disabled>Localização</option>
                    <option value="br">Brasil</option>
                    <option value="us">Estados Unidos</option>
                    <option value="de">Alemanha</option>
                  </select>
                </div>
                <textarea
                  placeholder="Mensagem"
                  className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-transparent border-2 border-gray-600 text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;