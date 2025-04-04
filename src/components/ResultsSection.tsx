
import { ArrowUpRight } from 'lucide-react';

const ResultsSection = () => {
  const cases = [
    {
      title: 'E-commerce Setor Moda',
      metric: '137%',
      description: 'Aumento em ROAS',
      color: 'from-amber-500 to-red-500'
    },
    {
      title: 'SaaS B2B',
      metric: '42%',
      description: 'Redução no CAC',
      color: 'from-blue-500 to-violet-500'
    },
    {
      title: 'Marketplace Local',
      metric: '89%',
      description: 'Crescimento em tráfego qualificado',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Infoproduto',
      metric: '215%',
      description: 'Aumento em taxa de conversão',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="resultados" className="container-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title opacity-0 animate-fade-in">Resultados Reais</h2>
        <p className="text-lg text-gray-600 opacity-0 animate-fade-in animate-delay-100">
          Cases de sucesso que comprovam a eficiência de nossas estratégias
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
        {cases.map((item, index) => (
          <div 
            key={index}
            className="rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
            <div className="bg-white p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-vian-wine">{item.title}</h3>
                <div className="bg-vian-neutral/50 p-1 rounded-full">
                  <ArrowUpRight className="h-4 w-4 text-vian-red" />
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-4xl font-bold text-vian-red mb-1">{item.metric}</div>
                <div className="text-gray-600">{item.description}</div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-sm text-gray-500">Meta superada</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-vian-neutral/30 rounded-xl p-8 opacity-0 animate-fade-in animate-delay-600">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-vian-wine mb-4">Performance Média</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-600 mb-1">ROAS Médio</div>
              <div className="text-2xl font-bold text-vian-red">4.8x</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-600 mb-1">Redução de CAC</div>
              <div className="text-2xl font-bold text-vian-red">37%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-600 mb-1">Aumento CTR</div>
              <div className="text-2xl font-bold text-vian-red">63%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-600 mb-1">Taxa de Conversão</div>
              <div className="text-2xl font-bold text-vian-red">8.7%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
