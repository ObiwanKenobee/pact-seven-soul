import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain,
  Link,
  Vote,
  Code,
  Download,
  Github,
  Cpu,
  Globe
} from "lucide-react";

const techCategories = [
  {
    name: "AI & Intelligence",
    icon: Brain,
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    tools: [
      { name: "GPT/Anthropic APIs", use: "Governance simulation & writing" },
      { name: "Custom AI Models", use: "Cultural context & ethics" },
      { name: "ML Frameworks", use: "Pattern recognition & insights" }
    ]
  },
  {
    name: "Blockchain & Permanence",
    icon: Link,
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    tools: [
      { name: "Arweave/IPFS", use: "Permanent charter storage" },
      { name: "Ethereum", use: "Smart contracts & voting" },
      { name: "Decentralized Identity", use: "Sovereign participation" }
    ]
  },
  {
    name: "Governance Frameworks",
    icon: Vote,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    tools: [
      { name: "DAOstack", use: "Decentralized decision making" },
      { name: "Pol.is", use: "Collective intelligence" },
      { name: "Liquid Democracy", use: "Flexible representation" }
    ]
  },
  {
    name: "Development Platform",
    icon: Code,
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    tools: [
      { name: "GitHub", use: "Open source collaboration" },
      { name: "Gitcoin", use: "Decentralized funding" },
      { name: "Dev Environment", use: "Rapid prototyping" }
    ]
  }
];

const features = [
  "Open Source Development Kit",
  "Constitutional AI Templates", 
  "Governance Simulation Engine",
  "Multi-Language Support",
  "Blockchain Integration",
  "Cultural Context Models"
];

export const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Built on cutting-edge technology for transparency, permanence, and global accessibility. 
            Every tool chosen to serve conscious governance and planetary collaboration.
          </p>
          <div className="inline-flex items-center gap-2 bg-cosmic-primary/10 px-4 py-2 rounded-full border border-cosmic-primary/20">
            <Cpu className="w-5 h-5 text-cosmic-primary" />
            <span className="text-cosmic-primary font-semibold">For Builders</span>
          </div>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className={`${category.color} bg-card/80 backdrop-blur-sm hover:shadow-planetary transition-all duration-500 hover:scale-105`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-gradient-cosmic">
                      <IconComponent className="w-6 h-6 text-stellar-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {category.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={tool.name}
                      className="flex justify-between items-start gap-4 p-3 rounded-lg bg-muted/20 border border-muted/30"
                    >
                      <div>
                        <h4 className="font-semibold text-foreground">{tool.name}</h4>
                        <p className="text-muted-foreground text-sm">{tool.use}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* PACT-7 Dev Kit */}
        <div className="mb-16">
          <Card className="bg-gradient-cosmic text-stellar-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-constitutional" />
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-cosmic-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cosmic-primary/20 rounded-full blur-xl" />
            
            <CardHeader className="text-center pb-6 relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-stellar-white/20 backdrop-blur-sm">
                  <Download className="w-12 h-12 text-cosmic-accent" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-2">
                Fork the PACT-7 Dev Kit
              </CardTitle>
              <CardDescription className="text-stellar-white/80 text-lg">
                Everything you need to build conscious governance systems
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Code className="w-8 h-8 mx-auto mb-2 text-cosmic-accent" />
                  <h4 className="font-semibold mb-1">Starter Code</h4>
                  <p className="text-stellar-white/80 text-sm">
                    Pre-built governance modules and AI integrations
                  </p>
                </div>
                <div className="text-center">
                  <Brain className="w-8 h-8 mx-auto mb-2 text-cosmic-accent" />
                  <h4 className="font-semibold mb-1">AI Models</h4>
                  <p className="text-stellar-white/80 text-sm">
                    Open source ethical AI and cultural context models
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-cosmic-accent" />
                  <h4 className="font-semibold mb-1">Documentation</h4>
                  <p className="text-stellar-white/80 text-sm">
                    Complete guides for planetary governance implementation
                  </p>
                </div>
              </div>
              
              <div className="bg-stellar-white/10 p-4 rounded-lg border border-stellar-white/20">
                <h4 className="font-semibold text-cosmic-accent mb-3">Included Features:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cosmic-accent rounded-full" />
                      <span className="text-stellar-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="constitutional" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Download Dev Kit
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Overview */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            Architecture for the Next 1000 Years
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Decentralized", desc: "No single point of failure" },
              { label: "Transparent", desc: "All code and decisions public" },
              { label: "Culturally Aware", desc: "Respects diverse traditions" },
              { label: "Evolutive", desc: "Adapts and grows with humanity" }
            ].map((principle, index) => (
              <Card key={principle.label} className="text-center border-cosmic-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-cosmic-primary mb-2">{principle.label}</h4>
                  <p className="text-muted-foreground text-sm">{principle.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};