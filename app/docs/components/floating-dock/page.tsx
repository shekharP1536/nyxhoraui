import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { Home, Settings, User, FileText } from "lucide-react";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";
import { FloatingDock } from "@/registry/ui/floating-dock";

export const metadata = generateComponentMetadata({
    name: "Floating Dock",
    description: "A macOS-style dock with smooth hover animations, spring physics, and responsive mobile/desktop variants for app navigation.",
    category: "Navigation",
});

const dockItems = [
    { title: "Home", icon: <Home className="h-full w-full" />, href: "/" },
    { title: "Profile", icon: <User className="h-full w-full" />, href: "/profile" },
    { title: "Documents", icon: <FileText className="h-full w-full" />, href: "/docs" },
    { title: "Settings", icon: <Settings className="h-full w-full" />, href: "/settings" },
];

export default function FloatingDockDocsPage() {
    const faqSchema = generateComponentFAQSchema("Floating Dock", getDefaultComponentFAQs("Floating Dock"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Floating Dock", url: "https://ui.nyxhora.com/docs/components/floating-dock" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="space-y-10">
                <DocsHeader
                    title="Floating Dock"
                    description="A macOS-style dock with smooth hover animations, spring physics, and responsive mobile/desktop variants. Perfect for app navigation."
                />

                <DocsPreview
                    title="Preview"
                    previewCode={
                        <div className="flex items-end justify-center pt-8 pb-20 w-full relative">
                            <FloatingDock
                                items={dockItems}
                                desktopClassName="!fixed-none !relative !left-auto !translate-x-0 !bottom-auto"
                                mobileClassName="!fixed-none !relative !left-auto !translate-x-0 !bottom-auto"
                            />
                        </div>
                    }
                    code={`<FloatingDock items={[
  { title: "Home",      icon: <Home />,     href: "/" },
  { title: "Profile",   icon: <User />,     href: "/profile" },
  { title: "Documents", icon: <FileText />, href: "/docs" },
  { title: "Settings",  icon: <Settings />, href: "/settings" },
]} />`}
                />

                <DocsInstallation name="floating-dock" />

                <CodeBlockWrapper
                    title="Usage"
                    code={`import { FloatingDock } from "@/registry/ui/floating-dock"
import { Home, Settings, User, FileText } from "lucide-react"

const items = [
  { title: "Home",      icon: <Home />,     href: "/" },
  { title: "Profile",   icon: <User />,     href: "/profile" },
  { title: "Documents", icon: <FileText />, href: "/docs" },
  { title: "Settings",  icon: <Settings />, href: "/settings" },
]

export default function App() {
  return <FloatingDock items={items} />
}`}
                    language="tsx"
                />

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Examples</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Custom positioning</h3>
                        <ComponentPreview
                            preview={
                                <div className="flex items-end justify-center pt-8 pb-20 w-full relative">
                                    <FloatingDock
                                        items={dockItems}
                                        desktopClassName="!fixed-none !relative !left-auto !translate-x-0 !bottom-auto"
                                    />
                                </div>
                            }
                            code={`<FloatingDock
  items={items}
  desktopClassName="bottom-8 left-8 translate-x-0"
/>`}
                        />
                    </div>
                </section>

                <DocsProps
                    props={[
                        {
                            name: "items",
                            type: "{ title: string; icon: ReactNode; href: string }[]",
                            defaultValue: "-",
                            description: "Array of dock items — each with a label, icon, and link.",
                        },
                        {
                            name: "desktopClassName",
                            type: "string",
                            defaultValue: "undefined",
                            description: "Additional class names applied to the desktop (horizontal) dock.",
                        },
                        {
                            name: "mobileClassName",
                            type: "string",
                            defaultValue: "undefined",
                            description: "Additional class names applied to the mobile (expandable) dock.",
                        },
                    ]}
                />
            </div>
        </>
    );
}

