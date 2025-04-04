
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-section">
        <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Grupo</span>
              <span className="text-vian-red"> Vian</span>
            </div>
            <p className="text-gray-400 text-sm">
              Soluções estratégicas de tráfego pago para negócios que buscam escalar resultados digitais.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Resultados', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Remarketing'].map((item) => (
                <li key={item}>
                  <a 
                    href="#serviços"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+551151922656"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +55 11 5192-2656
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@grupovian.com.br"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contato@grupovian.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/grupo_vian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  grupo_vian
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2025 Grupo Vian. Todos os direitos reservados.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-vian-wine text-white p-2 rounded-full hover:bg-vian-red transition-colors duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
