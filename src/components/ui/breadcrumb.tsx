import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Render a breadcrumb navigation container.
 *
 * @param props - Props forwarded to the underlying `<nav>` element.
 * @returns A `nav` element with `aria-label="breadcrumb"` and `data-slot="breadcrumb"` that includes the provided props.
 */
function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

/**
 * Renders an ordered list that groups breadcrumb items with default styling and a data-slot.
 *
 * @param className - Additional class names to merge with the component's default styles.
 * @param props - Additional props forwarded to the underlying `<ol>` element.
 * @returns The rendered `<ol>` element for breadcrumb items.
 */
function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a breadcrumb list item with standard inline layout and the `data-slot="breadcrumb-item"` attribute.
 *
 * @param className - Additional CSS class names to merge with the default layout classes.
 * @returns The rendered `<li>` element configured for use as a breadcrumb item.
 */
function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

/**
 * Renders a link element suitable for use in a breadcrumb, optionally delegating rendering to a provided child element.
 *
 * @param asChild - If `true`, use the caller's child element as the rendered element instead of an `<a>`.
 * @param className - Additional CSS classes to apply to the rendered element.
 * @returns A link element configured for breadcrumb placement with default hover styles and a `data-slot="breadcrumb-link"` attribute.
 */
function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

/**
 * Renders the current breadcrumb page as a non-interactive page indicator.
 *
 * The element is a <span> with accessibility attributes (role="link", aria-disabled="true", aria-current="page")
 * and a data-slot of "breadcrumb-page". Additional props and `className` are applied to the span.
 *
 * @returns A span element representing the active breadcrumb page
 */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

/**
 * Renders a breadcrumb separator as a list item.
 *
 * By default displays a ChevronRight icon when no `children` are provided.
 *
 * @param children - Optional content for the separator; defaults to a `ChevronRight` icon when omitted
 * @param className - Optional additional class names to apply to the list item
 * @returns A `<li>` element configured as a breadcrumb separator with appropriate accessibility attributes
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

/**
 * Renders a decorative ellipsis used to indicate collapsed breadcrumb items.
 *
 * The element is decorative and hidden from assistive technologies.
 *
 * @returns A span element containing an ellipsis icon and a visually hidden "More" label.
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};