"use client";

import { useState, useRef } from "react";
import {
  Bell,
  Calendar,
  ChevronRight,
  ChevronsUpDown,
  Eye,
  Plus,
  Settings,
  Settings2,
  UserPlus,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type WorkspaceItem = {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
};

export type MemberItem = {
  id: string;
  name: string;
  email?: string;
  role?: string;
  image?: string | null;
};

export type PendingRequest = {
  id: string;
  name: string;
  email?: string;
  message?: string;
  date?: string;
};

export type WorkspaceLabelProps = {
  workspaces: WorkspaceItem[];
  members?: MemberItem[];
  pendingRequests?: PendingRequest[];
  activeWorkspaceId?: string;
  onWorkspaceChange?: (id: string) => void;
  onCreateWorkspace?: () => void;
  onInvite?: () => void;
  onViewRequests?: () => void;
  onSettings?: () => void;
  onJoin?: () => void;
  updatedAt?: string;
};

// ---------------------------------------------------------------------------
// WorkspaceLabel
// ---------------------------------------------------------------------------

export default function WorkspaceLabel({
  workspaces,
  members = [],
  pendingRequests = [],
  activeWorkspaceId,
  onWorkspaceChange,
  onCreateWorkspace,
  onInvite,
  onViewRequests,
  onSettings,
  onJoin,
  updatedAt,
}: WorkspaceLabelProps) {
  const current =
    workspaces.find((w) => w.id === activeWorkspaceId) ?? workspaces[0];
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const infoCardRef = useRef<HTMLDivElement>(null);

  const displayedMembers = members.slice(0, 3);
  const remainingCount = Math.max(0, members.length - 3);

  return (
    <div className="relative w-full max-w-sm">
      {/* Main button */}
      <div className="group relative">
        <button
          onClick={() => setShowInfoCard(!showInfoCard)}
          className="w-full flex items-center gap-3 text-left p-3 rounded-lg hover:bg-accent/50 transition-all duration-200 cursor-pointer border border-border/50"
        >
          {/* Icon */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg text-lg shrink-0 shadow-sm ring-1 ring-border/20 transition-transform duration-200 group-hover:scale-105"
            style={{
              backgroundColor: (current?.color ?? "#3B82F6") + "15",
              color: current?.color ?? "#3B82F6",
            }}
          >
            {current?.icon ?? current?.name?.charAt(0)}
          </div>

          {/* Name + members */}
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-semibold text-foreground truncate">
              {current?.name}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              {members.length > 0 && (
                <div className="flex -space-x-1">
                  {displayedMembers.map((m) => (
                    <div
                      key={m.id}
                      className="h-4 w-4 rounded-full bg-muted border border-background ring-1 ring-border/30 flex items-center justify-center text-[8px] font-medium"
                    >
                      {m.name.charAt(0)}
                    </div>
                  ))}
                  {remainingCount > 0 && (
                    <div className="h-4 w-4 rounded-full bg-muted border border-background ring-1 ring-border/30 flex items-center justify-center">
                      <span className="text-[7px] font-medium text-muted-foreground">
                        +{remainingCount}
                      </span>
                    </div>
                  )}
                </div>
              )}
              <span className="text-xs text-muted-foreground">
                {members.length} member{members.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 shrink-0">
            {pendingRequests.length > 0 && (
              <button
                className="relative p-1.5 rounded-md hover:bg-amber-500/10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewRequests?.();
                }}
              >
                <Bell className="h-3.5 w-3.5 text-amber-500" />
                <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-destructive rounded-full animate-pulse" />
              </button>
            )}

            {/* Workspace switcher */}
            <div className="relative">
              <button
                className="flex items-center justify-center h-7 w-7 rounded-md hover:bg-accent/60 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(!showDropdown);
                }}
              >
                <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>

              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-72 rounded-lg border bg-popover shadow-lg z-99 animate-in fade-in slide-in-from-top-2">
                  <div className="p-2 text-xs text-muted-foreground font-medium">
                    Switch Workspace
                  </div>
                  <div className="border-t" />
                  {workspaces.map((ws, index) => (
                    <button
                      key={ws.id}
                      onClick={() => {
                        onWorkspaceChange?.(ws.id);
                        setShowDropdown(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-accent/50 transition-colors"
                    >
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-sm ring-1 ring-border/20"
                        style={{
                          backgroundColor: (ws.color ?? "#3B82F6") + "15",
                          color: ws.color ?? "#3B82F6",
                        }}
                      >
                        {ws.icon ?? ws.name.charAt(0)}
                      </div>
                      <div className="flex flex-col flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm truncate">
                            {ws.name}
                          </span>
                          {ws.id === current?.id && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                              Current
                            </span>
                          )}
                        </div>
                        {ws.description && (
                          <span className="text-xs text-muted-foreground">
                            {ws.description}
                          </span>
                        )}
                      </div>
                      {index < 9 && (
                        <kbd className="px-1 py-0.5 text-xs font-mono text-muted-foreground bg-muted border rounded">
                          ⌘{index + 1}
                        </kbd>
                      )}
                    </button>
                  ))}
                  <div className="border-t" />
                  <button
                    onClick={onCreateWorkspace}
                    className="w-full flex items-center gap-3 p-3 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-dashed border-muted-foreground/50">
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-medium text-sm">
                        Create workspace
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Start a new workspace
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Info toggle */}
            <button
              className={cn(
                "flex items-center justify-center h-7 w-7 rounded-md transition-all duration-200 hover:bg-accent/60",
                showInfoCard && "bg-accent/60",
              )}
              onClick={(e) => {
                e.stopPropagation();
                setShowInfoCard(!showInfoCard);
              }}
            >
              <Settings2
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  showInfoCard && "rotate-90",
                )}
              />
            </button>
          </div>
        </button>
      </div>

      {/* Info card */}
      {showInfoCard && (
        <div
          ref={infoCardRef}
          className="absolute left-0 right-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2"
        >
          <div className="rounded-xl border bg-background/95 backdrop-blur-sm shadow-xl">
            {/* Header */}
            <div className="p-4 border-b">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
                    style={{
                      backgroundColor: (current?.color ?? "#3B82F6") + "20",
                      color: current?.color ?? "#3B82F6",
                    }}
                  >
                    {current?.icon ?? current?.name?.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{current?.name}</h3>
                    {updatedAt && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Updated {updatedAt}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowInfoCard(false)}
                  className="p-1.5 rounded-md hover:bg-accent"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
              {current?.description && (
                <p className="text-xs text-muted-foreground">
                  {current.description}
                </p>
              )}

              {members.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-medium">Team Members</h4>
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary">
                      {members.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {displayedMembers.map((m) => (
                        <div
                          key={m.id}
                          className="h-7 w-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                        >
                          {m.name.charAt(0)}
                        </div>
                      ))}
                      {remainingCount > 0 && (
                        <div className="h-7 w-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                          +{remainingCount}
                        </div>
                      )}
                    </div>
                    <button className="ml-auto text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                      <Eye className="h-3 w-3" /> View all{" "}
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )}

              <div className="border-t pt-4">
                <h4 className="text-xs font-medium mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={onInvite}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <UserPlus className="h-3 w-3" /> Invite
                  </button>
                  <button
                    onClick={onViewRequests}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <Bell className="h-3 w-3" /> Requests
                    {pendingRequests.length > 0 && (
                      <span className="ml-auto text-xs px-1.5 py-0.5 rounded bg-destructive text-destructive-foreground">
                        {pendingRequests.length}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t flex justify-between">
              <button
                onClick={onSettings}
                className="p-2 rounded-md hover:bg-accent"
              >
                <Settings className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={onJoin}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <UserPlus className="h-3 w-3" /> Join
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
}
