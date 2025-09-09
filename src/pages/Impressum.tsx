import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Impressum
          </h1>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8" />
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-bg rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Operator and Contact Information</h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Julian Weinelt</strong></p>
                <p>Silbergrund 73</p>
                <p>32805 Horn-Bad Meinberg</p>
                <p>Germany</p>
                <p>contact@caesarnet.cloud</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legal Form</h2>
              <div className="text-muted-foreground space-y-2">
                <p>The Caesar Project is an open-source initiative operated by
                   Julian Weinelt. In addition to the open-source offerings, the website provides paid support 
                   and hosting services for users of the Caesar system.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsible for Content</h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Julian Weinelt</strong></p>
                <p>Silbergrund 73</p>
                <p>32805 Horn-Bad Meinberg</p>
                <p>Germany</p>
                <p>contact@caesarnet.cloud</p>
              </div>
            </div>

<div>
  <h2 className="text-2xl font-semibold text-foreground mb-4">Purpose of the Website</h2>
  <div className="text-muted-foreground space-y-2">
    <p>The Caesar website, including its Forum and Marketplace, serves to promote and support the
       open-source Caesar system, facilitate community discussions, and provide a platform for developers
        to publish and share plugins. Additionally, the website offers optional paid support and hosting
         services to enhance user experience and functionality.</p>
  </div>
</div>

<div>
  <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
  <div className="text-muted-foreground space-y-2">
    <p>The Caesar Project Team strives to provide accurate and up-to-date
       information on this website. However, we assume no liability for
        the accuracy, completeness, or timeliness of the content provided.
         External links are provided for convenience, and we are not responsible for the content of linked third-party websites.</p>
  </div>
</div>

<div>
  <h2 className="text-2xl font-semibold text-foreground mb-4">Last Updated</h2>
  <div className="text-muted-foreground space-y-2">
    <p>July 28, 2025</p>
  </div>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;