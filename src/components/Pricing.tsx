import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Crown, Trophy } from "lucide-react";

const Pricing = () => {
  const supportLevels = [
    {
      icon: <Trophy className="h-6 w-6" />,
      emoji: "🥉",
      title: "Bronze Support",
      price: "Kostenlos",
      description: "Perfekt für den Einstieg",
      features: [
        "Community Support",
        "Zugang zum Forum",
        "Offene Support-Kanäle auf Discord",
        "Basis-Dokumentation"
      ],
      color: "from-amber-500 to-amber-600",
      borderColor: "border-amber-500/20",
      popular: false
    },
    {
      icon: <Star className="h-6 w-6" />,
      emoji: "🥈",
      title: "Silver Support",
      price: "€19/Monat",
      description: "Für wachsende Projekte",
      features: [
        "Support via E-Mail (12h Antwortzeit)",
        "Priorität bei Discord-Tickets",
        "Priorität bei Discord-Support",
        "Erweiterte Dokumentation",
        "Beta-Zugang zu neuen Features"
      ],
      color: "from-slate-400 to-slate-500",
      borderColor: "border-slate-400/20",
      popular: true
    },
    {
      icon: <Crown className="h-6 w-6" />,
      emoji: "🥇",
      title: "Gold Support",
      price: "€49/Monat",
      description: "Für professionelle Teams",
      features: [
        "E-Mail Support (1h Antwortzeit)",
        "Telefon-Support",
        "Höchste Priorität auf Discord",
        "Dedizierter Account-Manager",
        "Custom Integration Support",
        "Priority Plugin Reviews"
      ],
      color: "from-yellow-400 to-yellow-500",
      borderColor: "border-yellow-400/20",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Support-Level
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Caesar ist kostenlos und Open-Source. Wähle den Support-Level, der zu deinen Bedürfnissen passt.
          </p>
        </div>

        {/* Free Plan Highlight */}
        <div className="bg-gradient-card backdrop-blur-glass border border-white/10 rounded-2xl p-8 mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse" />
            <span className="text-lg font-semibold text-primary">Basis-Plan</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-2">Kostenlos für immer</h3>
          <p className="text-muted-foreground mb-6">
            Vollständiger Feature-Zugang • Plugin-Marketplace • Bronze Support
          </p>
          <Button variant="hero" size="lg">
            Jetzt starten
          </Button>
        </div>

        {/* Support Levels */}
        <div className="grid md:grid-cols-3 gap-8">
          {supportLevels.map((level, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden bg-gradient-card backdrop-blur-glass border-2 ${level.borderColor} p-8 ${
                level.popular ? 'scale-105 shadow-glow' : ''
              } hover:scale-105 transition-all duration-300`}
            >
              {/* Popular Badge */}
              {level.popular && (
                <div className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Beliebt
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">{level.emoji}</span>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${level.color} text-white`}>
                    {level.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{level.title}</h3>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {level.price}
                </div>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {level.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Button 
                  variant={level.popular ? "hero" : "glass"} 
                  className="w-full"
                  size="lg"
                >
                  {index === 0 ? "Community beitreten" : "Support wählen"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Fragen zu den Support-Optionen? Wir helfen gerne weiter.
          </p>
          <Button variant="glass" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;