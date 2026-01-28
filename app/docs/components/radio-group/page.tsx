"use client";

import { DocsHeader, DocsPreview, DocsProps, CodeBlockWrapper } from "@/components/ui/docs-documentation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioGroupDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader
                title="Radio Group"
                description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
            />

            <DocsPreview
                title="Default"
                previewCode={
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
            />

            <CodeBlockWrapper
                title="Installation"
                language="bash"
                code={`npx shadcn@latest add radio-group`}
            />
        </div>
    );
}
