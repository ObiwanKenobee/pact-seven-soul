import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Brain, 
  Shield, 
  Users,
  ArrowRight,
  Clock
} from "lucide-react";

const timelineSteps = [
  {
    era: "Colonialism",
    description: "Extraction and dominance",
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  {
    era: "Nation-States",
    description: "Territorial boundaries",
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  },
  {
    era: "Globalization",
    description: "Economic integration",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    era: "PACT-7",
    description: "Conscious co-creation",
    color: "bg-cosmic-primary/30 text-cosmic-primary border-cosmic-primary/50"
  }
];

const legacyLeaders = [
  { name: "Nelson Mandela", legacy: "Ubuntu & Reconciliation" },
  { name: "Jawaharlal Nehru", legacy: "Non-alignment & Unity" },
  { name: "Kwame Nkrumah", legacy: "Pan-African Vision" },
  { name: "Abraham Lincoln", legacy: "Union & Justice" },
  { name: "Indigenous Elders", legacy: "Sacred Relationship with Earth" }
];

const designPrinciples = [
  {
    title: "Post-Westphalian Cooperation",
    description: "Moving beyond rigid nation-state boundaries to fluid, values-based alliances",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    title: "AGI & Climate Response",
    description: "Governance systems designed for artificial general intelligence and planetary crisis",
    icon: Brain,
    color: "text-purple-400"
  },
  {
    title: "Ancient Wisdom Integration",
    description: "Honoring Indigenous knowledge and contemplative traditions in technology design",
    icon: Shield,
    color: "text-green-400"
  },
  {
    title: "Collective Intelligence",
    description: "Harnessing the wisdom of diverse cultures for planetary decision-making",
    icon: Users,
    color: "text-orange-400"
  }
];

export const WhyPact7 = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Why PACT-7?
          </h2>
          <p className="text-2xl text-cosmic-accent mb-4 font-semibold">
            Reclaiming the Future. Together.
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Humanity stands at an inflection point. We need governance systems that can handle 
            AGI, climate transformation, and global cooperation—while honoring our deepest wisdom traditions.
          </p>
        </div>

        {/* Historical Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            From Extraction to Co-Creation
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-constitutional transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-6">
              {timelineSteps.map((step, index) => (
                <div key={step.era} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cosmic-primary rounded-full border-4 border-background z-10 hidden md:block" />
                  
                  <Card className={`${step.color} bg-card/80 backdrop-blur-sm text-center pt-8 md:pt-12`}>
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        {step.era}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow for mobile */}
                  {index < timelineSteps.length - 1 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <ArrowRight className="w-6 h-6 text-cosmic-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Built for Our Planetary Future
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card 
                  key={principle.title}
                  className="group hover:shadow-planetary transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-cosmic flex-shrink-0">
                        <IconComponent className={`w-6 h-6 ${principle.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-cosmic-primary transition-colors">
                          {principle.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-16">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Legacy Leaders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Honoring Past Leadership
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            PACT-7 builds upon the wisdom of visionary leaders who showed us pathways to justice, 
            unity, and planetary stewardship.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {legacyLeaders.map((leader, index) => (
              <Card key={leader.name} className="bg-gradient-cosmic text-stellar-white text-center">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{leader.name}</h4>
                  <p className="text-stellar-white/80 text-sm">{leader.legacy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-planetary text-stellar-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-constitutional" />
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-cosmic-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cosmic-primary/20 rounded-full blur-xl" />
            
            <CardContent className="p-12 relative z-10">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-stellar-white/20">
                  <Clock className="w-12 h-12 text-cosmic-accent animate-pulse-cosmic" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                The Time is Now
              </h3>
              
              <p className="text-xl leading-relaxed mb-6 text-stellar-white/90">
                Climate change, AI advancement, and global inequality demand new forms of governance. 
                PACT-7 offers a pathway from competition to collaboration, from extraction to regeneration.
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <Badge className="bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30 text-lg px-4 py-2">
                  For the next 1,000 years
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};