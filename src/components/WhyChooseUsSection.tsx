
import { Globe, Target, BarChart2, FileText } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: 'Expertise Multi-plataforma',
      icon: <Globe className="h-10 w-10 text-white" />,
      description: 'Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads e mais'
    },
    {
      title: 'Estratégia Personalizada',
      icon: <Target className="h-10 w-10 text-white" />,
      description: 'Campanhas desenvolvidas para seu público e objetivos específicos'
    },
    {
      title: 'Análise Avançada',
      icon: <BarChart2 className="h-10 w-10 text-white" />,
      description: 'Monitoramento constante e otimização baseada em dados'
    },
    {
      title: 'Gestão Transparente',
      icon: <FileText className="h-10 w-10 text-white" />,
      description: 'Relatórios claros e comunicação aberta sobre performance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#4A0000] via-vian-wine to-vian-red overflow-hidden">
      <div className="container-section text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-0 animate-fade-in">Por Que Nos Escolher?</h2>
          <p className="text-xl opacity-0 animate-fade-in animate-delay-100">Tráfego pago com foco em resultados mensuráveis</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 opacity-0 animate-fade-in card-hover"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="bg-vian-red/30 p-4 rounded-full inline-block mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
