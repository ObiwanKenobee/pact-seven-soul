import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Globe, 
  Code2, 
  Database, 
  Zap,
  Languages,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Eye,
  Users,
  Lock,
  Cpu,
  Headphones,
  Palette,
  CheckCircle,
  ExternalLink,
  Star,
  Heart,
  Target
} from "lucide-react";

const techLayers = [
  {
    layer: "Authentication",
    icon: Shield,
    technologies: [
      { name: "Auth0", description: "Enterprise identity management", status: "Production" },
      { name: "World ID", description: "Worldcoin identity verification", status: "Integration" },
      { name: "Ceramic", description: "Decentralized identity storage", status: "Planned" },
      { name: "WalletConnect", description: "Web3 wallet connection", status: "Production" }
    ],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    layer: "Onboarding Engine",
    icon: Users,
    technologies: [
      { name: "React", description: "Frontend framework", status: "Production" },
      { name: "LangChain", description: "AI language processing", status: "Integration" },
      { name: "Whisper", description: "Speech recognition", status: "Planned" },
      { name: "GPT-4", description: "Natural language AI", status: "Integration" }
    ],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    layer: "Dashboard UX Layer",
    icon: Palette,
    technologies: [
      { name: "Next.js", description: "React framework", status: "Production" },
      { name: "Tailwind CSS", description: "Utility-first CSS", status: "Production" },
      { name: "Lottie", description: "Animation library", status: "Integration" },
      { name: "Figma System", description: "Design system integration", status: "Production" }
    ],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    layer: "Data & Identity",
    icon: Database,
    technologies: [
      { name: "Ceramic", description: "Decentralized data network", status: "Integration" },
      { name: "Orbis", description: "Social data layer", status: "Planned" },
      { name: "3Box", description: "Identity and storage", status: "Research" },
      { name: "Lit Protocol", description: "Decentralized access control", status: "Planned" }
    ],
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  },
  {
    layer: "Language Adaptation",
    icon: Languages,
    technologies: [
      { name: "Bhashini", description: "India language platform", status: "Research" },
      { name: "Translate Locally", description: "Offline translation", status: "Planned" },
      { name: "DeepL", description: "High-quality translation", status: "Integration" },
      { name: "Custom Locales", description: "Cultural adaptation", status: "Development" }
    ],
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  },
  {
    layer: "Backend Auth Logic",
    icon: Server,
    technologies: [
      { name: "FastAPI", description: "Python API framework", status: "Production" },
      { name: "GraphQL", description: "Query language", status: "Production" },
      { name: "PostgreSQL", description: "Relational database", status: "Production" },
      { name: "Redis", description: "In-memory cache", status: "Production" }
    ],
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  }
];

const inclusiveDesignPrinciples = [
  {
    icon: Languages,
    title: "Never Assume Literacy",
    description: "Design for oral-first cultures with voice interfaces and symbolic navigation",
    implementation: "Voice commands, icon-based navigation, audio feedback"
  },
  {
    icon: Globe,
    title: "Slow Internet Support",
    description: "Optimize for 2G connections and offline-first functionality",
    implementation: "Progressive web app, caching, minimal data usage"
  },
  {
    icon: Users,
    title: "Cultural Resonance",
    description: "Local metaphors and visual languages over Western UI defaults",
    implementation: "Regional themes, cultural symbols, local color palettes"
  },
  {
    icon: Heart,
    title: "Neurodiversity Awareness",
    description: "Accommodate different sensory processing and cognitive styles",
    implementation: "Sound controls, motion toggles, multiple input methods"
  }
];

