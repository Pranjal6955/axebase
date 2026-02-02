import type { NodeExecutor } from "@/features/executions/types";
import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";

type GoogleFormTriggerData = Record<string, unknown>;

export const googleFormTriggerExecutor: NodeExecutor<
  GoogleFormTriggerData
> = async ({ nodeId, context, step, publish, workflowId, userId }) => {
  await publish(
    googleFormTriggerChannel(workflowId, userId).status({
      nodeId,
      status: "loading",
    }),
  );

  try {
    const result = await step.run("google-form-trigger", async () => context);
    await publish(
      googleFormTriggerChannel(workflowId, userId).status({
        nodeId,
        status: "success",
      }),
    );
    return result;
  } catch (error) {
    await publish(
      googleFormTriggerChannel(workflowId, userId).status({
        nodeId,
        status: "error",
      }),
    );
    throw error;
  }
};
