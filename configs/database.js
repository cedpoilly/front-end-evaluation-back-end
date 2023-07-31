import dotenv from "dotenv"
dotenv.config()

const DB_USER_NAME = process.env.DB_USER_NAME
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD

export { DB_USER_NAME, DB_USER_PASSWORD }
