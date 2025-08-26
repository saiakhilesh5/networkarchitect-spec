import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, Briefcase, TrendingUp, Globe } from "lucide-react";
import heroNetworking from "@/assets/hero-networking.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Li</span>
              </div>
              <span className="text-xl font-bold text-foreground">LinkedIn</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => window.location.href = '/signup'} className="text-foreground hover:text-primary">
                Join now
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/login'}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 to-background">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Welcome to your
                  <span className="block text-primary">professional community</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Connect with professionals, discover opportunities, and grow your career.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Email or phone number" 
                    className="flex-1 h-12 text-base"
                  />
                  <Button size="hero" variant="hero" className="px-8" onClick={() => window.location.href = '/signup'}>
                    Continue
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  By clicking Continue, you agree to LinkedIn's{' '}
                  <a href="#" className="text-primary hover:underline">User Agreement</a>,{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>, and{' '}
                  <a href="#" className="text-primary hover:underline">Cookie Policy</a>.
                </p>
              </div>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative">
              <div className="bg-gradient-card rounded-lg p-8 shadow-hero">
                <img 
                  src={heroNetworking} 
                  alt="Professional networking" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Join your professional community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the right people, discover new opportunities, and grow your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Connect with professionals"
              description="Build meaningful professional relationships and expand your network globally."
            />
            <FeatureCard
              icon={Briefcase}
              title="Discover opportunities"
              description="Find your next career move with personalized job recommendations."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Learn and grow"
              description="Stay updated with industry insights and develop new skills."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to join?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the world's largest professional network.
          </p>
          <Button size="hero" variant="hero" className="text-lg px-12" onClick={() => window.location.href = '/signup'}>
            Join now - it's free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Li</span>
              </div>
              <span className="text-foreground font-semibold">LinkedIn</span>
              <span className="text-muted-foreground">© 2024</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">About</a>
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}