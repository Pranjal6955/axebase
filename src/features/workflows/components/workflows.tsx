"use client";

import { boolean } from "zod";
import { useCreateWorflow, useSuspenseWorkflows } from "../hooks/use-workflows";
import { EntityHeader, EntityContainer } from "@/components/entity-components";
import { Children } from "react";
import { err } from "inngest/types";
import { useUpgradeModel } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";

export const WorkflowLists = () => {
  const workflows = useSuspenseWorkflows();

  return <p>{JSON.stringify(workflows.data, null, 2)}</p>;
};

export const WorkflowsHeader = ({ disabled }: { disabled?: boolean }) => {
    const createWorkflow = useCreateWorflow();
    const {handelError, model} = useUpgradeModel()
    const router = useRouter()

    const handleCreate = () => {
        createWorkflow.mutate(undefined, {
          onSuccess: (data) => {
            router.push(`/workflows/${data.id}`)
          },
            onError: (error) => {
                handelError(error)
            }
        })
    }

  return (
    <>
      {model}
      <EntityHeader
        title="Workflows"
        description="Create and manage your workflows"
        onNew={handleCreate}
        newButtonLabel="New Workflow"
        disabled={disabled}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};

export const WorkflowContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkflowsHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
