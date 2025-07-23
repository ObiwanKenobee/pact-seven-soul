import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Heart, 
  Users, 
  Scale, 
  Globe, 
  TreePine, 
  Eye,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  UserX,
  Handshake,
  BookOpen,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Building2
} from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Love + Logic",
    description: "We approach every interaction with both compassion and clear reasoning",
    principles: [
      "Lead with empathy and understanding",
      "Use evidence-based decision making",
      "Balance emotion with rational analysis",
      "Seek win-win solutions for all parties"
    ],
    color: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  {
    icon: TreePine,
    title: "Anti-Extractive Tech",
    description: "We build technology that gives back more than it takes",
    principles: [
      "Reject exploitative business models",
      "Prioritize community benefit over profit",
      "Design for sustainability and regeneration",
      "Share knowledge and resources freely"
    ],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We honor the wisdom and dignity of all cultures and traditions",
    principles: [
      "Listen to indigenous and traditional knowledge",
      "Avoid cultural appropriation",
      "Design inclusive experiences",
      "Celebrate diversity in all forms"
    ],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    icon: Shield,
    title: "Ethical Guardrails",
    description: "We maintain zero tolerance for bias, oppression, or unethical experimentation",
    principles: [
      "Actively identify and eliminate bias",
      "Protect vulnerable populations",
      "Ensure informed consent for all data use",
      "Prioritize human dignity over efficiency"
    ],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

const expectedBehaviors = [
  {
    emoji: "🤝",
    behavior: "Collaborative Spirit",
    description: "Work together towards shared goals, supporting each other's growth and success"
  },
  {
    emoji: "🎧", 
    behavior: "Active Listening",
    description: "Listen to understand, not just to respond. Value different perspectives and experiences"
  },
  {
    emoji: "💬",
    behavior: "Constructive Communication",
    description: "Communicate clearly, kindly, and constructively. Provide helpful feedback and guidance"
  },
  {
    emoji: "🌍",
    behavior: "Global Consciousness",
    description: "Consider the global impact of your actions and decisions on communities worldwide"
  },
  {
    emoji: "🧠",
    behavior: "Continuous Learning",
    description: "Stay curious, admit mistakes, and commit to ongoing personal and professional growth"
  },
  {
    emoji: "🛡️",
    behavior: "Safety & Security",
    description: "Protect the privacy, data, and wellbeing of all community members"
  }
];

const unacceptableBehaviors = [
  {
    icon: UserX,
    title: "Harassment & Discrimination",
    examples: [
      "Unwelcome comments about personal characteristics",
      "Deliberate intimidation or stalking",
      "Discriminatory jokes or language",
      "Unwanted sexual attention or advances"
    ]
  },
  {
    icon: MessageSquare,
    title: "Disruptive Communication",
    examples: [
      "Trolling, insulting, or derogatory comments",
      "Personal attacks or ad hominem arguments",
      "Sustained disruption of discussions",
      "Spamming or off-topic flooding"
    ]
  },
  {
    icon: Eye,
    title: "Privacy Violations",
    examples: [
      "Publishing private information without consent",
      "Recording conversations without permission",
      "Sharing confidential project information",
      "Unauthorized access to systems or data"
    ]
  },
  {
    icon: Scale,
    title: "Unethical Practices",
    examples: [
      "Knowingly introducing biased or harmful code",
      "Plagiarism or false attribution of work",
      "Manipulation or deception in contributions",
      "Violating open source licenses or agreements"
    ]
  }
];

const reportingProcess = [
  {
    step: "01",
    title: "Identify the Issue",
    description: "Recognize behavior that violates our code of conduct",
    action: "Document what happened with specific details"
  },
  {
    step: "02",
    title: "Direct Resolution (Optional)",
    description: "If safe and appropriate, address the issue directly",
    action: "Communicate clearly about the impact of the behavior"
  },
  {
    step: "03",
    title: "Report to Stewards",
    description: "Contact our Code of Conduct enforcement team",
    action: "Email: conduct@pact7.org or use anonymous form"
  },
  {
    step: "04",
    title: "Investigation & Response",
    description: "Stewards investigate and determine appropriate action",
    action: "Response within 48 hours, resolution within 1 week"
  }
];

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Code of Conduct</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Stewards of Conscious Technology
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            As builders of technology that serves humanity, we hold ourselves to the highest 
            standards of ethical conduct, mutual respect, and collective responsibility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Pledge Commitment
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Report Issue
            </Button>
          </div>
        </div>
      </section>

      {/* Our Pledge */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🤝 Our Sacred Pledge
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              We pledge to create and maintain a community where technology serves as a force 
              for healing, justice, and human flourishing.
            </p>
          </div>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-12">
            <CardContent className="p-12 text-center">
              <Star className="w-12 h-12 mx-auto mb-6" />
              <blockquote className="text-2xl leading-relaxed italic mb-6">
                "In the spirit of Ubuntu—recognizing our interconnectedness—we commit to building 
                technology that honors the dignity of every human being, protects the vulnerable, 
                and serves the highest good of our planetary community."
              </blockquote>
              <p className="text-cosmic-accent font-semibold">— Pact 7 Community Covenant</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              💎 Our Guiding Values
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              These values are not abstract ideals—they are the practical foundation 
              of every interaction in our community.
            </p>
          </div>
          
          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${value.color.split(' ')[0]}`} />
                
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="text-center md:text-left">
                      <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto md:mx-0 mb-4">
                        <value.icon className="w-8 h-8 text-stellar-white" />
                      </div>
                      <h3 className="text-xl font-bold text-cosmic-accent mb-2">{value.title}</h3>
                      <p className="text-stellar-white/80">{value.description}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-stellar-white mb-4">How we practice this:</h4>
                      <div className="space-y-3">
                        {value.principles.map((principle, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-stellar-white/80">{principle}</span>
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

      {/* Expected Behaviors */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ✨ Expected Behaviors
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              These are the behaviors we celebrate and encourage in our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectedBehaviors.map((behavior, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{behavior.emoji}</div>
                  <h3 className="text-lg font-semibold text-cosmic-accent mb-3">{behavior.behavior}</h3>
                  <p className="text-stellar-white/80 text-sm">{behavior.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unacceptable Behaviors */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🚫 Unacceptable Behaviors
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              These behaviors are harmful to our community and will not be tolerated.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {unacceptableBehaviors.map((category, index) => (
              <Card key={index} className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <CardTitle className="text-xl text-red-300">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.examples.map((example, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-stellar-white/80 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-yellow-500/10 border-yellow-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <AlertTriangle className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-bold text-yellow-300 mb-2">Remember</h3>
                <p className="text-stellar-white/80">
                  Impact matters more than intent. Even well-intentioned behavior 
                  can cause harm and violate our community standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reporting Process */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              📢 Reporting Process
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              We take all reports seriously and handle them with confidentiality and care.
            </p>
          </div>
          
          <div className="space-y-6 mb-12">
            {reportingProcess.map((step, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-6 ml-4">
                  <div className="grid md:grid-cols-5 gap-6 items-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-cosmic text-stellar-white font-bold text-lg flex items-center justify-center mx-auto">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-cosmic-accent mb-1">{step.title}</h3>
                      <p className="text-stellar-white/80 text-sm">{step.description}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 w-full justify-center p-2">
                        {step.action}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-cosmic-primary/10 border-cosmic-primary/30 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-cosmic-primary" />
                <h3 className="text-xl font-bold text-cosmic-primary mb-4">Report Directly</h3>
                <p className="text-stellar-white/80 mb-6">
                  Email our Code of Conduct team for immediate assistance
                </p>
                <Button variant="hero" className="w-full">
                  conduct@pact7.org
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-secondary/10 border-cosmic-secondary/30 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 mx-auto mb-4 text-cosmic-secondary" />
                <h3 className="text-xl font-bold text-cosmic-secondary mb-4">Anonymous Form</h3>
                <p className="text-stellar-white/80 mb-6">
                  Submit an anonymous report through our secure form
                </p>
                <Button variant="hero" className="w-full">
                  Anonymous Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enforcement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ⚖️ Enforcement & Consequences
            </h2>
            <p className="text-xl text-stellar-white/80">
              Our enforcement is restorative, not punitive—focused on healing and learning.
            </p>
          </div>
          
          <Card className="bg-gradient-cosmic text-stellar-white mb-8">
            <CardContent className="p-8">
              <Scale className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-6">Restorative Justice Approach</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Target className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Understand Impact</h4>
                  <p className="text-stellar-white/80 text-sm">Help individuals understand the harm caused</p>
                </div>
                <div>
                  <Lightbulb className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Learn & Grow</h4>
                  <p className="text-stellar-white/80 text-sm">Provide education and path forward</p>
                </div>
                <div>
                  <Building2 className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Repair Community</h4>
                  <p className="text-stellar-white/80 text-sm">Work to restore trust and safety</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Handshake className="w-5 h-5 mr-2" />
              Join Our Community Pledge
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CodeOfConduct;
