
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  title: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard = ({ title, icon, delay }: BenefitCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "benefit-card bg-gradient-to-br from-law-darker to-muted p-6 rounded-xl border border-law-red/10 shadow-lg transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="text-law-red mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-center text-white font-medium text-lg">{title}</h3>
    </div>
  );
};

export default BenefitCard;
