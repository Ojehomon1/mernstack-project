import User from "../models/user.js";


const login = (req, res) => {
  res.send("welcome to login page");
};

const signup = async(req, res) => {
    // username , email , password , confirm password
    const {username, email , password,confirmPassword} = req.body
    try {
        const oldUser = await User.findOne({email});
        if(oldUser){
          return  res.status(400).json({msg : "This email already exist please use different one! "})
        }
        if(password === confirmPassword){
            const user = await User.create({
                username,
                email,
                password
            })
            res.status(201).json({msg : "user created :) ",data :user})
        }
        
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong!"});
    }
  //res.send({ msg: "welcome to signup ", data: req.body });
};

export { login, signup };
