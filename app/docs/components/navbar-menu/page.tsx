"use client";

import { DocsHeader, DocsPreview, CodeBlockWrapper, DocsProps, ComponentPreview } from "@/components/ui/docs-documentation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Layers, Palette, Moon } from "lucide-react";

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

function MenuDemo() {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="w-full flex justify-center py-8">
            <nav onMouseLeave={() => setActive(null)} className="relative rounded-full border border-border bg-background shadow-md flex justify-center space-x-4 px-8 py-4">
                {["Products", "Resources", "Pricing"].map((item) => (
                    <div key={item} onMouseEnter={() => setActive(item)} className="relative">
                        <motion.p transition={{ duration: 0.3 }} className="cursor-pointer text-foreground hover:opacity-80">{item}</motion.p>
                        {active === item && (
                            <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="absolute top-[calc(100%+1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                                <motion.div layoutId="active-demo" className="bg-popover rounded-2xl border border-border shadow-xl p-4">
                                    <div className="flex flex-col space-y-2 text-sm">
                                        <Link href="#" className="text-muted-foreground hover:text-foreground">Option 1</Link>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground">Option 2</Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default function NavbarMenuDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Navbar Menu" description="Animated dropdown menu components for navigation with smooth spring animations and hover effects." />
            <DocsPreview title="Preview" previewCode={<MenuDemo />} code={`import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
const [active, setActive] = useState<string | null>(null);
<Menu setActive={setActive}>
  <MenuItem setActive={setActive} active={active} item="Products">
    <HoveredLink href="/web-dev">Web Development</HoveredLink>
  </MenuItem>
</Menu>`} />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Features</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <FeatureCard icon={Zap} title="Spring Animations" description="Physics-based spring animations using Framer Motion." />
                    <FeatureCard icon={Layers} title="Shared Layout" description="Uses layoutId for smooth transitions between active items." />
                    <FeatureCard icon={Palette} title="Product Cards" description="Built-in ProductItem for showcasing products with images." />
                    <FeatureCard icon={Moon} title="Dark Mode Ready" description="Automatic styling for light and dark color schemes." />
                </div>
            </section>

            <CodeBlockWrapper title="Requirements" code={`npm install framer-motion`} language="bash" />

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Component Source</h2>
                <p className="text-muted-foreground">Copy to <code className="px-1.5 py-0.5 rounded bg-muted text-sm">components/ui/navbar-menu.tsx</code></p>
                <CodeBlockWrapper code={`"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const MenuItem = ({ setActive, active, item, children }: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => (
  <div onMouseEnter={() => setActive(item)} className="relative">
    <motion.p className="cursor-pointer text-black hover:opacity-90 dark:text-white">{item}</motion.p>
    {active === item && (
      <div className="absolute top-[calc(100%+1.2rem)] left-1/2 -translate-x-1/2 pt-4">
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          layoutId="active" className="bg-white dark:bg-black rounded-2xl border shadow-xl p-4">
          {children}
        </motion.div>
      </div>
    )}
  </div>
);

export const Menu = ({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) => (
  <nav onMouseLeave={() => setActive(null)} className="rounded-full border bg-white dark:bg-black shadow-input flex space-x-4 px-8 py-6">
    {children}
  </nav>
);

export const ProductItem = ({ title, description, href, src }: { title: string; description: string; href: string; src: string }) => (
  <Link href={href} className="flex space-x-2">
    <Image src={src} width={140} height={70} alt={title} className="rounded-md shadow-2xl" />
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-neutral-700 text-sm max-w-40 dark:text-neutral-300">{description}</p>
    </div>
  </Link>
);

export const HoveredLink = ({ children, ...rest }: any) => (
  <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">{children}</Link>
);`} language="tsx" />
            </section>

            <DocsProps props={[
                { name: "setActive", type: "(item: string | null) => void", description: "Function to set active menu item", required: true },
                { name: "active", type: "string | null", description: "Currently active menu item name", required: true },
                { name: "item", type: "string", description: "Display name for the menu item", required: true },
                { name: "children", type: "React.ReactNode", description: "Dropdown content" },
            ]} />
        </div>
    );
}
