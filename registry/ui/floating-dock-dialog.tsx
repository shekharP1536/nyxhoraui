"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { GalleryVerticalEnd, Heart, Minus, Plus } from "lucide-react";
import React from "react";

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

const isLightColor = (color: string): boolean => {
  if (!color) return true;
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 125;
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type WorkspaceItem = {
  _id: string;
  name: string;
  description?: string;
  Appearance?: { color: string; icon: string };
  isfav?: boolean;
};

// ---------------------------------------------------------------------------
// Dialog primitives
// ---------------------------------------------------------------------------

const Dialog = DialogPrimitive.Root;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

const BottomDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 w-full border-t bg-background/95 backdrop-blur-sm shadow-lg rounded-t-2xl",
        className,
      )}
      {...props}
    >
      <div className="relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <DialogPrimitive.Close className="flex h-8 w-16 items-center justify-center rounded-full border bg-background/80 shadow-sm hover:bg-muted">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </DialogPrimitive.Close>
        </div>
        <div className="p-6 pt-10">{children}</div>
      </div>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
BottomDialogContent.displayName = "BottomDialogContent";

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export const FloatingDockWithDialog = ({
  items,
  activeId,
  isOpen,
  onClose,
  onAddWorkspace,
}: {
  items: WorkspaceItem[];
  activeId?: string;
  isOpen: boolean;
  onClose: () => void;
  onAddWorkspace?: () => void;
}) => {
  if (!items) return null;
  const sortedItems = [...items].sort((a, b) =>
    a.isfav && !b.isfav ? -1 : !a.isfav && b.isfav ? 1 : 0,
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <BottomDialogContent>
        <h2 className="text-xl font-semibold text-center mb-4">Workspaces</h2>
        <FloatingDockDesktop
          items={sortedItems}
          activeId={activeId}
          onAddWorkspace={onAddWorkspace}
        />
        <FloatingDockMobile
          items={sortedItems}
          activeId={activeId}
          onAddWorkspace={onAddWorkspace}
        />
      </BottomDialogContent>
    </Dialog>
  );
};

// ---------------------------------------------------------------------------
// Desktop dock (hidden on mobile)
// ---------------------------------------------------------------------------

const FloatingDockDesktop = ({
  items,
  activeId,
  onAddWorkspace,
}: {
  items: WorkspaceItem[];
  activeId?: string;
  onAddWorkspace?: () => void;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden md:flex mx-auto h-20 items-end gap-5 rounded-2xl px-6 pb-3"
    >
      {items.map((item) => (
        <IconContainer
          key={item._id}
          mouseX={mouseX}
          item={item}
          isActive={activeId === item._id}
        />
      ))}
      <motion.div whileHover={{ scale: 1.05 }}>
        <button
          onClick={onAddWorkspace}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
        >
          <Plus className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

// ---------------------------------------------------------------------------
// Mobile dock (hidden on desktop)
// ---------------------------------------------------------------------------

const FloatingDockMobile = ({
  items,
  activeId,
  onAddWorkspace,
}: {
  items: WorkspaceItem[];
  activeId?: string;
  onAddWorkspace?: () => void;
}) => {
  return (
    <div className="md:hidden grid grid-cols-4 gap-3">
      {items.map((item, idx) => (
        <motion.div
          key={item._id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full shadow-md",
                  item.Appearance?.color
                    ? isLightColor(item.Appearance.color)
                      ? "text-gray-800"
                      : "text-white"
                    : "bg-card",
                  activeId === item._id && "ring-2 ring-primary",
                )}
                style={{ backgroundColor: item.Appearance?.color }}
              >
                {item.Appearance?.icon ? (
                  <span className="text-base">{item.Appearance.icon}</span>
                ) : (
                  <GalleryVerticalEnd className="h-5 w-5" />
                )}
              </div>
              {item.isfav && (
                <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5">
                  <Heart className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
              )}
            </div>
            <span className="text-xs font-medium text-center line-clamp-1">
              {item.name}
            </span>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: items.length * 0.05 }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={onAddWorkspace}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
          >
            <Plus className="h-5 w-5" />
          </button>
          <span className="text-xs font-medium">New</span>
        </div>
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Icon container with spring physics (desktop only)
// ---------------------------------------------------------------------------

function IconContainer({
  mouseX,
  item,
  isActive,
}: {
  mouseX: MotionValue;
  item: WorkspaceItem;
  isActive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(
    useTransform(distance, [-200, 0, 200], [50, 90, 50]),
    { mass: 0.2, stiffness: 180, damping: 15 },
  );
  const height = useSpring(
    useTransform(distance, [-200, 0, 200], [50, 90, 50]),
    { mass: 0.2, stiffness: 180, damping: 15 },
  );
  const iconSize = useSpring(
    useTransform(distance, [-200, 0, 200], [28, 48, 28]),
    { mass: 0.2, stiffness: 180, damping: 15 },
  );

  return (
    <motion.div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute -top-24 w-48 rounded-lg border bg-popover px-4 py-3 text-sm shadow-md z-50"
          >
            <div className="font-semibold text-center">{item.name}</div>
            <div className="text-xs text-muted-foreground text-center">
              {item.description || "No description"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative">
        <motion.div
          ref={ref}
          style={{
            width,
            height,
            backgroundColor: item.Appearance?.color || "hsl(var(--card))",
          }}
          className={cn(
            "flex items-center justify-center rounded-full shadow-md cursor-pointer",
            isActive && "ring-2 ring-primary",
          )}
        >
          <motion.div
            style={{ width: iconSize, height: iconSize }}
            className={cn(
              "flex items-center justify-center",
              item.Appearance?.color
                ? isLightColor(item.Appearance.color)
                  ? "text-gray-800"
                  : "text-white"
                : "text-foreground",
            )}
          >
            {item.Appearance?.icon ? (
              <span className="text-2xl">{item.Appearance.icon}</span>
            ) : (
              <span className="text-2xl">{item.name.charAt(0)}</span>
            )}
          </motion.div>
        </motion.div>
        {item.isfav && (
          <motion.div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5">
            <Heart className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
