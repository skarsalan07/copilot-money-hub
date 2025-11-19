import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, TrendingDown, PieChart, RefreshCw } from "lucide-react";

const Portfolio = () => {
  const holdings = [
    {
      symbol: "RELIANCE",
      quantity: 50,
      avgPrice: 2680,
      currentPrice: 2845.5,
      signal: "BUY",
      confidence: 87,
      allocation: 35,
    },
    {
      symbol: "TCS",
      quantity: 25,
      avgPrice: 3420,
      currentPrice: 3567.25,
      signal: "HOLD",
      confidence: 72,
      allocation: 22,
    },
    {
      symbol: "HDFC BANK",
      quantity: 100,
      avgPrice: 1580,
      currentPrice: 1654.8,
      signal: "BUY",
      confidence: 91,
      allocation: 43,
    },
  ];

  const sectorAllocation = [
    { sector: "Financial Services", percentage: 43, color: "text-copper" },
    { sector: "Energy", percentage: 35, color: "text-signal-buy" },
    { sector: "Information Technology", percentage: 22, color: "text-signal-hold" },
  ];

  const rebalancingSuggestions = [
    {
      action: "Reduce Tech exposure",
      from: "TCS",
      to: "HDFCBANK",
      rationale: "Over-concentrated in IT sector. Banking shows better growth potential.",
      impact: "+2.3% expected return",
    },
    {
      action: "Add Pharma allocation",
      from: "Cash",
      to: "SUNPHARMA",
      rationale: "Portfolio lacks healthcare exposure. Pharma sector showing strong fundamentals.",
      impact: "+1.8% diversification benefit",
    },
  ];

  const calculatePL = (holding: any) => {
    const invested = holding.quantity * holding.avgPrice;
    const current = holding.quantity * holding.currentPrice;
    const pl = current - invested;
    const plPercent = (pl / invested) * 100;
    return { pl, plPercent };
  };

  const totalInvested = holdings.reduce((sum, h) => sum + h.quantity * h.avgPrice, 0);
  const totalCurrent = holdings.reduce((sum, h) => sum + h.quantity * h.currentPrice, 0);
  const totalPL = totalCurrent - totalInvested;
  const totalPLPercent = (totalPL / totalInvested) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-4xl font-bold text-foreground">My Portfolio</h1>
          <Button variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-border">
            <p className="text-sm text-muted-foreground mb-2">Total Investment</p>
            <p className="text-3xl font-bold font-mono text-foreground">
              ₹{totalInvested.toLocaleString("en-IN")}
            </p>
          </Card>
          <Card className="p-6 border-border">
            <p className="text-sm text-muted-foreground mb-2">Current Value</p>
            <p className="text-3xl font-bold font-mono text-foreground">
              ₹{totalCurrent.toLocaleString("en-IN")}
            </p>
          </Card>
          <Card className="p-6 border-border">
            <p className="text-sm text-muted-foreground mb-2">Total P&L</p>
            <div className="flex items-baseline gap-3">
              <p
                className={`text-3xl font-bold font-mono ${
                  totalPL >= 0 ? "text-signal-buy" : "text-signal-sell"
                }`}
              >
                {totalPL >= 0 ? "+" : ""}₹{totalPL.toLocaleString("en-IN")}
              </p>
              <span
                className={`text-lg font-medium ${
                  totalPL >= 0 ? "text-signal-buy" : "text-signal-sell"
                }`}
              >
                ({totalPLPercent >= 0 ? "+" : ""}
                {totalPLPercent.toFixed(2)}%)
              </span>
            </div>
          </Card>
        </div>

        {/* Holdings Table */}
        <Card className="mb-8 border-border">
          <div className="p-6 border-b border-border">
            <h2 className="font-display text-2xl font-bold text-foreground">Holdings</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Stock</TableHead>
                <TableHead className="font-semibold">Signal</TableHead>
                <TableHead className="font-semibold">Qty</TableHead>
                <TableHead className="font-semibold">Avg Price</TableHead>
                <TableHead className="font-semibold">Current Price</TableHead>
                <TableHead className="font-semibold">P&L</TableHead>
                <TableHead className="font-semibold">AI Confidence</TableHead>
                <TableHead className="font-semibold">Allocation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdings.map((holding) => {
                const { pl, plPercent } = calculatePL(holding);
                return (
                  <TableRow key={holding.symbol} className="hover:bg-muted/30">
                    <TableCell className="font-semibold font-display text-foreground">
                      {holding.symbol}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          holding.signal === "BUY"
                            ? "bg-signal-buy text-signal-buy-foreground"
                            : "bg-signal-hold text-signal-hold-foreground"
                        }`}
                      >
                        {holding.signal}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono">{holding.quantity}</TableCell>
                    <TableCell className="font-mono">₹{holding.avgPrice}</TableCell>
                    <TableCell className="font-mono">₹{holding.currentPrice}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono font-semibold ${
                            pl >= 0 ? "text-signal-buy" : "text-signal-sell"
                          }`}
                        >
                          {pl >= 0 ? "+" : ""}₹{pl.toFixed(2)}
                        </span>
                        <span
                          className={`text-sm ${
                            pl >= 0 ? "text-signal-buy" : "text-signal-sell"
                          }`}
                        >
                          ({plPercent >= 0 ? "+" : ""}
                          {plPercent.toFixed(2)}%)
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div
                            className="bg-copper h-2 rounded-full"
                            style={{ width: `${holding.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm font-mono font-semibold text-copper">
                          {holding.confidence}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono font-semibold">
                      {holding.allocation}%
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sector Allocation */}
          <Card className="p-6 border-border">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <PieChart className="w-6 h-6 text-copper" />
              Sector Allocation
            </h2>
            <div className="space-y-4">
              {sectorAllocation.map((sector, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{sector.sector}</span>
                    <span className={`text-sm font-bold ${sector.color}`}>
                      {sector.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-copper h-2 rounded-full transition-all"
                      style={{ width: `${sector.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-copper/10 border border-copper/20 rounded-lg">
              <p className="text-sm text-foreground">
                <span className="font-semibold">AI Insight:</span> You're 40% concentrated in
                Financial Services. Consider diversifying into Healthcare and FMCG sectors.
              </p>
            </div>
          </Card>

          {/* Rebalancing Suggestions */}
          <Card className="p-6 border-border">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-copper" />
              AI Rebalancing Suggestions
            </h2>
            <div className="space-y-4">
              {rebalancingSuggestions.map((suggestion, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-border rounded-lg hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{suggestion.action}</h3>
                    <Badge className="bg-signal-buy text-signal-buy-foreground">
                      {suggestion.impact}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <span className="font-mono">{suggestion.from}</span>
                    <span>→</span>
                    <span className="font-mono">{suggestion.to}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{suggestion.rationale}</p>
                  <Button className="w-full mt-3 bg-copper hover:bg-copper/90 text-copper-foreground">
                    Apply Suggestion
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