const implementationRoadmap = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Q1 2025",
    focus: "Core authentication and basic onboarding",
    deliverables: [
      "Multi-identity authentication",
      "Basic domain selection",
      "Simple dashboard prototype",
      "Accessibility audit"
    ]
  },
  {
    phase: "Phase 2: Intelligence",
    timeline: "Q2 2025", 
    focus: "AI-powered onboarding and personalization",
    deliverables: [
      "LangChain integration",
      "Voice interface support",
      "Dynamic pact generation",
      "Cultural adaptation engine"
    ]
  },
  {
    phase: "Phase 3: Community",
    timeline: "Q3 2025",
    focus: "Inter-pact collaboration and advanced features",
    deliverables: [
      "Decentralized identity storage",
      "Cross-domain collaboration tools",
      "Advanced analytics",
      "Mobile app launch"
    ]
  },
  {
    phase: "Phase 4: Evolution",
    timeline: "Q4 2025",
    focus: "Self-governing and autonomous systems",
    deliverables: [
      "Fully decentralized architecture",
      "Community governance tools",
      "Advanced AI companions",
      "Global federation protocols"
    ]
  }
];

const TechStack = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Code2 className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Technology Stack</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Ubuntu Technology Architecture
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            The complete technology stack powering PACT-7's Universal Access Flow, 
            designed for inclusion, accessibility, and human dignity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <GitBranch className="w-5 h-5 mr-2" />
              View Implementation
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <ExternalLink className="w-5 h-5 mr-2" />
              Technical Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Layers */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🧬 Layered Architecture
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Each layer serves the principle of human-centered, inclusive technology design.
            </p>
          </div>
          
          <div className="space-y-8">
            {techLayers.map((layer, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${layer.color.split(' ')[0]}`} />
                
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 rounded-lg bg-gradient-cosmic flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <layer.icon className="w-8 h-8 text-stellar-white" />
                      </div>
                      <h3 className="text-xl font-bold text-cosmic-accent mb-2">{layer.layer}</h3>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        {layer.technologies.map((tech, i) => (
                          <div key={i} className="bg-cosmic-primary/10 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-stellar-white">{tech.name}</h4>
                              <Badge className={`text-xs ${
                                tech.status === 'Production' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                                tech.status === 'Integration' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                                tech.status === 'Development' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                                tech.status === 'Planned' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                                'bg-gray-500/20 text-gray-300 border-gray-500/30'
                              }`}>
                                {tech.status}
                              </Badge>
                            </div>
                            <p className="text-stellar-white/80 text-sm">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusive Design Principles */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🤝 Inclusive Design Rules
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Technology principles that ensure no one is left behind in the digital revolution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {inclusiveDesignPrinciples.map((principle, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cosmic-accent mb-2">{principle.title}</h3>
                      <p className="text-stellar-white/80 mb-3">{principle.description}</p>
                      <div className="bg-cosmic-primary/10 rounded-lg p-3">
                        <p className="text-stellar-white/70 text-sm">
                          <span className="font-semibold text-cosmic-primary">Implementation:</span> {principle.implementation}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🗺️ Implementation Roadmap
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Phased approach to building the complete Universal Access Flow.
            </p>
          </div>
          
          <div className="space-y-6">
            {implementationRoadmap.map((phase, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-8 ml-4">
                  <div className="grid md:grid-cols-4 gap-8 items-start">
                    <div className="text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-gradient-cosmic text-stellar-white font-bold text-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
                        {index + 1}
                      </div>
                      <Badge className="bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30">
                        {phase.timeline}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-cosmic-accent mb-2">{phase.phase}</h3>
                      <p className="text-stellar-white/80">{phase.focus}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-stellar-white mb-3">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-stellar-white/80 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stellar-white">
            🚀 Build the Future with Ubuntu Tech
          </h2>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-12">
              <Target className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Technology in Service of Humanity</h3>
              <p className="text-stellar-white/90 text-lg mb-8">
                Every line of code, every API call, every user interface element serves 
                the principle that technology should amplify human dignity, not diminish it.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Inclusive First</h4>
                  <p className="text-stellar-white/80 text-sm">Design for the margins</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Cultural Wisdom</h4>
                  <p className="text-stellar-white/80 text-sm">Honor diverse knowledge</p>
                </div>
                <div>
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Ubuntu Values</h4>
                  <p className="text-stellar-white/80 text-sm">I am because we are</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Code2 className="w-5 h-5 mr-2" />
              Start Contributing
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <ExternalLink className="w-5 h-5 mr-2" />
              Technical Docs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechStack;
