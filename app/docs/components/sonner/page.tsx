"use client";

import { DocsHeader, DocsPreview, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Sonner"
                description="An opinionated toast component for React."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("Event has been created", {
                                description: "Sunday, December 03, 2023 at 9:00 AM",
                                action: {
                                    label: "Undo",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Show Toast
                    </Button>
                }
                code={`<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }
>
  Show Toast
</Button>`}
            />

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add sonner`}
            />
        </div>
    );
}
