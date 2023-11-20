import type { Config } from './config.js'

export const hello = (config: Config, name: string) => {
  console.log(`${config.HELLO} ${name}`)
}
