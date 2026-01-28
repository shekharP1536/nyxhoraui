"use client";

import { DocsHeader, CodeBlockWrapper } from "@/components/ui/docs-documentation";

export default function FlipWordsDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Flip Words"
                description="A text animation that flips through a list of words."
            />
            <div className="p-10 border border-dashed rounded-lg text-center text-muted-foreground">
                <p>Interactive preview coming soon.</p>
            </div>
        </div>
    );
}

