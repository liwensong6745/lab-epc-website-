import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import ProductArchitecture from "@/components/home/ProductArchitecture";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedCases from "@/components/home/FeaturedCases";
import ServiceCards from "@/components/home/ServiceCards";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ProductArchitecture />
      <StatsCounter />
      <FeaturedCases />
      <ServiceCards />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
