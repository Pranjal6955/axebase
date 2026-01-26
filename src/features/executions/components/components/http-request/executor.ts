import type { NodeExecutor } from "@/features/executions/types";
import { NonRetriableError } from "inngest";
import ky, { type Options as KyOptions } from "ky";
import Handlebars from "handlebars"

Handlebars.registerHelper("json",(context) => {
  const jsonString = JSON.stringify(context, null, 2);
  const safeString = new Handlebars.SafeString(jsonString);

  return safeString;
})

type HttpTriggerData = {
  variableName: string;
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: string;
};

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
  if (!data.method) {
    //TODO : Publish "error" state for HTTP Request
    throw new NonRetriableError("HTTP Request node: Method not configured");
  }
  if (!data.variableName) {
    //TODO : Publish "error" state for HTTP Request
    throw new NonRetriableError("HTTP Request node: Variable name not configured");
  }

  const result = await step.run("http-request", async () => {
    const endpoint = Handlebars.compile(data.endpoint)(context);
    const method = data.method || "GET";

    const options: KyOptions = {
      method,
      throwHttpErrors: false,
      timeout: 10_000,
    };

    if (["POST", "PUT", "PATCH"].includes(method)) {
      const resolved = Handlebars.compile(data.body || "{}")(context);
      JSON.parse(resolved)
      options.body = resolved;
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    const response = await ky(endpoint, options);
    const contentType = response.headers.get("content-type");
    const responseData = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();
    const responsePayload = {
      httpResponse: {
        status: response.status,
        statusText: response.statusText,
        data: responseData,
      },
    };

      return {
        ...context,
        [data.variableName]: responsePayload,
      };
    
  });

  //TODO : Publish "Success" state for HTTP Request

  return result;
};
