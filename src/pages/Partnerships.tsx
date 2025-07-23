import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Building2, 
  Globe, 
  Heart, 
  Target,
  Users,
  Zap,
  Shield,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Star,
  Lightbulb,
  Scale,
  TreePine
} from "lucide-react";

const partnershipTypes = [
  {
    icon: Building2,
    title: "Enterprise Partners",
    description: "Corporations committed to ethical technology and measurable SDG impact",
    benefits: [
      "Custom SDG integration solutions",
      "White-label platform access",
      "Dedicated success management",
      "Global alliance membership"
    ],
    examples: ["Fortune 500 companies", "Multinational corporations", "Government contractors"],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    icon: Globe,
    title: "Government & NGO",
    description: "Public sector organizations driving policy and social change",
    benefits: [
      "Policy alignment frameworks",
      "Public impact dashboards",
      "Citizen engagement tools",
      "Transparency reporting"
    ],
    examples: ["National governments", "UN agencies", "International NGOs"],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    description: "Universities and research centers advancing ethical AI research",
    benefits: [
      "Research collaboration programs",
      "Student developer access",
      "Data sharing agreements",
      "Publication partnerships"
    ],
    examples: ["Universities", "Research institutes", "Think tanks"],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    icon: Lightbulb,
    title: "Innovation Partners",
    description: "Startups and scale-ups building complementary ethical solutions",
    benefits: [
      "Technical integration support",
      "Joint go-to-market strategies",
      "Shared developer resources",
      "Co-innovation opportunities"
    ],
    examples: ["B-Corp startups", "Social enterprises", "Climate tech companies"],
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  }
];

const currentPartners = [
  {
    name: "African Development Bank",
    type: "Financial Institution",
    focus: "Infrastructure Financing",
    impact: "50M+ people reached",
    flag: "🏛️"
  },
  {
    name: "University of Nairobi",
    type: "Academic",
    focus: "AI Research",
    impact: "500+ students trained",
    flag: "🎓"
  },
  {
    name: "GreenTech Innovations",
    type: "Climate Startup",
    focus: "Carbon Tracking",
    impact: "100+ companies onboarded",
    flag: "🌱"
  },
  {
    name: "UN SDG Action Campaign",
    type: "International NGO", 
    focus: "Global Advocacy",
    impact: "1M+ advocates mobilized",
    flag: "🌍"
  }
];

const partnershipValues = [
  {
    icon: Heart,
    title: "Mutual Benefit",
    description: "Partnerships that create value for all stakeholders while advancing the SDGs"
  },
  {
    icon: Shield,
    title: "Ethical Alignment",
    description: "Partners must demonstrate commitment to ethical practices and human dignity"
  },
  {
    icon: Target,
    title: "Impact Focus",
    description: "All partnerships must demonstrate measurable contribution to the SDGs"
  },
  {
    icon: Scale,
    title: "Transparency",
    description: "Open communication, shared metrics, and public accountability"
  }
];

const partnershipProcess = [
  {
    step: "01",
    title: "Initial Alignment",
    description: "Assess mission alignment and partnership potential",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Impact Planning",
    description: "Define measurable SDG outcomes and success metrics",
    duration: "2-3 weeks"
  },
  {
    step: "03",
    title: "Technical Integration",
    description: "Design technical architecture and implementation plan",
    duration: "4-6 weeks"
  },
  {
    step: "04",
    title: "Pilot Launch",
    description: "Launch pilot program with monitoring and evaluation",
    duration: "8-12 weeks"
  },
  {
    step: "05",
    title: "Scale & Optimize",
    description: "Scale successful pilot and optimize for maximum impact",
    duration: "Ongoing"
  }
];

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Handshake className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Strategic Partnerships</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Building Alliances for Global Impact
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We partner with organizations that share our vision of technology as a force 
            for healing, justice, and human flourishing. Together, we amplify impact across the SDGs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Explore Partnership
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              💎 Our Partnership Principles
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Every partnership is guided by our commitment to ethical technology and measurable impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cosmic-accent mb-2">{value.title}</h3>
                      <p className="text-stellar-white/80">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🤝 Partnership Opportunities
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Multiple pathways to collaborate and create meaningful impact together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${type.color.split(' ')[0]}`} />
                
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-stellar-white group-hover:text-cosmic-accent transition-colors">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-stellar-white/60">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cosmic-accent mb-3 text-sm">Partnership Benefits:</h4>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-stellar-white/80 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-stellar-white/60 mb-2 text-sm">Ideal Partners:</h4>
                    <div className="flex flex-wrap gap-1">
                      {type.examples.map((example, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🌟 Current Partners
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Organizations already collaborating with us to create positive global impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{partner.flag}</div>
                  <h3 className="text-lg font-bold text-stellar-white mb-2">{partner.name}</h3>
                  <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 mb-3">
                    {partner.type}
                  </Badge>
                  <p className="text-cosmic-accent text-sm font-semibold mb-2">{partner.focus}</p>
                  <p className="text-stellar-white/80 text-sm">{partner.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🔄 Partnership Journey
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Our structured approach to building meaningful, impactful partnerships.
            </p>
          </div>
          
          <div className="space-y-6">
            {partnershipProcess.map((phase, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-6 ml-4">
                  <div className="grid md:grid-cols-6 gap-6 items-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-cosmic text-stellar-white font-bold text-lg flex items-center justify-center mx-auto">
                        {phase.step}
                      </div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <h3 className="text-lg font-bold text-cosmic-accent mb-1">{phase.title}</h3>
                      <p className="text-stellar-white/80 text-sm">{phase.description}</p>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="bg-cosmic-secondary/20 text-cosmic-secondary border-cosmic-secondary/30">
                        {phase.duration}
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <Button variant="hero" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stellar-white">
            🚀 Ready to Partner for Impact?
          </h2>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-12">
              <Star className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Let's Build the Future Together</h3>
              <p className="text-stellar-white/90 text-lg mb-8">
                Whether you're a global enterprise, government agency, academic institution, 
                or innovative startup, we're excited to explore how we can amplify each other's impact.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Scale Impact</h4>
                  <p className="text-stellar-white/80 text-sm">Amplify your SDG contributions</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Join Community</h4>
                  <p className="text-stellar-white/80 text-sm">Connect with like-minded organizations</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Drive Innovation</h4>
                  <p className="text-stellar-white/80 text-sm">Co-create ethical solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Conversation
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
