"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function ToggleDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Toggle"
                description="A two-state button that can be either on or off."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add toggle`}
            />
        </div>
    );
}

