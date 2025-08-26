import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Video, FileText, BarChart3, Calendar, Plus } from "lucide-react";

export function PostComposer() {
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      // Handle post submission
      console.log("Posting:", content);
      setContent("");
      setIsExpanded(false);
    }
  };

  return (
    <Card className="p-4 shadow-card hover:shadow-elegant transition-shadow">
      <div className="flex space-x-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="Start a post, try writing with AI"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="min-h-[60px] resize-none border-0 p-0 text-base placeholder:text-muted-foreground focus-visible:ring-0"
          />
          
          {isExpanded && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <ComposerAction icon={Image} label="Media" />
                <ComposerAction icon={Calendar} label="Event" />
                <ComposerAction icon={BarChart3} label="Poll" />
                <ComposerAction icon={FileText} label="Write article" />
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>🌍</span>
                  <span>Anyone</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setIsExpanded(false);
                      setContent("");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    size="sm"
                    onClick={handleSubmit}
                    disabled={!content.trim()}
                    className="bg-primary hover:bg-primary-hover"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {!isExpanded && (
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <ComposerAction icon={Image} label="Media" />
                <ComposerAction icon={Calendar} label="Event" />
                <ComposerAction icon={FileText} label="Write article" />
                <ComposerAction icon={Plus} label="More" />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

interface ComposerActionProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

function ComposerAction({ icon: Icon, label }: ComposerActionProps) {
  return (
    <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}