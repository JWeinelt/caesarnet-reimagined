import { useState } from "react";
import { Search, ChevronRight, HelpCircle, Settings, Zap, Shield, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "getting-started",
      title: "Erste Schritte",
      icon: Zap,
      description: "Grundlagen und Setup von Caesar",
      articles: [
        { title: "Installation und Einrichtung", slug: "installation" },
        { title: "Erstes Plugin erstellen", slug: "first-plugin" },
        { title: "Caesar Grundlagen", slug: "basics" },
        { title: "Systemanforderungen", slug: "requirements" }
      ]
    },
    {
      id: "plugins",
      title: "Plugin-Entwicklung",
      icon: Code,
      description: "Alles über Plugin-Entwicklung und API",
      articles: [
        { title: "Plugin API Referenz", slug: "plugin-api" },
        { title: "Hooks und Events", slug: "hooks-events" },
        { title: "Best Practices", slug: "best-practices" },
        { title: "Plugin Veröffentlichung", slug: "publishing" }
      ]
    },
    {
      id: "troubleshooting",
      title: "Fehlerbehebung",
      icon: Settings,
      description: "Häufige Probleme und Lösungen",
      articles: [
        { title: "Häufige Fehler", slug: "common-errors" },
        { title: "Performance Probleme", slug: "performance" },
        { title: "Kompatibilitätsprobleme", slug: "compatibility" },
        { title: "Debug-Modus aktivieren", slug: "debug-mode" }
      ]
    },
    {
      id: "security",
      title: "Sicherheit",
      icon: Shield,
      description: "Sicherheit und Datenschutz",
      articles: [
        { title: "Sicherheitsrichtlinien", slug: "security-guidelines" },
        { title: "Datenschutz", slug: "data-privacy" },
        { title: "Sichere Plugin-Entwicklung", slug: "secure-development" },
        { title: "Schwachstellen melden", slug: "vulnerability-reporting" }
      ]
    },
    {
      id: "community",
      title: "Community",
      icon: Users,
      description: "Community und Support",
      articles: [
        { title: "Community Guidelines", slug: "community-guidelines" },
        { title: "Forum Nutzung", slug: "forum-usage" },
        { title: "Beitrag leisten", slug: "contributing" },
        { title: "Discord Server", slug: "discord" }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0 || searchQuery === "");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto max-w-4xl relative">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Caesar
            </Link>
            <ChevronRight className="inline w-4 h-4 mx-2" />
            <span>Support</span>
          </nav>

          {/* Search Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              CAESAR-SUPPORT
            </h1>
            
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Suchen Sie nach Hilfe-Artikeln..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
              />
            </div>

            <Button variant="outline" className="mb-8">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support kontaktieren
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Suchergebnisse für "{searchQuery}"
              </h2>
            </div>
          )}

          <div className="grid gap-8">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {category.articles.map((article) => (
                      <Link
                        key={article.slug}
                        to={`/support/${category.id}/${article.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group/article"
                      >
                        <span className="font-medium group-hover/article:text-primary transition-colors">
                          {article.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/article:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Keine Ergebnisse gefunden</h3>
              <p className="text-muted-foreground mb-6">
                Wir konnten keine Artikel zu "{searchQuery}" finden.
              </p>
              <Button>Support kontaktieren</Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;