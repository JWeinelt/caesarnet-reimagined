import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
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
              Back
            </Button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy for Caesar
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
            <div className="mb-4">
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> July 28, 2025
              </p>
            </div>

            <div>
              <p className="text-muted-foreground mb-6">
                This Privacy Policy explains how the Caesar open-source project ("we," "us," or "Caesar") collects, uses, stores, and protects your personal information when you use our Website, Forum, and Marketplace (collectively, the "Services"). We are committed to safeguarding your privacy and ensuring compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-foreground mb-2">1.1 Website</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Log Data:</strong> When you visit our main website or landing page, we automatically collect log data, including your IP address, browser type, operating system, referring URLs, pages visited, and access times. This data is collected to monitor and improve the performance and security of our website.
              </p>
              
              <h3 className="text-lg font-medium text-foreground mb-2">1.2 Forum</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Personal Information:</strong> When you register for or participate in our Forum, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Email address</li>
                <li>Username</li>
                <li>User-generated content (e.g., posts, comments, or other inputs you provide)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information is necessary to create and manage your Forum account, facilitate communication, and enable community interaction.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-2">1.3 Marketplace</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Personal Information:</strong> When you use the Marketplace to publish or access plugins for the Caesar system, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Email address</li>
                <li>Username</li>
                <li>Password (stored securely in hashed form)</li>
                <li>User-uploaded content, such as images and plugin files</li>
                <li>Optional links provided by users, including:
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Sponsorship links</li>
                    <li>Wiki links</li>
                    <li>Source code links (e.g., GitHub repositories)</li>
                  </ul>
                </li>
              </ul>
              <p className="text-muted-foreground">
                This information is used to manage your Marketplace account, enable plugin publication, and facilitate developer interactions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              
              <p className="text-muted-foreground mb-4">We use the collected information for the following purposes:</p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Website:</strong> To analyze usage patterns, improve website functionality, and enhance security.</li>
                <li><strong>Forum:</strong> To manage user accounts, enable participation in discussions, and moderate content to ensure a safe and respectful community.</li>
                <li><strong>Marketplace:</strong> To authenticate users, host and distribute plugins, display user-provided content (e.g., images, links), and support developer visibility through optional sponsorship, wiki, or source code links.</li>
                <li><strong>General:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>To comply with legal obligations.</li>
                    <li>To protect the integrity and security of our Services.</li>
                    <li>To respond to user inquiries or support requests.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Legal Basis for Processing</h2>
              
              <p className="text-muted-foreground mb-4">We process personal data based on the following legal grounds:</p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Consent:</strong> For optional data provided, such as sponsorship or source code links.</li>
                <li><strong>Contract:</strong> To provide access to and manage your accounts on the Forum and Marketplace.</li>
                <li><strong>Legitimate Interests:</strong> For log data to improve and secure our Website and Services.</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws or regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Storage and Security</h2>
              
              <p className="text-muted-foreground mb-4">
                <strong>Storage:</strong> Personal data is stored securely on servers. We retain data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
              
              <p className="text-muted-foreground">
                <strong>Security:</strong> We implement appropriate technical and organizational measures to protect your data, including encryption (e.g., hashed passwords), access controls, and regular security reviews. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
              
              <p className="text-muted-foreground mb-4">We do not sell or rent your personal information. We may share your data in the following cases:</p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Publicly Available Information:</strong> Content you voluntarily post on the Forum or Marketplace (e.g., usernames, posts, plugin files, or links) may be publicly accessible.</li>
                <li><strong>Service Providers:</strong> We may share data with trusted third-party providers (e.g., hosting or analytics providers) who assist in operating our Services, subject to strict confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> We may disclose data if required by law or to protect the rights, safety, or property of Caesar or others.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              
              <p className="text-muted-foreground mb-4">
                Depending on your location and applicable laws (e.g., GDPR for EU residents), you may have the following rights regarding your personal data:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Access, correct, or delete your personal information.</li>
                <li>Restrict or object to certain processing activities.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent (where applicable), though this may limit access to certain Services.</li>
              </ul>
              
              <p className="text-muted-foreground">
                To exercise these rights, please contact us at privacy@caesarnet.cloud. We will respond to your request within the timeframes required by law (e.g., 30 days under GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
              
              <p className="text-muted-foreground">
                Our Services may contain links to third-party websites (e.g., sponsorship links, GitHub repositories). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
              
              <p className="text-muted-foreground mb-4">
                <strong>Cookies:</strong> We use cookies to collect log data and enhance your experience on our Website. You can manage cookie preferences through your browser settings.
              </p>
              
              <p className="text-muted-foreground">
                <strong>Analytics:</strong> We may use third-party analytics tools to collect aggregated, anonymized data about Website usage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
              
              <p className="text-muted-foreground">
                If you are located outside the server location, your data may be transferred to and processed in other jurisdictions. We ensure appropriate safeguards, such as Standard Contractual Clauses, are in place for international transfers where required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Significant changes will be communicated via the Website or Forum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@caesarnet.cloud.
              </p>
              
              <p className="text-foreground font-medium">
                Thank you for using Caesar!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;