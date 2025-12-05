import express from 'express'
import { publicRouter } from './routes/public'
import { errorMiddleware } from './middleware/error-middleware'

const app = express()

app.use(express.json())
app.use('/api', publicRouter)

app.use(errorMiddleware)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});