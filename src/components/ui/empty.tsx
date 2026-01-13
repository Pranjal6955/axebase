import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Container component for empty-state UI.
 *
 * Renders a div preconfigured with layout, border, spacing, and typographic classes for empty-state presentation.
 *
 * @param className - Additional CSS classes to merge with the component's default classes
 * @returns A div element serving as the empty-state container with default styling and any provided props applied
 */
function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the header section for an empty-state layout.
 *
 * @returns A `div` element used as the empty-state header container with `data-slot="empty-header"` and composed layout classes.
 */
function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className,
      )}
      {...props}
    />
  );
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Render the media/icon container for the Empty component.
 *
 * Applies variant-specific styles and forwards remaining div props to the rendered element.
 *
 * @param variant - Variant of the media area. Supported values: `"default"` (transparent baseline styling) and `"icon"` (centered, rounded background with sizing for nested SVGs). Defaults to `"default"`.
 * @returns The div element used as the empty state's media/icon area.
 */
function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

/**
 * Renders the title element for an empty state.
 *
 * @returns A div element for the empty-state title with default typography classes (`text-lg font-medium tracking-tight`) merged with the provided `className`.
 */
function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  );
}

/**
 * Renders the empty-state description area with muted typography and link styles.
 *
 * @returns A div element with `data-slot="empty-description"`, muted foreground text, relaxed line-height, and underline/hover behavior applied to descendant links; any additional classes passed via `className` are merged into the element's class list.
 */
function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the content area for an Empty component, centering and sizing its children with preset spacing and text styles.
 *
 * @returns A `div` element with `data-slot="empty-content"` and composed layout and typography classes.
 */
function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className,
      )}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};