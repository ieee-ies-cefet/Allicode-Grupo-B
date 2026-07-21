import "dotenv/config"
import cors from 'cors'
import express from 'express'

import contactRoutes from './routes/contact.routes.js'

const app = express()
const PORT = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/contact', contactRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Server is listening on http://localhost:${PORT}`)
})