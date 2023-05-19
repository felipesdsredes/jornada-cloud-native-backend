import { model, Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster-jornada-colabor.0ij5x9x.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

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
