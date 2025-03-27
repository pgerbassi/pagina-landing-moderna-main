
import React from 'react';
import { PackageCheck, Clock, Users } from 'lucide-react';

const benefits = [
  {
    icon: <PackageCheck className="w-12 h-12 text-primary" />,
    title: "Mini curso com passo a passo prático",
    description: ""
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Acesso vitalício ao conteúdo",
    description: ""
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Técnicas diárias para ativar sua fluência",
    description: ""
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A1F2C] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1F2C] to-transparent"></div>
        <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Benefícios</span>
          </div>
          <h2 className="section-title">
          Ao entrar hoje no Método VM, você recebe:
          </h2>
        </div>

        <div className="space-y-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-secondary/90 to-secondary/60 border border-white/10 shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0 bg-background/60 p-4 rounded-xl shadow-sm border border-white/5 mx-auto md:mx-0">
                {benefit.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
