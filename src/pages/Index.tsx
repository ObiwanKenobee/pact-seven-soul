import { HeroSection } from "@/components/HeroSection";
import { SevenDomains } from "@/components/SevenDomains";
import { FoundationalCharter } from "@/components/FoundationalCharter";
import { PlanetaryStewards } from "@/components/PlanetaryStewards";
import { PhaseOne } from "@/components/PhaseOne";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SevenDomains />
      <FoundationalCharter />
      <PlanetaryStewards />
      <PhaseOne />
    </div>
  );
};

export default Index;
