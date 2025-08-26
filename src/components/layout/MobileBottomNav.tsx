import { Home, Users, Plus, Bell, Briefcase, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function MobileBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/feed" },
    { icon: Users, label: "Network", path: "/network" },
    { icon: Plus, label: "Post", path: "/compose", isSpecial: true },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: User, label: "Me", path: "/profile" }
  ];

  const handleNavClick = (path: string, isSpecial?: boolean) => {
    if (isSpecial) {
      // Handle compose post action - could open modal or navigate to compose page
      // For now, just navigate to feed
      navigate('/feed');
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 p-2 h-auto ${
                item.isSpecial 
                  ? 'text-primary hover:text-primary-hover' 
                  : isActive 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => handleNavClick(item.path, item.isSpecial)}
            >
              <Icon className={`w-5 h-5 ${item.isSpecial ? 'w-6 h-6' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && !item.isSpecial && (
                <div className="w-4 h-0.5 bg-primary rounded-full"></div>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}