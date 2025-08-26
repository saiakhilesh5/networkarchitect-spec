import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Calendar, Building, X, Check } from "lucide-react";
import { useState } from "react";
import profileWoman from "@/assets/profile-woman.jpg";

const mockInvitations = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Senior UX Designer at Adobe",
    avatar: "/placeholder.svg",
    mutualConnections: 12,
    note: "Hi John, I'd love to connect with you as we both work in tech!"
  },
  {
    id: 2,
    name: "Robert Kim",
    title: "Product Manager at Google",
    avatar: "/placeholder.svg",
    mutualConnections: 8
  }
];

const mockSuggestions = [
  {
    id: 1,
    name: "Emily Chen",
    title: "Frontend Developer at Meta",
    avatar: "/placeholder.svg",
    reason: "You both studied at Stanford University"
  },
  {
    id: 2,
    name: "David Wilson", 
    title: "Data Scientist at Netflix",
    avatar: "/placeholder.svg",
    reason: "You have 5 mutual connections"
  },
  {
    id: 3,
    name: "Sarah Martinez",
    title: "DevOps Engineer at Amazon",
    avatar: "/placeholder.svg", 
    reason: "Works at a company you follow"
  }
];

const mockGroups = [
  {
    id: 1,
    name: "React Developers Community",
    members: "125K members",
    posts: "15 new posts today"
  },
  {
    id: 2,
    name: "Product Management Network", 
    members: "89K members",
    posts: "8 new posts today"
  }
];

export default function Network() {
  const [invitations, setInvitations] = useState(mockInvitations);
  const [suggestions, setSuggestions] = useState(mockSuggestions);

  const handleAcceptInvitation = (id: number) => {
    setInvitations(prev => prev.filter(inv => inv.id !== id));
  };

  const handleIgnoreInvitation = (id: number) => {
    setInvitations(prev => prev.filter(inv => inv.id !== id));
  };

  const handleConnect = (id: number) => {
    setSuggestions(prev => prev.filter(sug => sug.id !== id));
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Your Network</h3>
                  <p className="text-2xl font-bold text-primary">847</p>
                  <p className="text-sm text-muted-foreground">connections</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Manage my network</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent cursor-pointer">
                    <span className="text-sm text-foreground">Connections</span>
                    <span className="text-sm text-muted-foreground">847</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent cursor-pointer">
                    <span className="text-sm text-foreground">Contacts</span>
                    <span className="text-sm text-muted-foreground">124</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent cursor-pointer">
                    <span className="text-sm text-foreground">Following & followers</span>
                    <span className="text-sm text-muted-foreground">89</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent cursor-pointer">
                    <span className="text-sm text-foreground">Groups</span>
                    <span className="text-sm text-muted-foreground">12</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent cursor-pointer">
                    <span className="text-sm text-foreground">Events</span>
                    <span className="text-sm text-muted-foreground">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="invitations" className="space-y-6">
              <TabsList className="bg-background border border-border">
                <TabsTrigger value="invitations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Invitations ({invitations.length})
                </TabsTrigger>
                <TabsTrigger value="suggestions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  People you may know
                </TabsTrigger>
                <TabsTrigger value="groups" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Groups
                </TabsTrigger>
              </TabsList>

              <TabsContent value="invitations" className="space-y-4">
                {invitations.length > 0 ? (
                  invitations.map((invitation) => (
                    <Card key={invitation.id} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <Avatar className="w-16 h-16">
                              <AvatarImage src={invitation.avatar} />
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {invitation.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground hover:underline cursor-pointer">
                                {invitation.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">{invitation.title}</p>
                              <p className="text-sm text-muted-foreground mb-3">
                                {invitation.mutualConnections} mutual connections
                              </p>
                              {invitation.note && (
                                <div className="bg-accent/50 p-3 rounded-lg mb-3">
                                  <p className="text-sm text-foreground">{invitation.note}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex space-x-2 ml-4">
                            <Button 
                              variant="outline"
                              size="sm"
                              onClick={() => handleIgnoreInvitation(invitation.id)}
                            >
                              <X className="w-4 h-4 mr-1" />
                              Ignore
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => handleAcceptInvitation(invitation.id)}
                              className="bg-primary hover:bg-primary-hover text-primary-foreground"
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Accept
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="shadow-card">
                    <CardContent className="p-8 text-center">
                      <UserPlus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">No pending invitations</h3>
                      <p className="text-muted-foreground">You're all caught up! Check back later for new connection requests.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="suggestions" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {suggestions.map((person) => (
                    <Card key={person.id} className="shadow-card">
                      <CardContent className="p-4 text-center">
                        <Avatar className="w-16 h-16 mx-auto mb-3">
                          <AvatarImage src={person.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <h3 className="font-semibold text-foreground hover:underline cursor-pointer mb-1">
                          {person.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{person.title}</p>
                        <Badge variant="secondary" className="text-xs mb-3">
                          {person.reason}
                        </Badge>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => handleConnect(person.id)}
                        >
                          <UserPlus className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                {mockGroups.map((group) => (
                  <Card key={group.id} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground hover:underline cursor-pointer">
                              {group.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{group.members}</p>
                            <p className="text-sm text-muted-foreground">{group.posts}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}