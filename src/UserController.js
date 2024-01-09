import UserModel from "./backmain.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
    static userRegistration = async(req,res)=>{
        const { username, password, Fullname, email,confpass,mobileno } = req.body
        const user = await UserModel.findOne({email:email})
        if(user){
            res.send({"status":"failed","message":"Email already exists"})
        }
        else{
            if(username && email && password && password_confirmation && tc){
                if(password === password_confirmation){
                    try{
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password,salt )
                    const doc = new UserModel({
                        username:username,
                        email:email,
                        password:hashPassword,
                        tc:tc
                    })
                    await doc.save()
                    }
                    catch(error){
                        res.send({"status":"failed","message":"unable to register"})
                    }
                }
                else{
                    res.send({"status":"failed","message":"Password and Confirm Password dosen't match"})
                }
            }else{
                res.send({"status":"failed","message":"All fields are required"})
            }
        }
    }

    
}
export default UserController  