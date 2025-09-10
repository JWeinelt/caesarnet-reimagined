import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Crown, Trophy } from "lucide-react";
import {useNavigate} from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const supportLevels = [
    {
      icon: <Trophy className="h-6 w-6" />,
      emoji: "🥉",
      title: "Bronze Support",
      price: "Free",
      description: "Perfect for beginners",
      features: [
        "Community Support",
        "Access to the forum",
        "Open support channels on Discord",
        "Caesar Documentation"
      ],
      color: "from-amber-500 to-amber-600",
      borderColor: "border-amber-500/20",
      popular: false
    },
    {
      icon: <Star className="h-6 w-6" />,
      emoji: "🥈",
      title: "Silver Support",
      price: "€5/Month",
      description: "For growing projects",
      features: [
        "Support via eMail (12hrs in average)",
        "Priority in Discord Tickets",
        "Priority at Discord support",
        "Dedicated support and setup-service",
        "Free hosting of your Caesar instance"
      ],
      color: "from-slate-400 to-slate-500",
      borderColor: "border-slate-400/20",
      popular: true
    },
    {
      icon: <Crown className="h-6 w-6" />,
      emoji: "🥇",
      title: "Gold Support",
      price: "€15/Month",
      description: "For professional teams",
      features: [
        "Support via eMail (1hr in average)",
        "Phone support",
        "Highest priority on Discord",
        "Dedicated point of contact",
        "Custom Integration Support",
        "Priority Plugin Reviews",
        "Free sub-domain for your hosted instance"
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
            Support Levels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Caesar is free and open-source. Choose the support level that fits your needs.
          </p>
        </div>

        {/* Free Plan Highlight */}
        <div className="bg-gradient-card backdrop-blur-glass border border-white/10 rounded-2xl p-8 mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse" />
            <span className="text-lg font-semibold text-primary">Basic Plan</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-2">Free forever</h3>
          <p className="text-muted-foreground mb-6">
            Full feature access • Plugin Marketplace • Bronze Support
          </p>
          <Button variant="hero" size="lg">
            Start now
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
                  Popular
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
                  onClick={() => navigate(index === 0 ? "/downloads" : "/" /*"/buying"*/)}
                  variant={level.popular ? "hero" : "glass"} 
                  className="w-full"
                  size="lg"
                >
                  {index === 0 ? "Get started" : "Not available"/*"Buy plan"*/}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Questions about support options? We're here to help!
          </p>
          <Button onClick={() => navigate("/support")} variant="glass" size="lg">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;