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
      <div className="max-w-5xl px-6 text-center animate-fade-in">
        <blockquote className="font-mono text-xl md:text-3xl lg:text-4xl italic text-white leading-relaxed font-medium"
          style={{
            textShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3), 0 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          "If you don't believe me or don't get it,<br />
          I don't have time to try to convince you, sorry."
        </blockquote>
        <p className="mt-8 text-primary text-lg md:text-2xl font-semibold tracking-wide">
          - Satoshi Nakamoto
        </p>
      </div>
    </div>
  );
}
