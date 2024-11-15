import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { trpcRevpopClient } from "../Provider";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3
        onClick={async () => {
          const res = await trpcRevpopClient.subscribe.dynamicGlobalProperties();
          console.log(res);
        }}
      >
        Welcome Home!
      </h3>
    </div>
  );
}
