import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Globe, 
  Heart, 
  Users, 
  Eye,
  Fingerprint,
  Mic,
  Image,
  Languages,
  ChevronRight,
  Star,
  Sparkles,
  Brain,
  TreePine,
  Zap,
  Handshake,
  Target,
  Lightbulb,
  Building2,
  ArrowRight,
  Check,
  Palette,
  Moon,
  Sun,
  Waves,
  Hexagon
} from "lucide-react";

const identityTypes = [
  {
    type: "Government IDs",
    icon: Building2,
    examples: ["Kenya Huduma", "Aadhaar", "EU eID"],
    description: "Official state-issued digital identities",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    type: "Self-Sovereign ID",
    icon: Shield,
    examples: ["Polygon ID", "Worldcoin", "Disco"],
    description: "Decentralized, user-controlled identity",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    type: "Cultural IDs",
    icon: Users,
    examples: ["Tribal", "Religious", "Philosophical Orders"],
    description: "Community-based identity systems",
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    type: "Anonymous Access",
    icon: Eye,
    examples: ["Contextual reputation", "Privacy-first"],
    description: "Reputation-based anonymous participation",
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  }
];

const accessibilityFeatures = [
  { icon: Fingerprint, title: "Biometric Optional", description: "Never mandatory, always choice-based" },
  { icon: Languages, title: "Language First", description: "Voice, image, or symbol-based access" },
  { icon: Mic, title: "Voice Interface", description: "Oral-first culture support" },
  { icon: Image, title: "Visual Passphrase", description: "Symbol and image-based authentication" }
];

const sevenDomains = [
  {
    name: "Wisdom",
    icon: Brain,
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    description: "Knowledge systems, education, and consciousness"
  },
  {
    name: "Code",
    icon: Zap,
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    description: "Technology, algorithms, and digital infrastructure"
  },
  {
    name: "Nature",
    icon: TreePine,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    description: "Environment, sustainability, and biological systems"
  },
  {
    name: "Energy",
    icon: Lightbulb,
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    description: "Power, resources, and energetic systems"
  },
  {
    name: "Kinship",
    icon: Heart,
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    description: "Relationships, community, and social bonds"
  },
  {
    name: "Trade",
    icon: Handshake,
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    description: "Economics, exchange, and value systems"
  },
  {
    name: "Spirit",
    icon: Star,
    color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    description: "Consciousness, meaning, and transcendence"
  }
];

const philosophicalModes = [
  {
    name: "Dao Mode",
    icon: Waves,
    description: "Minimalist, nature-synced interface",
    theme: "Flow with natural rhythms and cycles"
  },
  {
    name: "Ubuntu Mode", 
    icon: Users,
    description: "Community-focused layout",
    theme: "I am because we are - interconnected design"
  },
  {
    name: "Mosaic Mode",
    icon: Hexagon,
    description: "Complex polycentric views",
    theme: "Multiple perspectives, infinite possibilities"
  }
];

const dashboardModules = [
  { name: "PactVerse", icon: Globe, description: "Explore local & global projects + domains" },
  { name: "Your Tools", icon: Zap, description: "AI, Code, Spiritual Tech, Finance, etc." },
  { name: "Destiny Flow", icon: Target, description: "Purpose ↔ Impact ↔ Feedback loops" },
  { name: "Inter-Pact Union", icon: Users, description: "Communicate + collaborate across domains" },
  { name: "Callings & Alerts", icon: Bell, description: "Global + local missions, partnerships, actions" }
];

