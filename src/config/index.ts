import { config } from 'dotenv'
import path = require('path')

const envPath = path.join(process.cwd(), '.env')
config({ path: envPath })

export default {
  PORT: process.env.PORT as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
}
