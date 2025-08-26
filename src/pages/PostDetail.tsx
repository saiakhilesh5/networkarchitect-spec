import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Send, Bookmark, MoreHorizontal, ArrowLeft } from "lucide-react";
import { useState } from "react";
import profileWoman from "@/assets/profile-woman.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

export default function PostDetail() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(127);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-4 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Post */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={profileWoman} />
                    <AvatarFallback className="bg-primary text-primary-foreground">SC</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer">
                        Sarah Chen
                      </h3>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">2nd</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Product Manager at TechCorp</p>
                    <p className="text-xs text-muted-foreground">2 hours ago • 🌍 Anyone can see</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    + Follow
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap mb-4">
                  Excited to share that our team just launched a new feature that will help millions of users connect more effectively! The journey from idea to implementation took 6 months of collaboration across design, engineering, and data science teams.

                  What I learned:
                  ✅ Clear communication is everything
                  ✅ User feedback drives innovation
                  ✅ Great products are built by great teams

                  #ProductManagement #TeamWork #Innovation
                </p>
                
                <img 
                  src={teamCollaboration} 
                  alt="Post content" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Social Stats */}
              <div className="py-3 border-t border-b border-border">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <Heart className="w-2.5 h-2.5 text-primary-foreground fill-current" />
                      </div>
                      <span>{likeCount} reactions</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="hover:text-primary cursor-pointer">15 comments</span>
                    <span className="hover:text-primary cursor-pointer">8 reposts</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="py-3">
                <div className="flex items-center justify-between">
                  <ActionButton
                    icon={Heart}
                    label="Like"
                    active={liked}
                    onClick={handleLike}
                  />
                  <ActionButton
                    icon={MessageCircle}
                    label="Comment"
                    onClick={() => document.getElementById('comment-input')?.focus()}
                  />
                  <ActionButton
                    icon={Repeat2}
                    label="Repost"
                    onClick={() => console.log('Repost')}
                  />
                  <ActionButton
                    icon={Send}
                    label="Send"
                    onClick={() => console.log('Send')}
                  />
                  <ActionButton
                    icon={Bookmark}
                    label="Save"
                    active={saved}
                    onClick={() => setSaved(!saved)}
                  />
                </div>
              </div>
            </Card>

            {/* Comments Section */}
            <Card className="p-6 mt-4 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Comments</h3>
              
              {/* Add Comment */}
              <div className="flex space-x-3 mb-6">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <Textarea
                    id="comment-input"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[80px] resize-none"
                  />
                  <div className="flex justify-end mt-2">
                    <Button 
                      size="sm" 
                      onClick={handleComment}
                      disabled={!newComment.trim()}
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Existing Comments */}
              <div className="space-y-4">
                <Comment
                  author="Michael Rodriguez"
                  title="Software Engineer at StartupXYZ"
                  time="1h"
                  content="This is amazing! Congratulations to the entire team. I'd love to learn more about the collaboration process between the different teams."
                />
                <Comment
                  author="Lisa Thompson"
                  title="UX Designer at DesignCo"
                  time="45m"
                  content="Love this! The emphasis on user feedback really resonates with me. It's so important to stay connected to user needs throughout the development process."
                />
                <Comment
                  author="David Kim"
                  title="Data Scientist at Analytics Pro"
                  time="30m"
                  content="Great insights! How did you measure the success of the feature after launch?"
                />
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="p-4 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">About the author</h3>
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={profileWoman} />
                  <AvatarFallback className="bg-primary text-primary-foreground">SC</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-foreground">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Passionate about building products that make a difference. 5+ years in product management.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Profile
              </Button>
            </Card>

            <Card className="p-4 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">Related posts</h3>
              <div className="space-y-3">
                <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
                  <p className="font-medium text-foreground text-sm">How to build better products</p>
                  <p className="text-xs text-muted-foreground">Sarah Chen • 1 week ago</p>
                </div>
                <div className="cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
                  <p className="font-medium text-foreground text-sm">The importance of user research</p>
                  <p className="text-xs text-muted-foreground">Lisa Thompson • 2 days ago</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function ActionButton({ icon: Icon, label, active, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-accent ${
        active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <Icon className={`w-5 h-5 ${active ? 'fill-current' : ''}`} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

interface CommentProps {
  author: string;
  title: string;
  time: string;
  content: string;
}

function Comment({ author, title, time, content }: CommentProps) {
  return (
    <div className="flex space-x-3">
      <Avatar className="w-10 h-10">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback className="bg-primary text-primary-foreground text-sm">
          {author.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="bg-accent/50 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-foreground text-sm">{author}</h4>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{title}</p>
          <p className="text-sm text-foreground">{content}</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
          <button className="hover:text-primary">Like</button>
          <button className="hover:text-primary">Reply</button>
        </div>
      </div>
    </div>
  );
}
