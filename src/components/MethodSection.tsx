
import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Contexto real:',
    description: 'Idioma focado no seu cenário'
  },
  {
    number: '02',
    title: 'Desbloqueio da fala: ',
    description: 'Através de exercício ativo da fala'
  },
  {
    number: '03',
    title: 'Prática estratégica:',
    description: 'Com aplicação diária'
  }
];

const MethodSection = () => {
  return (
    <section className="section-padding bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Nossa Metodologia</span>
          </div>
          <h2 className="section-title">
          O que é o <span className="text-gradient">Método VM?</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          O <span className='text-gradient font-bold'>Vocabulary Multiplier</span> é um método direto, prático e 100% voltado pra <span className='text-gradient font-bold'>tirar você do intermediário.</span>

          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          <span className='text-gradient font-bold'>O método trabalha 3 pilares:</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-secondary/80 rounded-xl border border-white/10 p-8 shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-white text-center md:text-left">{step.title}</h3>
                <p className="text-gray-300 mb-6 text-center md:text-left">{step.description}</p>
                {/*
                <ul className="space-y-2">
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </span>
                    <span className="text-sm text-gray-300">Resultados rápidos</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </span>
                    <span className="text-sm text-gray-300">Abordagem científica</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </span>
                    <span className="text-sm text-gray-300">Suporte personalizado</span>
                  </li>
                </ul>
          */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
