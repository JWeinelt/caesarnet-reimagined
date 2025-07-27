import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Mawick",
      role: "Server Administrator",
      avatar: "https://github.com/LeMichiii.png",
      rating: 5,
      text: "Caesar ist das Beste, was ich je benutzt habe! Einfaches Panel und super entspannt. Einfach empfehlenswert!"
    },
    {
      name: "Julia Schmidt",
      role: "Community Manager",
      avatar: "https://github.com/octocat.png",
      rating: 5,
      text: "Die Plugin-Integration ist fantastisch. Endlich kann ich meinen Server verwalten, ohne stundenlang in der Konsole zu arbeiten."
    },
    {
      name: "Thomas Weber",
      role: "Entwickler",
      avatar: "https://github.com/torvalds.png",
      rating: 5,
      text: "Als Open-Source-Projekt überzeugt Caesar auf ganzer Linie. Die API ist durchdacht und die Community ist sehr hilfsbereit."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Was unsere Nutzer sagen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erfahre, wie Caesar anderen dabei hilft, ihre Server effizient zu verwalten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden bg-gradient-card backdrop-blur-glass border border-white/10 p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
              <p className="text-muted-foreground">Zufriedene Nutzer</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">1000+</div>
              <p className="text-muted-foreground">Verwaltete Server</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
              <p className="text-muted-foreground">Community Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;