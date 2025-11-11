import { useEffect, useState } from 'react';
import heroBackground from '@assets/generated_images/Bitcoin_blockchain_network_background_bca6bfa4.png';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      data-testid="hero-section"
    >
      <div className="max-w-4xl px-6 text-center animate-fade-in">
        <blockquote className="font-mono text-base md:text-lg italic text-primary leading-relaxed">
          "If you don't believe me or don't get it,<br />
          I don't have time to try to convince you, sorry."<br />
          <span className="text-muted-foreground">- Satoshi Nakamoto</span>
        </blockquote>
      </div>
    </div>
  );
}
