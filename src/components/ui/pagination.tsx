import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants, type Button } from "@/components/ui/button";

/**
 * Render a navigation element configured for pagination.
 *
 * Renders a <nav> with role="navigation", aria-label="pagination", data-slot="pagination",
 * and a composed `className` including default pagination layout plus any provided classes.
 *
 * @param className - Additional CSS classes to merge with the default pagination styles
 * @param props - All other attributes forwarded to the underlying `<nav>` element
 * @returns The rendered `<nav>` element configured for pagination
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

/**
 * Renders a UL container for pagination items with default layout classes and a `data-slot="pagination-content"`.
 *
 * Additional props are forwarded to the underlying `<ul>` element.
 *
 * @param className - Additional class names to merge with the component's default styles.
 * @returns The rendered `<ul>` element used as the pagination content container.
 */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

/**
 * Renders a list item that hosts a pagination item.
 *
 * @param props - Standard HTML `li` element props which are forwarded to the rendered element.
 * @returns The rendered list item element configured for use in the pagination component.
 */
function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

/**
 * Renders an anchor styled as a pagination link.
 *
 * @param isActive - Whether the link represents the current page; when true `aria-current="page"` is set and the active styling is applied.
 * @param size - Visual size variant forwarded to the underlying button styles (default: "icon").
 * @returns The anchor element configured for pagination, including data-slot attributes, active state attributes, and composed class names.
 */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a "Previous" pagination control.
 *
 * Displays a PaginationLink configured as the previous-page control, containing a left chevron icon and a "Previous" label (the label is hidden on small screens).
 *
 * @returns The pagination link element for navigating to the previous page.
 */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

/**
 * Renders a "Next" pagination control styled as a PaginationLink.
 *
 * Renders a PaginationLink with aria-label "Go to next page", size "default", a right chevron icon, and a "Next" label that is hidden on very small screens and shown at the `sm` breakpoint and above.
 *
 * @returns The pagination "next" control element.
 */
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

/**
 * Renders an ellipsis separator for pagination containing an icon and a hidden label.
 *
 * @returns A span element used as an ellipsis separator between pagination items.
 */
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};