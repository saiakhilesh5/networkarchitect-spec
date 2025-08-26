import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Paperclip, MoreHorizontal, Phone, Video, Info } from "lucide-react";
import { useState } from "react";

const mockThreads = [
  {
    id: 1,
    participant: {
      name: "Sarah Chen",
      title: "Product Manager at TechCorp",
      avatar: "/placeholder.svg",
      online: true
    },
    lastMessage: "Thanks for the feedback on the prototype!",
    timestamp: "2m ago",
    unread: true
  },
  {
    id: 2,
    participant: {
      name: "Michael Rodriguez",
      title: "Software Engineer at StartupXYZ", 
      avatar: "/placeholder.svg",
      online: false
    },
    lastMessage: "The code review looks good. Ready to merge?",
    timestamp: "1h ago", 
    unread: false
  },
  {
    id: 3,
    participant: {
      name: "Lisa Thompson",
      title: "UX Designer at DesignCo",
      avatar: "/placeholder.svg",
      online: true
    },
    lastMessage: "I love the new design direction! Can we schedule a call?",
    timestamp: "3h ago",
    unread: false
  },
  {
    id: 4,
    participant: {
      name: "David Wilson",
      title: "Data Scientist at Netflix",
      avatar: "/placeholder.svg", 
      online: false
    },
    lastMessage: "Here's the analysis report you requested",
    timestamp: "1d ago",
    unread: false
  }
];

const mockMessages = [
  {
    id: 1,
    senderId: 2,
    content: "Hi John! I saw your post about the new React project. Really interesting approach!",
    timestamp: "2:30 PM",
    isOwn: false
  },
  {
    id: 2,
    senderId: 1, 
    content: "Thanks Michael! I'm glad you found it interesting. The component architecture took some time to figure out.",
    timestamp: "2:35 PM", 
    isOwn: true
  },
  {
    id: 3,
    senderId: 2,
    content: "I've been working on something similar. Would love to exchange ideas sometime.",
    timestamp: "2:37 PM",
    isOwn: false
  },
  {
    id: 4,
    senderId: 1,
    content: "Absolutely! I'd be happy to chat. Are you free for a quick call this week?",
    timestamp: "2:40 PM",
    isOwn: true
  },
  {
    id: 5,
    senderId: 2,
    content: "The code review looks good. Ready to merge?",
    timestamp: "3:15 PM",
    isOwn: false
  }
];

export default function Messaging() {
  const [selectedThread, setSelectedThread] = useState(mockThreads[1]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Threads List */}
          <div className="lg:col-span-1">
            <Card className="shadow-card h-full flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-foreground">Messaging</h2>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search conversations"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Threads */}
              <div className="flex-1 overflow-y-auto">
                {mockThreads.map((thread) => (
                  <div
                    key={thread.id}
                    className={`p-4 border-b border-border cursor-pointer hover:bg-accent/50 transition-colors ${
                      selectedThread?.id === thread.id ? 'bg-accent' : ''
                    }`}
                    onClick={() => setSelectedThread(thread)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={thread.participant.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            {thread.participant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {thread.participant.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground text-sm truncate">
                            {thread.participant.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-muted-foreground">
                              {thread.timestamp}
                            </span>
                            {thread.unread && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground truncate">
                          {thread.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            {selectedThread ? (
              <Card className="shadow-card h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={selectedThread.participant.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            {selectedThread.participant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {selectedThread.participant.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {selectedThread.participant.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedThread.participant.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Info className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mockMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                        {!message.isOwn && (
                          <Avatar className="w-8 h-8 mb-1">
                            <AvatarImage src={selectedThread.participant.avatar} />
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              {selectedThread.participant.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div
                          className={`p-3 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-accent text-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-1 px-1">
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex-1">
                      <Input
                        placeholder="Write a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="shadow-card h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a conversation to start messaging</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}