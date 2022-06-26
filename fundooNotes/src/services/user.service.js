import User from '../models/user.model';
import bcrypt from 'bcrypt';


//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user for registration and store hash in your password DB
export const newUser = async (body) => {
  console.log("Body before hashing", body)
  const saltRounds=10
  const hashPassword=await bcrypt.hash(body.password,saltRounds)
  console.log("Hashed password", hashPassword);
  body.password = hashPassword
  console.log("After hashing ",body);
  const data = await User.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
 