import HeroSection from "@/components/home/HeroSection";
import ServiceCards from "@/components/home/ServiceCards";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedCases from "@/components/home/FeaturedCases";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ClientLogos from "@/components/home/ClientLogos";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <StatsCounter />
      <FeaturedCases />
      <ProcessTimeline />
      <ClientLogos />
      <CTASection />
    </>
  );
}
