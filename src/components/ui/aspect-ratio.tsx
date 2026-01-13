"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

/**
 * Renders an aspect-ratio container element with a fixed `data-slot` and forwards all received props.
 *
 * @param props - Props for `AspectRatioPrimitive.Root` that are forwarded to the underlying element
 * @returns A JSX element representing the aspect-ratio root
 */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };