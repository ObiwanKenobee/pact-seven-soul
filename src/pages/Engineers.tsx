import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Code2, 
  Globe, 
  Star, 
  Heart,
  Zap,
  Target,
  Building2,
  GraduationCap,
  Award,
  TrendingUp,
  MessageSquare,
  Github,
  Linkedin,
  ArrowRight,
  Plus,
  Search,
  Filter
} from "lucide-react";

const globalStats = [
  { number: "2,847", label: "Active Engineers", icon: Users },
  { number: "89", label: "Countries", icon: Globe },
  { number: "23", label: "Languages", icon: MessageSquare },
  { number: "156", label: "Open Projects", icon: Code2 }
];

const topRegions = [
  {
    region: "Kenya",
    engineers: 423,
    growth: "+34%",
    flag: "🇰🇪",
    specialties: ["Fintech", "AgriTech", "HealthTech", "Climate"],
    topSkills: ["JavaScript", "Python", "Dart", "Solidity"]
  },
  {
    region: "Nigeria", 
    engineers: 389,
    growth: "+28%",
    flag: "🇳🇬",
    specialties: ["EdTech", "Fintech", "E-commerce", "AI/ML"],
    topSkills: ["React", "Node.js", "Python", "Java"]
  },
  {
    region: "South Africa",
    engineers: 312,
    growth: "+19%",
    flag: "🇿🇦",
    specialties: ["Blockchain", "Cybersecurity", "IoT", "Mining Tech"],
    topSkills: ["C#", "Python", "JavaScript", "Go"]
  },
  {
    region: "Ghana",
    engineers: 267,
    growth: "+41%",
    flag: "🇬🇭",
    specialties: ["Mobile Dev", "Renewable Energy", "Logistics", "Social Impact"],
    topSkills: ["React Native", "Flutter", "Python", "PHP"]
  },
  {
    region: "Rwanda",
    engineers: 198,
    growth: "+52%", 
    flag: "🇷🇼",
    specialties: ["GovTech", "HealthTech", "Smart Cities", "Tourism Tech"],
    topSkills: ["Vue.js", "Python", "Ruby", "Scala"]
  },
  {
    region: "Global North",
    engineers: 1258,
    growth: "+15%",
    flag: "🌍",
    specialties: ["Platform Dev", "DevOps", "Research", "Mentorship"],
    topSkills: ["Rust", "TypeScript", "Kubernetes", "GraphQL"]
  }
];

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "Angular", "Svelte", "Next.js"],
    engineers: 1834,
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Go", "Rust", "Java"],
    engineers: 1623,
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    category: "Mobile",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    engineers: 987,
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    category: "Blockchain",
    skills: ["Solidity", "Web3.js", "Ethereum", "Cosmos", "Polkadot"],
    engineers: 543,
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI"],
    engineers: 721,
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
    engineers: 892,
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  }
];

const featuredEngineers = [
  {
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    flag: "🇳🇬",
    role: "Full Stack Developer",
    specialty: "EdTech Solutions",
    projects: ["Rural Learning Platform", "Teacher Training App"],
    skills: ["React", "Node.js", "MongoDB"],
    impact: "50k+ students reached",
    image: "👩🏿‍💻"
  },
  {
    name: "James Kiboi",
    location: "Nairobi, Kenya", 
    flag: "🇰🇪",
    role: "Mobile Developer",
    specialty: "FinTech Innovation",
    projects: ["M-Pesa Integration", "Micro-lending Platform"],
    skills: ["Flutter", "Dart", "Firebase"],
    impact: "200k+ transactions",
    image: "👨🏿‍💻"
  },
  {
    name: "Sarah Chen",
    location: "Cape Town, South Africa",
    flag: "🇿🇦",
    role: "Blockchain Engineer",
    specialty: "Supply Chain",
    projects: ["Food Traceability", "Carbon Credit Trading"],
    skills: ["Solidity", "Web3", "IPFS"],
    impact: "100+ farms traced",
    image: "👩🏻‍💻"
  },
  {
    name: "Kwame Asante",
    location: "Accra, Ghana",
    flag: "🇬🇭",
    role: "IoT Developer", 
    specialty: "Smart Agriculture",
    projects: ["Crop Monitoring", "Irrigation Systems"],
    skills: ["Python", "Arduino", "LoRaWAN"],
    impact: "500+ farms monitored",
    image: "👨🏿‍💻"
  }
];

