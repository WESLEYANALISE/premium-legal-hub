
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-law-dark px-4">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold text-law-red mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Página não encontrada</p>
        <a href="/" className="inline-flex items-center gap-2 text-law-red hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
