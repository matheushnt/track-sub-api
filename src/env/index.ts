import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('😬 Invalid environments variables.', _env.error.format((issue) => issue.message))
  throw new Error('Invalid environments variables.')
}

export const env = _env.data