const UniversalAccess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedMode, setSelectedMode] = useState<string>("");

  const steps = [
    "Authentication",
    "Domain Selection", 
    "Ethos Alignment",
    "Pact Generation",
    "Dashboard Setup"
  ];

  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) 
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };

  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Globe className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Universal Access Flow</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            One Protocol. All People. One Pact.
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to the PACT-7 Universal Access Flow. Your journey into conscious technology 
            begins with identity, purpose, and destiny unified.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4" onClick={() => setCurrentStep(1)}>
              <Shield className="w-5 h-5 mr-2" />
              Begin Authentication
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Eye className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      {currentStep > 0 && (
        <section className="py-8 px-6 bg-gradient-planetary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-stellar-white mb-2">
                Your Pact Journey: Step {currentStep} of {steps.length}
              </h2>
              <p className="text-stellar-white/80">{steps[currentStep - 1]}</p>
            </div>
            
            <div className="space-y-2">
              <Progress value={(currentStep / steps.length) * 100} className="h-3" />
              <div className="flex justify-between text-sm text-stellar-white/60">
                {steps.map((step, index) => (
                  <span key={step} className={index < currentStep ? "text-cosmic-accent" : ""}>
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 0: Authentication Layer */}
      {currentStep === 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stellar-white">
                🔐 Authentication: Identity Layer Reimagined
              </h2>
              <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
                Truth.ID supports multiple identity models with zero-exclusion principles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {identityTypes.map((identity, index) => (
                <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 ${identity.color.split(' ')[0]}`} />
                  
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                        <identity.icon className="w-6 h-6 text-stellar-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-stellar-white">{identity.type}</CardTitle>
                        <CardDescription className="text-stellar-white/60">
                          {identity.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-cosmic-accent text-sm">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {identity.examples.map((example, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-cosmic-accent mb-6">🛡️ Zero-Exclusion Principles</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {accessibilityFeatures.map((feature, index) => (
                  <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                    <CardContent className="p-6">
                      <feature.icon className="w-8 h-8 mx-auto mb-4 text-cosmic-accent" />
                      <h4 className="text-lg font-semibold text-stellar-white mb-2">{feature.title}</h4>
                      <p className="text-stellar-white/80 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="constitutional" size="lg" onClick={() => setCurrentStep(1)}>
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Step 1: Domain Selection */}
      {currentStep === 1 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stellar-white">
                🌍 Choose Your Domain(s)
              </h2>
              <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
                Select one or more of the 7 Domains that resonate with your purpose and passion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {sevenDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden ${
                    selectedDomains.includes(domain.name) ? 'ring-2 ring-cosmic-accent' : ''
                  }`}
                  onClick={() => toggleDomain(domain.name)}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 ${domain.color.split(' ')[0]}`} />
                  
                  <CardContent className="p-6 text-center">
                    {selectedDomains.includes(domain.name) && (
                      <div className="absolute top-2 right-2">
                        <Check className="w-5 h-5 text-cosmic-accent" />
                      </div>
                    )}
                    
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                      <domain.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-stellar-white mb-2">{domain.name}</h3>
                    <p className="text-stellar-white/80 text-sm">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-stellar-white/60 mb-6">
                Selected: {selectedDomains.length} domain{selectedDomains.length !== 1 ? 's' : ''}
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setCurrentStep(0)}>
                  Back
                </Button>
                <Button 
                  variant="constitutional" 
                  disabled={selectedDomains.length === 0}
                  onClick={() => setCurrentStep(2)}
                >
                  Continue to Ethos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Philosophical Mode Selection */}
      {currentStep === 2 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stellar-white">
                🎭 Choose Your Philosophical Mode
              </h2>
              <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
                Select the interface theme that resonates with your worldview and approach to consciousness.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {philosophicalModes.map((mode, index) => (
                <Card 
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden ${
                    selectedMode === mode.name ? 'ring-2 ring-cosmic-accent' : ''
                  }`}
                  onClick={() => setSelectedMode(mode.name)}
                >
                  <CardContent className="p-8 text-center">
                    {selectedMode === mode.name && (
                      <div className="absolute top-4 right-4">
                        <Check className="w-5 h-5 text-cosmic-accent" />
                      </div>
                    )}
                    
                    <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-6">
                      <mode.icon className="w-8 h-8 text-stellar-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-stellar-white mb-3">{mode.name}</h3>
                    <p className="text-cosmic-accent font-semibold mb-3">{mode.description}</p>
                    <p className="text-stellar-white/80 text-sm">{mode.theme}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button 
                  variant="constitutional" 
                  disabled={!selectedMode}
                  onClick={() => setCurrentStep(3)}
                >
                  Generate My Pact
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Pact Generation */}
      {currentStep === 3 && (
        <section className="py-20 px-6 bg-gradient-planetary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-stellar-white">
              🧬 Your Personal Pact
            </h2>
            
            <Card className="bg-gradient-cosmic text-stellar-white mb-8">
              <CardContent className="p-12">
                <Sparkles className="w-12 h-12 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-6">Generating Your Unique Pact...</h3>
                
                <div className="space-y-4 text-left mb-8">
                  <div className="bg-stellar-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Your Selected Domains:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDomains.map(domain => (
                        <Badge key={domain} className="bg-cosmic-accent/20 text-cosmic-accent">
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-stellar-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Philosophical Mode:</h4>
                    <Badge className="bg-cosmic-primary/20 text-cosmic-primary">
                      {selectedMode}
                    </Badge>
                  </div>
                  
                  <div className="bg-stellar-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Your Pact Statement:</h4>
                    <p className="text-stellar-white/90 italic">
                      "I commit to advancing {selectedDomains.join(', ')} through the lens of {selectedMode}, 
                      contributing my unique gifts to the collective flourishing of humanity and Earth."
                    </p>
                  </div>
                </div>
                
                <div className="text-sm text-stellar-white/70 mb-6">
                  This Pact is stored locally in your wallet as a soulbound token.
                  You can regenerate, expand, or remix it anytime.
                </div>
              </CardContent>
            </Card>
            
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => setCurrentStep(2)}>
                Regenerate Pact
              </Button>
              <Button variant="constitutional" onClick={() => setCurrentStep(4)}>
                Enter DestinyOS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: DestinyOS Dashboard Preview */}
      {currentStep === 4 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stellar-white">
                📊 Welcome to DestinyOS
              </h2>
              <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
                Your personalized dashboard - a mirror of your purpose, not just a control panel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {dashboardModules.map((module, index) => (
                <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                      <module.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <h3 className="text-lg font-bold text-stellar-white mb-2">{module.name}</h3>
                    <p className="text-stellar-white/80 text-sm">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-cosmic text-stellar-white text-center">
              <CardContent className="p-12">
                <Globe className="w-12 h-12 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Your DestinyOS is Ready</h3>
                <p className="text-stellar-white/90 text-lg mb-8">
                  Culturally relevant design, emotional tone detection, and dynamic adaptation 
                  to your role, domain, and intention.
                </p>
                <Button variant="hero" size="lg">
                  Launch Dashboard
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default UniversalAccess;
