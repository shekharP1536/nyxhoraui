"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

type ColorType = "default" | "red" | "blue" | "green" | "purple" | "orange";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  onSuccessColor?: ColorType;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, onSuccessColor = "default", ...props }, ref) => {
  // Using data-[state=checked] tailwind variants directly maps the styling to Radix's
  // internal component state, without the need for manual React states.
  const colorVariants: Record<ColorType, string> = {
    default: "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
    red: "data-[state=checked]:bg-red-500 data-[state=checked]:text-white data-[state=checked]:border-red-500 dark:data-[state=checked]:bg-red-600 dark:data-[state=checked]:border-red-600",
    blue: "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-600 dark:data-[state=checked]:border-blue-600",
    green: "data-[state=checked]:bg-green-500 data-[state=checked]:text-white data-[state=checked]:border-green-500 dark:data-[state=checked]:bg-green-600 dark:data-[state=checked]:border-green-600",
    purple: "data-[state=checked]:bg-purple-500 data-[state=checked]:text-white data-[state=checked]:border-purple-500 dark:data-[state=checked]:bg-purple-600 dark:data-[state=checked]:border-purple-600",
    orange: "data-[state=checked]:bg-orange-500 data-[state=checked]:text-white data-[state=checked]:border-orange-500 dark:data-[state=checked]:bg-orange-600 dark:data-[state=checked]:border-orange-600",
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none",
        "dark:bg-input/30",
        "focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:cursor-not-allowed disabled:opacity-50",
        colorVariants[onSuccessColor],
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <Check className="h-3.5 w-3.5 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
