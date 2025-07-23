import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Heart, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  Zap,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Sparkles,
  Building2,
  TreePine,
  Scale,
  BookOpen
} from "lucide-react";

const foundingPrinciples = [
  {
    icon: Heart,
    title: "Love + Logic",
    description: "Technology guided by compassion and rigorous ethical reasoning",
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  {
    icon: TreePine,
    title: "Anti-Extractive Tech",
    description: "Building systems that give back more than they take",
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    icon: Users,
    title: "Cultural Respect",
    description: "Honoring diverse wisdom traditions in technological development",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    icon: Shield,
    title: "Ethical Guardrails",
    description: "Zero tolerance for bias, oppression, or unethical experimentation",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

const timeline = [
  {
    year: "2024",
    title: "Genesis in Kenya",
    description: "Born from Ubuntu philosophy and African innovation heritage",
    milestone: "Foundational Charter Established"
  },
  {
    year: "2025",
    title: "Continental Expansion",
    description: "Planetary Stewards activated across all seven continents",
    milestone: "Global Governance Framework"
  },
  {
    year: "2026",
    title: "Service Mesh Deployment",
    description: "Ethical AI infrastructure scaled to serve millions",
    milestone: "Production-Ready Platform"
  },
  {
    year: "2028",
    title: "SDG Intelligence Hub",
    description: "Kenya becomes the Global South's impact measurement capital",
    milestone: "Measurable World Change"
  }
];

const meaningOfSeven = [
  { aspect: "Continents", description: "Every inhabited continent represented" },
  { aspect: "Chakras", description: "Holistic human development approach" },
  { aspect: "Colors", description: "Spectrum of human diversity and possibility" },
  { aspect: "Wonders", description: "Technological marvels that serve humanity" },
  { aspect: "Seas", description: "Fluid, interconnected global systems" },
  { aspect: "Heavens", description: "Layers of consciousness and wisdom" },
  { aspect: "Domains", description: "Core areas of human flourishing" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">About Pact 7</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Engineering Peace, Ethics & Innovation for All
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pact 7 is more than a platform—it's a covenant between technology and humanity. 
            Born in Africa, built for the world, we're creating the infrastructure for 
            conscious civilization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Join Our Mission
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Read the Charter
            </Button>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🌍 Origin Story: Born in Ubuntu
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Pact 7 emerged from the ancient African philosophy of Ubuntu—"I am because we are"—
              reimagined for the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-cosmic-primary/10 border-cosmic-primary/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-accent mb-2">Kenya, 2024</h3>
                      <p className="text-stellar-white/80">
                        In the innovation labs of Nairobi, a group of engineers asked: 
                        "What if technology was built to heal rather than extract?"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-cosmic-secondary/10 border-cosmic-secondary/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-secondary mb-2">The Revelation</h3>
                      <p className="text-stellar-white/80">
                        From M-Pesa's financial inclusion to Ushahidi's crisis mapping, 
                        Africa had been solving humanity's problems all along.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-cosmic-accent/10 border-cosmic-accent/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cosmic-accent mb-2">Global Vision</h3>
                      <p className="text-stellar-white/80">
                        What started as Ubuntu-driven innovation became a blueprint 
                        for ethical technology serving all of humanity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-cosmic rounded-3xl opacity-20 blur-3xl"></div>
              <Card className="relative bg-card/50 backdrop-blur-sm border-cosmic-primary/30">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">🌍</div>
                  <h3 className="text-2xl font-bold text-stellar-white mb-4">
                    "I code, therefore we are."
                  </h3>
                  <p className="text-stellar-white/80 leading-relaxed">
                    Pact 7 transforms the individual act of coding into a collective 
                    force for planetary healing, economic justice, and conscious evolution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Meaning of 7 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ✨ The Sacred Number Seven
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Seven is the number of completion, perfection, and cosmic harmony across cultures. 
              Our platform embodies this sacred geometry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {meaningOfSeven.map((item, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <span className="text-stellar-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cosmic-accent mb-2">{item.aspect}</h3>
                  <p className="text-stellar-white/80 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 px-6 py-3 text-lg">
              Seven Domains. Seven Continents. One Humanity.
            </Badge>
          </div>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🛡️ Our Founding Principles
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              These are not just guidelines—they are the DNA of every line of code, 
              every partnership, and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {foundingPrinciples.map((principle, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${principle.color.split(' ')[0]}`} />
                
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <CardTitle className="text-xl text-stellar-white group-hover:text-cosmic-accent transition-colors">
                      {principle.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-stellar-white/80">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              📅 Our Journey: Past, Present, Future
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              From Ubuntu wisdom to global transformation—here's how we're building 
              the future of conscious technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-8 ml-6">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="text-center md:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-cosmic text-stellar-white font-bold text-xl mb-2">
                        {event.year}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-cosmic-accent mb-2">{event.title}</h3>
                      <p className="text-stellar-white/80">{event.description}</p>
                    </div>
                    
                    <div className="text-center md:text-right">
                      <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30">
                        {event.milestone}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stellar-white">
            🌟 Our Vision: Technology as Sacred Service
          </h2>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-12">
              <blockquote className="text-2xl leading-relaxed mb-6 italic">
                "We envision a world where every algorithm serves love, every database 
                holds wisdom, and every network connection strengthens the web of human 
                consciousness."
              </blockquote>
              <p className="text-cosmic-accent font-semibold">— Pact 7 Founding Charter</p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-cosmic-primary/20 backdrop-blur-sm border-cosmic-primary/30 text-center">
              <CardContent className="p-6">
                <Target className="w-8 h-8 mx-auto mb-4 text-cosmic-primary" />
                <h3 className="text-lg font-semibold text-stellar-white mb-2">Measurable Impact</h3>
                <p className="text-stellar-white/80 text-sm">Every line of code contributes to the UN SDGs</p>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-secondary/20 backdrop-blur-sm border-cosmic-secondary/30 text-center">
              <CardContent className="p-6">
                <Scale className="w-8 h-8 mx-auto mb-4 text-cosmic-secondary" />
                <h3 className="text-lg font-semibold text-stellar-white mb-2">Ethical by Design</h3>
                <p className="text-stellar-white/80 text-sm">Technology that serves justice and dignity</p>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-accent/20 backdrop-blur-sm border-cosmic-accent/30 text-center">
              <CardContent className="p-6">
                <Building2 className="w-8 h-8 mx-auto mb-4 text-cosmic-accent" />
                <h3 className="text-lg font-semibold text-stellar-white mb-2">Open by Default</h3>
                <p className="text-stellar-white/80 text-sm">Transparent, auditable, and community-owned</p>
              </CardContent>
            </Card>
          </div>
          
          <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
            <Heart className="w-5 h-5 mr-2" />
            Be Part of Our Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
