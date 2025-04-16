
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const { toast } = useToast();
  const { isAndroid, isIOS, isMobile } = useDeviceDetect();
  
  const handleCTAClick = () => {
    if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
    } else if (isIOS) {
      window.open('https://apps.apple.com/us/app/direito-premium/id6451451647', '_blank');
    } else {
      toast({
        title: "Adquira pelo seu celular",
        description: "Para uma experiência completa, baixe o aplicativo em seu dispositivo móvel.",
        duration: 5000,
      });
    }
  };
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-law-red/10 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Adquira o seu agora e tenha acesso vitalício!
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Pague apenas uma vez e tenha acesso para sempre a todo o conteúdo premium. 
            Estude onde e quando quiser com o melhor aplicativo jurídico disponível.
          </p>
          
          <button 
            onClick={handleCTAClick}
            className="cta-button group bg-law-red hover:bg-law-accent text-white font-medium text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-law-red/20"
          >
            <div className="flex items-center justify-center gap-2">
              <span>Comprar Agora por R$49,99 – Acesso Vitalício!</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
          
          <div className="mt-8 text-gray-400 text-sm">
            <p>
              {isMobile ? 
                'Você será redirecionado para a loja de aplicativos' : 
                'Escaneie o código QR ou acesse pelo celular para download'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
