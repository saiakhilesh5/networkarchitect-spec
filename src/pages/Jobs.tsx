import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Briefcase, Building, Heart, Clock, Users, DollarSign, Filter } from "lucide-react";
import { useState } from "react";

const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    remote: true,
    salary: "$120,000 - $160,000",
    posted: "2 days ago",
    applicants: 47,
    easyApply: true,
    description: "We're looking for a Senior Frontend Developer to join our growing team. You'll be working on cutting-edge web applications using React, TypeScript, and modern frontend technologies.",
    requirements: ["React", "TypeScript", "Node.js", "GraphQL"],
    saved: false
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY", 
    remote: false,
    salary: "$100,000 - $140,000",
    posted: "1 week ago",
    applicants: 23,
    easyApply: false,
    description: "Join our product team to help shape the future of our platform. You'll work closely with engineering, design, and business teams to deliver amazing user experiences.",
    requirements: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    saved: true
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignCo",
    location: "Remote",
    remote: true,
    salary: "$80,000 - $110,000",
    posted: "3 days ago",
    applicants: 31,
    easyApply: true,
    description: "We're seeking a talented UX Designer to create intuitive and engaging user experiences. You'll collaborate with product managers and engineers to bring ideas to life.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
    saved: false
  }
];

const mockSavedJobs = [
  {
    id: 4,
    title: "Software Engineering Manager",
    company: "BigTech Inc",
    location: "Seattle, WA",
    posted: "1 week ago",
    saved: true
  },
  {
    id: 5, 
    title: "Data Scientist",
    company: "AI Startup",
    location: "Remote",
    posted: "4 days ago",
    saved: true
  }
];

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(mockJobs[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState(mockJobs);
  const [savedJobs, setSavedJobs] = useState(mockSavedJobs);

  const toggleSaveJob = (jobId: number) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, saved: !job.saved } : job
    ));
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <Card className="shadow-card mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search jobs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Location" className="pl-10" />
              </div>
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Job Type</h4>
                  <div className="space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Full-time</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Part-time</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Contract</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Experience Level</h4>
                  <div className="space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Entry level</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Mid level</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Senior level</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Remote</h4>
                  <div className="space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Remote</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">On-site</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Hybrid</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4 text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Job Alerts</h3>
                <p className="text-sm text-muted-foreground mb-3">Get notified about new jobs matching your preferences</p>
                <Button variant="outline" size="sm">Create Alert</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="recommended" className="space-y-6">
              <TabsList className="bg-background border border-border">
                <TabsTrigger value="recommended" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Recommended
                </TabsTrigger>
                <TabsTrigger value="saved" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Saved ({savedJobs.length})
                </TabsTrigger>
                <TabsTrigger value="applied" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Applied
                </TabsTrigger>
              </TabsList>

              <TabsContent value="recommended">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Jobs List */}
                  <div className="space-y-4">
                    {jobs.map((job) => (
                      <Card 
                        key={job.id} 
                        className={`shadow-card cursor-pointer transition-all hover:shadow-elegant ${
                          selectedJob?.id === job.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedJob(job)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                                {job.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{job.company}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSaveJob(job.id);
                              }}
                            >
                              <Heart className={`w-4 h-4 ${job.saved ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                            </Button>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{job.location}</span>
                            </div>
                            {job.remote && (
                              <Badge variant="secondary" className="text-xs">Remote</Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4 text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{job.posted}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-3 h-3" />
                                <span>{job.applicants} applicants</span>
                              </div>
                            </div>
                            {job.easyApply && (
                              <Badge variant="outline" className="text-primary border-primary">
                                Easy Apply
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Job Detail */}
                  {selectedJob && (
                    <div className="hidden lg:block">
                      <Card className="shadow-card sticky top-24">
                        <CardHeader className="border-b border-border">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{selectedJob.title}</CardTitle>
                              <div className="flex items-center space-x-2 mt-2">
                                <Building className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{selectedJob.company}</span>
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{selectedJob.location}</span>
                                {selectedJob.remote && (
                                  <Badge variant="secondary" className="text-xs">Remote</Badge>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleSaveJob(selectedJob.id)}
                            >
                              <Heart className={`w-4 h-4 ${selectedJob.saved ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                            </Button>
                          </div>
                        </CardHeader>

                        <CardContent className="p-6 space-y-6">
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <DollarSign className="w-4 h-4" />
                                <span>{selectedJob.salary}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{selectedJob.posted}</span>
                              </div>
                            </div>

                            {selectedJob.easyApply ? (
                              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                                Easy Apply
                              </Button>
                            ) : (
                              <Button variant="outline" className="w-full">
                                Apply on Company Website
                              </Button>
                            )}
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">About this job</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {selectedJob.description}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedJob.requirements.map((req, index) => (
                                  <Badge key={index} variant="secondary">
                                    {req}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="bg-accent/50 p-4 rounded-lg">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Users className="w-4 h-4" />
                                <span>{selectedJob.applicants} people have applied</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="saved">
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <Card key={job.id} className="shadow-card">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                              {job.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{job.posted}</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4 fill-primary text-primary" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="applied">
                <Card className="shadow-card">
                  <CardContent className="p-8 text-center">
                    <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">No applications yet</h3>
                    <p className="text-muted-foreground">Your job applications will appear here once you start applying.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}