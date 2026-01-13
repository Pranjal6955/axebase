import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
/**
 * Create a QueryClient preconfigured for the application's React Query usage.
 *
 * The client uses a 30,000 ms stale time for queries and dehydrates queries when
 * `defaultShouldDehydrateQuery(query)` returns `true` or when a query's state
 * status is `"pending"`. Serialization/deserialization hooks (e.g., superjson)
 * are present but currently commented out.
 *
 * @returns A `QueryClient` configured with `queries.staleTime = 30000` and a
 * dehydrate rule that also includes queries whose `state.status` is `"pending"`.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}