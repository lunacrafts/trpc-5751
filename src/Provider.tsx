import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./trpc";
import { t } from "./hyper-revpop/trpc";
import { router } from "./hyper-revpop/router";

const createCaller = t.createCallerFactory(router);
export const trpcRevpopClient = createCaller({});

export const Provider: React.FC<React.PropsWithChildren> = (props) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <trpc.Provider client={trpcRevpopClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </trpc.Provider>
  );
};
