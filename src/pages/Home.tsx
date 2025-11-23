import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Map, BookOpen, FileText, MessageCircle, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import heroBg from "@/assets/hero-bg.png";
const Home = () => {
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>

        {/* Climbing Illustration */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <img src={heroBg} alt="Career Growth" className="w-[400px] h-auto opacity-90" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Your Career Journey <br />
              <span className="text-white drop-shadow-lg">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Discover your perfect career path with personalized assessments, expert guidance, and AI-powered tools designed for students like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Link to="/assessment">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6 h-auto">
                  Take Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/chat">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6 h-auto">
                  Talk to AI Guide
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Illustration */}
        <div className="lg:hidden mt-12 flex justify-center">
          <img src={heroBg} alt="Career Growth" className="w-64 h-auto opacity-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Everything You Need to Win 
            <span className="gradient-primary bg-clip-text text-slate-900"></span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            StepUp provides comprehensive tools and resources to help you climb your career ladder
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-primary/20 gradient-card">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Assessment</h3>
              <p className="text-muted-foreground">
                Take our comprehensive quiz to discover careers that match your interests, skills, and goals.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-secondary/20 gradient-card">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Roadmaps</h3>
              <p className="text-muted-foreground">
                Get detailed step-by-step roadmaps with milestones for your chosen career path.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-accent/20 gradient-card">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
              <p className="text-muted-foreground">
                Access curated courses, tutorials, and materials to help you learn and grow.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-primary/20 gradient-card">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Tracker</h3>
              <p className="text-muted-foreground">
                Monitor your learning journey and celebrate achievements as you progress.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-secondary/20 gradient-card">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Builder</h3>
              <p className="text-muted-foreground">
                Create professional resumes with our easy-to-use builder and templates.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth border-2 hover:border-accent/20 gradient-card">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Career Guide</h3>
              <p className="text-muted-foreground">
                Get instant answers and personalized advice from our intelligent AI assistant.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Climbing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already discovered their perfect career path with StepUp
          </p>
          <Link to="/assessment">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-strong">
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 StepUp. Empowering students to reach new heights.</p>
        </div>
      </footer>
    </div>;
};
export default Home;