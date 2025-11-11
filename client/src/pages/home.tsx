import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
}
