import { Metadata } from "next";
import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Exit Intent Demo",
    description: "A demonstration of exit intent detection behavior.",
};

export default function ExitIntentDemoDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Exit Intent Demo"
                description="A demonstration of exit intent detection behavior."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

