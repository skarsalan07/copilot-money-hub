import Navigation from "@/components/Navigation";
import PortfolioOverview from "@/components/PortfolioOverview";
import SignalCard from "@/components/SignalCard";
import IntelligenceFeed from "@/components/IntelligenceFeed";
import { Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const signals = [
    {
      symbol: "RELIANCE",
      exchange: "NSE",
      signal: "BUY" as const,
      confidence: 87,
      currentPrice: 2845.5,
      change: 42.3,
      changePercent: 1.51,
      rationale:
        "Strong Q4 earnings beat analyst expectations by 12%. Refining margins improved significantly. Telecom segment shows robust subscriber growth with ARPU expansion. AI analysis of 12 broker reports suggests 15% upside in 6 months based on sector tailwinds and expansion plans.",
      lastUpdated: "3 min ago",
    },
    {
      symbol: "TCS",
      exchange: "NSE",
      signal: "HOLD" as const,
      confidence: 72,
      currentPrice: 3567.25,
      change: -12.8,
      changePercent: -0.36,
      rationale:
        "Steady performance in IT services sector. Recent deal wins positive but margin pressure from wage hikes observed. AI recommendation suggests waiting for clearer visibility on FY25 guidance before accumulating.",
      lastUpdated: "15 min ago",
    },
    {
      symbol: "HDFC BANK",
      exchange: "NSE",
      signal: "BUY" as const,
      confidence: 91,
      currentPrice: 1654.8,
      change: 23.5,
      changePercent: 1.44,
      rationale:
        "Post-merger integration progressing smoothly. Asset quality remains strong with GNPA at historic lows. Deposit growth outpacing industry. Multiple brokers upgraded target price citing robust growth visibility.",
      lastUpdated: "8 min ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/20 mb-6">
            <Sparkles className="w-4 h-4 text-copper" />
            <span className="text-sm font-medium text-copper">AI-Powered Investment Intelligence</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Your Intelligent
            <br />
            Investment Co-Pilot
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform financial chaos into crystal-clear investment decisions. Get real-time AI signals,
            transparent reasoning, and SEBI-compliant recommendations tailored for Indian retail investors.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button className="bg-copper hover:bg-copper/90 text-copper-foreground font-medium text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" className="font-medium text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-signal-buy" />
            <span>SEBI Compliant • ISO 27001 Certified • 256-bit Encryption</span>
          </div>
        </div>

        {/* Portfolio Overview */}
        <PortfolioOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Signals Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-3xl font-bold text-foreground">Active AI Signals</h2>
              <Button variant="outline" className="font-medium">
                View All →
              </Button>
            </div>
            {signals.map((signal, index) => (
              <SignalCard key={index} {...signal} />
            ))}
          </div>

          {/* Intelligence Feed Column */}
          <div className="lg:col-span-1">
            <IntelligenceFeed />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-copper flex items-center justify-center">
                <span className="text-white font-bold font-mono">₹</span>
              </div>
              <span className="font-display font-bold text-lg text-primary">Copilot_Money</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Copilot_Money. All rights reserved. SEBI Registered.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
