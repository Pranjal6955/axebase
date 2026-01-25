import type { NodeExecutor } from "@/features/executions/types";
import { NonRetriableError } from "inngest";
import ky, { type Options as KyOptions} from "ky";

type HttpTriggerData = {
    endpoint?: string,
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body? :string,
}

export const httpRequestExecutor: NodeExecutor<HttpTriggerData> = async ({
    data,
    nodeId,
    context,
    step,
}) => {
    //TODO : Publish "loading" state for HTTP Request

    if (!data.endpoint) {
        //TODO : Publish "error" state for HTTP Request
        throw new NonRetriableError("HTTP Request node: No endpoint configured");
    }

    const result = await step.run("http-request", async () => {
        const endpoint = data.endpoint!;
        const method = data.method || "GET";

        const options : KyOptions = {method} ;

        if (["POST","PUT","PATCH"].includes(method)) {
                options.body = data.body;
        }

        const response = await ky(endpoint, options);
        const contentType = response.headers.get("content-type");
        const responseData = contentType?.includes("application/json") ? await response.json() : await response.text()

        return{
            ...context,
            httpResponse: {
                status : response.status,
                statusText : response.statusText,
                data : responseData,
            }
        }
    })

    //TODO : Publish "Success" state for HTTP Request

    return result;
}