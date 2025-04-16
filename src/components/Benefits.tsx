
import React from 'react';
import { BookOpen, Search, Bot, FileDigit, Brain, FileCheck, Video, Book, Scale, Award } from 'lucide-react';
import BenefitCard from './BenefitCard';

const Benefits = () => {
  const benefits = [
    {
      title: "Mais de 20.000 Flashcards",
      description: "Memorize conceitos jurídicos de forma eficiente e rápida com nosso sistema exclusivo de flashcards.",
      icon: <BookOpen className="h-12 w-12" />,
    },
    {
      title: "Mais de 6.000 questões comentadas",
      description: "Pratique com questões atualizadas e comentadas por especialistas para maximizar seu aprendizado.",
      icon: <FileText className="h-12 w-12" />,
    },
    {
      title: "Mais de 600 livros jurídicos",
      description: "Acesse uma biblioteca completa com os principais livros do Direito, sempre à sua disposição.",
      icon: <Book className="h-12 w-12" />,
    },
    {
      title: "Vade Mecum 2025",
      description: "Acesse todas as leis atualizadas e organizadas, com busca rápida e navegação intuitiva.",
      icon: <Scale className="h-12 w-12" />,
    },
    {
      title: "Assistente Jurídico Inteligente",
      description: "IA avançada que lê PDFs, cria resumos e transcreve áudios para otimizar seus estudos.",
      icon: <Bot className="h-12 w-12" />,
    },
    {
      title: "Mais de 200 resumos prontos",
      description: "Economize tempo com resumos completos e atualizados das principais matérias.",
      icon: <FileDigit className="h-12 w-12" />,
    },
    {
      title: "Mapas Mentais e Gerador",
      description: "Organize seu conhecimento visualmente com nossa ferramenta exclusiva de mapas mentais.",
      icon: <Brain className="h-12 w-12" />,
    },
    {
      title: "Mais de 10.000 Contratos e Petições",
      description: "Modelos profissionais prontos para uso, economizando seu tempo na prática jurídica.",
      icon: <FileCheck className="h-12 w-12" />,
    },
    {
      title: "Cursos jurídicos de qualidade",
      description: "Atualize seus conhecimentos com cursos ministrados por especialistas renomados.",
      icon: <Award className="h-12 w-12" />,
    },
    {
      title: "Mais de 400 vídeo-aulas exclusivas",
      description: "Aprenda com aulas dinâmicas e objetivas sobre os temas mais importantes do Direito.",
      icon: <Video className="h-12 w-12" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 relative">
      <div className="absolute inset-0 parallax-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            <span className="text-law-red">Com o Direito Premium</span>, você tem acesso a:
          </h2>
          <div className="h-1 w-24 bg-law-red mx-auto rounded-full shimmer"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={100 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
