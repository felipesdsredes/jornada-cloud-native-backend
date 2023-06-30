import { connect, model, Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()


connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}`,
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

export const user = model("user", dataSchema, 'user')
