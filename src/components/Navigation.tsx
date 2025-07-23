import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Globe,
  FileText,
  Users,
  Rocket,
  Heart,
  Github,
  Code2,
  ChevronDown,
  BookOpen,
  Shield,
  BarChart3,
  DollarSign,
  MapPin,
  Handshake,
  Info,
  Target
} from "lucide-react";

const navItems = [
  { name: "Domains", href: "#domains", icon: Globe },
  { name: "Charter", href: "#charter", icon: FileText },
  { name: "Stewards", href: "#stewards", icon: Users },
  { name: "Get Involved", href: "#phase-one", icon: Rocket },
];

const pageItems = [
  { name: "About", href: "/about", icon: Info, description: "Our story and mission" },
  { name: "Universal Access", href: "/access", icon: Globe, description: "One Protocol. All People." },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3, description: "DestinyOS interface" },
  { name: "Tech Stack", href: "/tech-stack", icon: Code2, description: "Ubuntu technology architecture" },
  { name: "Developer", href: "/developer", icon: Code2, description: "Kenya First Edition" },
  { name: "Engineers", href: "/engineers", icon: MapPin, description: "Global community map" },
  { name: "Impact", href: "/impact", icon: Target, description: "SDG progress tracking" },
  { name: "Partnerships", href: "/partnerships", icon: Handshake, description: "Strategic alliances" },
  { name: "Pricing", href: "/pricing", icon: DollarSign, description: "Ethical pricing tiers" },
];

const communityItems = [
  { name: "Contributing", href: "/contributing", icon: Heart, description: "How to contribute" },
  { name: "Code of Conduct", href: "/code-of-conduct", icon: Shield, description: "Community guidelines" },
  { name: "Open Source", href: "/open-source", icon: Github, description: "Our open source strategy" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-space/90 backdrop-blur-md border-b border-cosmic-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gradient-cosmic">
              <Globe className="w-6 h-6 text-stellar-white animate-spin-slow" />
            </div>
            <span className="text-xl font-bold bg-gradient-constitutional bg-clip-text text-transparent">
              PACT-7
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-stellar-white/80 hover:text-cosmic-primary transition-colors group"
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}

            {/* Pages Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-stellar-white/80 hover:text-cosmic-primary transition-colors group">
                  <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Platform</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-deep-space/95 backdrop-blur-md border-cosmic-primary/20">
                <DropdownMenuLabel className="text-cosmic-accent">Platform Pages</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-cosmic-primary/20" />
                {pageItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-start gap-3 p-3 text-stellar-white hover:bg-cosmic-primary/20 cursor-pointer"
                    >
                      <IconComponent className="w-4 h-4 mt-0.5 text-cosmic-accent" />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-stellar-white/60">{item.description}</div>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator className="bg-cosmic-primary/20" />
                <DropdownMenuLabel className="text-cosmic-accent">Community</DropdownMenuLabel>
                {communityItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-start gap-3 p-3 text-stellar-white hover:bg-cosmic-primary/20 cursor-pointer"
                    >
                      <IconComponent className="w-4 h-4 mt-0.5 text-cosmic-accent" />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-stellar-white/60">{item.description}</div>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Join PACT
            </Button>
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5 text-stellar-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-deep-space border-cosmic-primary/20">
              <div className="flex flex-col gap-6 pt-6">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 text-stellar-white/80 hover:text-cosmic-primary transition-colors text-left"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium text-lg">{item.name}</span>
                    </button>
                  );
                })}

                <div className="border-t border-cosmic-primary/20 pt-4">
                  <div className="text-cosmic-accent font-semibold mb-3">Platform</div>
                  {pageItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="flex items-center gap-3 text-stellar-white/80 hover:text-cosmic-primary transition-colors text-left w-full mb-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="border-t border-cosmic-primary/20 pt-4">
                  <div className="text-cosmic-accent font-semibold mb-3">Community</div>
                  {communityItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="flex items-center gap-3 text-stellar-white/80 hover:text-cosmic-primary transition-colors text-left w-full mb-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-cosmic-primary/20 space-y-3">
                  <Button variant="cosmic" className="w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Join PACT
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
