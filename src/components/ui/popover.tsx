"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

/**
 * Thin wrapper around Radix's Popover Root that forwards all props and marks the element with `data-slot="popover"`.
 *
 * @param props - Props forwarded to `PopoverPrimitive.Root`
 * @returns A `PopoverPrimitive.Root` element with `data-slot="popover"` and the provided props applied
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

/**
 * Render a Popover trigger element that forwards all received props and sets a data-slot attribute.
 *
 * @returns A PopoverPrimitive.Trigger React element with forwarded props and `data-slot="popover-trigger"`.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/**
 * Renders popover content inside a portal with default styling, alignment, and a data-slot attribute.
 *
 * Renders Radix Popover Content within a Portal, composes the provided `className` with the component's
 * default styles, sets `data-slot="popover-content"`, forwards `align` and `sideOffset`, and passes through remaining props.
 *
 * @param className - Additional CSS classes to append to the component's default styles.
 * @param align - Alignment of the popover relative to the trigger (e.g., `"start"`, `"center"`, `"end"`). Default: `"center"`.
 * @param sideOffset - Distance in pixels between the popover content and the trigger. Default: `4`.
 * @returns A React element representing the popover content.
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/**
 * Renders a popover anchor element with a `data-slot="popover-anchor"` attribute and forwards all received props.
 *
 * @returns A `PopoverPrimitive.Anchor` element with the `data-slot="popover-anchor"` attribute and all incoming props applied.
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };