
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const whatsappUrl = "https://wa.me/551151922656?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Grupo%20Vian";

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-8',
        scrolled ? 'glass-solid py-3' : 'glass-effect py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold">
          <span className={cn(
            'transition-colors duration-300',
            scrolled ? 'text-vian-wine' : 'text-white'
          )}>Grupo</span>
          <span className={cn(
            'transition-colors duration-300',
            scrolled ? 'text-vian-red' : 'text-white'
          )}> Vian</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {['Início', 'Sobre', 'Serviços', 'Resultados', 'Contato'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'font-montserrat text-sm transition-colors duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-vian-red after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100',
                scrolled ? 'text-vian-wine' : 'text-white'
              )}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <Button 
          className={cn(
            'bg-vian-red hover:bg-vian-wine text-white transition-colors duration-300',
            scrolled ? 'text-white' : 'text-white'
          )}
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          Fale com um Especialista
        </Button>
      </div>
    </header>
  );
};

export default Header;
