import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import { ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { value: "creative", label: "Creating art, design, or content" },
      { value: "analytical", label: "Solving problems and analyzing data" },
      { value: "people", label: "Working with and helping others" },
      { value: "technical", label: "Building or fixing technical systems" },
    ],
  },
  {
    id: 2,
    question: "What's your preferred work environment?",
    options: [
      { value: "office", label: "Traditional office setting" },
      { value: "remote", label: "Remote or flexible workspace" },
      { value: "outdoor", label: "Outdoor or field work" },
      { value: "lab", label: "Laboratory or research facility" },
    ],
  },
  {
    id: 3,
    question: "Which skill do you want to develop most?",
    options: [
      { value: "leadership", label: "Leadership and management" },
      { value: "technical", label: "Technical and programming skills" },
      { value: "communication", label: "Communication and presentation" },
      { value: "research", label: "Research and analysis" },
    ],
  },
  {
    id: 4,
    question: "What's your educational background or area of interest?",
    options: [
      { value: "stem", label: "Science, Technology, Engineering, Math" },
      { value: "business", label: "Business and Economics" },
      { value: "arts", label: "Arts and Humanities" },
      { value: "social", label: "Social Sciences" },
    ],
  },
  {
    id: 5,
    question: "What motivates you most in a career?",
    options: [
      { value: "impact", label: "Making a positive impact on society" },
      { value: "innovation", label: "Creating innovative solutions" },
      { value: "stability", label: "Job security and stability" },
      { value: "growth", label: "Personal and professional growth" },
    ],
  },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(answers[currentQuestion + 1] || "");
      } else {
        // Navigate to results with answers
        navigate("/recommendations", { state: { answers } });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Career <span className="gradient-primary bg-clip-text text-transparent">Assessment</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Answer these questions to discover your ideal career path
            </p>
          </div>

          <Card className="p-8 shadow-medium gradient-card">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {questions[currentQuestion].question}
              </h2>

              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-base cursor-pointer"
                      onClick={() => setSelectedAnswer(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="gradient-primary"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
