import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCars } from "@/components/home/FeaturedCars";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCars />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
