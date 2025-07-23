import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitFork, 
  GitBranch, 
  GitCommit, 
  Heart, 
  Target, 
  Users, 
  CheckCircle,
  Star,
  Code2,
  MessageSquare,
  Shield,
  Lightbulb,
  Globe,
  ArrowRight,
  BookOpen,
  Github,
  Eye,
  Award,
  TreePine,
  Scale
} from "lucide-react";

const contributionTypes = [
  {
    icon: Code2,
    title: "Code Contributions",
    description: "Features, bug fixes, and infrastructure improvements",
    examples: ["Frontend components", "Backend APIs", "Database schemas", "DevOps scripts"],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Guides, tutorials, and knowledge sharing",
    examples: ["API documentation", "Setup guides", "Best practices", "Case studies"],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    icon: Globe,
    title: "Localization",
    description: "Translation and cultural adaptation",
    examples: ["UI translations", "Content localization", "Cultural sensitivity", "Local dialects"],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    icon: Target,
    title: "Impact Mapping",
    description: "SDG alignment and impact measurement",
    examples: ["SDG integration", "Impact metrics", "Data visualization", "Progress tracking"],
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  }
];

const commitPrinciples = [
  {
    emoji: "💝",
    principle: "Love + Logic",
    description: "Every commit should demonstrate both compassion and technical excellence"
  },
  {
    emoji: "🌍",
    principle: "Global Impact",
    description: "Consider how your change affects users across different cultures and contexts"
  },
  {
    emoji: "🛡️",
    principle: "Ethical Guard",
    description: "Ensure your contribution doesn't introduce bias, harm, or exploitation"
  },
  {
    emoji: "📊",
    principle: "SDG Alignment",
    description: "Link your contribution to one or more UN Sustainable Development Goals"
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Fork & Clone",
    description: "Create your own copy of the repository",
    command: "git clone https://github.com/YOUR_USERNAME/pact7.git"
  },
  {
    step: "02", 
    title: "Create Feature Branch",
    description: "Use our ethical naming convention",
    command: "git checkout -b feature/ubuntu-[your-feature-name]"
  },
  {
    step: "03",
    title: "Code with Consciousness", 
    description: "Write code that serves humanity",
    command: "# Follow our ethical coding guidelines"
  },
  {
    step: "04",
    title: "Commit with Purpose",
    description: "Use our Pact Commit Language",
    command: 'git commit -m "ubuntu: add [feature] for [SDG impact]"'
  },
  {
    step: "05",
    title: "Pull Request",
    description: "Submit for ethical review",
    command: "# Include SDG alignment and impact statement"
  }
];

const sdgCategories = [
  { number: "1-6", title: "Basic Needs", color: "bg-red-500/20 text-red-300", description: "Poverty, hunger, health, education, water, sanitation" },
  { number: "7-12", title: "Economic Growth", color: "bg-yellow-500/20 text-yellow-300", description: "Energy, work, industry, inequality, cities, consumption" },
  { number: "13-17", title: "Global Partnership", color: "bg-green-500/20 text-green-300", description: "Climate, oceans, land, peace, partnerships" }
];

const Contributing = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Contributing Guide</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Code for Humanity
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            At Pact 7, contribution isn't just about code—it's about contributing to the healing 
            and evolution of human civilization. Every pull request is a vote for the world we want to build.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <GitFork className="w-5 h-5 mr-2" />
              Start Contributing
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Github className="w-5 h-5 mr-2" />
              View Repository
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🧠 Ubuntu + Open Source = Conscious Code
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              We practice "Ubuntu Development"—recognizing that every line of code affects 
              the collective human experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-cosmic-primary/10 border-cosmic-primary/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-cosmic-accent mb-4">
                    "I code, therefore we are."
                  </h3>
                  <p className="text-stellar-white/80 leading-relaxed mb-4">
                    Traditional open source says "scratch your own itch." Ubuntu development 
                    says "heal our collective wounds."
                  </p>
                  <p className="text-stellar-white/80 leading-relaxed">
                    When you contribute to Pact 7, you're not just fixing bugs—you're 
                    debugging society itself.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              {commitPrinciples.map((principle, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{principle.emoji}</div>
                      <div>
                        <h4 className="font-semibold text-cosmic-accent">{principle.principle}</h4>
                        <p className="text-stellar-white/80 text-sm">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🎯 Ways to Contribute
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Every skill has a place in building the future of conscious technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contributionTypes.map((type, index) => (
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
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cosmic-accent text-sm">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, i) => (
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

      {/* Workflow */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🔄 Ubuntu Development Workflow
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Our git workflow embeds ethical principles into every step of development.
            </p>
          </div>
          
          <div className="space-y-6">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-6 ml-4">
                  <div className="grid md:grid-cols-6 gap-6 items-center">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-cosmic text-stellar-white font-bold text-lg flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-cosmic-accent mb-1">{step.title}</h3>
                      <p className="text-stellar-white/80 text-sm">{step.description}</p>
                    </div>
                    
                    <div className="md:col-span-3">
                      <div className="bg-black/50 rounded-lg p-3 font-mono text-sm text-cosmic-accent">
                        {step.command}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🎯 Linking Contributions to SDGs
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Every contribution must align with the UN Sustainable Development Goals. 
              Here's how to map your work to global impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sdgCategories.map((category, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mx-auto mb-4`}>
                    <span className="font-bold text-lg">SDG {category.number}</span>
                  </div>
                  <CardTitle className="text-xl text-stellar-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stellar-white/80">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-cosmic-primary/10 border-cosmic-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-cosmic-accent mb-4 text-center">
                📝 SDG Commit Message Format
              </h3>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm space-y-2">
                <div className="text-cosmic-accent">ubuntu: [type] [description] for SDG-[number]</div>
                <div className="text-stellar-white/60"># Examples:</div>
                <div className="text-stellar-white">ubuntu: feat add mobile payment for SDG-1 (poverty reduction)</div>
                <div className="text-stellar-white">ubuntu: fix accessibility bug for SDG-10 (reduced inequalities)</div>
                <div className="text-stellar-white">ubuntu: docs add Swahili translation for SDG-4 (quality education)</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Review Process */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              👥 Ethical Review Process
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Our review process goes beyond code quality—we evaluate ethical impact, 
              cultural sensitivity, and alignment with human flourishing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
              <CardHeader>
                <Eye className="w-8 h-8 text-cosmic-accent mb-2" />
                <CardTitle className="text-xl text-stellar-white">Technical Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Code quality and performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Security and privacy compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Documentation completeness</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Test coverage and reliability</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
              <CardHeader>
                <Scale className="w-8 h-8 text-cosmic-accent mb-2" />
                <CardTitle className="text-xl text-stellar-white">Ethical Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">SDG alignment verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Bias and harm assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Cultural sensitivity review</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-stellar-white/80">Long-term impact consideration</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-gradient-cosmic text-stellar-white inline-block">
              <CardContent className="p-6">
                <Award className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Ubuntu Contributor Badge</h3>
                <p className="text-stellar-white/90">
                  Contributors who consistently demonstrate Ubuntu principles earn special recognition 
                  in our community and increased review privileges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stellar-white">
            🚀 Ready to Change the World?
          </h2>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-8">
              <TreePine className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Start Small, Think Global</h3>
              <p className="text-stellar-white/90 leading-relaxed">
                Begin with a small contribution—fix a typo, add a translation, improve documentation. 
                Every Ubuntu contribution, no matter how small, ripples out to touch lives across 
                the globe.
              </p>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <GitFork className="w-5 h-5 mr-2" />
              Fork Repository
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Docs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contributing;
