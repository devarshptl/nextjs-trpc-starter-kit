import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "@/server/routers/_app";

const baseUrl = `http://localhost:${process.env.PORT ?? 3000}`;

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${baseUrl}/api/trpc`,
        }),
      ],
    };
  },
  ssr: true,
});
