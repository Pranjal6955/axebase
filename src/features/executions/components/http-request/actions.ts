"use server";

import { getSubscriptionToken } from "@inngest/realtime";
import { httpRequestChannel } from "@/inngest/channels/http-request";
import { inngest } from "@/inngest/client";
import { requireAuth } from "@/lib/auth-utils";
import prisma from "@/lib/db";

export async function fetchHttpRequestRealtimeToken(workflowId: string) {
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
    channel: httpRequestChannel(workflowId, user.id),
    topics: ["status"],
  });

  return token;
}
