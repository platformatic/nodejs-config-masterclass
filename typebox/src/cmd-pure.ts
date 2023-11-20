import { parseArgs } from 'node:util'
import { hello } from './hello.js'
import { Config, ConfigSchema } from './config.js'
import { TypeCompiler } from '@sinclair/typebox/compiler'
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

const data = { ...process.env }

const C = TypeCompiler.Compile(ConfigSchema)

if (!C.Check(data)) {
  throw new Error(`Invalid config: ${C.Errors(data)}`)
}

// Casting after validation
const config = data as Config

hello(config, parsed.values.name as string)
