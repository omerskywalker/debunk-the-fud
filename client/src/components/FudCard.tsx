import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface FudCardProps {
  fud: string;
  rebuttal: string;
  index: number;
}

export default function FudCard({ fud, rebuttal, index }: FudCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card
        className="relative h-64 cursor-pointer perspective-1000 transition-all duration-300 border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(247,147,26,0.4)]"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 15px rgba(247, 147, 26, 0.2)',
        }}
        onClick={() => {
          setIsFlipped(!isFlipped);
          console.log(`Card ${index + 1} flipped to: ${!isFlipped ? 'rebuttal' : 'fud'}`);
        }}
        data-testid={`card-fud-${index}`}
      >
        <div
          className="relative w-full h-full transition-transform duration-500 preserve-3d"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          <div
            className="absolute inset-0 backface-hidden flex items-center justify-center p-6 bg-card rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-lg md:text-xl font-bold text-center leading-tight" data-testid={`text-fud-${index}`}>
              {fud}
            </p>
          </div>

          <div
            className="absolute inset-0 backface-hidden flex items-center justify-center p-6 bg-card rounded-lg border-2 border-primary/20"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <p className="text-sm md:text-base text-center text-primary leading-relaxed font-medium" data-testid={`text-rebuttal-${index}`}>
              {rebuttal}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
