"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function SwitchDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Switch" description="A control that allows the user to toggle between checked and not checked." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                }
                code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Switch } from "@/components/ui/switch"

export default function MyComponent() {
  return <Switch />
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="With Label"
                    previewCode={
                        <div className="flex items-center space-x-2">
                            <Switch id="marketing" />
                            <Label htmlFor="marketing">Marketing emails</Label>
                        </div>
                    }
                    code={`<div className="flex items-center space-x-2">
  <Switch id="marketing" />
  <Label htmlFor="marketing">Marketing emails</Label>
</div>`}
                />

                <DocsPreview
                    variant="Disabled"
                    previewCode={
                        <div className="flex items-center space-x-2">
                            <Switch id="disabled" disabled />
                            <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
                        </div>
                    }
                    code={`<div className="flex items-center space-x-2">
  <Switch id="disabled" disabled />
  <Label htmlFor="disabled">Disabled</Label>
</div>`}
                />

                <DocsPreview
                    variant="Settings Form"
                    previewCode={
                        <div className="w-full max-w-md space-y-6 rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="notifications">Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Receive push notifications</p>
                                </div>
                                <Switch id="notifications" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="sounds">Sounds</Label>
                                    <p className="text-sm text-muted-foreground">Play notification sounds</p>
                                </div>
                                <Switch id="sounds" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="analytics">Analytics</Label>
                                    <p className="text-sm text-muted-foreground">Share usage data</p>
                                </div>
                                <Switch id="analytics" />
                            </div>
                        </div>
                    }
                    code={`<div className="w-full max-w-md space-y-6 rounded-lg border p-4">
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="notifications">Notifications</Label>
      <p className="text-sm text-muted-foreground">Receive push notifications</p>
    </div>
    <Switch id="notifications" defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="sounds">Sounds</Label>
      <p className="text-sm text-muted-foreground">Play notification sounds</p>
    </div>
    <Switch id="sounds" />
  </div>
</div>`}
                />
            </section>

            <DocsProps
                props={[
                    { name: "checked", type: "boolean", description: "Controlled checked state" },
                    { name: "defaultChecked", type: "boolean", defaultValue: "false", description: "Default checked state" },
                    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when checked state changes" },
                    { name: "disabled", type: "boolean", defaultValue: "false", description: "Disable the switch" },
                ]}
            />
        </div>
    );
}
