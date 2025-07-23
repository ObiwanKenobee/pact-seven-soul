import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileEdit,
  Gavel, 
  Share, 
  Globe,
  Handshake,
  CheckCircle
} from "lucide-react";

const actionItems = [
  {
    title: "Join the Charter Co-Creation",
    description: "Contribute to the foundational constitutional document that will guide our planetary future",
    icon: FileEdit,
    action: "Start Contributing",
    color: "bg-cosmic-primary/20 border-cosmic-primary/30 hover:border-cosmic-primary"
  },
  {
    title: "Help Build the Justice Domain MVP",
    description: "Join the development of Africa-led AI legal frameworks and Ubuntu-based governance systems",
    icon: Gavel,
    action: "Join Development",
    color: "bg-red-500/20 border-red-500/30 hover:border-red-500"
  },
  {
    title: "Share PACT-7 with 7 People",
    description: "Amplify the movement by introducing 7 friends to our vision of conscious planetary governance",
    icon: Share,
    action: "Share Now",
    color: "bg-cosmic-secondary/20 border-cosmic-secondary/30 hover:border-cosmic-secondary"
  },
  {
    title: "Start a Digital Node in Your Country",
    description: "Launch a local governance prototype using our open-source tools and frameworks",
    icon: Globe,
    action: "Launch Node",
    color: "bg-green-500/20 border-green-500/30 hover:border-green-500"
  }
];

export const PhaseOne = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Phase One: Get Involved Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The transformation begins with your participation. Join thousands of conscious builders 
            creating the infrastructure for planetary governance.
          </p>
          <div className="inline-flex items-center gap-2 bg-cosmic-primary/10 px-4 py-2 rounded-full border border-cosmic-primary/20">
            <CheckCircle className="w-5 h-5 text-cosmic-primary" />
            <span className="text-cosmic-primary font-semibold">Tactical Launch Plan Active</span>
          </div>
        </div>
        
        {/* Action Items Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {actionItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.title}
                className={`group hover:shadow-planetary transition-all duration-500 hover:scale-105 ${item.color} bg-card/80 backdrop-blur-sm`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-cosmic flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-cosmic-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <Button 
                    variant="cosmic" 
                    className="w-full"
                  >
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* PACT-7 Oath Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-cosmic text-stellar-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-constitutional" />
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-cosmic-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cosmic-primary/20 rounded-full blur-xl" />
            
            <CardHeader className="text-center pb-6">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-stellar-white/20 backdrop-blur-sm">
                  <Handshake className="w-12 h-12 text-cosmic-accent animate-pulse-cosmic" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-2">
                Take the PACT-7 Oath
              </CardTitle>
              <CardDescription className="text-stellar-white/80 text-lg">
                A symbolic pledge backed by smart contracts
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <blockquote className="text-lg italic leading-relaxed border-l-4 border-cosmic-accent pl-6">
                "I pledge to support the conscious evolution of technology in service of all life. 
                I commit to participating in governance that honors both ancient wisdom and future possibilities. 
                I stand with my planetary family in building systems of justice, prosperity, and unity for all beings."
              </blockquote>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="constitutional" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Take the Oath
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                >
                  <Share className="w-5 h-5 mr-2" />
                  Share Your Commitment
                </Button>
              </div>
              
              <p className="text-stellar-white/70 text-sm">
                Your oath will be recorded on the blockchain as part of the permanent record 
                of humanity's commitment to conscious governance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};