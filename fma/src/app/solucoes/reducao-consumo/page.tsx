import React from 'react';

const Consumo: React.FC = () => {
    return (
        <main className="w-full">

            {/* Hero Section */}
            <section className="bg-[#161616] bg-cover bg-center p-5">
                <div className="text-white">
                <h2 className="xl:text-9xl lg:text-7xl md:text-6xl text-6xl font-bold text-center mb-5 leading-none">
                        REDUÇÃO DO CONSUMO ENERGÉTIVO
                    </h2>
                    <p className="text-2xl font-bold text-right max-w-[50%] ml-auto mt-40 mb-40">acreditamos que a eficiência energética é fundamental para um futuro sustentável. Reduzir o consumo de energia não apenas diminui os custos operacionais, mas também contribui diretamente para a preservação do meio ambiente, reduzindo a emissão de gases de efeito estufa. Por meio de soluções inteligentes, consultorias especializadas e tecnologias avançadas, podemos ajudar a sua empresa ou residência a identificar e eliminar desperdícios energéticos, promovendo um uso mais consciente e responsável dos recursos disponíveis. Juntos, podemos fazer a diferença no combate ao desperdício energético.</p>
                </div>
            </section>
        </main>
    );
};

export default Consumo;