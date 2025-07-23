import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Download, 
  GitFork, 
  Heart, 
  MapPin, 
  Users, 
  Zap, 
  Globe, 
  Smartphone, 
  Database, 
  Server, 
  Shield, 
  Target,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Github,
  Trophy,
  Lightbulb,
  Building,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const techStack = [
  { layer: "Frontend", tools: "React + Tailwind + Swahili/Locales", icon: Code2 },
  { layer: "Mobile", tools: "Flutter + M-Pesa Daraja SDK", icon: Smartphone },
  { layer: "Backend", tools: "Node.js + Fastify + GraphQL or gRPC", icon: Server },
  { layer: "DB", tools: "PostgreSQL + Redis (optional local CouchDB)", icon: Database },
  { layer: "Infra", tools: "Docker + Railway/Render or Truehost", icon: Globe },
  { layer: "Service Mesh", tools: "Istio or Linkerd (2026+)", icon: Shield },
  { layer: "Impact Layer", tools: "Pact 7 SDG Vault, Mesh Tracker, Pact Contracts", icon: Target }
];

const features = [
  { 
    icon: "🇰🇪", 
    title: "M-Pesa SDK for Payments & Incentives",
    description: "Seamlessly integrate mobile money for impact-based payments"
  },
  { 
    icon: "🗣️", 
    title: "Swahili Translation Layer (sw.json)",
    description: "Complete localization support for East African markets"
  },
  { 
    icon: "📡", 
    title: "Pact Oracles for Kenyan Data",
    description: "Real-time access to health, climate, and finance data"
  },
  { 
    icon: "🧾", 
    title: "County-Level SDG Visualizers",
    description: "Templates for Nakuru, Kisumu, Nairobi, Turkana and more"
  },
  { 
    icon: "💬", 
    title: "WhatsApp-integrated DevBot",
    description: "Quick API queries through familiar messaging"
  }
];

const tasks = [
  {
    number: "01",
    title: "Trigger a Pact7 Impact Log",
    description: "Use the SDK to record a dummy tree planting or youth upskilling action.",
    difficulty: "Beginner"
  },
  {
    number: "02", 
    title: "Connect to M-Pesa",
    description: "Simulate a KES 50 impact payment using our test API key.",
    difficulty: "Intermediate"
  },
  {
    number: "03",
    title: "Open a Pull Request", 
    description: "Translate a feature into Swahili, Gikuyu, or Sheng — or improve docs.",
    difficulty: "All Levels"
  }
];

const contributionPaths = [
  {
    icon: Code2,
    path: "🧑‍💻 Builder",
    description: "Develop tools, dashboards, mobile kits",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    icon: Globe,
    path: "🌍 Impact Mapper", 
    description: "Integrate real-world SDG actions",
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    icon: MessageSquare,
    path: "💬 Localizer",
    description: "Translate content, add dialects", 
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    icon: Users,
    path: "🤝 Evangelist",
    description: "Host meetups, hackathons, dev rel",
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  }
];

const communities = [
  { platform: "Discord", action: "pact7.dev/discord", icon: MessageSquare },
  { platform: "WhatsApp", action: 'DM "Pact7 🇰🇪" to +254 7XX XXX XXX', icon: MessageSquare },
  { platform: "GitHub", action: "github.com/pact7", icon: Github },
  { platform: "Meetups", action: "Nairobi, Kisumu, Eldoret, Mombasa (Quarterly)", icon: MapPin }
];

