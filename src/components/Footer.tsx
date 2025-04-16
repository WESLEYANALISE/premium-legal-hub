
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-12 bg-law-darker">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              O melhor aplicativo jurídico com tudo o que você precisa para estudar e trabalhar.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-law-red transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-law-red transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-law-red transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-law-red transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Acesso Vitalício</h3>
            <p className="text-gray-400 mb-2">
              Pague uma única vez e tenha acesso vitalício a todo o conteúdo!
            </p>
            <p className="text-2xl font-bold text-law-red">
              R$49,99
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Direito Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
