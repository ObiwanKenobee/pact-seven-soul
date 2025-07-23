import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Building2, 
  Check, 
  Globe, 
  Shield, 
  Users,
  ArrowRight,
  TreePine,
  Target,
  Sparkles,
  Scale,
  Handshake,
  Star,
  Gift,
  DollarSign,
  TrendingUp,
  Award
} from "lucide-react";

const pricingTiers = [
  {
    name: "Ubuntu Community",
    price: "Free",
    description: "For individual developers and small communities building for good",
    icon: Heart,
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    popular: false,
    features: [
      "Access to core Pact 7 APIs",
      "Community forum support",
      "Basic SDG impact tracking",
      "Open source components",
      "Educational resources",
      "Community events access"
    ],
    limits: [
      "Up to 1,000 API calls/month",
      "1 active project",
      "Community support only"
    ]
  },
  {
    name: "Steward Pro",
    price: "$47",
    period: "/month",
    description: "For growing organizations committed to measurable impact",
    icon: Zap,
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    popular: true,
    features: [
      "Everything in Ubuntu Community",
      "Advanced impact analytics", 
      "Priority community support",
      "Custom SDG dashboards",
      "Integration partnerships",
      "Monthly impact reports",
      "Early feature access",
      "Steward badge recognition"
    ],
    limits: [
      "Up to 50,000 API calls/month",
      "5 active projects",
      "48-hour support response"
    ]
  },
  {
    name: "Global Alliance",
    price: "Custom",
    description: "For enterprises and governments driving continental transformation",
    icon: Building2,
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    popular: false,
    features: [
      "Everything in Steward Pro",
      "Dedicated success manager",
      "Custom integration support",
      "White-label solutions",
      "Advanced security features",
      "SLA guarantees",
      "Custom training programs",
      "Global Alliance membership"
    ],
    limits: [
      "Unlimited API calls",
      "Unlimited projects",
      "24/7 priority support"
    ]
  }
];

const ethicalPrinciples = [
  {
    icon: Scale,
    title: "Pay-What-You-Can Model",
    description: "Financial hardship should never block access to ethical technology"
  },
  {
    icon: TreePine,
    title: "Revenue Sharing",
    description: "40% of profits returned to communities building impactful solutions"
  },
  {
    icon: Globe,
    title: "Global South Priority",
    description: "Preferential pricing for organizations in developing nations"
  },
  {
    icon: Shield,
    title: "No Data Exploitation",
    description: "We never sell your data or use it for advertising"
  }
];

const impactMetrics = [
  { metric: "89%", description: "Revenue invested back into platform development" },
  { metric: "$2.3M", description: "Donated to open source projects annually" },
  { metric: "0%", description: "Data sold to third parties (never will be)" },
  { metric: "156", description: "Organizations using sliding scale pricing" }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <DollarSign className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">Ethical Pricing</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Technology That Serves, Not Extracts
          </h1>
          
          <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our pricing reflects our values: accessible, transparent, and designed to 
            amplify impact rather than maximize profit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Start Free Today
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Handshake className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Ethical Principles */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              💎 Our Ethical Pricing Principles
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              We believe technology should be a public good, not a private extraction machine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ethicalPrinciples.map((principle, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cosmic-accent mb-2">{principle.title}</h3>
                      <p className="text-stellar-white/80">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🎯 Choose Your Impact Level
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Every tier is designed to maximize your positive impact while sustaining 
              our mission of ethical technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden ${tier.popular ? 'ring-2 ring-cosmic-accent' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-cosmic-accent text-deep-space text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`absolute top-0 left-0 w-full h-1 ${tier.color.split(' ')[0]}`} />
                
                <CardHeader className={`text-center ${tier.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-stellar-white" />
                  </div>
                  
                  <CardTitle className="text-2xl text-stellar-white">{tier.name}</CardTitle>
                  <CardDescription className="text-stellar-white/70">{tier.description}</CardDescription>
                  
                  <div className="py-4">
                    <div className="text-4xl font-bold text-cosmic-accent">
                      {tier.price}
                      {tier.period && <span className="text-lg text-stellar-white/60">{tier.period}</span>}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cosmic-accent mb-3">Included Features:</h4>
                    <div className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-stellar-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-stellar-white/60 mb-3">Limits:</h4>
                    <div className="space-y-1">
                      {tier.limits.map((limit, i) => (
                        <div key={i} className="text-stellar-white/60 text-sm">• {limit}</div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant={tier.popular ? "constitutional" : "hero"} 
                    className="w-full"
                    size="lg"
                  >
                    {tier.price === "Free" ? "Get Started Free" : tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              📊 Revenue Transparency
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              See exactly how your investment creates positive impact in the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cosmic-accent mb-2">{metric.metric}</div>
                  <div className="text-stellar-white/80 text-sm">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-cosmic text-stellar-white">
            <CardContent className="p-12 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Public Benefit Corporation Status</h3>
              <p className="text-stellar-white/90 text-lg mb-6">
                We're legally committed to balancing profit with positive impact. 
                Our shareholders can't override our mission.
              </p>
              <Button variant="hero" size="lg">
                <Award className="w-5 h-5 mr-2" />
                View Public Benefit Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🎁 Special Access Programs
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              We believe in making ethical technology accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-green-500/10 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <Gift className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold text-green-300 mb-4">Student & Educator</h3>
                <p className="text-stellar-white/80 mb-6">
                  Free Steward Pro access for students and educators building educational projects.
                </p>
                <Button variant="hero" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-blue-500/10 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold text-blue-300 mb-4">Nonprofit Discount</h3>
                <p className="text-stellar-white/80 mb-6">
                  50% discount for registered nonprofits and NGOs working on SDG alignment.
                </p>
                <Button variant="hero" className="w-full">
                  Get Discount
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-purple-500/10 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-300 mb-4">Open Source Credits</h3>
                <p className="text-stellar-white/80 mb-6">
                  Earn platform credits by contributing to our open source projects.
                </p>
                <Button variant="hero" className="w-full">
                  Start Contributing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ❓ Pricing FAQ
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I really use the platform for free?",
                answer: "Yes! Our Ubuntu Community tier is genuinely free forever. We believe access to ethical technology shouldn't depend on your ability to pay."
              },
              {
                question: "What happens if I can't afford the paid tiers?",
                answer: "We offer sliding scale pricing based on your organization's location and financial situation. Contact us for a custom arrangement."
              },
              {
                question: "How do you sustain the platform without exploiting users?",
                answer: "We use an ethical business model: fair pricing for organizations that can afford it, revenue sharing with communities, and no data exploitation."
              },
              {
                question: "Can I switch between tiers?",
                answer: "Absolutely! You can upgrade, downgrade, or pause your subscription at any time. No long-term contracts or penalties."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-cosmic-accent mb-2">{faq.question}</h3>
                  <p className="text-stellar-white/80">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
