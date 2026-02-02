import { channel, topic } from "@inngest/realtime";

export const MANUAL_TRIGGER_CHANNEL_NAME = "manual-trigger-execution";

export const manualTriggerChannel = channel(
  (workflowId: string, userId: string) =>
    `${MANUAL_TRIGGER_CHANNEL_NAME}:workflow:${workflowId}:user:${userId}`,
).addTopic(
  topic("status").type<{
    nodeId: string;
    status: "loading" | "success" | "error";
  }>(),
);
