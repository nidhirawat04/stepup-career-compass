import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Send, Bot, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
interface Message {
  role: "user" | "assistant";
  content: string;
}
const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "Hi! I'm your AI career guide. I can help you with career advice, learning paths, interview preparation, and more. What would you like to know?"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, {
      role: "user",
      content: userMessage
    }]);
    setIsLoading(true);
    try {
      // Simulated AI response - in production, this would call your AI backend
      setTimeout(() => {
        const responses = ["That's a great question! Let me help you with that. Based on current industry trends, I'd recommend focusing on building a strong foundation in core skills first.", "I understand your concern. Here's what I suggest: Start by identifying your key strengths and interests, then align them with market demands.", "Excellent point! For that career path, you'll want to focus on gaining practical experience through projects and internships while building your technical skills."];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, {
          role: "assistant",
          content: randomResponse
        }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Career Chatbot  <span className="gradient-primary bg-clip-text text-transparent"></span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Get instant guidance and answers to your career questions
            </p>
          </div>

          <Card className="p-6 gradient-card shadow-medium">
            <div className="h-[500px] overflow-y-auto mb-4 space-y-4 pr-2">
              {messages.map((message, index) => <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  {message.role === "assistant" && <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>}
                  <div className={`max-w-[80%] p-4 rounded-lg ${message.role === "user" ? "gradient-primary text-primary-foreground" : "bg-muted"}`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.role === "user" && <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-secondary-foreground" />
                    </div>}
                </div>)}
              {isLoading && <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
                    </div>
                  </div>
                </div>}
            </div>

            <div className="flex gap-2">
              <Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask me anything about careers..." disabled={isLoading} />
              <Button onClick={handleSend} disabled={isLoading || !input.trim()} className="gradient-primary">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};
export default Chat;