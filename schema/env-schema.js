import envSchema from "env-schema"
import { parseArgs } from 'node:util'
import { hello } from './hello.js'

const schema = {
  type: "object",
  properties: {
    HELLO: {
      type: "string"
    }
  },
  required: ["HELLO"]
}

const config = envSchema({
  schema,
  dotenv: true
})

const parsed = parseArgs({
  args: process.argv.slice(2),
  options: {
    name: {
      type: 'string',
      short: 'n'
    }
  }
})

hello(config, parsed.values.name)
