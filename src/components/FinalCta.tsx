
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCta = () => {
  const whatsappUrl = "https://wa.me/551151922656?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20com%20o%20Grupo%20Vian";

  return (
    <section className="py-20 bg-gradient-to-r from-[#4A0000] via-vian-wine to-vian-red">
      <div className="container-section text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
            Pronto para Escalar seus Resultados Digitais?
          </h2>
          <p className="text-xl mb-10 opacity-0 animate-fade-in animate-delay-100">
            Agende uma consultoria gratuita e descubra o potencial do tráfego pago estratégico
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-vian-wine hover:bg-vian-neutral hover:text-vian-red font-medium opacity-0 animate-fade-in animate-delay-200 group"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Agendar Consultoria
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
