import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
            Terms of Service
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Caesar software and services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Caesar is an open-source server management platform that provides tools and services for server administration, monitoring, and automation. The Service is provided "as is" and may be subject to limitations, delays, and other problems inherent in the use of the internet and electronic communications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Open Source License</h2>
              <p className="text-muted-foreground mb-4">
                Caesar is licensed under the GNU General Public License v3.0 (GPL-3.0). You are free to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Run the program for any purpose</li>
                <li>Study how the program works and change it</li>
                <li>Redistribute copies</li>
                <li>Distribute copies of your modified versions</li>
              </ul>
              <p className="text-muted-foreground">
                This is subject to the terms and conditions of the GPL-3.0 license, which can be found at: https://www.gnu.org/licenses/gpl-3.0.html
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the Service</li>
                <li>Not use the Service to transmit viruses, malware, or other harmful code</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our data collection and use practices are described in our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-muted-foreground">
                We are committed to protecting your personal information and complying with applicable data protection laws, including GDPR where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAESAR AND ITS CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </p>
              <p className="text-muted-foreground">
                The Service is provided "as is" without warranty of any kind, either express or implied.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Support and Community</h2>
              <p className="text-muted-foreground mb-4">
                Support for Caesar is provided through our community channels:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>GitHub Issues: https://github.com/Caesar/caesar/issues</li>
                <li>Discord Community: https://dc.caesarnet.cloud</li>
                <li>Documentation: https://docs.caesarnet.cloud</li>
                <li>Forum: https://forum.caesarnet.cloud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes through our website or other communication channels.
              </p>
              <p className="text-muted-foreground">
                Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="text-muted-foreground bg-card/50 p-4 rounded-lg">
                <p>Email: legal@caesarnet.cloud</p>
                <p>Website: https://caesarnet.cloud</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground pt-4 border-t border-white/10">
              <p>Last updated: July 28, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;