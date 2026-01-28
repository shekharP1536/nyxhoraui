"use client";

import { DocsHeader, DocsPreview, CodeBlockWrapper, DocsProps } from "@/components/ui/docs-documentation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Sparkles, Info, Menu, X, ArrowRight, Layers, Smartphone, Palette, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function NavbarDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routes = [
    { label: "Home", icon: Home, href: "#", active: true },
    { label: "Features", icon: Sparkles, href: "#", active: false },
    { label: "About", icon: Info, href: "#", active: false },
  ];

  return (
    <div className="w-full max-w-4xl">
      <nav className="relative w-full backdrop-blur-lg rounded-xl border border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="flex items-center group">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">NyxUI</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {routes.map((route) => (
                  <Link key={route.label} href={route.href}
                    className={cn("relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      route.active ? "shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}>
                    <div className="flex items-center gap-2">{route.label}</div>
                    {route.active && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="default" size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg text-muted-foreground hover:text-foreground">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function NavbarDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader title="Navbar" description="A responsive navigation bar component with glassmorphism effects, mobile menu support, and smooth animations." />

      <DocsPreview title="Preview" previewCode={<NavbarDemo />} code={`import { Navbar } from "@/components/ui/navbar";

export default function MyPage() {
  return (
    <div>
      <Navbar />
      {/* Page content */}
    </div>
  );
}`} />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard icon={Palette} title="Glassmorphism Design" description="Beautiful backdrop blur effect with subtle transparency for a modern look." />
          <FeatureCard icon={Smartphone} title="Fully Responsive" description="Smooth mobile menu with slide-in animation and touch-friendly interactions." />
          <FeatureCard icon={Layers} title="Active State Indicators" description="Animated gradient underline shows the current active page." />
          <FeatureCard icon={Zap} title="Smooth Animations" description="Micro-interactions with scale, opacity, and transform transitions." />
        </div>
      </section>

      <CodeBlockWrapper title="Installation" code={`# No additional dependencies required
# Uses lucide-react icons and standard Next.js Link`} language="bash" />

      <CodeBlockWrapper title="Usage" code={`import { Navbar } from "@/components/ui/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}`} language="tsx" />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Component Source</h2>
        <p className="text-muted-foreground">Copy to <code className="px-1.5 py-0.5 rounded bg-muted text-sm">components/ui/navbar.tsx</code></p>
        <CodeBlockWrapper code={`"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Home, ArrowRight, Sparkles, Info, Store } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = [
    { label: "Home", icon: Home, href: "/", active: pathname === "/" },
    { label: "Features", icon: Sparkles, href: "/features", active: pathname === "/features" },
    { label: "UI", icon: Sparkles, href: "/docs", active: pathname === "/docs" },
    { label: "Template", icon: Store, href: "/market", active: pathname === "/market" },
    { label: "About", icon: Info, href: "/about", active: pathname === "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Nyxhora</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}
                className={cn("relative px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  route.active ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>
                {route.label}
                {route.active && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />}
              </Link>
            ))}
          </div>
          <Button asChild className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <Link href="/app">Enter Nyxhora <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};`} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Notes</h2>
        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-6">
          <p className="text-sm"><strong className="text-amber-600 dark:text-amber-400">Fixed Positioning:</strong> The navbar uses <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fixed top-0</code> positioning. Add <code className="bg-muted px-1.5 py-0.5 rounded text-xs">pt-16</code> to your main content.</p>
        </div>
      </section>
    </div>
  );
}
