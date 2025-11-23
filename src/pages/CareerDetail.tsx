import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { CheckCircle, Circle, Book, ExternalLink } from "lucide-react";
import { useState } from "react";

const careerData = {
  "software-engineer": {
    title: "Software Engineer",
    description: "Build innovative software solutions that power the digital world",
    roadmap: [
      {
        phase: "Foundation (0-6 months)",
        completed: false,
        milestones: [
          "Learn programming fundamentals (Python/JavaScript)",
          "Understand data structures and algorithms",
          "Practice problem-solving on coding platforms",
          "Build small personal projects",
        ],
      },
      {
        phase: "Intermediate (6-12 months)",
        completed: false,
        milestones: [
          "Master a web framework (React, Node.js, or Django)",
          "Learn version control with Git",
          "Understand databases (SQL and NoSQL)",
          "Contribute to open source projects",
        ],
      },
      {
        phase: "Advanced (12-18 months)",
        completed: false,
        milestones: [
          "Learn system design principles",
          "Build full-stack applications",
          "Understand cloud services (AWS/Azure/GCP)",
          "Create a portfolio of projects",
        ],
      },
      {
        phase: "Professional (18-24 months)",
        completed: false,
        milestones: [
          "Prepare for technical interviews",
          "Apply for internships or entry-level positions",
          "Network with professionals in the field",
          "Keep learning new technologies",
        ],
      },
    ],
    resources: [
      {
        title: "freeCodeCamp",
        description: "Comprehensive free coding curriculum",
        link: "https://www.freecodecamp.org",
        type: "Course",
      },
      {
        title: "The Odin Project",
        description: "Full-stack web development curriculum",
        link: "https://www.theodinproject.com",
        type: "Course",
      },
      {
        title: "LeetCode",
        description: "Practice coding problems and algorithms",
        link: "https://leetcode.com",
        type: "Practice",
      },
      {
        title: "MIT OpenCourseWare",
        description: "Free computer science courses from MIT",
        link: "https://ocw.mit.edu",
        type: "Course",
      },
    ],
  },
};

const CareerDetail = () => {
  const { careerId } = useParams();
  const career = careerData[careerId as keyof typeof careerData];
  const [completedMilestones, setCompletedMilestones] = useState<Set<string>>(new Set());

  if (!career) {
    return <div>Career not found</div>;
  }

  const totalMilestones = career.roadmap.reduce(
    (acc, phase) => acc + phase.milestones.length,
    0
  );
  const progress = (completedMilestones.size / totalMilestones) * 100;

  const toggleMilestone = (milestone: string) => {
    const newCompleted = new Set(completedMilestones);
    if (newCompleted.has(milestone)) {
      newCompleted.delete(milestone);
    } else {
      newCompleted.add(milestone);
    }
    setCompletedMilestones(newCompleted);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {career.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {career.description}
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="p-6 mb-8 gradient-card shadow-medium">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Your Progress</h2>
              <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              {completedMilestones.size} of {totalMilestones} milestones completed
            </p>
          </Card>

          <Tabs defaultValue="roadmap" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="roadmap" className="space-y-6 mt-6">
              {career.roadmap.map((phase, phaseIndex) => (
                <Card key={phaseIndex} className="p-6 gradient-card">
                  <h3 className="text-xl font-bold mb-4">{phase.phase}</h3>
                  <div className="space-y-3">
                    {phase.milestones.map((milestone, milestoneIndex) => {
                      const isCompleted = completedMilestones.has(milestone);
                      return (
                        <div
                          key={milestoneIndex}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-base cursor-pointer"
                          onClick={() => toggleMilestone(milestone)}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`flex-1 ${
                              isCompleted
                                ? "line-through text-muted-foreground"
                                : "text-foreground"
                            }`}
                          >
                            {milestone}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-4 mt-6">
              {career.resources.map((resource, index) => (
                <Card key={index} className="p-6 gradient-card hover:shadow-medium transition-smooth">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Book className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{resource.title}</h3>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(resource.link, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
