"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Renders the Radix Sheet root element with a data-slot of "sheet" and forwards all props.
 *
 * @param props - Props accepted by `SheetPrimitive.Root` which are passed through to the underlying element
 * @returns A React element representing the sheet root
 */
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

/**
 * Renders a sheet trigger element and forwards all received props.
 *
 * The rendered element includes `data-slot="sheet-trigger"` so it can be targeted by styling or tests.
 *
 * @returns The rendered sheet trigger element.
 */
function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

/**
 * Renders the Sheet's close control and forwards all props to the rendered close element.
 *
 * @param props - Props that are spread onto the underlying close element.
 * @returns The rendered close element for the sheet.
 */
function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

/**
 * Renders a Radix Sheet Portal with the `data-slot="sheet-portal"` attribute.
 *
 * @returns The Portal element with forwarded props and `data-slot="sheet-portal"`.
 */
function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

/**
 * Renders the sheet backdrop overlay.
 *
 * @param className - Additional CSS classes to merge with the overlay's default styles
 * @returns The overlay element used as the sheet's backdrop
 */
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders sheet content inside a portal with an overlay, directional slide animations, and an included close control.
 *
 * @param side - Position from which the sheet appears; one of `"top"`, `"right"`, `"bottom"`, or `"left"`. Determines sizing, inset, and animation direction.
 * @returns The sheet content element rendered into a portal with overlay and built-in close button, positioned and animated according to `side`.
 */
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

/**
 * Renders the header region for a Sheet with preset layout and spacing.
 *
 * The element includes data-slot="sheet-header" so it can be targeted by consumers
 * or styling systems, and merges any provided `className` with the component's
 * default layout classes.
 *
 * @param className - Additional CSS classes to merge with the component's defaults
 * @param props - Other attributes passed through to the underlying `div`
 * @returns A `div` element serving as the sheet header
 */
function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

/**
 * Renders the sheet's footer region with default spacing and layout.
 *
 * Renders a `div` with `data-slot="sheet-footer"`, applies default footer layout classes, merges any provided `className`, and forwards remaining `div` props.
 *
 * @returns The `div` element used as the sheet footer.
 */
function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

/**
 * Renders the sheet title with default typography and a `data-slot="sheet-title"` attribute.
 *
 * Merges any provided `className` with the component's base typography classes.
 *
 * @returns The rendered sheet title element.
 */
function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

/**
 * Renders the sheet's description element with default muted text styling.
 *
 * @param className - Additional CSS class names to append to the default "text-muted-foreground text-sm" styles
 * @param props - Additional props forwarded to the underlying Description component
 * @returns The rendered sheet description element
 */
function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};