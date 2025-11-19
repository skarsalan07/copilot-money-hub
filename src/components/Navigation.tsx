import { TrendingUp, Wallet, BookOpen, Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: TrendingUp, label: "Signals", href: "#signals" },
    { icon: Wallet, label: "Portfolio", href: "#portfolio" },
    { icon: BookOpen, label: "Learn", href: "#learn" },
    { icon: Shield, label: "Compliance", href: "#compliance" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-copper flex items-center justify-center">
              <span className="text-white font-bold text-xl font-mono">₹</span>
            </div>
            <span className="font-display font-bold text-xl text-primary hidden sm:block">
              Copilot_Money
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button className="bg-copper hover:bg-copper/90 text-copper-foreground font-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border mt-2">
                <Button variant="ghost" className="w-full justify-start font-medium">
                  Sign In
                </Button>
                <Button className="w-full bg-copper hover:bg-copper/90 text-copper-foreground font-medium">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
