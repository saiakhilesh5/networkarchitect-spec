import { Header } from "@/components/layout/Header";
import { PostComposer } from "@/components/feed/PostComposer";
import { PostCard } from "@/components/feed/PostCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, TrendingUp, Briefcase } from "lucide-react";
import profileWoman from "@/assets/profile-woman.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const mockPosts = [
  {
    author: {
      name: "Sarah Chen",
      title: "Product Manager at TechCorp",
      avatar: "/placeholder.svg",
      isFollowing: true
    },
    content: "Excited to share that our team just launched a new feature that will help millions of users connect more effectively! The journey from idea to implementation took 6 months of collaboration across design, engineering, and data science teams.\n\nWhat I learned:\n✅ Clear communication is everything\n✅ User feedback drives innovation\n✅ Great products are built by great teams\n\n#ProductManagement #TeamWork #Innovation",
    timestamp: "2h",
    likes: 127,
    comments: 15,
    shares: 8,
    image: teamCollaboration,
  },
  {
    author: {
      name: "Michael Rodriguez",
      title: "Software Engineer at StartupXYZ",
      isFollowing: false
    },
    content: "Just finished a 48-hour hackathon and our team built an AI-powered code review tool! 🚀\n\nIt was incredible to see what we could accomplish with limited time and unlimited creativity. Thanks to my amazing teammates for making this possible.\n\nNow back to turning this prototype into a real product! 💪\n\n#Hackathon #AI #SoftwareDevelopment #TeamWork",
    timestamp: "4h",
    likes: 89,
    comments: 23,
    shares: 12
  },
  {
    author: {
      name: "Lisa Thompson",
      title: "UX Designer at DesignCo",
      isFollowing: true
    },
    content: "Design thinking isn't just about making things look pretty - it's about solving real human problems.\n\nAfter 3 months of user research, we discovered that our users needed something completely different from what we initially thought. This reminded me why empathy is at the core of good design.\n\nAlways start with the user. Everything else follows.\n\n#UXDesign #UserResearch #DesignThinking #Empathy",
    timestamp: "6h",
    likes: 234,
    comments: 31,
    shares: 19,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop"
  }
];

export default function Feed() {
  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <ProfileCard />
            <QuickActionsCard />
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-4">
            <PostComposer />
            
            <div className="space-y-4">
              {mockPosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <TrendingCard />
            <JobsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <Card className="p-0 shadow-card hover:shadow-elegant transition-shadow overflow-hidden">
      <div className="h-16 bg-gradient-primary"></div>
      <div className="px-4 pb-4 -mt-8">
        <Avatar className="w-16 h-16 border-4 border-background mb-3">
          <AvatarImage src={profileWoman} />
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">JD</AvatarFallback>
        </Avatar>
        
        <div className="text-center">
          <h3 className="font-semibold text-foreground">John Doe</h3>
          <p className="text-sm text-muted-foreground mb-3">Software Engineer at TechCorp</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Profile viewers</span>
              <span className="text-primary font-semibold">127</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Post impressions</span>
              <span className="text-primary font-semibold">1,240</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function QuickActionsCard() {
  return (
    <Card className="p-4 shadow-card">
      <h3 className="font-semibold text-foreground mb-3">Recent</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent cursor-pointer">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm text-foreground">React Developers</span>
        </div>
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent cursor-pointer">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm text-foreground">UX/UI Design</span>
        </div>
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent cursor-pointer">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm text-foreground">Product Management</span>
        </div>
      </div>
    </Card>
  );
}

function TrendingCard() {
  return (
    <Card className="p-4 shadow-card">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="font-semibold text-foreground">Trending</h3>
      </div>
      
      <div className="space-y-3">
        <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
          <p className="font-medium text-foreground text-sm">#RemoteWork</p>
          <p className="text-xs text-muted-foreground">12,450 posts today</p>
        </div>
        <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
          <p className="font-medium text-foreground text-sm">#AI</p>
          <p className="text-xs text-muted-foreground">8,230 posts today</p>
        </div>
        <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
          <p className="font-medium text-foreground text-sm">#Sustainability</p>
          <p className="text-xs text-muted-foreground">5,670 posts today</p>
        </div>
      </div>
    </Card>
  );
}

function JobsCard() {
  return (
    <Card className="p-4 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-foreground">Jobs for you</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          See all
        </Button>
      </div>
      
      <div className="space-y-3">
        <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
          <p className="font-medium text-foreground text-sm">Senior Frontend Developer</p>
          <p className="text-xs text-muted-foreground">TechCorp • San Francisco</p>
          <p className="text-xs text-primary mt-1">Easy Apply</p>
        </div>
        <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
          <p className="font-medium text-foreground text-sm">Product Manager</p>
          <p className="text-xs text-muted-foreground">StartupXYZ • Remote</p>
          <p className="text-xs text-primary mt-1">2 connections work here</p>
        </div>
      </div>
    </Card>
  );
}