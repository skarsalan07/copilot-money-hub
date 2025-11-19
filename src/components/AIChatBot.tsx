import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, X, Send } from "lucide-react";

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Hello! I'm your AI investment co-pilot. How can I help you today?",
    },
  ]);

  const quickReplies = [
    "Explain this signal",
    "Show me alternatives",
    "What's the risk?",
    "Market sentiment?",
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { role: "user", content: message }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Based on current market analysis, I recommend focusing on blue-chip stocks with strong fundamentals. Would you like detailed insights on specific sectors?",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-copper hover:bg-copper/90 text-copper-foreground shadow-2xl z-50 flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-full max-w-md h-[500px] shadow-2xl z-50 flex flex-col border-border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-copper text-primary-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-semibold">AI Co-Pilot</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 text-primary-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-background text-foreground ml-4"
                      : "bg-copper/10 text-foreground mr-4 border border-copper/20"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {messages.length > 0 && messages[messages.length - 1].role === "user" && (
              <div className="flex justify-start">
                <div className="bg-copper/10 text-foreground p-3 rounded-lg border border-copper/20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-copper animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-copper animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-copper animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-copper/10 hover:text-copper hover:border-copper"
                  onClick={() => {
                    setMessages([...messages, { role: "user", content: reply }]);
                    setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          role: "ai",
                          content:
                            "Let me analyze that for you. Based on current data and market trends...",
                        },
                      ]);
                    }, 1000);
                  }}
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-copper hover:bg-copper/90 text-copper-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChatBot;
