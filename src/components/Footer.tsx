import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Globe, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  Heart,
  ExternalLink
} from "lucide-react";

const languages = [
  { code: "en", name: "English", active: true },
  { code: "sw", name: "Kiswahili" },
  { code: "ar", name: "العربية" },
  { code: "hi", name: "संस्कृत" },
  { code: "es", name: "Español" },
  { code: "mi", name: "Māori" }
];

const footerLinks = [
  {
    title: "Movement",
    links: [
      { name: "Join PACT-7", href: "#join" },
      { name: "Planetary Stewards", href: "#stewards" },
      { name: "Take the Oath", href: "#oath" },
      { name: "Global Alliance", href: "#alliance" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Foundational Charter", href: "#charter" },
      { name: "Developer Kit", href: "#devkit" },
      { name: "Press Resources", href: "#press" },
      { name: "Documentation", href: "#docs" }
    ]
  },
  {
    title: "Domains",
    links: [
      { name: "Justice (Africa)", href: "#justice" },
      { name: "Innovation (N. America)", href: "#innovation" },
      { name: "Wisdom (Asia)", href: "#wisdom" },
      { name: "Resilience (S. America)", href: "#resilience" }
    ]
  },
  {
    title: "Connect",
    links: [
      { name: "Newsletter", href: "#newsletter" },
      { name: "Community Forum", href: "#forum" },
      { name: "Regional Nodes", href: "#nodes" },
      { name: "Contact", href: "#contact" }
    ]
  }
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/PACT7Global" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/pact7" },
  { name: "GitHub", icon: Github, href: "https://github.com/PACT7-Global" },
  { name: "Email", icon: Mail, href: "mailto:contact@pact7.org" }
];

export const Footer = () => {
  return (
    <footer className="bg-deep-space text-stellar-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - Logo and Vision */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-cosmic">
              <Globe className="w-8 h-8 text-stellar-white animate-spin-slow" />
            </div>
            <span className="text-3xl font-bold bg-gradient-constitutional bg-clip-text text-transparent">
              PACT-7
            </span>
          </div>
          
          <blockquote className="text-2xl italic leading-relaxed mb-6 text-cosmic-accent">
            "PACT-7 is the soul of global civilization for the next 1,000 years."
          </blockquote>
          
          <p className="text-stellar-white/80 max-w-2xl mx-auto">
            Building the foundation for conscious planetary governance through 
            ethical AI, ancient wisdom, and post-national cooperation.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-cosmic-primary mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-stellar-white/70 hover:text-cosmic-accent transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-cosmic-primary/20 mb-12" />

        {/* Middle Section - Newsletter */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-stellar-white">
            Join the Planetary Transformation
          </h3>
          <p className="text-stellar-white/80 mb-6 max-w-lg mx-auto">
            Get updates on global implementation, new governance frameworks, 
            and opportunities to participate in shaping our collective future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-stellar-white/10 border border-cosmic-primary/30 text-stellar-white placeholder-stellar-white/50 focus:outline-none focus:ring-2 focus:ring-cosmic-primary"
            />
            <Button variant="cosmic" className="px-6">
              <Heart className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="bg-cosmic-primary/20 mb-12" />

        {/* Language Selector */}
        <div className="text-center mb-12">
          <h4 className="font-semibold text-cosmic-accent mb-4">
            Available Languages
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`px-3 py-2 rounded-lg border transition-all ${
                  lang.active 
                    ? 'bg-cosmic-primary text-deep-space border-cosmic-primary' 
                    : 'bg-transparent text-stellar-white/70 border-cosmic-primary/30 hover:border-cosmic-primary/50 hover:text-stellar-white'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <p className="text-stellar-white/60 text-sm mt-3">
            Languages rotate weekly • More coming soon
          </p>
        </div>

        <Separator className="bg-cosmic-primary/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-cosmic-primary/20 hover:bg-cosmic-primary/30 transition-colors group"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5 text-stellar-white group-hover:text-cosmic-accent transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-stellar-white/60 text-sm">
              © 2024 PACT-7 Global Alliance. Built with conscious intention.
            </p>
            <p className="text-stellar-white/50 text-xs mt-1">
              Open source • Transparent • For all beings
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-cosmic-primary/10 border-t border-cosmic-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-4 text-stellar-white/70">
              <a href="#privacy" className="hover:text-cosmic-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-cosmic-accent transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:text-cosmic-accent transition-colors">
                Accessibility
              </a>
            </div>
            <div className="text-stellar-white/60">
              Made with 💜 for planetary consciousness
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};