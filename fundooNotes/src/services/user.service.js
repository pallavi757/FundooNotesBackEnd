import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//get all users
// export const getAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };

//create new user for registration and store hash in your password DB
export const userRegistration = async (body) => {
  console.log("Body before hashing", body)
  const saltRounds=10
  const hashPassword=await bcrypt.hash(body.password,saltRounds)
  console.log("Hashed password", hashPassword);
  body.password = hashPassword
  console.log("After hashing ",body);
  const data = await User.create(body);
  return data;
};

//for login
export const login = async(body)=>{

const result = await User.findOne({email:body.email});
console.log(result);
if(result!=null){
  const isSame = await bcrypt.compare(body.password,result.password); 
  var token = jwt.sign({ id: result._id,email:result.email }, process.env.SECREATEKEY);
return token;
if(isSame){
  console.log("paswword match");
  return result;
}else{
  throw new Error("paswword not match");
}
}else{
  throw new Error("token not found");
}
};



  

//update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };
 