"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function ChartDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Chart"
                description="Beautiful charts built with Recharts and Tailwind CSS."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add chart`}
            />
        </div>
    );
}

