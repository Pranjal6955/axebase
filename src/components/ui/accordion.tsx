"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Wraps the Radix Accordion root and ensures the rendered element includes a `data-slot="accordion"` attribute.
 *
 * @param props - Props forwarded to the underlying `AccordionPrimitive.Root`.
 * @returns The Accordion root element with the `data-slot="accordion"` attribute applied.
 */
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

/**
 * Wraps a Radix Accordion Item to apply consistent border styling and a data-slot attribute.
 *
 * @returns An `AccordionPrimitive.Item` element with `"border-b last:border-b-0"` merged into the provided `className` and `data-slot="accordion-item"`.
 */
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

/**
 * Renders an accordion item header and trigger with built-in styling and a chevron icon that rotates when the item is open.
 *
 * The component forwards all props to the underlying Radix Trigger, applies a data-slot attribute of `"accordion-trigger"`, and merges provided `className` with the component's base classes.
 *
 * @param className - Additional CSS classes to merge with the component's base styling
 * @param children - Content to display inside the trigger (typically a label)
 * @returns The rendered accordion header and trigger element
 */
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/**
 * Renders accordion content with state-based open/close animations and an inner padded wrapper.
 *
 * @param className - Additional CSS classes applied to the inner content wrapper
 * @param children - Content to display inside the accordion panel
 * @returns The rendered accordion content element
 */
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };