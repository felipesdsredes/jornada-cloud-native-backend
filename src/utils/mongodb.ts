import { connect, model, Schema } from "mongoose";

connect('mongodb://localhost:27017/jornada-cloud-native',{
  useUnifiedTopology:true,
  useNewUrlParser:true,
  useFindAndModify:false
}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('MongoDB Conectado com sucesso');
  }
});

const dataSchema = new Schema({
    email:String,
    name:String,
  },{
    timestamps:true
  }
);

export const user = model('user', dataSchema);