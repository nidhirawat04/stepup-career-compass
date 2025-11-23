import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";
const careerSuggestions = [{
  id: "software-engineer",
  title: "Software Engineer",
  description: "Design, develop, and maintain software applications and systems",
  salary: "$85K - $150K",
  growth: "High",
  timeToLearn: "2-4 years",
  match: 95,
  skills: ["Programming", "Problem Solving", "Logical Thinking"]
}, {
  id: "data-scientist",
  title: "Data Scientist",
  description: "Analyze complex data to help organizations make better decisions",
  salary: "$90K - $160K",
  growth: "Very High",
  timeToLearn: "3-5 years",
  match: 88,
  skills: ["Analytics", "Statistics", "Machine Learning"]
}, {
  id: "ux-designer",
  title: "UX/UI Designer",
  description: "Create intuitive and beautiful user experiences for digital products",
  salary: "$70K - $130K",
  growth: "High",
  timeToLearn: "1-3 years",
  match: 85,
  skills: ["Design", "Creativity", "User Research"]
}, {
  id: "product-manager",
  title: "Product Manager",
  description: "Lead product development and strategy from conception to launch",
  salary: "$95K - $170K",
  growth: "High",
  timeToLearn: "3-5 years",
  match: 82,
  skills: ["Leadership", "Communication", "Strategic Thinking"]
}];
const Recommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};
  const handleSelectCareer = (careerId: string) => {
    navigate(`/career/${careerId}`);
  };
  return <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Career Match    
  
                             <span className="gradient-primary bg-clip-text text-slate-900"> </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Based on your assessment, here are personalized career recommendations that align with your interests and goals
            </p>
          </div>

          <div className="grid gap-6">
            {careerSuggestions.map(career => <Card key={career.id} className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-primary/20 gradient-card">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{career.title}</h3>
                      <Badge className="gradient-primary text-primary-foreground">
                        {career.match}% Match
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {career.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map(skill => <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>)}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{career.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        <span className="font-semibold">{career.growth} Growth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="font-semibold">{career.timeToLearn}</span>
                      </div>
                    </div>
                  </div>

                  <Button onClick={() => handleSelectCareer(career.id)} className="gradient-primary whitespace-nowrap">
                    View Roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>)}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => navigate("/assessment")}>
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Recommendations;