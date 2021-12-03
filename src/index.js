import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

connectDB()


app.listen(3000, (req, res) => {
    console.log(`Server listening at PORT ${port}`)
})