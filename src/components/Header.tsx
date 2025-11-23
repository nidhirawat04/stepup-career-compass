import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/stepup-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-smooth hover:opacity-80">
            <img src={logo} alt="StepUp Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              StepUP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-base">
              Home
            </Link>
            <Link to="/assessment" className="text-foreground hover:text-primary transition-base">
              Assessment
            </Link>
            <Link to="/careers" className="text-foreground hover:text-primary transition-base">
              Careers
            </Link>
            <Link to="/resume" className="text-foreground hover:text-primary transition-base">
              Resume Builder
            </Link>
            <Link to="/chat">
              <Button variant="default" className="gradient-primary">
                AI Assistant
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/assessment"
              className="text-foreground hover:text-primary transition-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Assessment
            </Link>
            <Link
              to="/careers"
              className="text-foreground hover:text-primary transition-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/resume"
              className="text-foreground hover:text-primary transition-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume Builder
            </Link>
            <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="gradient-primary w-full">
                AI Assistant
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
