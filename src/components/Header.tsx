import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useDeviceDetect } from '@/hooks/use-device-detect';

const Header = () => {
  const { toast } = useToast();
  const { isAndroid, isIOS } = useDeviceDetect();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
    } else if (isIOS) {
      window.open('https://apps.apple.com/us/app/direito-premium/id6451451647', '_blank');
    } else {
      toast({
        title: "Acesso via Celular",
        description: "Para uma experiência completa, adquira pelo seu dispositivo móvel.",
        duration: 5000,
      });
    }
  };

  return (
    <header className="relative w-full py-6 px-4 md:px-8 lg:px-12">
      <div className="absolute inset-0 parallax-bg opacity-30 z-0"></div>
      
      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col items-center justify-center space-y-8">
          <img 
            src="https://imgur.com/vlSmtUg.png" 
            alt="Direito Premium App" 
            className="w-20 h-20 object-contain mb-4 animate-fade-in"
          />
          
          <div 
            className={`mt-8 md:mt-12 flex flex-col items-center space-y-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <button 
              onClick={handleCTAClick} 
              className="group relative overflow-hidden w-full max-w-md mx-auto bg-gradient-to-r from-law-red via-law-accent to-law-red bg-[length:200%_100%] text-white font-medium px-8 py-5 rounded-xl transition-all duration-300 hover:bg-[position:100%_0] hover:scale-105 shadow-xl shadow-law-red/30 animate-pulse-slow"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl md:text-3xl font-serif font-bold">Adquira Agora</span>
                <span className="text-xl md:text-2xl font-serif opacity-90">R$49,99</span>
              </div>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 mx-auto mt-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full animate-shimmer"></div>
            </button>
            
            <div className="text-center">
              <p className="text-sm md:text-base text-white/90 font-medium tracking-wider uppercase bg-gradient-to-r from-law-red to-law-accent bg-clip-text text-transparent animate-pulse-slow">
                Pagamento Único • Acesso Vitalício • Zero Mensalidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
