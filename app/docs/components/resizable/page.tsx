"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function ResizableDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Resizable"
                description="Accessible resizable panel groups and layouts."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add resizable`}
            />
        </div>
    );
}

