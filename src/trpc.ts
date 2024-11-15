import { createTRPCReact } from "@trpc/react-query";
import { HyperRevPopRouter } from "./hyper-revpop/router";

export const trpc = createTRPCReact<HyperRevPopRouter>();
