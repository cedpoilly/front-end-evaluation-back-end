import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import connectToDatabase from "./configs/database-connect.js"

import router from "./routes/index.js"

dotenv.config()

connectToDatabase()

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "16mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use("/api", router)

const port = process.env.PORT || 3000
app.listen(port, function callback() {
  console.log(`EXPRESS connected to port ${port}!`)
})
