import { z } from 'zod'

export const ConfigSchema = z.object({
  HELLO: z.string()
})

export type Config = z.infer<typeof ConfigSchema>
