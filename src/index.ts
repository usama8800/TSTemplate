import { loadEnv } from "@usama8800/dotenvplus";
import { z } from "zod";

const env = loadEnv({
  schema: z.object({

  }),
});
console.log(env);
