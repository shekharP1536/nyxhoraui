"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function CommandDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Command"
                description="Fast, composable, unstyled command menu for React."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add command`}
            />
        </div>
    );
}

