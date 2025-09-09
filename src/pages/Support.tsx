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
      title: "Getting Started",
      icon: Zap,
      description: "All basics and the setup of Caesar",
      articles: [
        { title: "Installation and Setup", slug: "installation" },
        { title: "Create a plugin", slug: "first-plugin" },
        { title: "Getting Started", slug: "basics" },
        { title: "System Requirements", slug: "requirements" }
      ]
    },
    {
      id: "plugins",
      title: "Plugin Development",
      icon: Code,
      description: "Everything about developing and publishing plugins",
      articles: [
        { title: "Plugin API Reference", slug: "plugin-api" },
        { title: "Hooks and Events", slug: "hooks-events" },
        { title: "Best Practices", slug: "best-practices" },
        { title: "Publishing your plugin", slug: "publishing" }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: Settings,
      description: "Frequent problems and solutions",
      articles: [
        { title: "Common errors", slug: "common-errors" },
        { title: "Performance issues", slug: "performance" },
        { title: "Compatibility problems", slug: "compatibility" },
        { title: "Using the debug mode", slug: "debug-mode" }
      ]
    },
    {
      id: "security",
      title: "Security",
      icon: Shield,
      description: "Security and Privacy",
      articles: [
        { title: "Security Guidelines", slug: "security-guidelines" },
        { title: "Privacy Policy", slug: "data-privacy" },
        { title: "Secure plugin development", slug: "secure-development" },
        { title: "Reporting vulnerabilities", slug: "vulnerability-reporting" }
      ]
    },
    {
      id: "community",
      title: "Community",
      icon: Users,
      description: "Community and Support",
      articles: [
        { title: "Community Guidelines", slug: "community-guidelines" },
        { title: "Forum Guidelines", slug: "forum-usage" },
        { title: "Contributing", slug: "contributing" },
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
              CAESAR SUPPORT CENTER
            </h1>
            
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for support articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
              />
            </div>

            <Button variant="outline" className="mb-8">
              <HelpCircle className="w-4 h-4 mr-2" />
              Contact our support
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
                Searching results for "{searchQuery}"
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
              <h3 className="text-xl font-semibold mb-2">No article found</h3>
              <p className="text-muted-foreground mb-6">
                We could not find any article relating to "{searchQuery}".
              </p>
              <Button>Contact the support</Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;