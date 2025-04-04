
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Telefone',
      value: '+55 11 5192-2656',
      link: 'tel:+551151922656'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'E-mail',
      value: 'contato@grupovian.com.br',
      link: 'mailto:contato@grupovian.com.br'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: 'Instagram',
      value: 'grupo_vian',
      link: 'https://instagram.com/grupo_vian'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Localização',
      value: 'São Paulo/SP',
      link: 'https://maps.google.com/?q=São+Paulo,SP'
    }
  ];

  return (
    <section id="contato" className="container-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title opacity-0 animate-fade-in">Entre em Contato</h2>
        <p className="text-lg text-gray-600 opacity-0 animate-fade-in animate-delay-100">
          Transforme seus investimentos em mídia em resultados reais
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="opacity-0 animate-fade-in animate-delay-200">
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-vian-red rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-vian-wine rounded-lg opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-vian-wine mb-6">Como Podemos Ajudar?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-vian-neutral/30 p-4 rounded-lg hover:bg-vian-neutral/50 transition-colors duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="bg-vian-red/20 p-2 rounded-full text-vian-red group-hover:bg-vian-red group-hover:text-white transition-colors duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{item.title}</div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 text-gray-600">
                <p>Estamos ansiosos para entender seu negócio e desenvolver uma estratégia personalizada para seus objetivos.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-in-right animate-delay-300">
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-vian-wine to-vian-red rounded-xl overflow-hidden flex items-center justify-center">
              <div className="relative z-10 text-white text-center px-6">
                <h3 className="text-2xl font-bold mb-4">Estratégia Personalizada</h3>
                <p className="mb-8">Cada negócio é único. Nossa abordagem é personalizada para suas necessidades específicas.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl font-bold">126%</div>
                    <div className="text-sm opacity-80">ROI Médio</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl font-bold">42%</div>
                    <div className="text-sm opacity-80">Redução de CAC</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://wa.me/551151922656?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Grupo%20Vian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-vian-wine font-medium px-6 py-3 rounded-lg hover:bg-vian-neutral transition-colors duration-300"
                  >
                    Agende uma Consultoria
                  </a>
                </div>
              </div>
              
              <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
