import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Renders a spinning loader SVG icon.
 *
 * @param className - Optional additional CSS classes appended to the default `"size-4 animate-spin"` classes
 * @param props - Additional SVG attributes forwarded to the underlying icon
 * @returns An SVG element representing a spinning loader with `role="status"` and `aria-label="Loading"`
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };