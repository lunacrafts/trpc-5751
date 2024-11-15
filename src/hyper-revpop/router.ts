import { t } from "./trpc";
import { subscribe } from "./routes/subscribe";

export const router = t.mergeRouters(subscribe);

export type HyperRevPopRouter = typeof router;
