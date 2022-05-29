import express from "express";

const router = express.Router();


router.post("/login" ,(req, res)=>{
    res.send("welcome to login page");
});

router.post("/signup" ,(req, res)=>{
    res.send("welcome to sign up page");
});




export default router;



// default export only one  => export default name => 
// import name from "./users";


// named export could be more than one time => export name; 
// import { name} from "./users"