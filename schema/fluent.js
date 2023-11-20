import envSchema from "env-schema"
import { parseArgs } from 'node:util'
import F from 'fluent-json-schema'
import { hello } from './hello.js'

const schema = F.object()
  .prop('HELLO', F.string().required())

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
