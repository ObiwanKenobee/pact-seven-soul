import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SevenDomains } from "@/components/SevenDomains";
import { FoundationalCharter } from "@/components/FoundationalCharter";
import { PlanetaryStewards } from "@/components/PlanetaryStewards";
import { PhaseOne } from "@/components/PhaseOne";
import { WhyPact7 } from "@/components/WhyPact7";
import { TechStack } from "@/components/TechStack";
import { GlobalAlliance } from "@/components/GlobalAlliance";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="domains">
        <SevenDomains />
      </div>
      <div id="charter">
        <FoundationalCharter />
      </div>
      <div id="stewards">
        <PlanetaryStewards />
      </div>
      <div id="phase-one">
        <PhaseOne />
      </div>
      <WhyPact7 />
      <TechStack />
      <div id="alliance">
        <GlobalAlliance />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
