import express from "express"
import { forgotPasswordController, loginController, registerController, testController } from "../controllers/authController.js"
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js"


const router = express.Router()

//routing
//Register || Method Post
router.post('/register',registerController)

//LOGIN || METHOD POST
router.post('/login',loginController)

//Forgot Password || POST
router.post('/forgot-password',forgotPasswordController)

//test route
router.get('/test',requireSignin,isAdmin ,testController)

//protected user route auth
router.get('/user-auth',requireSignin,(req,res)=>{
    res.status(200).send({ok:true})
})

//protected admin route auth
router.get('/admin-auth',requireSignin,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

export default router