"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Wraps Radix AlertDialogPrimitive.Root and tags it with `data-slot="alert-dialog"`.
 *
 * @param props - Props forwarded to the underlying AlertDialogPrimitive.Root
 * @returns The AlertDialogPrimitive.Root element with `data-slot="alert-dialog"` and all forwarded props
 */
function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

/**
 * Renders an AlertDialog trigger element with a `data-slot="alert-dialog-trigger"` attribute.
 *
 * @returns The rendered AlertDialog trigger element.
 */
function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

/**
 * Renders a Radix AlertDialog Portal and forwards all props while adding a `data-slot="alert-dialog-portal"` attribute.
 *
 * @returns The AlertDialog portal element with the `data-slot="alert-dialog-portal"` attribute applied.
 */
function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

/**
 * Renders the alert dialog overlay with the component's default backdrop styling and state animations.
 *
 * @param className - Additional CSS class names to merge with the overlay's default classes
 * @param props - Other props forwarded to the underlying Radix AlertDialog Overlay element
 * @returns The AlertDialog overlay element with merged classes and a `data-slot="alert-dialog-overlay"` attribute
 */
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the alert dialog's content inside a portal with an overlay and default styling.
 *
 * @param className - Additional CSS class names to merge with the component's default styles
 * @param props - Other props are forwarded to the underlying AlertDialogPrimitive.Content element
 * @returns The rendered alert dialog content element
 */
function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

/**
 * Renders the alert dialog header container with a data-slot attribute and default layout styling.
 *
 * @param className - Additional CSS classes to merge with the default header classes
 * @returns The header container element for the alert dialog
 */
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

/**
 * Renders the footer container for an alert dialog with responsive layout and spacing.
 *
 * @param className - Additional CSS class names to merge with the component's base layout classes
 * @returns A <div> element used as the alert dialog footer with column-reverse on small screens, row layout and right alignment on larger screens, and gap spacing
 */
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the alert dialog title element with default typography and the `data-slot="alert-dialog-title"` attribute.
 *
 * @returns The alert dialog title element with the base classes merged with any provided `className`
 */
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

/**
 * Renders the AlertDialog description element with preset styling and a `data-slot` attribute.
 *
 * @param className - Additional CSS class names to merge with the default description styles
 * @returns The AlertDialog description element
 */
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/**
 * Action button used inside the AlertDialog that applies the dialog's primary button styling.
 *
 * Applies the default buttonVariants styling and merges any provided `className`.
 *
 * @param className - Additional CSS class names to merge with the component's default styles
 * @returns The rendered AlertDialog Action element
 */
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

/**
 * Renders an AlertDialog cancel button styled with the outline button variant.
 *
 * @returns A React element representing the AlertDialog cancel button with merged `className` props.
 */
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};