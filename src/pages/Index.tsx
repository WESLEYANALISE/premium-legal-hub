
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Benefits from '@/components/Benefits';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DeviceMessage from '@/components/DeviceMessage';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { isAndroid, isIOS } = useDeviceDetect();
  const { toast } = useToast();
  
  // Detectar automaticamente o dispositivo e mostrar notificação adequada
  useEffect(() => {
    if (isAndroid) {
      toast({
        title: "App Android Detectado",
        description: "Clique no botão para baixar da Google Play Store",
        duration: 5000,
      });
    } else if (isIOS) {
      toast({
        title: "Dispositivo iOS Detectado",
        description: "Clique no botão para baixar da App Store",
        duration: 5000,
      });
    } else {
      toast({
        title: "Acesso via Computador",
        description: "Para uma experiência completa, adquira pelo seu celular",
        duration: 5000,
      });
    }
  }, [isAndroid, isIOS, toast]);

  useEffect(() => {
    // Configurar o título do documento
    document.title = "Direito Premium - O melhor aplicativo jurídico";
    
    // Animação de scroll suave
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const hiddenElements = document.querySelectorAll('.benefit-card');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-law-dark flex flex-col">
      <DeviceMessage />
      <Header />
      <main>
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
