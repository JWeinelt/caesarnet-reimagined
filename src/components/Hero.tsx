import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Download } from "lucide-react";
import heroImage from "@/assets/caesar-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-card backdrop-blur-glass border border-white/10">
            <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">Vollständig Open-Source</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Ein Ziel.
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent leading-tight">
              Eine Software.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mach Server-Management einfach und benutzerfreundlich.
            <br />
            <span className="text-primary font-semibold">Caesar</span> - Die moderne Lösung für deine Server.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="group">
              Jetzt starten
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="glass" size="xl" className="group">
              <Github className="mr-2 h-5 w-5" />
              GitHub ansehen
            </Button>
          </div>

          {/* Quick Start */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Schnellstart mit einem Befehl</p>
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-card backdrop-blur-glass border border-white/10 rounded-lg">
              <code className="text-primary font-mono">git clone https://github.com/JWeinelt/Caesar.git</code>
              <Button size="sm" variant="ghost" className="p-2">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow rounded-full blur-2xl opacity-30 animate-pulse delay-500" />
    </section>
  );
};

export default Hero;