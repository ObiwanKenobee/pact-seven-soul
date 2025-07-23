import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Heart, 
  Code2, 
  Globe, 
  Users,
  Star,
  GitFork,
  Eye,
  Download,
  Lock,
  Unlock,
  Shield,
  Scale,
  TreePine,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  ArrowRight,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const openSourcePrinciples = [
  {
    icon: Heart,
    title: "Human-Centric Development",
    description: "Code written to serve humanity, not corporate interests",
    commitment: "Every repository includes impact documentation and ethical guidelines"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Open source as a bridge to digital equity worldwide",
    commitment: "Multi-language documentation and accessibility-first design"
  },
  {
    icon: Shield,
    title: "Ethical by Default",
    description: "Built-in safeguards against misuse and exploitation",
    commitment: "Automated bias detection and ethical compliance checks"
  },
  {
    icon: TreePine,
    title: "Sustainable Commons",
    description: "Long-term stewardship of shared digital infrastructure",
    commitment: "Dedicated funding and governance for community projects"
  }
];

const repositories = [
  {
    name: "pact7-core",
    description: "Core platform APIs and SDG tracking infrastructure",
    language: "TypeScript",
    stars: "2.3k",
    forks: "487",
    license: "AGPL-3.0",
    category: "Platform",
    status: "Active"
  },
  {
    name: "ubuntu-ui-kit",
    description: "Design system components with African-inspired aesthetics",
    language: "React",
    stars: "1.8k", 
    forks: "312",
    license: "MIT",
    category: "Frontend",
    status: "Active"
  },
  {
    name: "sdg-impact-tracker",
    description: "Real-time SDG progress monitoring and visualization",
    language: "Python",
    stars: "954",
    forks: "203",
    license: "Apache-2.0",
    category: "Analytics",
    status: "Active"
  },
  {
    name: "ethical-ai-toolkit",
    description: "Bias detection and fairness evaluation for AI systems",
    language: "Python",
    stars: "1.2k",
    forks: "189",
    license: "AGPL-3.0",
    category: "AI/ML",
    status: "Active"
  },
  {
    name: "community-governance",
    description: "Decentralized decision-making tools for communities",
    language: "Solidity",
    stars: "743",
    forks: "156",
    license: "GPL-3.0",
    category: "Blockchain",
    status: "Beta"
  },
  {
    name: "climate-data-apis",
    description: "Open climate and environmental data aggregation",
    language: "Go",
    stars: "634",
    forks: "98",
    license: "MIT",
    category: "Climate",
    status: "Active"
  }
];

