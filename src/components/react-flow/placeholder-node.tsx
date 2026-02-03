"use client";

import { Handle, type NodeProps, Position } from "@xyflow/react";
// biome-ignore lint/style/useImportType: React is needed for React.KeyboardEvent type
import React, { type ReactNode } from "react";

import { BaseNode } from "@/components/react-flow/base-node";

export type PlaceholderNodeProps = Partial<NodeProps> & {
  children?: ReactNode;
  onClick?: () => void;
};

export function PlaceholderNode({ children, onClick }: PlaceholderNodeProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Activate on Enter or Space key
    if (onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    // biome-ignore lint/a11y/useSemanticElements: BaseNode is a React Flow node that must be a div, not a button
    <BaseNode
      className="w-auto h-auto border-dashed border-gray-400 bg-card p-4 text-center text-gray-400 shadow-none cursor-pointer hover:border-gray-500 hover:bg-gray-50"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Add new node"
    >
      {children}
      <Handle
        type="target"
        style={{ visibility: "hidden" }}
        position={Position.Top}
        isConnectable={false}
      />
      <Handle
        type="source"
        style={{ visibility: "hidden" }}
        position={Position.Bottom}
        isConnectable={false}
      />
    </BaseNode>
  );
}
