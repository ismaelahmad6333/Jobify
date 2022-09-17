import express from "express"
import notFoundMiddleware from "./middlexware/not-found.js"
import errorHandlerMiddleware from "./middlexware/error-handler.js"
import dotenv from "dotenv"
const app = express()
dotenv.config()

app.get("/", (req, res) => {
  res.send("Welcome")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is listening on ${port}...`)
})
