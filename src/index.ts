import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import dogRoutes from './routes/dog.routes'
import './database'
dotenv.config()

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.send('Hello world')
})
app.use('/dogs', dogRoutes)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
