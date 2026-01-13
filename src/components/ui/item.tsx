import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

/**
 * Renders a vertical container for grouping item elements.
 *
 * Applies role="list", a data-slot of "item-group", default layout classes, and forwards additional div props.
 *
 * @param className - Additional CSS class names appended to the default container classes
 * @returns The rendered item group container element
 */
function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props}
    />
  );
}

/**
 * Renders a horizontal separator customized for item lists.
 *
 * @param className - Additional CSS classes to apply to the separator
 * @param props - All other Separator props; forwarded to the underlying Separator component
 * @returns The rendered Separator element with item-specific attributes and styling
 */
function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Renders a list item element with configurable visual variant, size, and optional slot-based rendering.
 *
 * @param className - Additional CSS class names to apply.
 * @param variant - Visual variant of the item that controls background/border styling.
 * @param size - Size variant of the item that controls padding and spacing.
 * @param asChild - When true, renders the provided child component (Slot) instead of a `div`.
 * @returns The rendered item element (a `div` or the supplied child component) with `data-slot`, `data-variant`, `data-size` attributes and computed classes.
 */
function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Renders the media container for an Item with selectable visual variants.
 *
 * @param variant - Controls the visual style of the media: `"default"` for minimal spacing, `"icon"` for a bordered square sized for icons, and `"image"` for a rounded container sized for images.
 * @param props - Additional HTML `div` attributes and event handlers forwarded to the container.
 * @returns The rendered item media container element.
 */
function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

/**
 * Container for an item's primary content area, intended to hold title, description, or other stacked content.
 *
 * @param className - Additional CSS classes to apply to the container
 * @param props - Additional props spread onto the underlying `div` element
 * @returns The rendered `div` element used as the item's main content area
 */
function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the title area for an Item with standardized typography and spacing.
 *
 * Produces a div with `data-slot="item-title"`, applies layout and typography classes, and forwards all standard div props.
 *
 * @returns The rendered div element used as the item's title container.
 */
function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a paragraph used as the item's description with muted styling, two-line clamping, and link styles.
 *
 * @returns The `<p>` element containing the item's description with applied classes and forwarded props.
 */
function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a container for item action controls.
 *
 * @returns A div element that groups action controls with center-aligned items and horizontal spacing
 */
function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

/**
 * Renders an item header container that aligns content between the start and end.
 *
 * @returns A `div` element serving as the item's header container with horizontal spacing and alignment applied.
 */
function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders an item footer container that horizontally arranges children with space between.
 *
 * @returns A `div` element used as the footer for an item, with flex layout, center alignment, gap spacing, and full basis.
 */
function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};