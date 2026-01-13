"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

/**
 * Renders a DrawerPrimitive.Root element with a standardized `data-slot="drawer"` attribute and forwards all received props.
 *
 * @returns The rendered DrawerPrimitive.Root element with the `data-slot="drawer"` attribute and any provided props
 */
function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

/**
 * Renders a drawer trigger element that applies `data-slot="drawer-trigger"` and passes through received props.
 *
 * @returns A trigger element for toggling the drawer with the provided props applied.
 */
function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

/**
 * Renders the Drawer portal element with data-slot "drawer-portal" and forwards all props.
 *
 * @param props - Props to forward to the underlying portal element
 * @returns A React element for the Drawer portal
 */
function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

/**
 * Render a DrawerPrimitive.Close element with a standardized data-slot for the drawer close control.
 *
 * @param props - Props forwarded to the underlying DrawerPrimitive.Close component
 * @returns A React element representing the drawer close control
 */
function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

/**
 * Render the drawer overlay element with a standard `data-slot` and base overlay styles.
 *
 * Additional props are forwarded to the underlying primitive overlay element.
 *
 * @param className - Additional CSS classes to merge with the overlay's default classes
 * @returns A React element representing the drawer overlay
 */
function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the drawer content inside a portal with an overlay and responsive, direction-aware styling.
 *
 * This component composes a portal, an overlay, and the underlying DrawerPrimitive.Content, merges the provided
 * `className` with standardized layout and direction-specific classes, forwards remaining props to the content,
 * and renders children inside the content area (including a small handle element for bottom-direction drawers).
 *
 * @returns The React element for the composed drawer content
 */
function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

/**
 * Renders the drawer's header section with responsive spacing and alignment.
 *
 * The returned div has `data-slot="drawer-header"`, applies default header classes
 * that adapt based on drawer direction and viewport size, merges any provided
 * `className`, and forwards all other `div` props.
 *
 * @returns A `div` element serving as the drawer header with merged styling and forwarded props.
 */
function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Render the drawer's footer container used to hold footer actions and content.
 *
 * The element includes a `data-slot="drawer-footer"` attribute and applies standard
 * spacing and layout classes; any `className` provided will be merged with the defaults.
 *
 * @returns The footer container element for a Drawer component
 */
function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

/**
 * Renders the drawer title element with standardized data-slot and merged styling.
 *
 * @returns The rendered `DrawerPrimitive.Title` element with `data-slot="drawer-title"` and combined class names.
 */
function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

/**
 * Renders a drawer description element with a standardized data-slot and text styling.
 *
 * @returns The DrawerPrimitive.Description element with `data-slot="drawer-description"` and combined `text-muted-foreground text-sm` plus any provided `className`
 */
function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};