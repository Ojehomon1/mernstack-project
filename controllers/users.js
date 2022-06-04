import User from "../models/user.js";
import bcrypt from "bcrypt";


const login = async (req, res) => {
  const { email , password} = req.body;
  //1- check if email exist  => 2-check the password
  const oldUser = await User.findOne({email});
  if(!oldUser){
  return  res.status(404).json({ msg : "email does not exist , please register "})
  }
  // we found the email => check the password
  const validPass = await bcrypt.compare(password ,oldUser.password );
  if(validPass === false){
  return  res.status(404).json({ msg :  "invalid password"})
  }
  res.status(200).json({ msg : "you are loggid in welcome back  "+oldUser.username})


  
};

const signup = async(req, res) => {
    // username , email , password , confirm password
    const {username, email , password,confirmPassword} = req.body
    try {
        const oldUser = await User.findOne({email});
        if(oldUser){ // email exisit 
          return  res.status(400).json({msg : "This email already exist please use different one! "})
        }
       
        if(password === confirmPassword){
         const hash = await bcrypt.hash(password, 10);
            const user = await User.create({
                username,
                email,
                "password":hash 
            })
            res.status(201).json({msg : "user created :) " , data: user})
        }
        
    } catch (error) {
      // error response when somthing happend 
      // we cant  insert the data to mongoDB
      // error with the data
        res.status(500).json({msg:"somthing went wrong!" , err : error});
    }
  //res.send({ msg: "welcome to signup ", data: req.body });
};

export { login, signup };
