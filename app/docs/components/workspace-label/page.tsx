import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";
import { WorkspaceLabelDemo } from "./_demo";

export const metadata = generateComponentMetadata({
    slug: "workspace-label",
    name: "Workspace Label",
    description: "A workspace switcher with member avatars, pending request notifications, info card panel, and keyboard shortcuts.",
    category: "Navigation",
});

export default function WorkspaceLabelDocsPage() {
    const faqSchema = generateComponentFAQSchema("Workspace Label", getDefaultComponentFAQs("Workspace Label", "workspace-label"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Workspace Label", url: "https://ui.nyxhora.com/docs/components/workspace-label" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="space-y-10">
                <DocsHeader
                    title="Workspace Label"
                    description="A comprehensive workspace switcher with member avatars, pending request notifications, collapsible info card panel, and keyboard shortcuts for rapid workspace navigation."
                />

                <DocsPreview
                    title="Preview"
                    previewCode={<WorkspaceLabelDemo />}
                    code={`import WorkspaceLabel from "@/registry/ui/workspace-label"

<WorkspaceLabel
  workspaces={[
    { id: "1", name: "Personal",  icon: "🏠", color: "#3B82F6" },
    { id: "2", name: "Acme Corp", icon: "🏢", color: "#10B981" },
  ]}
  members={[
    { id: "1", name: "John Doe",   role: "admin"  },
    { id: "2", name: "Jane Smith", role: "member" },
  ]}
  pendingRequests={[
    { id: "1", name: "New User", email: "new@example.com" },
  ]}
  activeWorkspaceId="1"
  onWorkspaceChange={(id) => console.log("switched to", id)}
  onCreateWorkspace={() => console.log("create")}
  onInvite={() => console.log("invite")}
/>`}
                />

                <DocsInstallation name="workspace-label" />

                <CodeBlockWrapper
                    title="Usage"
                    code={`import { useState } from "react"
import WorkspaceLabel from "@/registry/ui/workspace-label"
import type { WorkspaceItem, MemberItem, PendingRequest } from "@/registry/ui/workspace-label"

const workspaces: WorkspaceItem[] = [
  { id: "1", name: "Personal",  description: "My personal workspace", icon: "🏠", color: "#3B82F6" },
  { id: "2", name: "Acme Corp", description: "Company workspace",     icon: "🏢", color: "#10B981" },
]

const members: MemberItem[] = [
  { id: "1", name: "John Doe",   email: "john@example.com", role: "admin"  },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "member" },
]

export default function Sidebar() {
  const [activeId, setActiveId] = useState("1")

  return (
    <aside className="w-64 border-r p-4">
      <WorkspaceLabel
        workspaces={workspaces}
        members={members}
        activeWorkspaceId={activeId}
        onWorkspaceChange={setActiveId}
        onCreateWorkspace={() => router.push("/workspaces/new")}
        onInvite={() => setInviteOpen(true)}
        updatedAt="Jan 28, 2026"
      />
    </aside>
  )
}`}
                    language="tsx"
                />

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-3 px-4 text-left font-semibold">Shortcut</th>
                                    <th className="py-3 px-4 text-left font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-3 px-4"><kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘,</kbd></td>
                                    <td className="py-3 px-4 text-muted-foreground">Toggle info card panel</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4">
                                        <kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘1</kbd>
                                        {" – "}
                                        <kbd className="px-2 py-1 text-xs bg-muted border rounded">⌘9</kbd>
                                    </td>
                                    <td className="py-3 px-4 text-muted-foreground">Switch to workspace 1–9</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <DocsProps
                    props={[
                        {
                            name: "workspaces",
                            type: "WorkspaceItem[]",
                            defaultValue: "-",
                            description: "List of workspaces to display in the switcher.",
                        },
                        {
                            name: "members",
                            type: "MemberItem[]",
                            defaultValue: "[]",
                            description: "Team members shown as stacked avatars.",
                        },
                        {
                            name: "pendingRequests",
                            type: "PendingRequest[]",
                            defaultValue: "[]",
                            description: "Pending join requests — shows an animated bell badge when non-empty.",
                        },
                        {
                            name: "activeWorkspaceId",
                            type: "string",
                            defaultValue: "undefined",
                            description: "ID of the currently active workspace.",
                        },
                        {
                            name: "onWorkspaceChange",
                            type: "(id: string) => void",
                            defaultValue: "undefined",
                            description: "Called when the user selects a different workspace.",
                        },
                        {
                            name: "onCreateWorkspace",
                            type: "() => void",
                            defaultValue: "undefined",
                            description: "Called when the Create workspace button is clicked.",
                        },
                        {
                            name: "onInvite",
                            type: "() => void",
                            defaultValue: "undefined",
                            description: "Called when the Invite quick action is clicked.",
                        },
                        {
                            name: "onViewRequests",
                            type: "() => void",
                            defaultValue: "undefined",
                            description: "Called when the Requests quick action or bell badge is clicked.",
                        },
                        {
                            name: "onSettings",
                            type: "() => void",
                            defaultValue: "undefined",
                            description: "Called when the settings icon in the info card footer is clicked.",
                        },
                        {
                            name: "updatedAt",
                            type: "string",
                            defaultValue: "undefined",
                            description: "Optional last-updated label shown in the info card header.",
                        },
                    ]}
                />
            </div>
        </>
    );
}


