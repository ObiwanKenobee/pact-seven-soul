import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Target, 
  Globe, 
  TrendingUp, 
  Users, 
  Zap,
  Heart,
  TreePine,
  Droplets,
  GraduationCap,
  Scale,
  Building2,
  Lightbulb,
  Handshake,
  Leaf,
  Fish,
  ShieldCheck,
  Award,
  Eye,
  Calendar,
  MapPin,
  ArrowRight,
  Download,
  Share2
} from "lucide-react";

const sdgGoals = [
  { number: 1, title: "No Poverty", progress: 78, impact: "2.3M", icon: Heart, color: "bg-red-500" },
  { number: 2, title: "Zero Hunger", progress: 65, impact: "1.8M", icon: TreePine, color: "bg-yellow-600" },
  { number: 3, title: "Good Health", progress: 82, impact: "3.1M", icon: Heart, color: "bg-green-500" },
  { number: 4, title: "Quality Education", progress: 91, impact: "4.2M", icon: GraduationCap, color: "bg-red-600" },
  { number: 5, title: "Gender Equality", progress: 73, impact: "2.9M", icon: Scale, color: "bg-orange-500" },
  { number: 6, title: "Clean Water", progress: 86, impact: "3.7M", icon: Droplets, color: "bg-blue-500" },
  { number: 7, title: "Clean Energy", progress: 69, impact: "2.1M", icon: Zap, color: "bg-yellow-500" },
  { number: 8, title: "Good Jobs", progress: 77, impact: "2.6M", icon: Building2, color: "bg-red-700" },
  { number: 9, title: "Innovation", progress: 94, impact: "5.1M", icon: Lightbulb, color: "bg-orange-600" },
  { number: 10, title: "Reduced Inequalities", progress: 71, impact: "2.4M", icon: Scale, color: "bg-pink-500" },
  { number: 11, title: "Sustainable Cities", progress: 83, impact: "3.3M", icon: Building2, color: "bg-yellow-700" },
  { number: 12, title: "Responsible Consumption", progress: 68, impact: "2.0M", icon: TreePine, color: "bg-yellow-800" },
  { number: 13, title: "Climate Action", progress: 79, impact: "2.8M", icon: Leaf, color: "bg-green-600" },
  { number: 14, title: "Life Below Water", progress: 62, impact: "1.5M", icon: Fish, color: "bg-blue-600" },
  { number: 15, title: "Life on Land", progress: 74, impact: "2.2M", icon: TreePine, color: "bg-green-700" },
  { number: 16, title: "Peace & Justice", progress: 88, impact: "3.9M", icon: Scale, color: "bg-blue-700" },
  { number: 17, title: "Partnerships", progress: 96, impact: "4.8M", icon: Handshake, color: "bg-blue-800" }
];

const regionProgress = [
  { region: "Kenya", progress: 89, projects: 47, color: "bg-green-500" },
  { region: "Nigeria", progress: 76, projects: 23, color: "bg-blue-500" },
  { region: "South Africa", progress: 81, projects: 31, color: "bg-purple-500" },
  { region: "Ghana", progress: 72, projects: 18, color: "bg-yellow-500" },
  { region: "Rwanda", progress: 84, projects: 29, color: "bg-red-500" },
  { region: "Global", progress: 78, projects: 156, color: "bg-cosmic-primary" }
];

