import HeroSection from "@/components/home/HeroSection";
import MagazineSpread from "@/components/home/MagazineSpread";
import TrustBar from "@/components/home/TrustBar";
import ActionCards from "@/components/home/ActionCards";
import ImageGallery from "@/components/home/ImageGallery";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MagazineSpread />
      <TrustBar />
      <ActionCards />
      <ImageGallery />
      <CTASection />
    </>
  );
}
