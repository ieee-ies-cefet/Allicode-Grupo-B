import "dotenv/config"
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`🚀 Server is listening on http://localhost:${PORT}`);
})