import { connect, model, Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

connect(
  "mongodb://localhost:27017/jornada-cloud-native",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    err ? console.log(err) : console.log("MongoDB conectado com sucesso")
  }
)

const dataSchema = new Schema(
  {
    email: String,
    name: String,
  },
  {
    timestamps: true,
  }
)

export const user = model("user", dataSchema)
