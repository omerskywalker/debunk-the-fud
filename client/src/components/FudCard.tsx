import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface FudCardProps {
  fud: string;
  rebuttal: string;
  index: number;
}

function HighlightedRebuttal({ text }: { text: string }) {
  const highlights: Record<number, string[]> = {
    0: ['surplus energy', 'renewable sources', 'turns excess waste into treasure'],
    1: ['increasing stability', '4-year timespan', 'always gone up', 'limited supply'],
    2: ['Less than 0.34%', 'more transparent and traceable than cash'],
    3: ['decentralized network', 'only 21 million', 'store of value', 'medium of exchange'],
    4: ['easily transferred across the globe', 'stored securely', 'divided into smaller units'],
    5: ['billions of USD', 'not spent a single unit in over a decade'],
    6: ['Satoshi Nakamoto', 'openly discussed', 'open-source developers'],
    7: ['Lightning Network', 'near instant payments', 'extremely low fees', 'Money always scales in layers'],
    8: ['brightest open-source developers', 'Lightning Network', 'Liquid', 'Fediments'],
    9: ['decentralized nature', 'impossible to ban outright', 'Nations are now beginning to embrace it'],
    10: ['declared dead numerous times', 'consistently recovered', 'antifragile technology'],
    11: ['network effects', 'cannot be replicated', '15 years'],
    12: ['El Salvador', 'best store of value', 'multi-year timeframes'],
    13: ['highly secure', 'virtually impossible to hack', 'over 1 trillion USD'],
    14: ['satellite communication', 'SMS', 'HAM radio', 'mesh networks']
  };

  return (
    <p className="text-sm md:text-base text-center text-primary leading-relaxed font-medium">
      {text.split(/\b/).map((word, i) => {
        const wordIndex = Object.keys(highlights).find(k => parseInt(k) === Math.floor(i / text.length * 15));
        const cardHighlights = highlights[wordIndex as any] || [];
        const isHighlighted = cardHighlights.some(phrase => 
          text.toLowerCase().includes(phrase.toLowerCase()) && 
          word.toLowerCase().includes(phrase.toLowerCase().split(' ')[0])
        );
        
        return isHighlighted ? (
          <span key={i} className="text-white font-semibold">{word}</span>
        ) : (
          <span key={i}>{word}</span>
        );
      })}
    </p>
  );
}

export default function FudCard({ fud, rebuttal, index }: FudCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const highlights: Record<number, string[]> = {
    0: ['surplus energy', 'renewable sources', 'turns excess waste into treasure'],
    1: ['increasing stability', '4-year timespan', 'always gone up', 'limited supply'],
    2: ['Less than 0.34%', 'more transparent and traceable than cash'],
    3: ['decentralized network', 'only 21 million', 'store of value', 'medium of exchange'],
    4: ['easily transferred across the globe', 'stored securely', 'divided into smaller units'],
    5: ['billions of USD', 'not spent a single unit in over a decade'],
    6: ['Satoshi Nakamoto', 'openly discussed', 'open-source developers'],
    7: ['Lightning Network', 'near instant payments', 'extremely low fees', 'Money always scales in layers'],
    8: ['brightest open-source developers', 'Lightning Network', 'Liquid', 'Fediments'],
    9: ['decentralized nature', 'impossible to ban outright', 'Nations are now beginning to embrace it'],
    10: ['declared dead numerous times', 'consistently recovered', 'antifragile technology'],
    11: ['network effects', 'cannot be replicated', '15 years'],
    12: ['El Salvador', 'best store of value', 'multi-year timeframes'],
    13: ['highly secure', 'virtually impossible to hack', 'over 1 trillion USD'],
    14: ['satellite communication', 'SMS', 'HAM radio', 'mesh networks']
  };

  const highlightText = (text: string, phrases: string[]) => {
    let result = text;
    phrases.forEach(phrase => {
      const regex = new RegExp(`(${phrase})`, 'gi');
      result = result.replace(regex, '<span class="text-white font-semibold">$1</span>');
    });
    return result;
  };

  const cardHighlights = highlights[index] || [];
  const highlightedRebuttal = highlightText(rebuttal, cardHighlights);

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
            <p className="text-xl md:text-2xl font-bold text-center leading-tight" data-testid={`text-fud-${index}`}>
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
            <div 
              className="text-sm md:text-base text-center text-primary leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: highlightedRebuttal }}
              data-testid={`text-rebuttal-${index}`}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
