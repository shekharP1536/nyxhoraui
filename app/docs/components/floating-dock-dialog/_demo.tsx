"use client";

import { useState } from "react";
import { FloatingDockWithDialog } from "@/registry/ui/floating-dock-dialog";

const DEMO_ITEMS = [
  { _id: "1", name: "Personal",  description: "Personal projects",   Appearance: { icon: "🏠", color: "#3B82F6" }, isfav: true  },
  { _id: "2", name: "Work",      description: "Work tasks",          Appearance: { icon: "💼", color: "#10B981" }, isfav: false },
  { _id: "3", name: "Design",    description: "UI/UX work",          Appearance: { icon: "🎨", color: "#8B5CF6" }, isfav: true  },
  { _id: "4", name: "Marketing", description: "Campaigns & growth",  Appearance: { icon: "📈", color: "#F59E0B" }, isfav: false },
];

export function FloatingDockDialogDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId] = useState("1");

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Open Workspace Dock
      </button>
      <p className="text-xs text-muted-foreground">Active: {DEMO_ITEMS.find(i => i._id === activeId)?.name}</p>
      <FloatingDockWithDialog
        items={DEMO_ITEMS}
        activeId={activeId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddWorkspace={() => alert("Add workspace clicked")}
      />
    </div>
  );
}
