import { Schema, model } from 'mongoose';
//create user registration model
const userSchema = new Schema(
  {
    firstname: {type: String, required:true},
    lastname: {type: String,required:true},
    email: {type: String,required:true,unique:true},
    password:{type: String,required:true},
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
