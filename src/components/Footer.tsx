
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Brand<span className="text-primary">Logo</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transformando vidas através de métodos comprovados e abordagens inovadoras. Nossa missão é ajudar você a alcançar seu verdadeiro potencial.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@empresa.com.br</li>
              <li>+55 (11) 9999-9999</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
