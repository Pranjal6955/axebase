"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Render a responsive table wrapped in a horizontally scrollable container.
 *
 * @param className - Additional CSS classes to merge into the table's className
 * @param props - All other props are forwarded to the underlying `<table>` element
 * @returns A table element (with `data-slot="table"`) inside a container that enables horizontal scrolling
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

/**
 * Renders a table header (<thead>) element with slot metadata and default row border styling.
 *
 * @param className - Additional class names to merge with the component's default "[&_tr]:border-b" style.
 * @returns The rendered `<thead>` element with `data-slot="table-header"` and merged class names.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

/**
 * Renders a <tbody> element with data-slot="table-body" and a default style that removes the border from the last table row.
 *
 * @param className - Additional class names to merge into the element's classes.
 * @returns The rendered `<tbody>` element with merged class names and all other passed props applied.
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

/**
 * Renders a table footer (<tfoot>) with consistent styling and a `data-slot="table-footer"` attribute.
 *
 * @param className - Additional class names to apply to the footer container
 * @returns The rendered `<tfoot>` element
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a table row (<tr>) element with standardized styling and a `data-slot="table-row"` attribute.
 *
 * @param className - Additional CSS class names to merge with the component's default styling.
 * @param props - Other props are forwarded to the underlying `<tr>` element.
 * @returns The rendered `<tr>` element with merged classes and forwarded props.
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a table header cell (<th>) with standardized spacing, typography, checkbox-aware selectors, and a data-slot="table-head" attribute.
 *
 * @returns The rendered `<th>` element with merged `className` and all other props forwarded.
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a table cell (`td`) with standardized padding, vertical alignment, and checkbox-aware layout adjustments.
 *
 * @param className - Additional CSS classes to merge into the cell
 * @param props - Other `td` attributes and event handlers to spread onto the element
 * @returns A `td` element with slot metadata and composed styling
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a table caption element with consistent styling and a data-slot attribute.
 *
 * Merges the component's default caption classes with any classes provided via `className`
 * and spreads remaining props onto the underlying `caption` element.
 *
 * @param className - Additional CSS class names to apply to the caption
 * @returns A `caption` element with `data-slot="table-caption"` and merged class names
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};