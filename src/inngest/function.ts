import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Demo Step 1
    await step.sleep("Demo Run 1", "5s");
    // Demo Step 2
    await step.sleep("Demo Run 2", "5s");
    // Demo Step 3
    await step.sleep("Demo Run 3", "5s");

    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "worflow-from-inngest",
        },
      });
    });
    return { message: `Hello ${event.data.email}!` };
  },
);
