import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { BackgroundBeams } from "@/registry/ui/background-beams";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Background Beams",
    description: "Animated SVG background beams with customizable gradient colors and animation speed for hero sections and landing pages",
    category: "Effects",
});

export default function BackgroundBeamsDocsPage() {
    const faqSchema = generateComponentFAQSchema("Background Beams", getDefaultComponentFAQs("Background Beams"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Background Beams", url: "https://ui.nyxhora.com/docs/components/background-beams" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="space-y-10">
                {/* Header */}
                <DocsHeader
                    title="Background Beams"
                    description="Animated SVG background beams with customizable gradient colors and animation speed. Perfect for hero sections and landing pages. Works seamlessly in both dark and light themes."
                />

                {/* Preview */}
                <DocsPreview
                    title="Preview"
                    previewCode={
                        <div className="relative h-[300px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                            <BackgroundBeams colorScheme="cyan" />
                            <h2 className="relative z-10 text-3xl font-bold text-foreground">Beautiful Beams</h2>
                        </div>
                    }
                    code={`<div className="relative h-[300px] w-full bg-background">
  <BackgroundBeams colorScheme="cyan" />
  <h2 className="relative z-10">Beautiful Beams</h2>
</div>`}
                />

                {/* Installation */}
                <DocsInstallation name={"background-beams"} />

                {/* Usage */}
                <CodeBlockWrapper
                    title="Usage"
                    code={`import { BackgroundBeams } from "@/registry/ui/background-beams"

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-background">
      <BackgroundBeams 
        colorScheme="purple"
        speed={1.5}
        beamOpacity={0.5}
      />
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  )
}`}
                    language="tsx"
                />

                {/* Color Schemes */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Color Schemes</h2>

                    {/* Purple */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Purple</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams colorScheme="purple" beamCount={30} />
                                    <span className="relative z-10 text-foreground font-medium">Purple Theme</span>
                                </div>
                            }
                            code={`<BackgroundBeams colorScheme="purple" />`}
                        />
                    </div>

                    {/* Green */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Green</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams colorScheme="green" beamCount={30} />
                                    <span className="relative z-10 text-foreground font-medium">Green Theme</span>
                                </div>
                            }
                            code={`<BackgroundBeams colorScheme="green" />`}
                        />
                    </div>

                    {/* Orange */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Orange</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams colorScheme="orange" beamCount={30} />
                                    <span className="relative z-10 text-foreground font-medium">Orange Theme</span>
                                </div>
                            }
                            code={`<BackgroundBeams colorScheme="orange" />`}
                        />
                    </div>

                    {/* Pink */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Pink</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams colorScheme="pink" beamCount={30} />
                                    <span className="relative z-10 text-foreground font-medium">Pink Theme</span>
                                </div>
                            }
                            code={`<BackgroundBeams colorScheme="pink" />`}
                        />
                    </div>
                </section>

                {/* Animation Options */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Animation Options</h2>

                    {/* Fast */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Fast Animation (2x speed)</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams colorScheme="cyan" speed={2} beamCount={25} />
                                    <span className="relative z-10 text-foreground font-medium">2x Speed</span>
                                </div>
                            }
                            code={`<BackgroundBeams colorScheme="cyan" speed={2} />`}
                        />
                    </div>

                    {/* Reverse */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Reverse Direction</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams colorScheme="purple" reverse beamCount={25} />
                                    <span className="relative z-10 text-foreground font-medium">Reversed</span>
                                </div>
                            }
                            code={`<BackgroundBeams colorScheme="purple" reverse />`}
                        />
                    </div>

                    {/* Custom Colors */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Custom Colors</h3>
                        <ComponentPreview
                            preview={
                                <div className="relative h-[150px] w-full rounded-lg bg-background border overflow-hidden flex items-center justify-center">
                                    <BackgroundBeams
                                        colorScheme="custom"
                                        customColors={{ start: "#FF0080", middle: "#7928CA", end: "#FF0080" }}
                                        beamCount={25}
                                    />
                                    <span className="relative z-10 text-foreground font-medium">Custom Gradient</span>
                                </div>
                            }
                            code={`<BackgroundBeams 
  colorScheme="custom" 
  customColors={{ 
    start: "#FF0080", 
    middle: "#7928CA", 
    end: "#FF0080" 
  }}
/>`}
                        />
                    </div>
                </section>

                {/* Props */}
                <DocsProps
                    props={[
                        {
                            name: "colorScheme",
                            type: "'cyan' | 'purple' | 'green' | 'orange' | 'pink' | 'custom'",
                            defaultValue: "cyan",
                            description: "Color theme preset for the beam gradients",
                        },
                        {
                            name: "customColors",
                            type: "{ start: string, middle: string, end: string }",
                            defaultValue: "undefined",
                            description: "Custom gradient colors (only used when colorScheme is 'custom')",
                        },
                        {
                            name: "speed",
                            type: "number",
                            defaultValue: "1",
                            description: "Animation speed multiplier (2 = 2x faster, 0.5 = half speed)",
                        },
                        {
                            name: "beamOpacity",
                            type: "number",
                            defaultValue: "0.5",
                            description: "Opacity of the animated beams (0 to 1)",
                        },
                        {
                            name: "beamCount",
                            type: "number",
                            defaultValue: "50",
                            description: "Number of animated beams to display (1 to 50)",
                        },
                        {
                            name: "reverse",
                            type: "boolean",
                            defaultValue: "false",
                            description: "Animate beams in reverse direction",
                        },
                        {
                            name: "strokeWidth",
                            type: "number",
                            defaultValue: "0.75",
                            description: "Width of the beam strokes",
                        },
                        {
                            name: "className",
                            type: "string",
                            defaultValue: "undefined",
                            description: "Additional CSS classes for the container",
                        },
                    ]}
                />
            </div>
        </>
    );
}

