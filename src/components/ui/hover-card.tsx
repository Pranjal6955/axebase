"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

/**
 * Renders a wrapper around Radix HoverCard.Root that forwards all props and adds a data-slot attribute for instrumentation.
 *
 * @param props - Props forwarded to Radix HoverCard.Root.
 * @returns The rendered HoverCard root element.
 */
function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

/**
 * Wraps Radix's HoverCard Trigger and attaches an instrumentation attribute.
 *
 * @param props - Props forwarded to Radix HoverCard.Trigger
 * @returns The rendered HoverCard.Trigger element with `data-slot="hover-card-trigger"`
 */
function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

/**
 * Renders Radix HoverCard content inside a Portal with instrumentation, styling, and sensible defaults.
 *
 * The component forwards all received props to `HoverCardPrimitive.Content`, sets `data-slot="hover-card-content"`,
 * and is wrapped in a Portal with `data-slot="hover-card-portal"`. It composes a default `className` that
 * includes positioning, animations, and visual styling while merging any incoming `className`.
 *
 * @param align - Alignment of the content relative to the trigger; defaults to `"center"`.
 * @param sideOffset - Offset in pixels from the side; defaults to `4`.
 * @returns The rendered HoverCard content React element.
 */
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };