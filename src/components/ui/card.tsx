import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Card container that applies the component's base layout and visual styles.
 *
 * Renders a div with data-slot="card", merges the provided `className` with the default
 * card classes, and forwards any other div props to the element.
 *
 * @param className - Additional CSS class names to append to the base card classes
 * @returns A div element styled as a card with merged classes, the `data-slot="card"` attribute, and any forwarded props
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the header region of a Card with grid layout and responsive placement for actions.
 *
 * The rendered element uses `data-slot="card-header"` and merges the provided `className` with
 * the component's base styling, including layout rules that adapt when a `data-slot="card-action"`
 * child is present.
 *
 * @param className - Additional CSS classes to merge with the header's base styles
 * @returns A `div` element representing the card header
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the card title container.
 *
 * Applies typographic styles and exposes a `data-slot="card-title"` for slot targeting.
 *
 * @returns A div element used as the card's title region.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

/**
 * Renders the card description slot used for supplemental text below the title.
 *
 * @returns The div element containing the card's descriptive content
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/**
 * Renders the card's action area used for placing interactive controls (e.g., buttons) aligned to the header.
 *
 * @returns A `div` element with `data-slot="card-action"` positioned in the card header grid; it applies layout classes for placement, merges any provided `className`, and spreads other `div` props onto the element.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the card's content region.
 *
 * The element includes horizontal padding and applies any additional CSS classes provided via `className`.
 *
 * @returns A `div` element used as the card content area with horizontal padding and merged classes.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

/**
 * Footer container for a Card, typically used for actions or auxiliary content.
 *
 * Renders a div with layout and padding utilities and sets `data-slot="card-footer"`.
 *
 * @returns The rendered card footer element.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};