import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Star, Users } from "lucide-react";

const Plugins = () => {
  const stats = [
    { label: "Verfügbare Plugins", value: "150+", icon: <Download className="h-5 w-5" /> },
    { label: "Aktive Entwickler", value: "50+", icon: <Users className="h-5 w-5" /> },
    { label: "Downloads", value: "10k+", icon: <Star className="h-5 w-5" /> }
  ];

  const featuredPlugins = [
    {
      name: "Performance Monitor",
      description: "Überwache Server-Performance in Echtzeit",
      downloads: "2.3k",
      rating: 4.9,
      category: "Monitoring"
    },
    {
      name: "Auto Backup",
      description: "Automatische Backup-Erstellung für deine Welten",
      downloads: "1.8k",
      rating: 4.8,
      category: "Backup"
    },
    {
      name: "Security Suite",
      description: "Erweiterte Sicherheitsfeatures für deinen Server",
      downloads: "3.1k",
      rating: 4.9,
      category: "Security"
    }
  ];

  return (
    <section id="plugins" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6">
            Plugin-Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erweitere Caesar mit einem Klick. Durchsuche und installiere Plugins direkt aus dem Caesar-Panel.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card backdrop-blur-glass border border-white/10 p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-accent text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Featured Plugins */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Beliebte Plugins</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPlugins.map((plugin, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-glass border border-white/10 p-6 hover:scale-105 transition-all duration-300 hover:shadow-accent">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-gradient-accent rounded-full text-white font-medium">
                      {plugin.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-xs text-muted-foreground">{plugin.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{plugin.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{plugin.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{plugin.downloads} Downloads</span>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Installation Demo */}
        <div className="bg-gradient-card backdrop-blur-glass border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Plugin-Installation leicht gemacht
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Keine komplizierte Installation mehr. Wähle ein Plugin, klicke installieren - fertig. 
            Caesar kümmert sich um den Rest.
          </p>
          
          {/* Installation Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {["Plugin auswählen", "Ein Klick installieren", "Sofort nutzen"].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <span className="text-foreground font-medium">{step}</span>
                {index < 2 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>

          <Button variant="accent" size="lg" className="group">
            Plugin-Marketplace besuchen
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plugins;