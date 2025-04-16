
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard = ({ title, description, icon, delay }: BenefitCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "benefit-card h-[200px] cursor-pointer perspective-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full bg-gradient-to-br from-law-darker to-muted p-6 rounded-xl border border-law-red/10 shadow-lg flex flex-col items-center justify-center">
            <div className="text-law-red mb-4">
              {icon}
            </div>
            <h3 className="text-center text-white font-medium text-lg">{title}</h3>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-law-darker to-muted p-6 rounded-xl border border-law-red/10 shadow-lg flex items-center justify-center">
            <p className="text-center text-gray-300 text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
