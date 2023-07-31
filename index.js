import dotenv from "dotenv"

import express from "express"

import cors from "cors"
import bodyParser from "body-parser"

import swaggerUiExpress from "swagger-ui-express"
import swaggerFile from "./swagger_output.json" assert { type: "json" }

import connectToDatabase from "./configs/database-connect.js"

import router from "./routes/index.js"

dotenv.config()

connectToDatabase()

const app = express()

app.use(cors())

app.use(bodyParser.json({ limit: "16mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use("/api", router)

// * ref: https://dev.to/luizcalaca/autogenerated-documentation-api-with-openapi-and-swagger-for-nodejs-and-express-31g9
app.use("/doc", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile))

const port = process.env.PORT || 3000
app.listen(port, function callback() {
  console.log(`EXPRESS connected to port ${port}!`)
})
