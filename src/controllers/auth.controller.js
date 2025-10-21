import { generateToken } from "../lib/utils.js";
import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body; 
    try {
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
            //hash ang pass
             if(password.length < 8){
                return res.status(400).json({message: "Password must be at least 8 characters"});
             }
             const user = await User.findOne({email})
             if(user){
                return res.status(400).json({message: "Naka register naka chuy"});
             }

             const salt = await bcrypt.genSalt(10);
             const hashedPassword = await bcrypt.hash(password, salt);
             
             const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
             });

             if(newUser){
               generateToken(newUser._id, res)
               await newUser.save();
             }else {
                res.status(400).json({message: "Invalid user data"});
             }
       } catch (error) {
        console.log("Error in signup controller",error);
        res.status(500).json({message: "Internal server error"});
    }
};
export const login = (req, res) => {
    res.send("login route")
};
export const logout = (req, res) => {
    res.send("logout route")
};