const licenseStrategy = [
  {
    license: "AGPL-3.0",
    usage: "Core Platform & AI",
    philosophy: "Copyleft ensures corporate contributions remain open",
    examples: ["pact7-core", "ethical-ai-toolkit"],
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  {
    license: "MIT", 
    usage: "Libraries & Tools",
    philosophy: "Maximum adoption and integration flexibility",
    examples: ["ubuntu-ui-kit", "climate-data-apis"],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    license: "Apache-2.0",
    usage: "Data & Analytics",
    philosophy: "Enterprise-friendly with patent protection",
    examples: ["sdg-impact-tracker"],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    license: "GPL-3.0",
    usage: "Governance Tools",
    philosophy: "Democratic tools must remain democratic",
    examples: ["community-governance"],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

const contributionStats = [
  { metric: "12,847", label: "Contributors", icon: Users },
  { metric: "89", label: "Countries", icon: Globe },
  { metric: "23,456", label: "Commits", icon: Code2 },
  { metric: "156", label: "Repositories", icon: Github }
];

const roadmapMilestones = [
  {
    quarter: "Q1 2025",
    title: "Foundation Release",
    items: ["Core API v1.0", "Documentation site", "Contribution guidelines"],
    status: "In Progress"
  },
  {
    quarter: "Q2 2025", 
    title: "Community Expansion",
    items: ["Multi-language docs", "Regional maintainers", "Hackathon toolkit"],
    status: "Planned"
  },
  {
    quarter: "Q3 2025",
    title: "Enterprise Integration",
    items: ["Enterprise connectors", "White-label options", "SLA frameworks"],
    status: "Planned"
  },
  {
    quarter: "Q4 2025",
    title: "Global Federation",
    items: ["Decentralized governance", "Multi-chain support", "Impact certification"],
    status: "Vision"
  }
];

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Github className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Open Source Strategy</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Code as a Commons
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We believe technology should be a shared inheritance for humanity, not locked away 
            in corporate vaults. Our open source strategy embodies Ubuntu: building together, 
            growing together, succeeding together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Github className="w-5 h-5 mr-2" />
              Explore Repositories
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Contribution Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source Principles */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              💎 Our Open Source Philosophy
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Beyond traditional open source—we practice "Ubuntu Source" development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {openSourcePrinciples.map((principle, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cosmic-accent mb-2">{principle.title}</h3>
                      <p className="text-stellar-white/80 mb-3">{principle.description}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-stellar-white/60 text-sm">{principle.commitment}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🌍 Global Community Impact
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Developers from every continent contributing to ethical technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {contributionStats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-stellar-white" />
                  </div>
                  <div className="text-3xl font-bold text-cosmic-accent mb-2">{stat.metric}</div>
                  <div className="text-stellar-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repository Showcase */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              📚 Featured Repositories
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Core projects powering ethical technology infrastructure worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-cosmic-accent" />
                      <CardTitle className="text-lg text-stellar-white">{repo.name}</CardTitle>
                    </div>
                    <Badge 
                      className={`text-xs ${
                        repo.status === 'Active' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                        repo.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                        'bg-blue-500/20 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {repo.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-stellar-white/70">
                    {repo.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary">{repo.language}</Badge>
                    <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30">
                      {repo.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-stellar-white/60">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Scale className="w-4 h-4" />
                      {repo.license}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <GitFork className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* License Strategy */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ⚖️ Strategic Licensing
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Thoughtful license selection to maximize impact while protecting community interests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {licenseStrategy.map((strategy, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${strategy.color.split(' ')[0]}`} />
                
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                      <Scale className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-stellar-white">{strategy.license}</CardTitle>
                      <CardDescription className="text-cosmic-accent">
                        {strategy.usage}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-stellar-white/80">{strategy.philosophy}</p>
                  
                  <div>
                    <h4 className="font-semibold text-stellar-white/60 mb-2 text-sm">Example Projects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {strategy.examples.map((example, i) => (
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
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🗺️ Open Source Roadmap
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Our journey toward a fully decentralized, community-governed platform.
            </p>
          </div>
          
          <div className="space-y-6">
            {roadmapMilestones.map((milestone, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-6 ml-4">
                  <div className="grid md:grid-cols-6 gap-6 items-center">
                    <div className="text-center">
                      <Badge className={`${
                        milestone.status === 'In Progress' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                        milestone.status === 'Planned' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                        'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      }`}>
                        {milestone.quarter}
                      </Badge>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-cosmic-accent mb-1">{milestone.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {milestone.status}
                      </Badge>
                    </div>
                    
                    <div className="md:col-span-3">
                      <div className="space-y-1">
                        {milestone.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-stellar-white/80 text-sm">{item}</span>
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
            🚀 Join the Ubuntu Source Movement
          </h2>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-12">
              <Heart className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Code with Purpose, Impact with Ubuntu</h3>
              <p className="text-stellar-white/90 text-lg mb-8">
                Every contribution—from a single line of code to a major feature—helps build 
                the infrastructure for conscious civilization. Your skills can heal the world.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Code2 className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Contribute Code</h4>
                  <p className="text-stellar-white/80 text-sm">Build features that matter</p>
                </div>
                <div>
                  <BookOpen className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Improve Docs</h4>
                  <p className="text-stellar-white/80 text-sm">Make knowledge accessible</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Build Community</h4>
                  <p className="text-stellar-white/80 text-sm">Welcome new contributors</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Github className="w-5 h-5 mr-2" />
              Start Contributing
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <ExternalLink className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenSource;
