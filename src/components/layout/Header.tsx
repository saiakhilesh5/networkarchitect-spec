import { Search, Home, Users, Briefcase, MessageCircle, Bell, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useLocation } from "react-router-dom";
import profileWoman from "@/assets/profile-woman.jpg";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div 
              className="w-8 h-8 bg-gradient-primary rounded-sm flex items-center justify-center cursor-pointer"
              onClick={() => navigate('/feed')}
            >
              <span className="text-primary-foreground font-bold text-lg">Li</span>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-64 bg-accent/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <NavItem icon={Home} label="Home" active={location.pathname === '/feed'} onClick={() => navigate('/feed')} />
            <NavItem icon={Users} label="My Network" onClick={() => navigate('/network')} />
            <NavItem icon={Briefcase} label="Jobs" onClick={() => navigate('/jobs')} />
            <NavItem icon={MessageCircle} label="Messaging" onClick={() => navigate('/messaging')} />
            <NavItem icon={Bell} label="Notifications" onClick={() => navigate('/notifications')} />
            
            {/* Profile */}
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:bg-accent/50 rounded-lg p-2 transition-colors"
              onClick={() => navigate('/profile')}
            >
              <Avatar className="w-6 h-6">
                <AvatarImage src={profileWoman} />
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-foreground">Me</span>
            </div>

            {/* Work */}
            <div className="flex items-center space-x-1 cursor-pointer hover:bg-accent/50 rounded-lg p-2 transition-colors">
              <Grid3X3 className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">Work</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <div 
      className={`flex flex-col items-center space-y-1 cursor-pointer p-2 rounded-lg transition-colors ${
        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      }`}
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs font-medium">{label}</span>
      {active && <div className="w-full h-0.5 bg-primary rounded-full" />}
    </div>
  );
}