import { connect, model, Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()
// // const uri = 


connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster-jornada-colabor.0ij5x9x.mongodb.net/jornada-cloud-native?retryWrites=true&w=majority`,
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
