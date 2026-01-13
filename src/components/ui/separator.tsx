"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

/**
 * Renders a styled separator element that adapts to horizontal or vertical orientation.
 *
 * The component applies default layout and border styles and forwards any additional props to the underlying separator element.
 *
 * @param className - Additional CSS classes to apply to the separator
 * @param orientation - Layout direction of the separator; either `"horizontal"` or `"vertical"`
 * @param decorative - If `true`, marks the separator as presentational for accessibility
 * @returns A React element representing the separator
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };