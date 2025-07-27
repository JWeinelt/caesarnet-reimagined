import { Card } from "@/components/ui/card";
import { Settings, Cloud, Code } from "lucide-react";
import serverIcon from "@/assets/server-icon.png";
import pluginIcon from "@/assets/plugin-icon.png";
import developerIcon from "@/assets/developer-icon.png";

const Features = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      image: serverIcon,
      title: "Erweiterte Verwaltung",
      description: "Verwalte deine Server mit Leichtigkeit durch unser intuitives Panel. Monitoring, Konfiguration und Wartung - alles an einem Ort.",
      color: "from-primary to-primary-glow"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      image: pluginIcon,
      title: "Cloud-Integration",
      description: "Nahtlose Integration mit Cloud-Services. Skaliere deine Projekte mühelos und nutze moderne Cloud-Infrastrukturen.",
      color: "from-accent to-accent-glow"
    },
    {
      icon: <Code className="h-8 w-8" />,
      image: developerIcon,
      title: "Entwickler-Tools",
      description: "Mächtige Tools für Entwickler, inklusive Plugin-Support und API-Zugang. Erweitere Caesar nach deinen Bedürfnissen.",
      color: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Wichtige Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Caesar bietet alles, was du für professionelles Server-Management brauchst. 
            Einfach, mächtig und vollständig anpassbar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card backdrop-blur-glass border border-white/10 p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Bereit, die volle Power von Caesar zu entdecken?
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-primary" />
            <span className="text-primary font-semibold">Mehr erfahren</span>
            <div className="w-12 h-px bg-gradient-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;