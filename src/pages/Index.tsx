
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/ServicesSection';
import MethodologySection from '../components/MethodologySection';
import ResultsSection from '../components/ResultsSection';
import ContactSection from '../components/ContactSection';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';

const Index = () => {
  const [sections, setSections] = useState<Element[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animElements = entry.target.querySelectorAll('.opacity-0');
          animElements.forEach(el => {
            (el as HTMLElement).style.opacity = '1';
          });
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll('section');
    setSections(Array.from(sectionElements));
    
    sectionElements.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sectionElements.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgressBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <MethodologySection />
      <ResultsSection />
      <ContactSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
