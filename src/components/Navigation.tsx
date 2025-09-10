import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-card backdrop-blur-glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/src/assets/logo.png" alt="Caesar Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Caesar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="/#plugins" className="text-muted-foreground hover:text-foreground transition-colors">
              Plugins
            </a>
            <Link to="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
              Downloads
            </Link>
            <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
            <Link to="/buying" className="text-muted-foreground hover:text-foreground transition-colors">
              Buying
            </Link>
            <a href="https://docs.caesarnet.cloud" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="hero" size="sm">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#plugins" className="text-muted-foreground hover:text-foreground transition-colors">
                Plugins
              </a>
              <Link to="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
                Downloads
              </Link>
              <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
              <Link to="/buying" className="text-muted-foreground hover:text-foreground transition-colors">
                Buying
              </Link>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Docs
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="hero" size="sm">
                  Loslegen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;