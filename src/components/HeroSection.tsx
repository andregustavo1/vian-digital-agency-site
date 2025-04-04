
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/551151922656?text=Olá,%20gostaria%20de%20conhecer%20os%20resultados%20do%20Grupo%20Vian";

  return (
    <section id="início" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-vian-wine to-vian-red opacity-90 z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      
      <div className='max-w-[1280px] mx-auto w-full relative'>
      <div className="container-section mx-0 z-10 text-white">
        <div className="max-w-2xl opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Tráfego Pago que Converte de Verdade
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-0 animate-fade-in animate-delay-200">
            Estratégias de Anúncios que Entregam ROI Mensurável
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-vian-wine hover:bg-vian-neutral hover:text-vian-red transition-colors duration-300 mt-4 opacity-0 animate-fade-in animate-delay-300 group"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Conheça Nossos Resultados
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="absolute right-0 top-0 w-1/2 opacity-0 animate-fade-in-right animate-delay-400 hidden lg:block">
          <div className="relative ml-20">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded p-4">
                  <div className="h-4 w-20 bg-white/30 rounded mb-2"></div>
                  <div className="h-8 w-32 bg-white/40 rounded-lg"></div>
                </div>
                <div className="bg-white/20 rounded p-4">
                  <div className="h-4 w-16 bg-white/30 rounded mb-2"></div>
                  <div className="h-8 w-28 bg-white/40 rounded-lg"></div>
                </div>
                <div className="bg-white/20 rounded p-4">
                  <div className="h-4 w-24 bg-white/30 rounded mb-2"></div>
                  <div className="h-8 w-full bg-white/40 rounded-lg"></div>
                </div>
                <div className="bg-white/20 rounded p-4">
                  <div className="h-4 w-20 bg-white/30 rounded mb-2"></div>
                  <div className="h-8 w-3/4 bg-white/40 rounded-lg"></div>
                </div>
              </div>
              <div className="mt-4 h-32 bg-white/20 rounded-lg overflow-hidden">
                <div className="h-full w-full flex items-end p-2">
                  <div className="h-50% w-6 bg-vian-red/70 rounded"></div>
                  <div className="h-70% w-6 bg-vian-red/70 rounded mx-1"></div>
                  <div className="h-60% w-6 bg-vian-red/70 rounded mx-1"></div>
                  <div className="h-90% w-6 bg-vian-red/70 rounded mx-1"></div>
                  <div className="h-75% w-6 bg-vian-red/70 rounded mx-1"></div>
                  <div className="h-85% w-6 bg-vian-red/70 rounded mx-1"></div>
                  <div className="h-95% w-6 bg-vian-red/70 rounded mx-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
