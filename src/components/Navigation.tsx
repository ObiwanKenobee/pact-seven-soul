import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Globe,
  FileText,
  Users,
  Rocket,
  Heart,
  Github,
  Code2
} from "lucide-react";

const navItems = [
  { name: "Domains", href: "#domains", icon: Globe },
  { name: "Charter", href: "#charter", icon: FileText },
  { name: "Stewards", href: "#stewards", icon: Users },
  { name: "Get Involved", href: "#phase-one", icon: Rocket },
];

const linkItems = [
  { name: "Developer", href: "/developer", icon: Code2 },
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
