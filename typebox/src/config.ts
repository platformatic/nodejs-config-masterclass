import { Type, Static } from '@sinclair/typebox'

export const ConfigSchema = Type.Object({
  HELLO: Type.String()
})

export type Config = Static<typeof ConfigSchema>
