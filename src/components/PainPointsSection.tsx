
import React from 'react';
import { cn } from '@/lib/utils';

const painPoints = [
  {
    icon: "🔄",
    title: "",
    description: "Você entende séries, músicas e textos, mas trava pra conversar"
  },
  {
    icon: "⏱️",
    title: "",
    description: "Já estudou por anos, mas sente que não evolui mais"
  },
  {
    icon: "😓",
    title: "",
    description: "Tem vocabulário, mas não consegue formar frases com naturalidade"
  },
  {
    icon: "🎯",
    title: "",
    description: "Já fez vários cursos, mas continua preso no mesmo nível"
  }
];

const PainPointsSection = () => {
  return (
    <section id="painPoints" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Por que?</span>
          </div>
          <h2 className="section-title">
          Se você já tentou de tudo, mas ainda não consegue <span className='text-gradient font-bold'> falar com segurança</span>, isso aqui é pra você.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 card-hover",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4 text-4xl text-center md:text-left">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center md:text-left">{point.title}</h3>
              <p className="text-gray-300 text-center md:text-left">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-200 max-w-3xl mx-auto">
          Se você se identificou com <span className='text-gradient font-bold'> qualquer uma dessas situações</span>, você não está sozinho.
          </p>
          <p className="text-xl font-medium text-gray-200 max-w-3xl mx-auto">
          A maioria das pessoas trava no intermediário porque os métodos param de funcionar nessa fase.
          </p>
          <p className="text-xl font-medium text-gray-200 max-w-3xl mx-auto">
          <span className='text-gradient font-bold'>  O Método VM</span> foi feito exatamente pra esse momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
