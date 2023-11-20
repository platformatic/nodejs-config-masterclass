import { parseArgs } from 'node:util'
import { hello } from './hello.js'

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
  hello: process.env.HELLO || 'Hello'
}

hello(config, parsed.values.name)
