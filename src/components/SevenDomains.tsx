import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale, 
  Lightbulb, 
  Heart, 
  Shield, 
  Coins, 
  Waves, 
  Sparkles 
} from "lucide-react";
import domainsImage from "@/assets/seven-domains.jpg";

const domains = [
  {
    name: "Justice",
    continent: "Africa",
    value: "Ubuntu + Sovereignty",
    prototype: "AI Legal Mesh",
    icon: Scale,
    color: "text-red-400",
    description: "Ubuntu philosophy meets AI-powered legal frameworks for equitable justice"
  },
  {
    name: "Innovation",
    continent: "North America",
    value: "Equity-first AGI",
    prototype: "AEGIS Platform",
    icon: Lightbulb,
    color: "text-blue-400",
    description: "Democratic access to artificial general intelligence"
  },
  {
    name: "Wisdom",
    continent: "Asia",
    value: "Moral Code + Harmony",
    prototype: "Ethical AI Academy",
    icon: Heart,
    color: "text-yellow-400",
    description: "Ancient wisdom traditions guide modern ethical AI development"
  },
  {
    name: "Resilience",
    continent: "South America",
    value: "Nature-led Tech",
    prototype: "Planetary Sensor Grid",
    icon: Shield,
    color: "text-green-400",
    description: "Indigenous knowledge systems inform climate technology"
  },
  {
    name: "Prosperity",
    continent: "Europe",
    value: "Trust-based Economics",
    prototype: "New Currencies, Micro-Insurance",
    icon: Coins,
    color: "text-purple-400",
    description: "Reimagining economic systems based on mutual trust"
  },
  {
    name: "Unity",
    continent: "Oceania",
    value: "Post-National Governance",
    prototype: "Digital Commons Constitution",
    icon: Waves,
    color: "text-cyan-400",
    description: "Ocean-inspired fluid governance for global cooperation"
  },
  {
    name: "Spirit",
    continent: "Indigenous Global",
    value: "Sacred Intelligence",
    prototype: "Soul-based Ethics in AI",
    icon: Sparkles,
    color: "text-orange-400",
    description: "Sacred wisdom guides technology's spiritual development"
  }
];

export const SevenDomains = () => {
  return (
    <section className="py-20 px-6 bg-gradient-planetary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            The 7 Domains of PACT-7
          </h2>
          <p className="text-xl text-stellar-white/80 max-w-3xl mx-auto">
            Continental wisdom traditions meet cutting-edge technology in a global framework for conscious governance.
          </p>
        </div>
        
        {/* Background image */}
        <div className="mb-12 relative h-64 rounded-2xl overflow-hidden">
          <img 
            src={domainsImage} 
            alt="Seven interconnected domains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-space/60 to-transparent" />
        </div>
        
        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <Card 
                key={domain.name}
                className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 cursor-pointer bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-cosmic">
                      <IconComponent className={`w-8 h-8 ${domain.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-stellar-white group-hover:text-cosmic-accent transition-colors">
                    {domain.name}
                  </CardTitle>
                  <CardDescription className="text-cosmic-primary font-semibold">
                    {domain.continent}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm font-medium text-cosmic-accent">
                    {domain.value}
                  </p>
                  <p className="text-xs text-stellar-white/70 font-mono bg-muted/20 px-2 py-1 rounded">
                    {domain.prototype}
                  </p>
                  <p className="text-sm text-stellar-white/80 leading-relaxed">
                    {domain.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
          
          {/* Central PACT-7 card */}
          <Card className="lg:col-span-3 xl:col-span-1 bg-gradient-cosmic hover:shadow-glow transition-all duration-500 border-cosmic-accent">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-stellar-white/20">
                  <Sparkles className="w-10 h-10 text-cosmic-accent animate-pulse-cosmic" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-stellar-white">
                PACT-7 Core
              </CardTitle>
              <CardDescription className="text-cosmic-accent font-semibold">
                Global Integration
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-stellar-white mb-4">
                Where all domains converge in conscious harmony for planetary transformation.
              </p>
              <Button variant="hero" className="w-full">
                Explore Integration
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="constitutional" size="lg" className="text-lg px-12 py-4">
            Explore Each Domain
          </Button>
        </div>
      </div>
    </section>
  );
};