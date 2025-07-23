import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  GitBranch, 
  Users, 
  Download, 
  Globe,
  Brain,
  Scale,
  Heart
} from "lucide-react";

const charterSections = [
  {
    title: "Ubuntu Foundation",
    inspiration: "African Ubuntu Philosophy",
    icon: Heart,
    excerpt: "I am because we are. The fundamental interconnectedness of all humanity forms the bedrock of our digital governance.",
    aiInterpretation: "AI systems designed with Ubuntu principles prioritize collective wellbeing over individual optimization."
  },
  {
    title: "Constitutional Framework",
    inspiration: "US Constitution + Global Amendments",
    icon: Scale,
    excerpt: "We the Beings of Earth, in order to form a more perfect planetary union, establish justice for all conscious entities...",
    aiInterpretation: "Blockchain-secured voting systems ensure every voice is heard in our liquid democratic processes."
  },
  {
    title: "Dharmic Ethics",
    inspiration: "Ancient Wisdom Traditions",
    icon: Brain,
    excerpt: "Right action, right intention, right technology - guiding principles for conscious innovation in the age of AI.",
    aiInterpretation: "Ethical AI development frameworks based on compassionate intelligence and mindful technology."
  },
  {
    title: "Global Integration",
    inspiration: "SDGs Reimagined",
    icon: Globe,
    excerpt: "Sustainable development goals enhanced with AI capabilities for accelerated planetary healing.",
    aiInterpretation: "Machine learning models optimize resource distribution and climate restoration efforts globally."
  }
];

export const FoundationalCharter = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            The Conscious Constitution of PACT-7
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Drawing from Ubuntu, the US Constitution, Dharma, Sharia, and the SDGs—reimagined by AI 
            for a post-national world of conscious technology and planetary stewardship.
          </p>
        </div>
        
        {/* Dynamic Timeline */}
        <div className="space-y-8 mb-12">
          {charterSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.title}
                className="group hover:shadow-planetary transition-all duration-500 bg-card/80 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-cosmic flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-stellar-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-cosmic-primary transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription className="text-cosmic-primary font-semibold">
                        Inspired by: {section.inspiration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pl-16">
                    <blockquote className="text-lg italic text-foreground border-l-4 border-cosmic-accent pl-4 mb-4">
                      "{section.excerpt}"
                    </blockquote>
                    
                    <div className="bg-muted/50 p-4 rounded-lg border border-cosmic-secondary/20">
                      <h4 className="font-semibold text-cosmic-accent mb-2 flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        AI-Enabled Interpretation
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {section.aiInterpretation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Download and Collaboration Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-cosmic text-stellar-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Download className="w-5 h-5" />
                Download Charter
              </CardTitle>
              <CardDescription className="text-stellar-white/80">
                Access the complete foundational document
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-stellar-white/90">
                Get the full PDF version of our constitutional framework, including detailed 
                implementations and governance protocols.
              </p>
              <Button variant="hero" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-planetary-blue text-stellar-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <GitBranch className="w-5 h-5" />
                Collaborate on Charter
              </CardTitle>
              <CardDescription className="text-stellar-white/80">
                Join participatory co-authorship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-stellar-white/90">
                Contribute to the living document through our Git-based collaborative platform. 
                Every voice shapes our shared future.
              </p>
              <Button variant="hero" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Start Contributing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};