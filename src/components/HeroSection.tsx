import { Button } from "@/components/ui/button";
import { Globe, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-planetary-network.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with planetary network */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated cosmic elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-accent rounded-full animate-pulse-cosmic" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cosmic-primary rounded-full animate-float" />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cosmic-secondary rounded-full animate-pulse-cosmic" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Spinning globe icon */}
        <div className="mb-8 flex justify-center">
          <Globe className="w-16 h-16 text-cosmic-primary animate-spin-slow" />
        </div>
        
        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-constitutional bg-clip-text text-transparent leading-tight">
          PACT-7
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-stellar-white">
          The Planetary Accord for<br />Conscious Technology
        </h2>
        
        <p className="text-xl md:text-2xl mb-6 text-cosmic-accent font-medium">
          A New Social Contract for Humanity
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-stellar-white/80 max-w-3xl mx-auto leading-relaxed">
          Powered by Wisdom, Justice, and Conscious Tech.<br />
          Join the post-national alliance rewriting governance, ethics, and civilization itself.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button variant="cosmic" size="lg" className="text-lg px-8 py-4">
            <Users className="w-5 h-5 mr-2" />
            Join the PACT
          </Button>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <BookOpen className="w-5 h-5 mr-2" />
            Read the Foundational Charter
          </Button>
          
          <Button variant="constitutional" size="lg" className="text-lg px-8 py-4">
            <Globe className="w-5 h-5 mr-2" />
            Meet the 7 Stewards
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-cosmic-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cosmic-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};