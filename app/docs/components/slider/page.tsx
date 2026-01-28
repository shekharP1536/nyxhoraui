"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";

export default function SliderDocsPage() {
    const [value, setValue] = useState([50]);
    return (
        <div className="space-y-10">
            <DocsHeader title="Slider" description="An input for selecting a value from a range." />

            <DocsPreview
                title="Preview"
                previewCode={<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />}
                code={`<Slider defaultValue={[50]} max={100} step={1} />`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Slider } from "@/components/ui/slider"

export default function MyComponent() {
  return <Slider defaultValue={[33]} max={100} step={1} />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="With Value Display"
                    previewCode={
                        <div className="w-[60%] space-y-4">
                            <div className="flex justify-between"><Label>Volume</Label><span className="text-sm">{value[0]}%</span></div>
                            <Slider value={value} onValueChange={setValue} max={100} step={1} />
                        </div>
                    }
                    code={`const [value, setValue] = useState([50])

<div className="flex justify-between">
  <Label>Volume</Label>
  <span>{value[0]}%</span>
</div>
<Slider value={value} onValueChange={setValue} max={100} />`}
                />

                <DocsPreview
                    variant="Range Slider"
                    previewCode={<Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />}
                    code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
                />
            </section>
        </div>
    );
}
