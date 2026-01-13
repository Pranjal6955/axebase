"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

/**
 * Render the root Tabs container with default vertical layout and gap.
 *
 * @param className - Additional CSS class names appended to the default container classes
 * @param props - Remaining props are forwarded to the underlying `TabsPrimitive.Root`
 * @returns The `TabsPrimitive.Root` element with default layout classes and forwarded props
 */
function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

/**
 * Wraps Radix TabsPrimitive.List with the library's default styling for a horizontal tabs list.
 *
 * @param className - Additional class names appended to the component's default styling
 * @returns The rendered tabs list element
 */
function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a styled tab trigger for Radix Tabs with predefined classes and forwarded props.
 *
 * The rendered element includes a `data-slot="tabs-trigger"` attribute, merges the provided
 * `className` with the component's default utility classes, and forwards all other props to
 * `TabsPrimitive.Trigger`.
 *
 * @returns A React element representing the tab trigger with merged `className` and forwarded props.
 */
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Tab panel wrapper that applies default layout styles and exposes Radix TabsPrimitive.Content props.
 *
 * @returns A React element for a tab panel with the default `flex-1 outline-none` styling and any provided `className` and props applied.
 */
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };