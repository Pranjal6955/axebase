"use server";

import { getSubscriptionToken } from "@inngest/realtime";
import { inngest } from "@/inngest/client";
import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";
import { requireAuth } from "@/lib/auth-utils";
import prisma from "@/lib/db";

export async function fetchGoogleFormTriggerRealtimeToken(workflowId: string) {
  // Authenticate the caller
  const { user } = await requireAuth();

  // Verify user has access to this workflow
  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId: user.id,
    },
  });

  if (!workflow) {
    throw new Error("Unauthorized: Workflow not found or access denied");
  }

  // Generate token with scoped channel
  const token = await getSubscriptionToken(inngest, {
    channel: googleFormTriggerChannel(workflowId, user.id),
    topics: ["status"],
  });

  return token;
}
