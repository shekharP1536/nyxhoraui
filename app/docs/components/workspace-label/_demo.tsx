"use client";

import { useState } from "react";
import WorkspaceLabel from "@/registry/ui/workspace-label";

const WORKSPACES = [
  { id: "1", name: "Personal",  description: "My personal workspace",  icon: "🏠", color: "#3B82F6" },
  { id: "2", name: "Acme Corp", description: "Company workspace",       icon: "🏢", color: "#10B981" },
  { id: "3", name: "Design",    description: "Creative projects",       icon: "🎨", color: "#8B5CF6" },
  { id: "4", name: "Marketing", description: "Marketing campaigns",     icon: "📈", color: "#F59E0B" },
];

const MEMBERS = [
  { id: "1", name: "John Doe",     email: "john@example.com",    role: "admin"  },
  { id: "2", name: "Jane Smith",   email: "jane@example.com",    role: "member" },
  { id: "3", name: "Bob Wilson",   email: "bob@example.com",     role: "member" },
  { id: "4", name: "Alice Brown",  email: "alice@example.com",   role: "member" },
  { id: "5", name: "Charlie Davis",email: "charlie@example.com", role: "member" },
];

const PENDING = [
  { id: "1", name: "New User", email: "newuser@example.com", message: "I'd like to join!", date: "Jan 28" },
];

export function WorkspaceLabelDemo() {
  const [activeId, setActiveId] = useState("1");

  return (
    <div className="flex justify-center w-full h-[500px] max-w-md">
      <WorkspaceLabel
        workspaces={WORKSPACES}
        members={MEMBERS}
        pendingRequests={PENDING}
        activeWorkspaceId={activeId}
        onWorkspaceChange={setActiveId}
        onCreateWorkspace={() => alert("Create workspace")}
        onInvite={() => alert("Invite member")}
        onViewRequests={() => alert("View requests")}
        onSettings={() => alert("Settings")}
        onJoin={() => alert("Join workspace")}
        updatedAt="Jan 28, 2026"
      />
    </div>
  );
}
