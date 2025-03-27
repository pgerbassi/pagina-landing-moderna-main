
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import MethodSection from '@/components/MethodSection';
import BenefitsSection from '@/components/BenefitsSection';
import OfferSection from '@/components/OfferSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set page title
    document.title = "Transforme Sua Vida | Método Exclusivo";
    
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    // Target all sections for animation
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <PainPointsSection />
      <MethodSection />
      <BenefitsSection />
      <OfferSection />
      <CTASection />
    </div>
  );
};

export default Index;