const Developer = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-6xl">🇰🇪</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Pact 7 Developer Onboarding
          </h1>
          
          <div className="text-2xl text-cosmic-accent mb-4 font-semibold">
            Kenya First Edition
          </div>
          
          <p className="text-xl text-stellar-white/90 mb-8 font-medium">
            "Digitizing Ubuntu. Engineering Pact. Building the 7th Era."
          </p>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stellar-white mb-4">
              ✨ Welcome to Pact 7 – Built in Africa, for the World
            </h2>
            <p className="text-lg text-stellar-white/80 max-w-4xl mx-auto leading-relaxed">
              Pact 7 is a global ethical innovation protocol – a programmable platform where developers, 
              designers, data stewards, and digital activists collaborate to shape the future of humanity 
              through transparent, SDG-aligned infrastructure.
            </p>
          </div>
          
          <div className="bg-cosmic-primary/20 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-xl text-stellar-white font-semibold">
              You're here because you're brilliant, bold, and proudly Kenyan.
            </p>
            <p className="text-2xl text-cosmic-accent mt-2">Karibu sana. 🙌</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Why You Matter */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stellar-white">
            🧭 Why You Matter
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-cosmic-accent mb-6">
                Kenyan engineers and builders have:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-stellar-white">Scaled M-Pesa to 40M+ users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-stellar-white">Shaped open source ecosystems like Ushahidi, AkiraChix, BRCK</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-stellar-white">Built resilient solutions from Kibera to Kilifi to Kakamega</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cosmic-accent mb-4">
                Now, we're calling on you to help build the next level — one rooted in:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 p-3 justify-center">
                  🛡️ Ethical AI
                </Badge>
                <Badge className="bg-cosmic-secondary/20 text-cosmic-secondary border-cosmic-secondary/30 p-3 justify-center">
                  🧬 Decentralized Systems
                </Badge>
                <Badge className="bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30 p-3 justify-center">
                  🔁 Trust-Driven Payments
                </Badge>
                <Badge className="bg-planetary-blue/20 text-planetary-blue border-planetary-blue/30 p-3 justify-center">
                  🌱 Measurable Impact
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stellar-white">
            🛠️ Tech Stack
          </h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {techStack.map((item, index) => (
                <Card key={item.layer} className="mb-4 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-stellar-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-cosmic-accent mb-1">{item.layer}</h3>
                        <p className="text-stellar-white/80">{item.tools}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stellar-white">
            📦 Install & Clone
          </h2>
          
          <Card className="bg-deep-space/50 backdrop-blur-sm border-cosmic-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cosmic-accent mb-2"># Step 1 – Clone the repo</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-stellar-white">
                    git clone https://github.com/pact7/kenya-starter.git<br/>
                    cd kenya-starter
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-cosmic-accent mb-2"># Step 2 – Install</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-stellar-white">
                    npm install
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-cosmic-accent mb-2"># Step 3 – Start Dev Server</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-stellar-white">
                    npm run dev
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kenya-Specific Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stellar-white">
            🌍 Kenya-Specific Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg text-stellar-white group-hover:text-cosmic-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stellar-white/80 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Karibu Challenge */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-stellar-white">
            🚀 First 3 Tasks (Karibu Challenge)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tasks.map((task, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cosmic" />
                
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center text-stellar-white font-bold text-lg">
                      {task.number}
                    </div>
                    <Badge className="bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30">
                      {task.difficulty}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-stellar-white group-hover:text-cosmic-accent transition-colors">
                    {task.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-stellar-white/80 mb-4">{task.description}</p>
                  <Button variant="hero" className="w-full">
                    Start Task
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stellar-white">
            🤝 Community & Support
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 text-center">
                <CardHeader>
                  <community.icon className="w-8 h-8 mx-auto mb-2 text-cosmic-accent" />
                  <CardTitle className="text-lg text-stellar-white">
                    {community.platform}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stellar-white/80 text-sm mb-4">{community.action}</p>
                  <Button variant="hero" size="sm" className="w-full">
                    Join
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Paths */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stellar-white">
            💡 Contribution Paths
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contributionPaths.map((path, index) => (
              <Card key={index} className={`group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-1 ${path.color.split(' ')[0]}`} />
                
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                      <path.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <CardTitle className="text-xl text-stellar-white group-hover:text-cosmic-accent transition-colors">
                      {path.path}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-stellar-white/80">{path.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-stellar-white">
            🎯 Why It Matters by 2028
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl text-stellar-white/90">
              If Kenya leads the Pact 7 rollout, it could:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-cosmic-primary/20 backdrop-blur-sm border-cosmic-primary/30 text-center">
                <CardContent className="p-6">
                  <Building className="w-8 h-8 mx-auto mb-4 text-cosmic-primary" />
                  <p className="text-stellar-white font-semibold">
                    Become the SDG intelligence capital of the Global South
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-cosmic-secondary/20 backdrop-blur-sm border-cosmic-secondary/30 text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-4 text-cosmic-secondary" />
                  <p className="text-stellar-white font-semibold">
                    Enable youth to earn from real-world impact, not just code
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-cosmic-accent/20 backdrop-blur-sm border-cosmic-accent/30 text-center">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 mx-auto mb-4 text-cosmic-accent" />
                  <p className="text-stellar-white font-semibold">
                    Prove that ethical AI + African innovation can rewrite global infrastructure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-gradient-cosmic rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-stellar-white mb-4">
              🦁 Let's Build Kenya's Legacy in Pact 7
            </h3>
            <blockquote className="text-xl text-stellar-white/90 italic mb-4">
              "We are the custodians of a destiny bigger than borders."
            </blockquote>
            <p className="text-cosmic-accent font-semibold">– Pact 7, Genesis Charter</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              🌱 Get Started Now
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <ExternalLink className="w-5 h-5 mr-2" />
              🔗 github.com/pact7/kenya-starter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developer;
