"use client";

import { useState, Suspense } from "react";
import { UrlTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/url-tabs";
import { Copy, Check, Code2, Eye, Link2 } from "lucide-react";
import { DocsHeader } from "@/components/ui/docs-documentation";

export default function UrlTabsDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="URL Tabs"
        description="Enhanced Tabs component that syncs with URL parameters. Perfect for shareable tab states and deep linking."
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        <ComponentPreview
          preview={
            <Suspense fallback={<div>Loading...</div>}>
              <UrlTabs defaultValue="overview" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 border rounded-lg mt-2">Overview content here</TabsContent>
                <TabsContent value="members" className="p-4 border rounded-lg mt-2">Members list here</TabsContent>
                <TabsContent value="settings" className="p-4 border rounded-lg mt-2">Settings form here</TabsContent>
              </UrlTabs>
            </Suspense>
          }
          code={`<UrlTabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="members">Members</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="members">Members content</TabsContent>
</UrlTabs>`}
        />
        <p className="text-sm text-muted-foreground">Try clicking tabs - the URL will update with <code className="bg-muted px-1 rounded">?tab=value</code></p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">Copy and paste the following code into your project.</p>
        <CodeBlock title="components/ui/url-tabs.tsx" code={componentCode} language="tsx" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <CodeBlock code={`import { UrlTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/url-tabs"

export default function MyPage() {
  return (
    <UrlTabs defaultValue="overview" paramName="section">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="members">Members content</TabsContent>
    </UrlTabs>
  )
}

// URL will be: /page?section=members`} language="tsx" />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Custom Parameter Name</h3>
          <ComponentPreview
            preview={
              <Suspense fallback={<div>Loading...</div>}>
                <UrlTabs defaultValue="tab1" paramName="view" className="w-full max-w-md">
                  <TabsList><TabsTrigger value="tab1">First</TabsTrigger><TabsTrigger value="tab2">Second</TabsTrigger></TabsList>
                  <TabsContent value="tab1" className="p-4 border rounded-lg mt-2">First tab content</TabsContent>
                  <TabsContent value="tab2" className="p-4 border rounded-lg mt-2">Second tab content</TabsContent>
                </UrlTabs>
              </Suspense>
            }
            code={`<UrlTabs defaultValue="tab1" paramName="view">
  // URL will be: ?view=tab2
</UrlTabs>`}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Replace History</h3>
          <CodeBlock code={`// Replace history entry instead of pushing
<UrlTabs defaultValue="tab1" replaceHistory={true}>
  ...
</UrlTabs>`} language="tsx" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border"><th className="py-3 px-4 text-left font-semibold">Prop</th><th className="py-3 px-4 text-left font-semibold">Type</th><th className="py-3 px-4 text-left font-semibold">Default</th><th className="py-3 px-4 text-left font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">paramName</code></td><td className="py-3 px-4 text-muted-foreground">string</td><td className="py-3 px-4 text-muted-foreground">"tab"</td><td className="py-3 px-4 text-muted-foreground">URL parameter name</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">updateUrl</code></td><td className="py-3 px-4 text-muted-foreground">boolean</td><td className="py-3 px-4 text-muted-foreground">true</td><td className="py-3 px-4 text-muted-foreground">Whether to update URL</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">replaceHistory</code></td><td className="py-3 px-4 text-muted-foreground">boolean</td><td className="py-3 px-4 text-muted-foreground">false</td><td className="py-3 px-4 text-muted-foreground">Replace vs push history</td></tr>
              <tr><td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">defaultValue</code></td><td className="py-3 px-4 text-muted-foreground">string</td><td className="py-3 px-4 text-muted-foreground">-</td><td className="py-3 px-4 text-muted-foreground">Default active tab</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

const componentCode = `"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UrlTabsProps extends React.ComponentProps<typeof Tabs> {
  paramName?: string
  updateUrl?: boolean
  replaceHistory?: boolean
}

function UrlTabs({
  paramName = "tab",
  updateUrl = true,
  replaceHistory = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  ...props
}: UrlTabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const urlTab = searchParams.get(paramName)
  const currentTab = controlledValue || urlTab || defaultValue
  
  const handleValueChange = React.useCallback((newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue)
    }
    
    if (updateUrl) {
      const current = new URLSearchParams(Array.from(searchParams.entries()))
      
      if (newValue === defaultValue) {
        current.delete(paramName)
      } else {
        current.set(paramName, newValue)
      }
      
      const search = current.toString()
      const query = search ? \`?\${search}\` : ""
      
      if (replaceHistory) {
        router.replace(\`\${window.location.pathname}\${query}\`)
      } else {
        router.push(\`\${window.location.pathname}\${query}\`)
      }
    }
  }, [onValueChange, updateUrl, searchParams, paramName, defaultValue, router, replaceHistory])

  return (
    <Tabs
      value={currentTab}
      onValueChange={handleValueChange}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </Tabs>
  )
}

export { UrlTabs, TabsList, TabsTrigger, TabsContent }`;

function ComponentPreview({ preview, code }: { preview: React.ReactNode; code: string }) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="rounded-xl border border-border/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/50">
        <div className="flex gap-1">
          <button onClick={() => setActiveTab("preview")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md ${activeTab === "preview" ? "bg-background shadow-sm" : "text-muted-foreground"}`}><Eye className="h-4 w-4" /> Preview</button>
          <button onClick={() => setActiveTab("code")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md ${activeTab === "code" ? "bg-background shadow-sm" : "text-muted-foreground"}`}><Code2 className="h-4 w-4" /> Code</button>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-1.5 px-2 py-1 text-xs text-muted-foreground">{copied ? <><Check className="h-3 w-3 text-green-500" /> Copied!</> : <><Copy className="h-3 w-3" /> Copy</>}</button>
      </div>
      {activeTab === "preview" ? <div className="p-8 flex items-center justify-center bg-background min-h-[150px]">{preview}</div> : <pre className="p-4 bg-zinc-950 overflow-x-auto"><code className="text-sm text-zinc-100">{code}</code></pre>}
    </div>
  );
}

function CodeBlock({ code, language, title }: { code: string; language: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="relative group rounded-xl overflow-hidden">
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-800 rounded-md">{copied ? <><Check className="h-3 w-3 text-green-500" /> Copied!</> : <><Copy className="h-3 w-3" /> Copy</>}</button>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800"><Code2 className="h-4 w-4 text-zinc-500" /><span className="text-xs text-zinc-500">{title || language}</span></div>
      <pre className="bg-zinc-950 p-4 overflow-x-auto max-h-[500px]"><code className="text-sm text-zinc-100">{code}</code></pre>
    </div>
  );
}
