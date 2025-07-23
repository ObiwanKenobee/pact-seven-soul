import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Video, 
  Globe2,
  Newspaper,
  Play,
  Download
} from "lucide-react";

const partners = [
  {
    name: "Indigenous Councils Network",
    region: "Global",
    focus: "Sacred Technology Ethics",
    status: "Founding Partner"
  },
  {
    name: "African Union AI Taskforce",
    region: "Africa",
    focus: "AI Governance",
    status: "Strategic Alliance"
  },
  {
    name: "Pacific Climate Coalition",
    region: "Oceania",
    focus: "Climate Technology",
    status: "Active Partner"
  },
  {
    name: "Ethical Tech Alliance",
    region: "Global",
    focus: "AI Ethics",
    status: "Collaborative Partner"
  }
];

const mediaContent = [
  {
    title: "The PACT-7 Manifesto",
    type: "Document",
    description: "Core principles for planetary governance",
    icon: FileText
  },
  {
    title: "Stewards Speak: Vision 2028",
    type: "Video Series",
    description: "Planetary leaders share their wisdom",
    icon: Video
  },
  {
    title: "Interactive Charter Experience",
    type: "Web Experience",
    description: "Explore governance through immersive storytelling",
    icon: Globe2
  }
];

export const GlobalAlliance = () => {
  return (
    <section className="py-20 px-6 bg-gradient-planetary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
            Global Alliance & Press
          </h2>
          <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
            United with organizations worldwide, we're building the media ecosystem 
            that will inspire planetary transformation through conscious technology.
          </p>
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-stellar-white">
            Partnered Organizations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={partner.name}
                className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-cosmic">
                      <Users className="w-6 h-6 text-stellar-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-stellar-white">
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="text-cosmic-primary font-semibold">
                    {partner.region}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-stellar-white/80 text-sm">
                    {partner.focus}
                  </p>
                  <Badge 
                    className="bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30"
                  >
                    {partner.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Room & Media */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Press Room */}
          <Card className="bg-gradient-cosmic text-stellar-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Newspaper className="w-6 h-6" />
                Press Room
              </CardTitle>
              <CardDescription className="text-stellar-white/80">
                Resources for media and thought leaders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-cosmic-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">PACT-7 Press Kit</h4>
                    <p className="text-stellar-white/80 text-sm">
                      Logos, fact sheets, and official statements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-cosmic-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Executive Interviews</h4>
                    <p className="text-stellar-white/80 text-sm">
                      Access to planetary stewards for media
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-cosmic-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Impact Reports</h4>
                    <p className="text-stellar-white/80 text-sm">
                      Quarterly updates on global implementation
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="constitutional" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Access Press Resources
              </Button>
            </CardContent>
          </Card>

          {/* Multimedia Content */}
          <Card className="bg-planetary-blue text-stellar-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Play className="w-6 h-6" />
                Multimedia Experience
              </CardTitle>
              <CardDescription className="text-stellar-white/80">
                Films, speeches, and interactive content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {mediaContent.map((content, index) => {
                  const IconComponent = content.icon;
                  return (
                    <div key={content.title} className="flex items-start gap-3">
                      <IconComponent className="w-5 h-5 text-cosmic-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{content.title}</h4>
                        <p className="text-stellar-white/80 text-sm mb-1">
                          {content.description}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {content.type}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button variant="constitutional" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Explore Media Gallery
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-deep-space/50 backdrop-blur-sm border-cosmic-primary/30 text-stellar-white">
            <CardContent className="p-12">
              <blockquote className="text-2xl italic leading-relaxed mb-6">
                "PACT-7 is the soul of global civilization for the next 1,000 years."
              </blockquote>
              <p className="text-cosmic-accent font-semibold text-lg">
                Building the foundation for conscious planetary governance
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};