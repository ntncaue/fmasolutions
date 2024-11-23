import React from 'react';

const Energia: React.FC = () => {
    return (
        <main className="w-full">

            {/* Hero Section */}
            <section className="bg-[#161616] bg-cover bg-center p-5">
                <div className="text-white">
                <h2 className="xl:text-9xl lg:text-7xl md:text-6xl text-6xl font-bold text-center mb-5 leading-none">
                        ENERGIA RENOVÁVEL
                    </h2>
                    <p className="text-2xl font-bold text-right max-w-[50%] ml-auto mt-40 mb-40">A transição para fontes de energia renovável é um passo crucial para um planeta mais sustentável.Oferecemos consultoria, planejamento e soluções que permitem a adoção de energias renováveis, adaptadas às necessidades específicas de cada cliente. Investir em energia renovável não é apenas uma escolha consciente para o meio ambiente, mas também uma decisão estratégica que garante economia e independência energética no longo prazo. Vamos juntos construir um futuro movido a energia limpa.</p>
                </div>
            </section>
        </main>
    );
};

export default Energia;