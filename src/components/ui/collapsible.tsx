"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * Renders a Collapsible root element and forwards all received props to the underlying Radix Collapsible root.
 *
 * This component attaches a `data-slot="collapsible"` attribute for identification and passes through any other props unchanged.
 *
 * @param props - Props accepted by the Radix Collapsible Root component; they are forwarded to the underlying element.
 * @returns The rendered Collapsible root element
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

/**
 * Renders a Radix Collapsible trigger and attaches a `data-slot="collapsible-trigger"` attribute.
 *
 * @param props - Props forwarded to the underlying Radix `CollapsibleTrigger` component.
 * @returns The rendered Collapsible trigger element.
 */
function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

/**
 * Wraps Radix UI's CollapsibleContent and forwards all props while adding a `data-slot` attribute for identification.
 *
 * @param props - Props forwarded to the underlying `CollapsiblePrimitive.CollapsibleContent` component
 * @returns The rendered `CollapsiblePrimitive.CollapsibleContent` element with `data-slot="collapsible-content"`
 */
function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };