import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, TrendingUp, Globe, AlertCircle } from "lucide-react";

interface FeedItem {
  category: string;
  headline: string;
  summary: string;
  sentiment: string;
  source: string;
  time: string;
  icon: any;
}

const IntelligenceFeed = () => {
  const feedItems: FeedItem[] = [
    {
      category: "Sector Analysis",
      headline: "IT Sector Shows Strong Momentum",
      summary:
        "Major IT companies report robust Q4 earnings. AI-driven analysis suggests 15% upside potential in select stocks.",
      sentiment: "Optimistic",
      source: "Multiple Brokers",
      time: "2 hours ago",
      icon: TrendingUp,
    },
    {
      category: "Macro Economy",
      headline: "RBI Policy Meeting Outcomes",
      summary:
        "Interest rates held steady. Banking stocks show mixed reactions. AI recommends cautious approach for next 2 weeks.",
      sentiment: "Neutral",
      source: "Economic Times",
      time: "5 hours ago",
      icon: Globe,
    },
    {
      category: "Risk Alert",
      headline: "Volatility Expected in Energy Sector",
      summary:
        "Crude oil price fluctuations may impact energy stocks. Portfolio exposure to OMCs flagged for review.",
      sentiment: "Cautious",
      source: "AI Analysis",
      time: "1 day ago",
      icon: AlertCircle,
    },
  ];

  const sentimentColors: Record<string, string> = {
    Optimistic: "text-signal-buy",
    Neutral: "text-signal-hold",
    Cautious: "text-signal-sell",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Newspaper className="w-6 h-6 text-copper" />
          <h2 className="font-display text-2xl font-bold text-foreground">Intelligence Feed</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All", "My Holdings", "High Conviction", "Alerts"].map((filter) => (
            <Badge
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              className={`cursor-pointer ${
                filter === "All"
                  ? "bg-copper text-copper-foreground hover:bg-copper/90"
                  : "hover:bg-muted"
              }`}
            >
              {filter}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {feedItems.map((item, index) => (
          <Card key={index} className="p-5 border-border hover:shadow-md transition-all duration-300">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-copper" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-xs font-medium border-copper/30 text-copper">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono flex-shrink-0">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-foreground mb-2 leading-tight">
                  {item.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Source: <span className="font-medium text-foreground">{item.source}</span>
                  </span>
                  <span className={`text-xs font-medium flex items-center gap-1 ${sentimentColors[item.sentiment]}`}>
                    📊 {item.sentiment}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceFeed;
