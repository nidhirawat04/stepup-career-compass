import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
const careers = [{
  id: "software-engineer",
  title: "Software Engineer",
  description: "Build innovative software solutions",
  category: "Technology"
}, {
  id: "data-scientist",
  title: "Data Scientist",
  description: "Analyze data to drive decisions",
  category: "Technology"
}, {
  id: "ux-designer",
  title: "UX/UI Designer",
  description: "Create beautiful user experiences",
  category: "Design"
}, {
  id: "product-manager",
  title: "Product Manager",
  description: "Lead product strategy and development",
  category: "Business"
}];
const Careers = () => {
  return <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Careers  <span className="gradient-primary bg-clip-text text-transparent"></span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse through different career paths and find the one that's right for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careers.map(career => <Card key={career.id} className="p-6 hover:shadow-medium transition-smooth gradient-card">
                <Badge className="mb-4">{career.category}</Badge>
                <h3 className="text-2xl font-bold mb-2">{career.title}</h3>
                <p className="text-muted-foreground mb-4">{career.description}</p>
                <Link to={`/career/${career.id}`}>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Careers;