import { cn } from "@/lib/utils";

/**
 * Render a lightweight pulsing skeleton placeholder element.
 *
 * @param className - Optional additional CSS class names applied to the wrapper
 * @param props - Additional HTML div attributes forwarded to the rendered element
 * @returns The rendered skeleton div element
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };