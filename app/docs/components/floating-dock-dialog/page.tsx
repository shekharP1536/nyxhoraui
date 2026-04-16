import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { CodeBlockWrapper, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";
import DocsInstallation from "@/components/ui/docs-installation";
import { FloatingDockDialogDemo } from "./_demo";

export const metadata = generateComponentMetadata({
    slug: "floating-dock-dialog",
    name: "Floating Dock Dialog",
    description: "An enhanced floating dock with bottom sheet dialog, workspace cards, custom icons, colors, and spring physics animations.",
    category: "Navigation",
});

export default function FloatingDockDialogDocsPage() {
    const faqSchema = generateComponentFAQSchema("Floating Dock Dialog", getDefaultComponentFAQs("Floating Dock Dialog", "floating-dock-dialog"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Floating Dock Dialog", url: "https://ui.nyxhora.com/docs/components/floating-dock-dialog" },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="space-y-10">
                <DocsHeader
                    title="Floating Dock Dialog"
                    description="An enhanced floating dock that opens as a bottom sheet dialog. Features workspace cards with custom emoji icons, hex colors, favorite indicators, active states, and macOS-style spring physics on desktop."
                />

                <DocsPreview
                    title="Preview"
                    previewCode={<FloatingDockDialogDemo />}
                    code={`import { useState } from "react"
import { FloatingDockWithDialog } from "@/registry/ui/floating-dock-dialog"

const workspaces = [
  { _id: "1", name: "Personal", Appearance: { icon: "🏠", color: "#3B82F6" }, isfav: true  },
  { _id: "2", name: "Work",     Appearance: { icon: "💼", color: "#10B981" }, isfav: false },
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Workspaces</button>
      <FloatingDockWithDialog
        items={workspaces}
        activeId="1"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddWorkspace={() => console.log("add")}
      />
    </>
  )
}`}
                />

                <DocsInstallation name="floating-dock-dialog" />

                <CodeBlockWrapper
                    title="Usage"
                    code={`import { useState } from "react"
import { FloatingDockWithDialog } from "@/registry/ui/floating-dock-dialog"
import type { WorkspaceItem } from "@/registry/ui/floating-dock-dialog"

const workspaces: WorkspaceItem[] = [
  { _id: "1", name: "Personal",  description: "Personal projects",  Appearance: { icon: "🏠", color: "#3B82F6" }, isfav: true  },
  { _id: "2", name: "Work",      description: "Work tasks",         Appearance: { icon: "💼", color: "#10B981" }, isfav: false },
  { _id: "3", name: "Design",    description: "UI/UX work",         Appearance: { icon: "🎨", color: "#8B5CF6" }, isfav: true  },
]

export default function WorkspaceLayout() {
  const [isOpen, setIsOpen]   = useState(false)
  const [activeId, setActiveId] = useState("1")

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Workspaces</button>
      <FloatingDockWithDialog
        items={workspaces}
        activeId={activeId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddWorkspace={() => console.log("Add workspace")}
      />
    </>
  )
}`}
                    language="tsx"
                />

                <DocsProps
                    props={[
                        {
                            name: "items",
                            type: "WorkspaceItem[]",
                            defaultValue: "-",
                            description: "Array of workspace items. Favorites are automatically sorted to the front.",
                        },
                        {
                            name: "activeId",
                            type: "string",
                            defaultValue: "undefined",
                            description: "ID of the currently active workspace. Shown with a ring highlight.",
                        },
                        {
                            name: "isOpen",
                            type: "boolean",
                            defaultValue: "-",
                            description: "Controls bottom sheet dialog visibility.",
                        },
                        {
                            name: "onClose",
                            type: "() => void",
                            defaultValue: "-",
                            description: "Called when the dialog is dismissed.",
                        },
                        {
                            name: "onAddWorkspace",
                            type: "() => void",
                            defaultValue: "undefined",
                            description: "Called when the + add workspace button is clicked.",
                        },
                    ]}
                />
            </div>
        </>
    );
}


