import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, UserPlus, Briefcase, Calendar, Eye, Settings, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const mockNotifications = [
  {
    id: 1,
    type: 'reaction',
    actor: {
      name: 'Sarah Chen',
      avatar: '/placeholder.svg'
    },
    content: 'liked your post about React development',
    timestamp: '5 minutes ago',
    read: false,
    icon: Heart,
    iconColor: 'text-red-500'
  },
  {
    id: 2,
    type: 'comment',
    actor: {
      name: 'Michael Rodriguez',
      avatar: '/placeholder.svg'
    },
    content: 'commented on your post: "Great insights! I\'ve been working on something similar."',
    timestamp: '1 hour ago',
    read: false,
    icon: MessageCircle,
    iconColor: 'text-blue-500'
  },
  {
    id: 3,
    type: 'connection',
    actor: {
      name: 'Lisa Thompson',
      avatar: '/placeholder.svg'
    },
    content: 'accepted your connection request',
    timestamp: '2 hours ago',
    read: true,
    icon: UserPlus,
    iconColor: 'text-green-500'
  },
  {
    id: 4,
    type: 'job',
    actor: {
      name: 'TechCorp',
      avatar: '/placeholder.svg'
    },
    content: 'posted a new job that matches your preferences: Senior Frontend Developer',
    timestamp: '4 hours ago',
    read: true,
    icon: Briefcase,
    iconColor: 'text-purple-500'
  },
  {
    id: 5,
    type: 'profile_view',
    actor: {
      name: 'David Wilson',
      avatar: '/placeholder.svg'
    },
    content: 'viewed your profile',
    timestamp: '6 hours ago',
    read: true,
    icon: Eye,
    iconColor: 'text-gray-500'
  },
  {
    id: 6,
    type: 'event',
    actor: {
      name: 'React Developers Meetup',
      avatar: '/placeholder.svg'
    },
    content: 'You have an upcoming event tomorrow: "Advanced React Patterns"',
    timestamp: '1 day ago',
    read: true,
    icon: Calendar,
    iconColor: 'text-orange-500'
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedTab, setSelectedTab] = useState('all');

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getFilteredNotifications = () => {
    switch (selectedTab) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'reactions':
        return notifications.filter(n => n.type === 'reaction' || n.type === 'comment');
      case 'connections':
        return notifications.filter(n => n.type === 'connection' || n.type === 'profile_view');
      case 'jobs':
        return notifications.filter(n => n.type === 'job');
      default:
        return notifications;
    }
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">{unreadCount}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Unread</h3>
                  <p className="text-sm text-muted-foreground">notifications</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Notification Preferences</h4>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-foreground">Email notifications</span>
                      <input type="checkbox" className="rounded border-border" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-foreground">Push notifications</span>
                      <input type="checkbox" className="rounded border-border" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-foreground">SMS notifications</span>
                      <input type="checkbox" className="rounded border-border" />
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="shadow-card">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Notifications</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={markAllAsRead}
                      disabled={unreadCount === 0}
                    >
                      Mark all as read
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <div className="p-4 border-b border-border">
                    <TabsList className="bg-background border border-border w-full">
                      <TabsTrigger 
                        value="all" 
                        className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger 
                        value="unread" 
                        className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Unread ({unreadCount})
                      </TabsTrigger>
                      <TabsTrigger 
                        value="reactions" 
                        className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Reactions
                      </TabsTrigger>
                      <TabsTrigger 
                        value="connections" 
                        className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        People
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value={selectedTab} className="mt-0">
                    <div className="divide-y divide-border">
                      {getFilteredNotifications().length > 0 ? (
                        getFilteredNotifications().map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-accent/50 cursor-pointer transition-colors ${
                              !notification.read ? 'bg-accent/30' : ''
                            }`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={notification.actor.avatar} />
                                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                                  {notification.actor.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm text-foreground">
                                      <span className="font-semibold">{notification.actor.name}</span>{' '}
                                      {notification.content}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {notification.timestamp}
                                    </p>
                                  </div>
                                  
                                  <div className="flex items-center space-x-2 ml-4">
                                    <notification.icon className={`w-4 h-4 ${notification.iconColor}`} />
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Settings className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">No notifications</h3>
                          <p className="text-muted-foreground">
                            {selectedTab === 'unread' 
                              ? "You're all caught up! No unread notifications."
                              : "No notifications in this category yet."
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}