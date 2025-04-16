
import React from 'react';
import BenefitCard from './BenefitCard';
import { BookOpen, FileText, Search, Code, Bot, FileDigit, Brain, FileCheck, Video, Book } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Mais de 20.000 Flashcards",
      icon: <BookOpen className="h-12 w-12" />,
    },
    {
      title: "Mais de 6.000 questões comentadas",
      icon: <FileText className="h-12 w-12" />,
    },
    {
      title: "Mais de 600 livros jurídicos",
      icon: <Book className="h-12 w-12" />,
    },
    {
      title: "Todos os Códigos atualizados",
      icon: <Code className="h-12 w-12" />,
    },
    {
      title: "Assistente Jurídico Inteligente",
      icon: <Bot className="h-12 w-12" />,
    },
    {
      title: "Mais de 200 resumos prontos",
      icon: <FileDigit className="h-12 w-12" />,
    },
    {
      title: "Mapas Mentais e Gerador",
      icon: <Brain className="h-12 w-12" />,
    },
    {
      title: "Mais de 10.000 Contratos e Petições",
      icon: <FileCheck className="h-12 w-12" />,
    },
    {
      title: "Cursos jurídicos de qualidade",
      icon: <Search className="h-12 w-12" />,
    },
    {
      title: "Mais de 400 vídeo-aulas exclusivas",
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
