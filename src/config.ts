import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
})

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

if (!configProject.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(configProject.error.format(), null, 4),
  )
  throw new Error('Invalid environment variables')
}

const envConfig = configProject.data
export default envConfig
