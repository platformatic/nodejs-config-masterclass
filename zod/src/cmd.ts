import { parseArgs } from 'node:util'
import { hello } from './hello.js'
import { ConfigSchema } from './config.js'
import 'dotenv/config'

const parsed = parseArgs({
  args: process.argv.slice(2),
  options: {
    name: {
      type: 'string',
      short: 'n'
    }
  }
})

// Casting after validation
const config = ConfigSchema.parse(process.env)

hello(config, parsed.values.name as string)
