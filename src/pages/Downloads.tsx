import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Server, Monitor, Plug2, Package } from "lucide-react";

// This data structure can be easily replaced with API calls later
const downloads = [
  {
    id: "server",
    name: "Caesar Server",
    description: "The core Caesar server application for hosting and managing your Caesar infrastructure.",
    icon: <Server className="w-8 h-8" />,
    version: "v2.1.0",
    size: "245 MB",
    platform: "Linux, Windows, macOS",
    downloadUrl: "#", // Replace with actual download URL or API endpoint
    isRecommended: true,
    features: [
      "Complete server infrastructure",
      "Plugin management system",
      "Advanced security features",
      "Multi-platform support"
    ]
  },
  {
    id: "client",
    name: "Caesar Client",
    description: "The official Caesar client application for connecting to and managing Caesar servers.",
    icon: <Monitor className="w-8 h-8" />,
    version: "v2.1.0",
    size: "156 MB",
    platform: "Windows, macOS, Linux",
    downloadUrl: "#", // Replace with actual download URL or API endpoint
    isRecommended: false,
    features: [
      "Intuitive user interface",
      "Real-time server monitoring",
      "Plugin management",
      "Cross-platform compatibility"
    ]
  },
  {
    id: "connector",
    name: "Caesar Connector",
    description: "Lightweight connector for integrating Caesar with existing systems and third-party applications.",
    icon: <Plug2 className="w-8 h-8" />,
    version: "v1.8.2",
    size: "89 MB",
    platform: "All Platforms",
    downloadUrl: "#", // Replace with actual download URL or API endpoint
    isRecommended: false,
    features: [
      "Easy integration",
      "REST API support",
      "Webhook capabilities",
      "Minimal resource usage"
    ]
  },
  {
    id: "other",
    name: "Development Tools",
    description: "Additional development tools, SDKs, and utilities for Caesar plugin development.",
    icon: <Package className="w-8 h-8" />,
    version: "v1.5.1",
    size: "412 MB",
    platform: "Development Environment",
    downloadUrl: "#", // Replace with actual download URL or API endpoint
    isRecommended: false,
    features: [
      "Plugin development SDK",
      "Code generators",
      "Testing utilities",
      "Documentation tools"
    ]
  }
];

// This function can be replaced with an API call later
const handleDownload = async (downloadId: string, downloadUrl: string) => {
  // TODO: Replace with API call to track downloads and get actual download URL
  // Example: const response = await fetch(`/api/downloads/${downloadId}`);
  // const { actualUrl } = await response.json();
  
  // For now, just open the download URL
  if (downloadUrl !== "#") {
    window.open(downloadUrl, '_blank');
  } else {
    // Placeholder behavior - replace with your API integration
    console.log(`Download initiated for: ${downloadId}`);
    // You can show a toast notification here
  }
};

const Downloads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Download className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Downloads
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Get the latest Caesar components and tools. Choose the right package for your needs 
            and start building with Caesar today.
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {downloads.map((item) => (
              <Card key={item.id} className="relative group hover:shadow-glow transition-all duration-300 border-border/50">
                {item.isRecommended && (
                  <Badge className="absolute -top-3 left-6 bg-gradient-primary text-white">
                    Recommended
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{item.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{item.version}</Badge>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Platform Support */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Platform Support</h4>
                      <p className="text-sm">{item.platform}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Key Features</h4>
                      <ul className="text-sm space-y-1">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Download Button */}
                    <Button 
                      className="w-full mt-6" 
                      variant={item.isRecommended ? "default" : "outline"}
                      onClick={() => handleDownload(item.id, item.downloadUrl)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download {item.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our documentation and support resources to help you get up and running with Caesar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="https://docs.caesarnet.cloud" target="_blank" rel="noopener noreferrer">
                View Documentation
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/support">
                Get Support
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;