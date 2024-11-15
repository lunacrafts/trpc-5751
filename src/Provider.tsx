import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./trpc";
import { t } from "./hyper-revpop/trpc";
import { router } from "./hyper-revpop/router";

export const Provider: React.FC<React.PropsWithChildren> = (props) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() => {
    const createCaller = t.createCallerFactory(router);
    return createCaller({});
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </trpc.Provider>
  );
};
