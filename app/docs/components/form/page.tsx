"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function FormDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Form"
                description="Building forms with React Hook Form and Zod."
            />

            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add form`}
            />
        </div>
    );
}

