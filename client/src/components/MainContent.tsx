import { useEffect, useState } from 'react';
import FudCard from './FudCard';

const fudData = [
  {
    fud: "Bitcoin wastes too much energy",
    rebuttal: "Bitcoin mining often utilizes surplus energy from renewable sources or energy that would otherwise be wasted, since homeless energy cannot be stored without leakage. Bitcoin mining turns excess waste into treasure."
  },
  {
    fud: "Bitcoin is too volatile",
    rebuttal: "Bitcoin's price was highly volatile in its infancy but has shown increasing stability as it matures. Over any 4-year timespan, the price has always gone up due to the limited supply and increased demand."
  },
  {
    fud: "Bitcoin is used for illicit activity",
    rebuttal: "Less than 0.34% of transactions are related to illicit activities. Bitcoin transactions are more transparent and traceable than cash, making it easier for authorities to track."
  },
  {
    fud: "Bitcoin has no intrinsic value",
    rebuttal: "Bitcoin's intrinsic value comes from its decentralized network, scarcity (only 21 million bitcoins will ever exist), security, and its utility as a store of value and medium of exchange."
  },
  {
    fud: "Bitcoin isn't tangible",
    rebuttal: "Bitcoin's digital nature allows it to be easily transferred across the globe, stored securely in a digital wallet, and divided into smaller units for transactions, making it highly practical."
  },
  {
    fud: "Bitcoin's creator will dump his coins",
    rebuttal: "Satoshi Nakamoto, the creator of Bitcoin, has remained inactive for years with billions of USD value in BTC. It is unlikely that the creator will sell his coins, since he has not spent a single unit in over a decade."
  },
  {
    fud: "Bitcoin was created by the NSA",
    rebuttal: "Bitcoin's early development was spearheaded by Satoshi Nakamoto. Consequent development was openly discussed via public forums, and contributions were made by open-source developers."
  },
  {
    fud: "Bitcoin is too slow",
    rebuttal: "Bitcoin's base-layer immutable transactions can take 10 minutes, but solutions like the Lightning Network enable near instant payments for extremely low fees. Money always scales in layers."
  },
  {
    fud: "Bitcoin can't scale",
    rebuttal: "Bitcoin's scalability is being developed by some of the brightest open-source developers through various solutions, such as the Lightning Network, Liquid, Fediments, etc."
  },
  {
    fud: "Bitcoin will be banned",
    rebuttal: "While some governments may attempt to restrict Bitcoin, its decentralized nature makes it impossible to ban outright. It's similar to a government attempting to ban the internet. Nations are now beginning to embrace it."
  },
  {
    fud: "Bitcoin is a bubble",
    rebuttal: "Bitcoin has been declared dead numerous times, yet it has consistently recovered and grown stronger. Its resilience and increasing adoption suggest it is not just a passing bubble but an antifragile technology."
  },
  {
    fud: "Bitcoin can be cloned",
    rebuttal: "While Bitcoin's code can be copied, its network effects, security, and widespread adoption cannot be replicated. Clones lack the trust and infrastructure that Bitcoin has built over 15 years."
  },
  {
    fud: "Bitcoin fails as a currency",
    rebuttal: "Bitcoin is being used as a currency in several places, including El Salvador. Its adoption as a means of payment is growing, and it also serves as the best store of value over multi-year timeframes."
  },
  {
    fud: "Bitcoin can be hacked",
    rebuttal: "Bitcoin's blockchain has proven to be highly secure. The network's decentralized nature and cryptographic security make it virtually impossible to hack. The network currently stores over 1 trillion USD in value."
  },
  {
    fud: "Bitcoin needs internet to survive",
    rebuttal: "Bitcoin transactions can be conducted using alternative methods such as satellite communication, SMS, HAM radio, and mesh networks, ensuring it can function even in areas with limited internet access."
  }
];

export default function MainContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-16 space-y-4 animate-scale-in">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{
              color: 'white',
              WebkitTextStroke: '2px hsl(var(--primary))',
              textShadow: '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)'
            }}
            data-testid="heading-main"
          >
            DEBUNK THE FUD
          </h1>
          <p 
            className="text-xl md:text-2xl text-primary font-medium"
            data-testid="text-subheading"
          >
            in under 5 minutes
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          data-testid="grid-fud-cards"
        >
          {fudData.map((item, index) => (
            <FudCard
              key={index}
              fud={item.fud}
              rebuttal={item.rebuttal}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
