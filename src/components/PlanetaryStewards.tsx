import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Shield, 
  Handshake, 
  Brain, 
  MapPin,
  Award,
  Users
} from "lucide-react";

const stewardRoles = [
  {
    title: "Ubuntu Builder",
    continent: "Africa",
    role: "The Philosopher Engineer",
    activates: "Justice Node",
    description: "Bridges ancient Ubuntu wisdom with cutting-edge AI legal frameworks",
    qualities: ["Restorative Justice", "Community Healing", "Legal Innovation"],
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  {
    title: "Frontier Harmonizer", 
    continent: "North America",
    role: "The Guardian Technologist",
    activates: "Innovation Node",
    description: "Ensures AI development serves equity and democratic access for all",
    qualities: ["Democratic AI", "Tech Ethics", "Open Innovation"],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    title: "Dharma Architect",
    continent: "Asia", 
    role: "The Moral Synthesist",
    activates: "Wisdom Node",
    description: "Integrates contemplative traditions with ethical AI development",
    qualities: ["Mindful Tech", "Ethical Framework", "Compassionate AI"],
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  },
  {
    title: "Gaia Guardian",
    continent: "South America",
    role: "The Nature Keeper",
    activates: "Resilience Node", 
    description: "Champions Indigenous knowledge for planetary healing technology",
    qualities: ["Earth Connection", "Climate Tech", "Indigenous Wisdom"],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    title: "Trust Weaver",
    continent: "Europe",
    role: "The Diplomatic Builder", 
    activates: "Prosperity Node",
    description: "Architects trust-based economic systems and cooperative governance",
    qualities: ["Economic Justice", "Trust Systems", "Cooperative Models"],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    title: "Oceanic Oracle",
    continent: "Oceania",
    role: "The Flow Navigator",
    activates: "Unity Node",
    description: "Designs fluid governance systems inspired by ocean wisdom",
    qualities: ["Fluid Democracy", "Ocean Wisdom", "Global Unity"],
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
  },
  {
    title: "Sacred Coder",
    continent: "Indigenous Global",
    role: "The Spirit Technologist", 
    activates: "Spirit Node",
    description: "Embeds sacred principles into the soul of conscious technology",
    qualities: ["Sacred Tech", "Spiritual AI", "Ancestral Knowledge"],
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  }
];

export const PlanetaryStewards = () => {
  return (
    <section className="py-20 px-6 bg-gradient-planetary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Planetary Stewards
          </h2>
          <p className="text-2xl text-cosmic-accent mb-4 font-semibold">
            "Not Politicians. Visionary Custodians."
          </p>
          <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
            Seven continental wisdom keepers who activate the nodes of conscious governance, 
            each embodying their region's deepest values in service of planetary transformation.
          </p>
        </div>
        
        {/* Steward Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stewardRoles.map((steward, index) => (
            <Card 
              key={steward.title}
              className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden"
            >
              {/* Accent strip */}
              <div className={`absolute top-0 left-0 w-full h-1 ${steward.color.split(' ')[0]}`} />
              
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center">
                      <User className="w-8 h-8 text-stellar-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cosmic-accent flex items-center justify-center">
                      <Shield className="w-3 h-3 text-deep-space" />
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-stellar-white group-hover:text-cosmic-accent transition-colors">
                  {steward.title}
                </CardTitle>
                
                <CardDescription className="space-y-1">
                  <div className="flex items-center justify-center gap-2 text-cosmic-primary font-semibold">
                    <MapPin className="w-4 h-4" />
                    {steward.continent}
                  </div>
                  <div className="text-cosmic-accent text-sm font-medium">
                    {steward.role}
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge className={`${steward.color} font-semibold`}>
                    Activates: {steward.activates}
                  </Badge>
                </div>
                
                <p className="text-stellar-white/80 text-sm leading-relaxed text-center">
                  {steward.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-cosmic-accent font-semibold text-sm text-center">Core Qualities</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {steward.qualities.map((quality) => (
                      <Badge 
                        key={quality}
                        variant="secondary" 
                        className="text-xs bg-muted/20 text-stellar-white/70"
                      >
                        {quality}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Steward Selection Process */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-cosmic text-stellar-white text-center">
            <CardHeader>
              <Award className="w-8 h-8 mx-auto mb-2" />
              <CardTitle>Nominate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stellar-white/90 mb-4">
                Recommend visionary leaders from your community who embody conscious stewardship.
              </p>
              <Button variant="hero" className="w-full">
                Submit Nomination
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-planetary-blue text-stellar-white text-center">
            <CardHeader>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <CardTitle>Apply</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stellar-white/90 mb-4">
                Step forward as a candidate to serve your continent's wisdom in global governance.
              </p>
              <Button variant="hero" className="w-full">
                Apply to Serve
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-secondary text-stellar-white text-center">
            <CardHeader>
              <Brain className="w-8 h-8 mx-auto mb-2" />
              <CardTitle>Learn More</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stellar-white/90 mb-4">
                Explore the full criteria and selection process for planetary stewardship roles.
              </p>
              <Button variant="hero" className="w-full">
                View Process
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Main CTA */}
        <div className="text-center">
          <Button variant="constitutional" size="lg" className="text-lg px-12 py-4">
            <Handshake className="w-5 h-5 mr-2" />
            Nominate or Become a Steward
          </Button>
        </div>
      </div>
    </section>
  );
};