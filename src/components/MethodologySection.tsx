
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, PieChart, Target, BarChart, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const whatsappUrl = "https://wa.me/551151922656?text=Olá,%20gostaria%20de%20conhecer%20o%20processo%20completo%20do%20Grupo%20Vian";
  
  const steps = [
    {
      title: 'Análise e Diagnóstico',
      icon: <Search className="h-8 w-8 text-vian-red" />,
      benefits: ['Entendimento profundo do mercado', 'Identificação de oportunidades'],
      description: 'Analisamos seu mercado, concorrência e público-alvo para identificar as melhores oportunidades de tráfego pago.'
    },
    {
      title: 'Estratégia Personalizada',
      icon: <PieChart className="h-8 w-8 text-vian-red" />,
      benefits: ['Abordagem sob medida', 'Alinhamento com seus objetivos'],
      description: 'Desenvolvemos um plano estratégico adaptado ao seu negócio, considerando objetivos, orçamento e prazos.'
    },
    {
      title: 'Implementação Focada',
      icon: <Target className="h-8 w-8 text-vian-red" />,
      benefits: ['Execução técnica de alta qualidade', 'Monitoramento constante'],
      description: 'Criamos e configuramos campanhas otimizadas com segmentações precisas e mensagens persuasivas.'
    },
    {
      title: 'Análise de Resultados',
      icon: <BarChart className="h-8 w-8 text-vian-red" />,
      benefits: ['Relatórios transparentes', 'Insights acionáveis'],
      description: 'Avaliamos minuciosamente os resultados para identificar o que está funcionando e o que pode ser melhorado.'
    },
    {
      title: 'Otimização Contínua',
      icon: <RefreshCw className="h-8 w-8 text-vian-red" />,
      benefits: ['Melhorias incrementais', 'Adaptação às mudanças'],
      description: 'Ajustamos continuamente as campanhas com base nos dados para maximizar o ROI e a performance.'
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  // Adiciona autoplaying entre os slides (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 1000000000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-vian-neutral">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title opacity-0 animate-fade-in">Metodologia de Resultados</h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in animate-delay-100">
            Nosso processo comprovado para entregar resultados consistentes
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mt-16 opacity-0 animate-fade-in animate-delay-200">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 relative z-10">
            <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
              <div className="bg-vian-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                {activeStep + 1}
              </div>
            </div>
            
            <div className="mt-4 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="bg-vian-neutral p-6 rounded-full">
                    {steps[activeStep].icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-vian-wine mb-4 text-center md:text-left">
                  {steps[activeStep].title}
                </h3>
                
                <ul className="mb-4 space-y-2">
                  {steps[activeStep].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-vian-red/10 p-1 rounded-full mr-2">
                        <div className="w-2 h-2 bg-vian-red rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-gray-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-vian-neutral/50 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-6xl font-bold text-vian-red/20">{activeStep + 1}/5</div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevStep}
                    className="bg-white hover:bg-vian-neutral"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setActiveStep(index)}
                        className={cn(
                          "w-3 h-3 rounded-full transition-all duration-300",
                          activeStep === index ? "bg-vian-red w-6" : "bg-vian-red/30"
                        )}
                        aria-label={`Ir para a etapa ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextStep}
                    className="bg-white hover:bg-vian-neutral"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              className="bg-vian-red hover:bg-vian-wine text-white"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Conhecer Processo Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
