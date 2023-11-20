import { parseArgs } from 'node:util'
import { hello } from './hello.js'
import { Config, ConfigSchema } from './config.js'
import Ajv from 'ajv'
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

const ajv = new Ajv.default()

const data = { ...process.env }

const validate = ajv.compile(ConfigSchema)

if (!validate(data)) {
  throw new Error(`Invalid config: ${ajv.errorsText(validate.errors)}`)
}

// Casting after validation
const config = data as Config

hello(config, parsed.values.name as string)
