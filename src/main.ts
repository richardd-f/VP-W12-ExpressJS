import express from 'express'
import { publicRouter } from './routes/public'

const app = express()

app.use(express.json())

app.use('/api', publicRouter)
