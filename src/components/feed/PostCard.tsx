import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Send, Bookmark, MoreHorizontal } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

interface PostCardProps {
  author: {
    name: string;
    title: string;
    avatar?: string;
    isFollowing?: boolean;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
  isLiked?: boolean;
  isSaved?: boolean;
}

export function PostCard({ 
  author, 
  content, 
  timestamp, 
  likes, 
  comments, 
  shares, 
  image,
  isLiked = false,
  isSaved = false 
}: PostCardProps) {
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleComment = () => {
    // Open post detail in new tab
    window.open(`/post/123`, '_blank');
  };

  return (
    <Card className="p-0 shadow-card hover:shadow-elegant transition-all duration-200 cursor-pointer group">
      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={author.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer">
                  {author.name}
                </h3>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{author.isFollowing ? '2nd' : '3rd'}</span>
              </div>
              <p className="text-sm text-muted-foreground">{author.title}</p>
              <p className="text-xs text-muted-foreground hover:text-primary cursor-pointer">{timestamp}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {!author.isFollowing && (
              <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                + Follow
              </Button>
            )}
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3" onClick={handleComment}>
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </div>

      {/* Image */}
      {image && (
        <div className="mb-3" onClick={handleComment}>
          <img 
            src={image || teamCollaboration} 
            alt="Post content" 
            className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
          />
        </div>
      )}

      {/* Social Stats */}
      <div className="px-4 py-2 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-2.5 h-2.5 text-primary-foreground fill-current" />
              </div>
              <span>{likeCount}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="hover:text-primary cursor-pointer">{comments} comments</span>
            <span className="hover:text-primary cursor-pointer">{shares} reposts</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2 border-t border-border">
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
            onClick={handleComment}
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
            onClick={handleSave}
          />
        </div>
      </div>
    </Card>
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
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors hover:bg-accent ${
        active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <Icon className={`w-4 h-4 ${active ? 'fill-current' : ''}`} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}