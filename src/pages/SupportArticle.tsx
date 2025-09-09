import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SupportArticle = () => {
  const { category, slug } = useParams();

  // Mock article data - in a real app, this would come from a CMS or API
  const articles = {
    "getting-started": {
      installation: {
        title: "Installation und Einrichtung",
        content: `
# Installation und Einrichtung von Caesar

Caesar ist ein leistungsstarkes Open-Source-System, das einfach zu installieren und zu konfigurieren ist.

## Systemanforderungen

- **Betriebssystem**: Windows 10/11, macOS 10.15+, oder Linux
- **RAM**: Mindestens 4GB (8GB empfohlen)
- **Speicher**: 2GB freier Speicherplatz
- **Node.js**: Version 16.0 oder höher

## Installation

### 1. Repository klonen

\`\`\`bash
git clone https://github.com/caesar-net/caesar.git
cd caesar
\`\`\`

### 2. Abhängigkeiten installieren

\`\`\`bash
npm install
\`\`\`

### 3. Konfiguration

Erstellen Sie eine \`.env\` Datei:

\`\`\`env
CAESAR_PORT=3000
CAESAR_DB_PATH=./data/caesar.db
CAESAR_PLUGIN_DIR=./plugins
\`\`\`

### 4. Caesar starten

\`\`\`bash
npm start
\`\`\`

## Erste Schritte

Nach der Installation können Sie:

1. **Dashboard öffnen**: Besuchen Sie \`http://localhost:3000\`
2. **Erstes Plugin installieren**: Navigieren Sie zum Plugin-Manager
3. **Konfiguration anpassen**: Öffnen Sie die Einstellungen

## Häufige Probleme

### Port bereits in Verwendung
Wenn Port 3000 bereits verwendet wird, ändern Sie \`CAESAR_PORT\` in der \`.env\` Datei.

### Berechtigungsfehler
Stellen Sie sicher, dass Caesar Schreibrechte im Installationsverzeichnis hat.

## Nächste Schritte

- [Erstes Plugin erstellen](/support/getting-started/first-plugin)
- [Caesar Grundlagen](/support/getting-started/basics)
        `,
        lastUpdated: "2025-01-15",
        author: "Caesar Team",
        readTime: "5 min"
      },
      "first-plugin": {
        title: "Erstes Plugin erstellen",
        content: `
# Erstes Plugin erstellen

Lernen Sie, wie Sie Ihr erstes Caesar-Plugin entwickeln.

## Plugin-Struktur

Ein Caesar-Plugin besteht aus:

\`\`\`
mein-plugin/
├── plugin.json
├── index.js
├── README.md
└── package.json
\`\`\`

## plugin.json

\`\`\`json
{
  "name": "mein-erstes-plugin",
  "version": "1.0.0",
  "description": "Mein erstes Caesar Plugin",
  "main": "index.js",
  "author": "Ihr Name",
  "license": "MIT"
}
\`\`\`

## index.js

\`\`\`javascript
class MeinErstesPlugin {
  constructor(caesar) {
    this.caesar = caesar;
  }

  async onLoad() {
    console.log('Plugin geladen!');
    
    // Event-Listener registrieren
    this.caesar.on('message', this.onMessage.bind(this));
  }

  async onMessage(message) {
    if (message.content === '!hello') {
      message.reply('Hallo von meinem Plugin!');
    }
  }

  async onUnload() {
    console.log('Plugin entladen!');
  }
}

module.exports = MeinErstesPlugin;
\`\`\`

## Installation testen

1. Kopieren Sie das Plugin in den \`plugins/\` Ordner
2. Starten Sie Caesar neu
3. Testen Sie das Plugin mit \`!hello\`

## Nächste Schritte

- [Plugin API Referenz](/support/plugins/plugin-api)
- [Hooks und Events](/support/plugins/hooks-events)
        `,
        lastUpdated: "2025-01-15",
        author: "Caesar Team",
        readTime: "8 min"
      }
    },
    plugins: {
      "plugin-api": {
        title: "Plugin API Referenz",
        content: `
# Plugin API Referenz

Vollständige Referenz der Caesar Plugin API.

## Core API

### caesar.on(event, callback)
Registriert einen Event-Listener.

\`\`\`javascript
caesar.on('message', (message) => {
  console.log('Neue Nachricht:', message.content);
});
\`\`\`

### caesar.emit(event, data)
Löst ein Event aus.

\`\`\`javascript
caesar.emit('custom-event', { data: 'wert' });
\`\`\`

## Message API

### message.reply(content)
Antwortet auf eine Nachricht.

\`\`\`javascript
message.reply('Antwort');
\`\`\`

### message.delete()
Löscht die Nachricht.

\`\`\`javascript
await message.delete();
\`\`\`

## Storage API

### caesar.storage.get(key)
Liest einen Wert aus dem Storage.

\`\`\`javascript
const value = await caesar.storage.get('mein-key');
\`\`\`

### caesar.storage.set(key, value)
Speichert einen Wert im Storage.

\`\`\`javascript
await caesar.storage.set('mein-key', 'mein-wert');
\`\`\`

## HTTP API

### caesar.http.get(url)
Führt eine GET-Anfrage aus.

\`\`\`javascript
const response = await caesar.http.get('https://api.example.com/data');
\`\`\`

## Events

### message
Wird ausgelöst, wenn eine neue Nachricht empfangen wird.

### user-join
Wird ausgelöst, wenn ein Benutzer beitritt.

### user-leave
Wird ausgelöst, wenn ein Benutzer das System verlässt.
        `,
        lastUpdated: "2025-01-15",
        author: "Caesar Team",
        readTime: "12 min"
      }
    }
  };

  const categoryData = articles[category as keyof typeof articles];
  const article = categoryData?.[slug as keyof typeof categoryData] as any;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto max-w-4xl py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel nicht gefunden</h1>
          <p className="text-muted-foreground mb-8">
            Der angeforderte Artikel konnte nicht gefunden werden.
          </p>
          <Link to="/support">
            <Button>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Zurück zum Support
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-4xl py-8 px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Caesar
          </Link>
          <ChevronRight className="inline w-4 h-4 mx-2" />
          <Link to="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
          <ChevronRight className="inline w-4 h-4 mx-2" />
          <span>{article.title}</span>
        </nav>

        {/* Back Button */}
        <Link to="/support" className="inline-block mb-8">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Zurück zum Support
          </Button>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} Lesezeit
            </div>
            <Badge variant="secondary">
              Zuletzt aktualisiert: {article.lastUpdated}
            </Badge>
          </div>
        </div>

        {/* Article Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div 
              className="prose prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/\n## /g, '\n<h2 class="text-2xl font-semibold mt-8 mb-4">')
                  .replace(/\n### /g, '\n<h3 class="text-xl font-semibold mt-6 mb-3">')
                  .replace(/\n# /g, '\n<h1 class="text-3xl font-bold mt-8 mb-6">')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n- /g, '\n<li>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^/, '<p class="mb-4">')
                  .replace(/$/, '</p>')
              }}
            />
          </CardContent>
        </Card>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center">
          <Link to="/support">
            <Button variant="outline">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Alle Artikel
            </Button>
          </Link>
          <Button>
            War dieser Artikel hilfreich?
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SupportArticle;