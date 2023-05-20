import Send from "./utils/nodemailer"
import { user } from "./utils/mongodb"
import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/cadastro-email", async (req, res) => {
  const userData = {
    email: req.body["userEmail"],
    name: req.body["userName"],
  }

  // Salvando no MongoDB
  const responseMongo = await user.create(userData)
  console.log("-------------------------------")
  console.log(responseMongo)

  // Enviando e-mail
  const send = new Send()
  const responseMailer = await send.send(userData)
  console.log("-------------------------------")
  console.log(responseMailer)

  res.send("Usuario cadastrado com sucesso")
})

app.listen(3333, () => {
  console.log("Server running...")
})