const Engineers = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <MapPin className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Global Engineers</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Ubuntu Engineers Worldwide
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Meet the brilliant minds building ethical technology across continents. 
            From Nairobi to São Paulo, Lagos to Silicon Valley—we are Ubuntu. We are one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Plus className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Find Engineers
            </Button>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🌍 Our Global Impact
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Engineers from every corner of the world united in building technology that serves humanity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-stellar-white" />
                  </div>
                  <div className="text-3xl font-bold text-cosmic-accent mb-2">{stat.number}</div>
                  <div className="text-stellar-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🗺️ Regional Engineering Hubs
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Discover the fastest-growing tech ecosystems contributing to Pact 7.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {topRegions.map((region, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cosmic" />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{region.flag}</span>
                      <div>
                        <CardTitle className="text-xl text-stellar-white">{region.region}</CardTitle>
                        <CardDescription className="text-stellar-white/60">
                          {region.engineers} engineers
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      {region.growth}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cosmic-accent mb-2 text-sm">Top Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {region.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cosmic-accent mb-2 text-sm">Popular Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {region.topSkills.map((skill, i) => (
                        <Badge key={i} className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              💻 Skills & Expertise
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              The diverse technical skills powering ethical innovation across our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${category.color.split(' ')[0]}`} />
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <Code2 className="w-6 h-6 text-stellar-white" />
                  </div>
                  <CardTitle className="text-xl text-stellar-white">{category.category}</CardTitle>
                  <CardDescription className="text-cosmic-accent">
                    {category.engineers} engineers
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-stellar-white/80 text-sm">{skill}</span>
                        <div className="w-16 h-2 bg-stellar-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-cosmic-accent rounded-full" 
                            style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Engineers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ⭐ Featured Ubuntu Engineers
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Meet some of the incredible engineers making measurable impact through ethical technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredEngineers.map((engineer, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{engineer.image}</div>
                  
                  <h3 className="text-lg font-bold text-stellar-white mb-1">{engineer.name}</h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-lg">{engineer.flag}</span>
                    <span className="text-stellar-white/60 text-sm">{engineer.location}</span>
                  </div>
                  
                  <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 mb-3">
                    {engineer.role}
                  </Badge>
                  
                  <p className="text-cosmic-accent text-sm font-semibold mb-3">{engineer.specialty}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-stellar-white/60">Recent Projects:</div>
                    {engineer.projects.map((project, i) => (
                      <div key={i} className="text-xs text-stellar-white/80">• {project}</div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {engineer.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm text-cosmic-accent font-semibold mb-4">
                    Impact: {engineer.impact}
                  </div>
                  
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stellar-white">
            🤝 Join Our Global Community
          </h2>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-12">
              <Users className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ubuntu Engineering Collective</h3>
              <p className="text-stellar-white/90 text-lg mb-8">
                Connect with like-minded engineers, collaborate on impactful projects, 
                and be part of the movement building technology that serves humanity.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Heart className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Purpose-Driven</h4>
                  <p className="text-stellar-white/80 text-sm">Work on projects that matter</p>
                </div>
                <div>
                  <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Learn & Grow</h4>
                  <p className="text-stellar-white/80 text-sm">Continuous learning opportunities</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Recognition</h4>
                  <p className="text-stellar-white/80 text-sm">Get recognized for your impact</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Plus className="w-5 h-5 mr-2" />
              Create Engineer Profile
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Discord Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Engineers;
