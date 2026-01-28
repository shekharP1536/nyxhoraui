"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function ExpandableCardDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Expandable Card"
                description="Card content that can expand to show more details."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

