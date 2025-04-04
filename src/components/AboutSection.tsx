
import { Check, BarChart3, Layers, RefreshCw, FileText } from 'lucide-react';

const AboutSection = () => {
  const features = [
    { 
      title: 'Estratégias data-driven', 
      icon: <BarChart3 className="h-6 w-6 text-vian-red" />,
      description: 'Decisões baseadas em dados concretos para maximizar resultados' 
    },
    { 
      title: 'Campanhas multi-plataforma', 
      icon: <Layers className="h-6 w-6 text-vian-red" />,
      description: 'Presença em múltiplos canais para alcançar seu público-alvo' 
    },
    { 
      title: 'Otimização contínua', 
      icon: <RefreshCw className="h-6 w-6 text-vian-red" />,
      description: 'Análise e ajustes constantes para melhor performance' 
    },
    { 
      title: 'Relatórios transparentes', 
      icon: <FileText className="h-6 w-6 text-vian-red" />,
      description: 'Comunicação clara sobre o desempenho de suas campanhas' 
    }
  ];

  return (
    <section id="sobre" className="container-section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="section-title opacity-0 animate-fade-in">Sobre o Grupo Vian</h2>
          <p className="text-lg leading-relaxed mb-6 opacity-0 animate-fade-in animate-delay-100">
            O Grupo Vian é especialista em estratégias de tráfego pago para empresas que buscam crescimento acelerado e ROI mensurável. Focamos em desenvolver campanhas personalizadas que não apenas geram impressões e cliques, mas conversões reais e qualificadas.
          </p>
          <p className="text-lg leading-relaxed mb-8 opacity-0 animate-fade-in animate-delay-200">
            Nossa abordagem analítica e orientada a dados garantem que cada investimento em mídia traga resultados consistentes e escaláveis.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 opacity-0 animate-fade-in animate-delay-300">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-vian-neutral/50 transition-colors duration-300">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-vian-wine">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative h-[500px] opacity-0 animate-fade-in-right">
          <div className="absolute top-0 left-0 w-full h-full bg-vian-wine/5 rounded-lg transform rotate-3"></div>
          <div className="absolute top-5 left-5 w-full h-full bg-vian-red/10 rounded-lg transform -rotate-2"></div>
          <div className="relative bg-white shadow-xl rounded-lg p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="h-4 w-24 bg-vian-wine/20 rounded"></div>
                <div className="h-6 w-32 bg-vian-red/20 rounded mt-2"></div>
              </div>
              <div className="bg-vian-neutral p-2 rounded-full">
                <BarChart3 className="h-6 w-6 text-vian-red" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-vian-neutral/30 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="text-sm font-medium">ROAS</div>
                  <div className="text-sm font-bold text-vian-red">385%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-vian-red h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="bg-vian-neutral/30 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="text-sm font-medium">CTR</div>
                  <div className="text-sm font-bold text-vian-red">4.7%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-vian-red h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div className="bg-vian-neutral/30 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="text-sm font-medium">CPA</div>
                  <div className="text-sm font-bold text-vian-red">-32%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-vian-red h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div className="bg-vian-neutral/30 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="text-sm font-medium">Taxa de Conversão</div>
                  <div className="text-sm font-bold text-vian-red">7.3%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-vian-red h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
