import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL)
    console.info('Database is connected')

    app.listen(config.PORT, () => {
      console.log('App is running ' + `http://localhost:${config.PORT}`)
    })
  } catch (error) {
    console.error('Failed to connect database', error)
  }
}

main()
