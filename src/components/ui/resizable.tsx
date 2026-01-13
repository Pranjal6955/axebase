"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { cn } from "@/lib/utils";

/**
 * Render a PanelGroup preconfigured for the resizable panel layout.
 *
 * Renders a PanelGroup with a data-slot of "resizable-panel-group", default layout classes for full-size flexible panels (supports vertical direction), merges any supplied `className`, and forwards all other PanelGroup props.
 *
 * @param className - Additional class names to append to the default container classes
 * @param props - Remaining props are passed through to the underlying PanelGroup
 * @returns The configured PanelGroup element for use in a resizable panel layout
 */
function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) {
  return (
    <PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a Panel with a data-slot of "resizable-panel" and forwards all received props.
 *
 * @param props - Props forwarded to the underlying Panel component.
 * @returns The Panel element with `data-slot="resizable-panel"` and the forwarded props.
 */
function ResizablePanel({ ...props }: React.ComponentProps<typeof Panel>) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

/**
 * Renders a styled resize handle for a resizable panel group, optionally showing a visible grip icon.
 *
 * @param withHandle - When `true`, displays a centered grip icon inside the handle.
 * @returns A PanelResizeHandle element with layout-specific styling and an optional visible grip. 
 */
function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };