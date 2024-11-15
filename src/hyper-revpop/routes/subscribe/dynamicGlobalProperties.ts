import { t } from "../../trpc";
import { z } from "zod";

const output = z.object({
  success: z.boolean(),
});

export const dynamicGlobalProperties = t.router({
  dynamicGlobalProperties: t.procedure.output(output).query(async ({ ctx }) => {
    return {
      success: true,
    };
  }),
});
