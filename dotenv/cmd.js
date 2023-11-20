import { parseArgs } from 'node:util'
import { hello } from './hello.js'
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

const config = {
  hello: process.env.HELLO
}

hello(config, parsed.values.name)
