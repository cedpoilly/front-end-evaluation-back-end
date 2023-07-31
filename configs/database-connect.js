import mongoose from "mongoose"

import { DB_USER_NAME, DB_USER_PASSWORD } from "./database.js"

mongoose.set("strictQuery", false)

const connectionString = `mongodb+srv://${DB_USER_NAME}:${DB_USER_PASSWORD}@cluster0.fktiqcz.mongodb.net/?retryWrites=true&w=majority`
export default function connectToDatabase() {
  // @ts-ignore-next-line
  mongoose.connect(connectionString, { useNewUrlParser: true })

  mongoose.connection
    .once("open", function connected() {
      console.log("Connected [Mongoose - MongoDB]")
    })
    .on("error", function error(error) {
      console.log("Failed to connect [Mongoose - MongoDB]", error)
    })
}
