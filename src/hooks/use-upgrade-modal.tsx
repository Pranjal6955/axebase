import  {TRPCClientError} from "@trpc/client";
import { useState } from "react";
import { UpgradeModal } from "@/components/upgrade-modal";

export const useUpgradeModel = () => {
    const [open,setopen] = useState(false);

    const handelError = (error: unknown) => {
        if (error instanceof TRPCClientError) {
            if (error.data?.code === "FORBIDDEN"){
                setopen(true);
                return true;
            }
        }
        return false;
    }

    const model = <UpgradeModal open={open} onOpenChange={setopen} />

    return { handelError, model }
}