const recentImpacts = [
  {
    project: "M-Pesa Education Fund",
    sdg: 4,
    impact: "50,000 students supported",
    location: "Kenya",
    date: "2024-01-15"
  },
  {
    project: "Solar Village Grid",
    sdg: 7,
    impact: "25 communities powered",
    location: "Ghana",
    date: "2024-01-12"
  },
  {
    project: "Climate Data Platform", 
    sdg: 13,
    impact: "100+ farmers reached",
    location: "Rwanda",
    date: "2024-01-10"
  },
  {
    project: "Healthcare AI Assistant",
    sdg: 3,
    impact: "200 clinics equipped",
    location: "Nigeria",
    date: "2024-01-08"
  }
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cosmic-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <BarChart3 className="w-5 h-5 text-cosmic-accent" />
              <span className="text-cosmic-accent font-semibold">SDG Impact Dashboard</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent">
              Measuring What Matters
            </h1>
            
            <p className="text-xl text-stellar-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Real-time tracking of how Pact 7 technologies are contributing to the 
              UN Sustainable Development Goals across Africa and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center bg-cosmic-primary/20 backdrop-blur-sm border-cosmic-primary/30">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cosmic-primary mb-2">17.2M</div>
                <div className="text-stellar-white/80">Lives Impacted</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-cosmic-secondary/20 backdrop-blur-sm border-cosmic-secondary/30">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cosmic-secondary mb-2">156</div>
                <div className="text-stellar-white/80">Active Projects</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-cosmic-accent/20 backdrop-blur-sm border-cosmic-accent/30">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cosmic-accent mb-2">47</div>
                <div className="text-stellar-white/80">Countries</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-planetary-blue/20 backdrop-blur-sm border-planetary-blue/30">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-planetary-blue mb-2">78%</div>
                <div className="text-stellar-white/80">Avg. SDG Progress</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Export Report
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Share2 className="w-5 h-5 mr-2" />
              Share Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* SDG Progress Grid */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🎯 UN SDG Progress Tracker
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Live monitoring of our collective impact on all 17 Sustainable Development Goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sdgGoals.map((goal) => (
              <Card key={goal.number} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${goal.color}`} />
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${goal.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{goal.number}</span>
                    </div>
                    <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30 text-xs">
                      {goal.impact} impacted
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-stellar-white mb-3 text-sm leading-tight">
                    {goal.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stellar-white/60">Progress</span>
                      <span className="text-cosmic-accent font-semibold">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              🌍 Regional Impact Overview
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              See how different regions are contributing to the global SDG mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionProgress.map((region, index) => (
              <Card key={region.region} className="group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${region.color}`} />
                
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-stellar-white" />
                  </div>
                  <CardTitle className="text-xl text-stellar-white">{region.region}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cosmic-accent mb-1">{region.progress}%</div>
                    <div className="text-stellar-white/60 text-sm">Overall Progress</div>
                  </div>
                  
                  <Progress value={region.progress} className="h-3" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-stellar-white/80 text-sm">Active Projects:</span>
                    <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30">
                      {region.projects}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Impacts */}
      <section className="py-20 px-6 bg-gradient-planetary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              ⚡ Recent Impacts
            </h2>
            <p className="text-xl text-stellar-white/80 max-w-4xl mx-auto">
              Latest achievements and milestones in our SDG journey.
            </p>
          </div>
          
          <div className="space-y-6">
            {recentImpacts.map((impact, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-cosmic" />
                
                <CardContent className="p-6 ml-4">
                  <div className="grid md:grid-cols-6 gap-6 items-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-cosmic text-stellar-white font-bold text-lg flex items-center justify-center mx-auto">
                        {impact.sdg}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-cosmic-accent mb-1">{impact.project}</h3>
                      <p className="text-stellar-white/80 text-sm">{impact.impact}</p>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30">
                        <MapPin className="w-3 h-3 mr-1" />
                        {impact.location}
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="bg-cosmic-secondary/20 text-cosmic-secondary border-cosmic-secondary/30">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(impact.date).toLocaleDateString()}
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <Button variant="hero" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Impacts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Methodology */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-stellar-white">
              📊 Our Impact Methodology
            </h2>
            <p className="text-xl text-stellar-white/80">
              Transparent, auditable, and scientifically rigorous impact measurement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center bg-cosmic-primary/20 backdrop-blur-sm border-cosmic-primary/30">
              <CardContent className="p-8">
                <Target className="w-12 h-12 mx-auto mb-4 text-cosmic-primary" />
                <h3 className="text-lg font-bold text-stellar-white mb-4">Data Collection</h3>
                <p className="text-stellar-white/80 text-sm">
                  Real-time data from blockchain oracles, IoT sensors, and community reports
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-cosmic-secondary/20 backdrop-blur-sm border-cosmic-secondary/30">
              <CardContent className="p-8">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-cosmic-secondary" />
                <h3 className="text-lg font-bold text-stellar-white mb-4">Verification</h3>
                <p className="text-stellar-white/80 text-sm">
                  Third-party audits and community validation ensure accuracy
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-cosmic-accent/20 backdrop-blur-sm border-cosmic-accent/30">
              <CardContent className="p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-cosmic-accent" />
                <h3 className="text-lg font-bold text-stellar-white mb-4">Recognition</h3>
                <p className="text-stellar-white/80 text-sm">
                  UN SDG framework compliance and impact certification
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-cosmic text-stellar-white text-center">
            <CardContent className="p-8">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Open Impact Data</h3>
              <p className="text-stellar-white/90 mb-6">
                All our impact data is open source and available for research, 
                verification, and building upon by the global community.
              </p>
              <Button variant="hero" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Access Open Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
