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
          <p className="text-muted-foreground">
          Effective date: 28th July 2025
              </p>
          <p className="text-muted-foreground">
          Welcome to Caesar, a platform developed to 
          empower Minecraft server owners and plugin developers 
          with powerful tools and an open-source philosophy. These 
          Terms of Service govern your use of:
          - The Website (Informational landing page)
          - The Forum (Community space for discussion and support)
          - The Marketplace (Free plugin exchange platform for developers)

          By accessing or using any part of Caesar, you agree to be bound by these Terms
              </p>
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Provisions</h2>
              <h3 className="text-l">1.1 Code of Conduct</h3>
              <p className="text-muted-foreground">
              We expect respectful, constructive, and ethical behavior across
               all Caesar services. Harassment, discrimination, or abusive 
               language will not be tolerated.
              </p>
              <h3 className="text-l">1.2 Unauthorized Activity</h3>
              <p className="text-muted-foreground">
              Attempting to harm, exploit, or disrupt our services — 
              including DDoS attacks, data scraping, reverse engineering, 
              or unauthorized access — is strictly forbidden.
              </p>
              <h3 className="text-l">1.3 Intellectual Property</h3>
              <p className="text-muted-foreground">
              Do not post or distribute content you do not own or 
              have explicit rights to. You are fully responsible for
               any content you publish on Caesar.
              </p>
              <h3 className="text-l">1.4 Account Security</h3>
              <p className="text-muted-foreground">
              You are responsible for your account and its activity.
               Do not share your credentials. You must inform us immediately
                if you suspect unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Website</h2>
              
              <p className="text-muted-foreground mb-4">
              The Caesar website provides general information, 
              documentation, project updates, and links to other components of the platform.

              - Automated access (bots, scrapers) is not permitted.
              - Reuse of content (logos, text, visuals) requires written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Forum</h2>
              <p className="text-muted-foreground mb-4">
              The Caesar forum is a collaborative space for users and developers to connect,
              share knowledge, and request support.
              </p>
              <h3 className="text-l">3.1 Content Guidelines</h3>
              <p className="text-muted-foreground">
               <ul>
               <li>Posts must be relevant, helpful, and respectful.</li>
                <li>Spam, advertisements, or malicious content will be removed.</li>
                <li>Moderators may edit, delete, or restrict access to content at their
                   discretion.</li>
               </ul>
              </p>
              <h3 className="text-l">3.2 Community Support</h3>
              <p className="text-muted-foreground">
              Advice or support given by other users is informal and not guaranteed.
               Official Caesar support is provided only by verified staff members.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Marketplace</h2>
              <p className="text-muted-foreground">The Caesar Marketplace enables developers to publish and
                 share free, open plugins with the community.</p>
              <h3 className="text-l">4.1 Upload Requirements</h3>
              <ul>
                <li>Plugins must be licensed under an open-source or clearly defined license.</li>
                <li>You must be the original creator or have permission to upload the plugin.</li>
                <li>Plugins must not contain malware, obfuscated code without source, or hidden paywalls.</li>
              </ul>

              <h3 className="text-l">4.2 Prohibited Content</h3>
              <ul>
                <li>Paid plugins, trialware, or disguised commercial content are strictly forbidden.</li>
                <li>Reuploads of third-party work without consent are not allowed.</li>
                <li>Plugins with remote control features or external license checks require prior approval.
                </li>
              </ul>

              <h3 className="text-l">4.3 Developer Verification</h3>
              <p className="text-muted-foreground">
                Developers have the option to apply for official verification, 
                granting additional trust and visibility.The requirements and 
                application process are detailed on the Developer Verification 
                Page. Verified developers may gain access to additional publishing 
                privileges and higher visibility on the Marketplace. Verification remains 
                at Caesar's discretion.
              </p>
              <h3 className="text-l">4.4 Licensing and Rights</h3>
              <p className="text-muted-foreground">
              By uploading to the Marketplace, you grant Caesar a non-exclusive, worldwide
               license to host, display, and distribute your plugin on the platform.
              </p>
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Legal Framework</h2>
              <p className="text-muted-foreground mb-4">
              Jurisdiction is Horn-Bad Meinberg.
              </p>
              <p className="text-muted-foreground">
              If any part of these Terms is deemed invalid, the remainder remains enforceable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
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