import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';

const ServicesSection = dynamic(() =>
  import('@/components/sections/ServicesSection').then(
    (mod) => mod.ServicesSection,
  ),
);
const AboutSection = dynamic(() =>
  import('@/components/sections/AboutSection').then((mod) => mod.AboutSection),
);
const TestimonialsSection = dynamic(() =>
  import('@/components/sections/TestimonialsSection').then(
    (mod) => mod.TestimonialsSection,
  ),
);
const FAQSection = dynamic(() =>
  import('@/components/sections/FAQSection').then((mod) => mod.FAQSection),
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
