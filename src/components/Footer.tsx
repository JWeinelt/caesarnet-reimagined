import { Github, MessageCircle, Book, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Produkt": [
      { name: "Features", href: "#features" },
      { name: "Preise", href: "#pricing" },
      { name: "Plugins", href: "#plugins" },
      { name: "Roadmap", href: "#" }
    ],
    "Community": [
      { name: "Discord", href: "#", icon: <MessageCircle className="h-4 w-4" /> },
      { name: "GitHub", href: "#", icon: <Github className="h-4 w-4" /> },
      { name: "Forum", href: "#" },
      { name: "Blog", href: "#" }
    ],
    "Support": [
      { name: "Dokumentation", href: "#", icon: <Book className="h-4 w-4" /> },
      { name: "Support-Center", href: "#" },
      { name: "Status", href: "#" },
      { name: "Kontakt", href: "#" }
    ],
    "Rechtliches": [
      { name: "Datenschutz", href: "#" },
      { name: "Impressum", href: "#" },
      { name: "AGB", href: "#" },
      { name: "Lizenz", href: "#" }
    ]
  };

  return (
    <footer className="border-t border-white/10 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">Caesar</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mach Server-Management einfach und benutzerfreundlich. Caesar ist die moderne, 
              Open-Source-Lösung für alle deine Server-Verwaltungsaufgaben.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">Open Source</span>
              </a>
              <a 
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span className="text-sm">Mit ❤️ erstellt</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Caesar. Alle Rechte vorbehalten. MIT Lizenz.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Version 2.1.0</span>
              <div className="w-px h-4 bg-border" />
              <span>Letzte Aktualisierung: Heute</span>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Alle Systeme aktiv</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;