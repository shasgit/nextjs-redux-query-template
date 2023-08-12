"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000, // Set global staleTime to 0
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
