import jwt from "jsonwebtoken"
import user from "../models/user.model.js"

const isAuth = async(req,res,next )=>{
    try {
        console.log("COOKIES:", req.cookies);
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({message: "token not found"})
        }
        const decoded =jwt.verify(token, process.env.JWT_SECRET )
        req.user = await user.findById(decoded.id)
        next()
    } catch (error) {
        return res.status(500).json({message:"invalid token"})
    }
}

export default isAuth