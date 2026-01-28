import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CodeBlockWrapper, DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";

export const metadata: Metadata = {
    title: "Avatar",
    description: "An image element with a fallback for representing the user.",
};

export default function AvatarDocsPage() {
    return (
        <div className="space-y-10">
            <DocsHeader title="Avatar" description="An image element with a fallback for representing the user." />

            <DocsPreview
                title="Preview"
                previewCode={
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                }
                code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
            />

            <CodeBlockWrapper
                title="Usage"
                code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="https://example.com/avatar.png" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  )
}`}
                language="tsx"
            />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Examples</h2>

                <DocsPreview
                    variant="Sizes"
                    previewCode={
                        <div className="flex items-center gap-4">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>MD</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-14 w-14">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>LG</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>XL</AvatarFallback>
                            </Avatar>
                        </div>
                    }
                    code={`<Avatar className="h-8 w-8">
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="h-14 w-14">
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>

<Avatar className="h-20 w-20">
  <AvatarImage src="/avatar.png" />
  <AvatarFallback>XL</AvatarFallback>
</Avatar>`}
                />

                <DocsPreview
                    variant="Fallback"
                    previewCode={
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback className="bg-purple-500 text-white">MK</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback className="bg-green-500 text-white">TS</AvatarFallback>
                            </Avatar>
                        </div>
                    }
                    code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback className="bg-purple-500 text-white">MK</AvatarFallback>
</Avatar>`}
                />

                <DocsPreview
                    variant="Avatar Stack"
                    previewCode={
                        <div className="flex -space-x-4">
                            <Avatar className="border-2 border-background">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                                <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                                <AvatarFallback className="bg-purple-500 text-white">MK</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                                <AvatarFallback className="bg-muted text-muted-foreground text-xs">+5</AvatarFallback>
                            </Avatar>
                        </div>
                    }
                    code={`<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="/avatar1.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="bg-purple-500 text-white">MK</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="bg-muted text-xs">+5</AvatarFallback>
  </Avatar>
</div>`}
                />

                <DocsPreview
                    variant="With Name"
                    previewCode={
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">shadcn</p>
                                <p className="text-xs text-muted-foreground">@shadcn</p>
                            </div>
                        </div>
                    }
                    code={`<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="/avatar.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">shadcn</p>
    <p className="text-xs text-muted-foreground">@shadcn</p>
  </div>
</div>`}
                />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Components</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-3 px-4 text-left font-semibold">Component</th>
                                <th className="py-3 px-4 text-left font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">Avatar</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The root container</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">AvatarImage</code></td>
                                <td className="py-3 px-4 text-muted-foreground">The image element</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">AvatarFallback</code></td>
                                <td className="py-3 px-4 text-muted-foreground">Fallback when image fails to load</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
