import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Wallet, Trophy, Target, Sparkles } from "lucide-react";
import { useState } from "react";

const PaperTrading = () => {
  const [orderType, setOrderType] = useState<"BUY" | "SELL">("BUY");

  const virtualBalance = 500000;
  const totalPL = 12450;
  const plPercent = 2.49;
  const winRate = 68;

  const tradeHistory = [
    {
      symbol: "RELIANCE",
      type: "BUY",
      quantity: 10,
      price: 2780,
      date: "2024-01-15",
      pl: 655,
      plPercent: 2.36,
    },
    {
      symbol: "TCS",
      type: "SELL",
      quantity: 5,
      price: 3520,
      date: "2024-01-14",
      pl: -230,
      plPercent: -1.3,
    },
    {
      symbol: "HDFC BANK",
      type: "BUY",
      quantity: 15,
      price: 1600,
      date: "2024-01-13",
      pl: 820,
      plPercent: 3.42,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "InvestorPro", returns: 24.5, trades: 45 },
    { rank: 2, name: "MarketGuru", returns: 21.2, trades: 38 },
    { rank: 3, name: "You", returns: 12.4, trades: 23 },
    { rank: 4, name: "TradeMaster", returns: 11.8, trades: 52 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              Paper Trading Simulator
            </h1>
            <p className="text-muted-foreground">
              Practice strategies risk-free with virtual money
            </p>
          </div>
          <div className="text-right">
            <Badge className="mb-2 bg-copper/10 text-copper border border-copper/20">
              SIMULATED MODE
            </Badge>
            <p className="text-sm text-muted-foreground">All trades are virtual</p>
          </div>
        </div>

        {/* Virtual Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="w-5 h-5 text-copper" />
              <p className="text-sm text-muted-foreground">Virtual Balance</p>
            </div>
            <p className="text-3xl font-bold font-mono text-foreground">
              ₹{virtualBalance.toLocaleString("en-IN")}
            </p>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-signal-buy" />
              <p className="text-sm text-muted-foreground">Total P&L</p>
            </div>
            <div className="flex items-baseline gap-2">
              <p className={`text-3xl font-bold font-mono ${totalPL >= 0 ? "text-signal-buy" : "text-signal-sell"}`}>
                {totalPL >= 0 ? "+" : ""}₹{totalPL.toLocaleString("en-IN")}
              </p>
              <span className={`text-lg font-medium ${totalPL >= 0 ? "text-signal-buy" : "text-signal-sell"}`}>
                ({plPercent >= 0 ? "+" : ""}{plPercent}%)
              </span>
            </div>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-copper" />
              <p className="text-sm text-muted-foreground">Win Rate</p>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold font-mono text-foreground">{winRate}%</p>
              <Badge className="bg-signal-buy text-signal-buy-foreground">Strong</Badge>
            </div>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-copper" />
              <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
            </div>
            <p className="text-3xl font-bold font-mono text-foreground">#3</p>
            <p className="text-xs text-muted-foreground mt-1">out of 128 traders</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trade Entry */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="trade" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="trade">Place Trade</TabsTrigger>
                <TabsTrigger value="history">Trade History</TabsTrigger>
              </TabsList>

              <TabsContent value="trade">
                <Card className="p-6 border-border">
                  <div className="mb-6">
                    <div className="flex gap-3 mb-4">
                      <Button
                        className={`flex-1 py-6 ${
                          orderType === "BUY"
                            ? "bg-signal-buy hover:bg-signal-buy/90 text-signal-buy-foreground"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        onClick={() => setOrderType("BUY")}
                      >
                        BUY
                      </Button>
                      <Button
                        className={`flex-1 py-6 ${
                          orderType === "SELL"
                            ? "bg-signal-sell hover:bg-signal-sell/90 text-signal-sell-foreground"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        onClick={() => setOrderType("SELL")}
                      >
                        SELL
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="symbol">Stock Symbol</Label>
                        <Input
                          id="symbol"
                          placeholder="e.g., RELIANCE"
                          className="mt-1 font-mono"
                        />
                      </div>

                      <div>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="Enter quantity"
                          className="mt-1 font-mono"
                        />
                      </div>

                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          placeholder="Market price"
                          className="mt-1 font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-copper/5 border border-copper/20 rounded-lg mb-4">
                    <p className="text-sm text-copper flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-semibold">Simulated Order</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This is a paper trade and will not execute on the real market
                    </p>
                  </div>

                  <Button className="w-full bg-copper hover:bg-copper/90 text-copper-foreground py-6 text-lg font-semibold">
                    Place Simulated {orderType} Order
                  </Button>
                </Card>

                {/* Strategy Lab */}
                <Card className="p-6 border-border mt-6">
                  <h3 className="font-display text-xl font-bold mb-4">Strategy Lab</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Describe your trading strategy and get AI feedback:
                  </p>
                  <textarea
                    className="w-full min-h-[100px] p-3 border border-border rounded-lg bg-background text-foreground resize-none"
                    placeholder="e.g., Buy tech stocks on 5% dips, hold for 3 months..."
                  />
                  <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get AI Analysis
                  </Button>
                  <div className="mt-4 p-4 bg-signal-buy/5 border border-signal-buy/20 rounded-lg">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold text-signal-buy">AI Insight:</span> This
                      strategy has shown 68% historical win rate in volatile markets. Consider
                      adding stop-loss at 7% to protect downside.
                    </p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card className="p-6 border-border">
                  <h3 className="font-display text-xl font-bold mb-4">Recent Trades</h3>
                  <div className="space-y-3">
                    {tradeHistory.map((trade, idx) => (
                      <div
                        key={idx}
                        className="p-4 border border-border rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Badge
                              className={`${
                                trade.type === "BUY"
                                  ? "bg-signal-buy text-signal-buy-foreground"
                                  : "bg-signal-sell text-signal-sell-foreground"
                              }`}
                            >
                              {trade.type}
                            </Badge>
                            <span className="font-semibold font-display text-foreground">
                              {trade.symbol}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground font-mono">
                            {trade.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            <span className="font-mono">{trade.quantity} @ ₹{trade.price}</span>
                          </div>
                          <div className="text-right">
                            <span
                              className={`font-mono font-semibold ${
                                trade.pl >= 0 ? "text-signal-buy" : "text-signal-sell"
                              }`}
                            >
                              {trade.pl >= 0 ? "+" : ""}₹{trade.pl}
                            </span>
                            <span
                              className={`text-sm ml-2 ${
                                trade.pl >= 0 ? "text-signal-buy" : "text-signal-sell"
                              }`}
                            >
                              ({trade.plPercent >= 0 ? "+" : ""}
                              {trade.plPercent}%)
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Leaderboard */}
          <div>
            <Card className="p-6 border-border">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-copper" />
                Community Leaderboard
              </h3>
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div
                    key={player.rank}
                    className={`p-4 rounded-lg border transition-all ${
                      player.name === "You"
                        ? "bg-copper/10 border-copper shadow-md"
                        : "border-border hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            player.rank === 1
                              ? "bg-signal-buy text-signal-buy-foreground"
                              : player.rank === 2
                              ? "bg-signal-hold text-signal-hold-foreground"
                              : player.rank === 3
                              ? "bg-copper text-copper-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {player.rank}
                        </span>
                        <span className="font-semibold text-foreground">{player.name}</span>
                      </div>
                      <Badge className="bg-signal-buy text-signal-buy-foreground">
                        +{player.returns}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground pl-11">
                      {player.trades} trades executed
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTrading;
