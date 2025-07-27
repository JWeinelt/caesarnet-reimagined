import { Github, MessageCircle, Book, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Software": [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Plugins", href: "#plugins" },
      { name: "Roadmap", href: "https://github.com/JWeinelt/Caesar/blob/main/RoadMap.md" }
    ],
    "Community": [
      { name: "Discord", href: "https://dc.caesarnet.cloud", icon: <MessageCircle className="h-4 w-4" /> },
      { name: "GitHub", href: "https://github.com/Caesar", icon: <Github className="h-4 w-4" /> },
      { name: "Forum", href: "https://forum.caesarnet.cloud" },
      { name: "Blog", href: "https://blog.caesarnet.cloud" }
    ],
    "Support": [
      { name: "Documentation", href: "https://docs.caesarnet.cloud", icon: <Book className="h-4 w-4" /> },
      { name: "Support center", href: "https://support.caesarnet.cloud" },
      { name: "Status", href: "https://status.caesarnet.cloud" },
      { name: "Contact", href: "https://caesarnet.cloud/contact" }
    ],
    "Legal": [
      { name: "Privacy policy", href: "https://caesarnet.cloud/privacy" },
      { name: "Imprint", href: "https://caesarnet.cloud/imprint" },
      { name: "ToS", href: "https://caesarnet.cloud/tos" },
      { name: "License", href: "https://www.gnu.org/licenses/gpl-3.0.html" }
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
              <img src="/src/assets/logo.png" alt="Caesar Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">Caesar</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Make server management simple and user-friendly. Caesar is the modern, open-source solution for all your server administration needs.
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
                <span className="text-sm">Created with ❤️</span>
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
              © 2024 Caesar. Licensed under GNU GPL v3.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Version 0.0.2</span>
              <div className="w-px h-4 bg-border" />
              <span>Last update: 27th July 2025</span>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All systems running</span>
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