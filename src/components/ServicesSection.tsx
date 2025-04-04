
import { Search, Image, Briefcase, Megaphone, Users, FileSearch } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Google Ads',
      icon: <Search className="h-8 w-8 text-vian-red" />,
      description: 'Campanhas na rede de pesquisa, display, shopping e YouTube'
    },
    {
      title: 'Meta Ads',
      icon: <Image className="h-8 w-8 text-vian-red" />,
      description: 'Anúncios no Facebook, Instagram e Messenger'
    },
    {
      title: 'LinkedIn Ads',
      icon: <Briefcase className="h-8 w-8 text-vian-red" />,
      description: 'Campanhas B2B para geração de leads qualificados'
    },
    {
      title: 'TikTok Ads',
      icon: <Megaphone className="h-8 w-8 text-vian-red" />,
      description: 'Estratégias para engajamento e conversão em público jovem'
    },
    {
      title: 'Remarketing Avançado',
      icon: <Users className="h-8 w-8 text-vian-red" />,
      description: 'Recuperação de leads e carrinho abandonado'
    },
    {
      title: 'Landing Pages Otimizadas',
      icon: <FileSearch className="h-8 w-8 text-vian-red" />,
      description: 'Desenvolvimento de páginas de alta conversão'
    }
  ];

  return (
    <section id="serviços" className="container-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title opacity-0 animate-fade-in">Serviços de Tráfego Pago</h2>
        <p className="text-lg text-gray-600 opacity-0 animate-fade-in animate-delay-100">
          Potencialize seus resultados com estratégias multidimensionais de tráfego pago
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 opacity-0 animate-fade-in card-hover"
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            <div className="bg-vian-neutral p-4 rounded-full inline-block mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-vian-wine mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-600">
          Cada serviço é adaptado às suas necessidades específicas, garantindo o melhor retorno possível sobre o investimento.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
