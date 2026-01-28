"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function SheetDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Sheet"
                description="Extends the Dialog component to display content that complements the main screen."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add sheet`}
            />
        </div>
    );
}

