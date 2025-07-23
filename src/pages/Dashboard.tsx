import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Zap, 
  Target, 
  Users, 
  Bell,
  Heart,
  Brain,
  TreePine,
  Lightbulb,
  Handshake,
  Star,
  BarChart3,
  Calendar,
  MessageSquare,
  Settings,
  Moon,
  Sun,
  Waves,
  Hexagon,
  Activity,
  Award,
  TrendingUp,
  MapPin,
  Eye,
  Plus,
  ArrowRight
} from "lucide-react";

const userProfile = {
  name: "Amara Okafor",
  domains: ["Code", "Wisdom", "Kinship"],
  mode: "Ubuntu Mode",
  location: "Nairobi, Kenya",
  pactGeneration: "2024-01-15",
  impactScore: 847
};

const dashboardModules = [
  {
    name: "PactVerse",
    icon: Globe,
    description: "Explore local & global projects",
    stats: "23 active projects",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    urgent: false
  },
  {
    name: "Your Tools",
    icon: Zap,
    description: "AI, Code, Spiritual Tech suite",
    stats: "7 tools activated",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    urgent: false
  },
  {
    name: "Destiny Flow",
    icon: Target,
    description: "Purpose ↔ Impact ↔ Feedback",
    stats: "92% alignment",
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    urgent: false
  },
  {
    name: "Inter-Pact Union",
    icon: Users,
    description: "Cross-domain collaboration",
    stats: "5 active unions",
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    urgent: false
  },
  {
    name: "Callings & Alerts",
    icon: Bell,
    description: "Missions & opportunities",
    stats: "3 urgent callings",
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    urgent: true
  }
];

const recentActivities = [
  {
    type: "project",
    title: "Contributed to Ubuntu-UI Components",
    domain: "Code",
    impact: "+25 impact points",
    timestamp: "2 hours ago"
  },
  {
    type: "collaboration",
    title: "Joined Climate Data Alliance",
    domain: "Wisdom",
    impact: "+40 impact points",
    timestamp: "1 day ago"
  },
  {
    type: "learning",
    title: "Completed Ethical AI Course",
    domain: "Wisdom",
    impact: "+60 impact points", 
    timestamp: "3 days ago"
  },
  {
    type: "community",
    title: "Mentored 5 new developers",
    domain: "Kinship",
    impact: "+80 impact points",
    timestamp: "1 week ago"
  }
];

const urgentCallings = [
  {
    title: "Kenya Education Emergency Response",
    description: "Digital learning platform needed for rural schools",
    domains: ["Code", "Wisdom"],
    urgency: "High",
    contributors: 12,
    deadline: "3 days"
  },
  {
    title: "Climate Data Collectors Wanted",
    description: "Help build real-time environmental monitoring",
    domains: ["Code", "Nature"],
    urgency: "Medium",
    contributors: 8,
    deadline: "1 week"
  },
  {
    title: "Community Healing Circle",
    description: "Support healing tech for conflict-affected areas",
    domains: ["Kinship", "Spirit"],
    urgency: "High",
    contributors: 23,
    deadline: "2 days"
  }
];

const philosophicalModes = [
  { name: "Dao Mode", icon: Waves, active: false },
  { name: "Ubuntu Mode", icon: Users, active: true },
  { name: "Mosaic Mode", icon: Hexagon, active: false }
];

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState("Ubuntu Mode");
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-deep-space">
      <Navigation />
      
      {/* Dashboard Header */}
      <section className="pt-32 pb-8 px-6 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-constitutional bg-clip-text text-transparent">
                Welcome back, {userProfile.name}
              </h1>
              <p className="text-xl text-stellar-white/80 mb-4">
                Your DestinyOS dashboard - a mirror of your purpose
              </p>
              <div className="flex flex-wrap gap-2">
                {userProfile.domains.map(domain => (
                  <Badge key={domain} className="bg-cosmic-primary/20 text-cosmic-primary border-cosmic-primary/30">
                    {domain}
                  </Badge>
                ))}
                <Badge className="bg-cosmic-accent/20 text-cosmic-accent border-cosmic-accent/30">
                  {userProfile.mode}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-cosmic-accent">{userProfile.impactScore}</div>
                <div className="text-stellar-white/60 text-sm">Impact Score</div>
              </div>
              
              <div className="flex gap-2">
                {philosophicalModes.map(mode => (
                  <Button
                    key={mode.name}
                    variant={mode.active ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveMode(mode.name)}
                    className="p-2"
                  >
                    <mode.icon className="w-4 h-4" />
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Core Modules */}
            <div className="lg:col-span-2 space-y-6">
              {/* Dashboard Modules Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {dashboardModules.map((module, index) => (
                  <Card 
                    key={index} 
                    className={`group hover:shadow-cosmic transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-cosmic-primary/20 hover:border-cosmic-primary/50 relative overflow-hidden cursor-pointer ${
                      module.urgent ? 'ring-2 ring-red-500/50' : ''
                    }`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 ${module.color.split(' ')[0]}`} />
                    
                    {module.urgent && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs animate-pulse">
                          Urgent
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-stellar-white" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-stellar-white/60 group-hover:text-cosmic-accent transition-colors" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-stellar-white mb-2">{module.name}</h3>
                      <p className="text-stellar-white/80 text-sm mb-3">{module.description}</p>
                      <p className="text-cosmic-accent text-sm font-semibold">{module.stats}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Recent Activity */}
              <Card className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-stellar-white">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-cosmic-primary/10">
                        <div className="w-8 h-8 rounded-full bg-gradient-cosmic flex items-center justify-center flex-shrink-0">
                          <Star className="w-4 h-4 text-stellar-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-stellar-white text-sm">{activity.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">{activity.domain}</Badge>
                            <span className="text-cosmic-accent text-xs font-semibold">{activity.impact}</span>
                          </div>
                          <p className="text-stellar-white/60 text-xs mt-1">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              
              {/* Urgent Callings */}
              <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-300">
                    <Bell className="w-5 h-5" />
                    Urgent Callings
                  </CardTitle>
                  <CardDescription className="text-red-200/80">
                    Global missions that need your skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {urgentCallings.map((calling, index) => (
                      <div key={index} className="border border-red-500/20 rounded-lg p-4 bg-red-500/5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-stellar-white text-sm">{calling.title}</h4>
                          <Badge className={`text-xs ${
                            calling.urgency === 'High' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {calling.urgency}
                          </Badge>
                        </div>
                        <p className="text-stellar-white/80 text-xs mb-3">{calling.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex gap-1">
                            {calling.domains.map(domain => (
                              <Badge key={domain} variant="secondary" className="text-xs">
                                {domain}
                              </Badge>
                            ))}
                          </div>
                          <span className="text-stellar-white/60">{calling.deadline}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">
                          Join Mission
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Impact Progress */}
              <Card className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-stellar-white">
                    <TrendingUp className="w-5 h-5" />
                    Your Impact Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-stellar-white/80">Monthly Goal</span>
                        <span className="text-cosmic-accent font-semibold">847 / 1000</span>
                      </div>
                      <Progress value={84.7} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-cosmic-accent">23</div>
                        <div className="text-stellar-white/60 text-xs">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-cosmic-accent">156</div>
                        <div className="text-stellar-white/60 text-xs">Collaborations</div>
                      </div>
                    </div>
                    
                    <Button variant="hero" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="bg-card/50 backdrop-blur-sm border-cosmic-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-stellar-white">
                    <Plus className="w-5 h-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Heart className="w-4 h-4 mr-2" />
                      Start New Project
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Find Collaborators
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Join Discussion
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Update Pact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
