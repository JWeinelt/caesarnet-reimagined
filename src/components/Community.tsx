import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Users, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const communityFeatures = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Discord Community",
      description: "Join our active Discord community and receive instant help from fellow users and developers.",
      action: "Join Discord",
      "link": "https://dc.caesarnet.cloud"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Forum",
      description: "Discuss new features, share your ideas, and collaborate with other developers.",
      action: "Visit Forum",
      "link": "https://forum.caesarnet.cloud"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Open Source",
      description: "Caesar is fully open source. Contribute to the project and help shape the future.",
      action: "View GitHub",
      "link": "https://github.com/JWeinelt/Caesar"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6">
            Become part of our amazing community!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get exclusive support, share your feedback, and connect with other server administrators.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group bg-gradient-card backdrop-blur-glass border border-white/10 p-8 hover:scale-105 transition-all duration-300 hover:shadow-accent"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Action Button */}
                <Button  onClick={() => navigate("/redirect?url=" + feature.link)} variant="glass" className="group-hover:bg-accent group-hover:text-white transition-all">
                  {feature.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="relative overflow-hidden bg-gradient-hero rounded-3xl p-12 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to revolutionize your server management?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join dozens of users who are already using Caesar today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button  onClick={() => navigate("/downloads")} variant="glass" size="xl" className="group bg-white/10 text-white border-white/20 hover:bg-white hover:text-black">
                Download Caesar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button onClick={() => navigate("/redirect?url=https://docs.caesarnet.cloud")} variant="ghost" size="xl" className="text-white/80 hover:text-white hover:bg-white/10">
                Documentation
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Trusted by server administrators worldwide
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold">10+ Users</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-2xl font-bold">Open Source</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-2xl font-bold">GPL v3 License</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;