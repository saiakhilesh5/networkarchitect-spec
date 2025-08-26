import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Globe, 
  Mail, 
  Edit, 
  Plus, 
  Building, 
  GraduationCap, 
  Award,
  ExternalLink,
  Eye,
  MessageCircle,
  Share2
} from "lucide-react";
import profileWoman from "@/assets/profile-woman.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const mockExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    duration: "Jan 2022 - Present · 2 yrs 8 mos",
    description: "Leading a team of 5 developers building scalable web applications. Implemented microservices architecture that improved system performance by 40%.",
    skills: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    id: 2, 
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    duration: "Mar 2020 - Dec 2021 · 1 yr 10 mos", 
    description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.",
    skills: ["React", "JavaScript", "CSS", "Figma"]
  },
  {
    id: 3,
    title: "Junior Developer", 
    company: "WebAgency",
    location: "New York, NY",
    duration: "Jun 2019 - Feb 2020 · 9 mos",
    description: "Built websites and web applications for various clients. Gained experience in full-stack development and client communication.",
    skills: ["HTML", "CSS", "JavaScript", "PHP"]
  }
];

const mockEducation = [
  {
    id: 1,
    school: "Stanford University",
    degree: "Bachelor of Science in Computer Science",
    duration: "2015 - 2019",
    description: "Focused on software engineering and algorithms. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems."
  }
];

const mockSkills = [
  { name: "JavaScript", endorsements: 47 },
  { name: "React", endorsements: 34 },
  { name: "TypeScript", endorsements: 28 },
  { name: "Node.js", endorsements: 25 },
  { name: "AWS", endorsements: 19 },
  { name: "Python", endorsements: 15 },
  { name: "GraphQL", endorsements: 12 },
  { name: "Docker", endorsements: 8 }
];

const mockActivity = [
  {
    id: 1,
    type: "post",
    content: "Excited to share that our team just launched a new feature that will help millions of users connect more effectively!",
    image: teamCollaboration,
    likes: 127,
    comments: 15,
    timestamp: "2 days ago"
  },
  {
    id: 2,
    type: "article",
    title: "Building Scalable React Applications: Lessons Learned",
    excerpt: "After working on large-scale React applications for the past 3 years, I've learned some valuable lessons about architecture and performance...",
    likes: 89,
    comments: 23,
    timestamp: "1 week ago"
  }
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Profile */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Header */}
            <Card className="shadow-card overflow-hidden">
              <div className="h-32 bg-gradient-primary"></div>
              <CardContent className="p-0">
                <div className="px-6 pb-6 -mt-16">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
                      <Avatar className="w-32 h-32 border-4 border-background">
                        <AvatarImage src={profileWoman} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-3xl">JD</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-2">
                          Senior Software Engineer at TechCorp
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>TechCorp</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>Stanford University</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                          <Badge variant="secondary">847 connections</Badge>
                          <Badge variant="secondary">Open to work</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 mt-4 md:mt-0">
                      <Button variant="outline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add section
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>About</CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Passionate software engineer with 5+ years of experience building scalable web applications. 
                  Experienced in React, Node.js, and cloud technologies. I love solving complex problems and 
                  mentoring junior developers. Currently focused on building the next generation of social 
                  networking platforms at TechCorp.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Full-stack Development</Badge>
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">Mentoring</Badge>
                  <Badge variant="outline">System Architecture</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Main Content Tabs */}
            <Tabs defaultValue="experience" className="space-y-6">
              <TabsList className="bg-background border border-border">
                <TabsTrigger value="experience" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Education
                </TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Skills
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Activity
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience">
                <Card className="shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Experience</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {mockExperience.map((exp, index) => (
                      <div key={exp.id} className={`${index !== mockExperience.length - 1 ? 'border-b border-border pb-6' : ''}`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                              <Building className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{exp.title}</h3>
                              <p className="text-muted-foreground">{exp.company}</p>
                              <p className="text-sm text-muted-foreground">{exp.duration}</p>
                              <p className="text-sm text-muted-foreground">{exp.location}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <p className="text-foreground mb-3 ml-15">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2 ml-15">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card className="shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Education</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    {mockEducation.map((edu) => (
                      <div key={edu.id} className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{edu.school}</h3>
                          <p className="text-muted-foreground">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                          <p className="text-foreground">{edu.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card className="shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Skills</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {mockSkills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {skill.endorsements} endorsements
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Plus className="w-3 h-3 mr-1" />
                            Endorse
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Activity</CardTitle>
                    <p className="text-sm text-muted-foreground">847 followers</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {mockActivity.map((activity) => (
                      <div key={activity.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={profileWoman} />
                            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-foreground">John Doe</span>
                              <span className="text-sm text-muted-foreground">• {activity.timestamp}</span>
                            </div>
                            
                            {activity.type === 'post' ? (
                              <div>
                                <p className="text-foreground mb-3">{activity.content}</p>
                                {activity.image && (
                                  <img 
                                    src={activity.image} 
                                    alt="Post content" 
                                    className="w-full h-64 object-cover rounded-lg mb-3"
                                  />
                                )}
                              </div>
                            ) : (
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">{activity.title}</h4>
                                <p className="text-muted-foreground">{activity.excerpt}</p>
                              </div>
                            )}
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{activity.likes} likes</span>
                              <span>{activity.comments} comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile Stats */}
            <Card className="shadow-card">
              <CardContent className="p-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Profile views</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">127</span>
                    <Eye className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">+12 this week</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Post impressions</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">1,240</span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">+89 this week</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-primary cursor-pointer hover:underline">
                    johndoe.dev
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* People also viewed */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">People also viewed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Sarah Chen", title: "Product Manager" },
                  { name: "Michael Rodriguez", title: "Software Engineer" },
                  { name: "Lisa Thompson", title: "UX Designer" }
                ].map((person) => (
                  <div key={person.name} className="flex items-center space-x-3 cursor-pointer hover:bg-accent p-2 rounded-lg -m-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.title}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}