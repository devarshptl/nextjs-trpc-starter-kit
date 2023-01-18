import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { AppRouter } from '@/server/routers/_app';
import * as process from 'process';

const rootURL = `${process.env.BASE_URL}:${process.env.PORT}/api/trpc`;

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: rootURL,
        }),
      ],
    };
  },
  ssr: true,
});
