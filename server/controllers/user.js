const route     = require('express').Router()
const userModel = require('../models/User')
const CryptoJS  = require('crypto-js')
const jwt       = require('jsonwebtoken')

const register = async(req,res)=>{
     try{
        
        if(req.body.fullName && req.body.email){

          const existUser = await userModel.findOne({email: req.body.email})
          
          if(existUser){
             res.status(409).json({
                message: `'${req.body.email}' already exist!`,
                error: true
             })
          }

          else{
            
            const image = req.file.filename
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();

            const newUser = await userModel.create({...req.body,image})
                  newUser.password = ''

            res.status(201).json({
                message:'successfully registered!',
                data: newUser,
                error: false
            })
          }
        }
        else{
            res.status(400).json({
                message:"invalid input",
                error: true
            })
        }

           
     }
     catch(err){
        console.log(err)
     }
}



const login = async(req,res)=>{
    try{
       
        if(req.body.email){
            const existUser = await userModel.findOne({email:req.body.email})
             
            if(existUser){
              
                const originalPassword = CryptoJS.AES.decrypt(existUser.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)

                if(originalPassword === req.body.password){
                   
                    existUser.password = ''
                        const token =   jwt.sign({
                            user : existUser
                         }, process.env.JWT_SEC, { expiresIn: '2h' })

                         res.status(200).json({
                            message:'Login success!',
                             token: token,
                             error: false
                         })

                }else{
                    res.status(400).json({
                        message:"invalid user!",
                        error: true
                    })
                }
            }
            else{
                res.status(400).json({
                    message:"invalid user!",
                    error: true
                })
            }
     }
      else{
        res.status(400).json({
            message:"invalid user!",
            error: true
        })
      }
    }
    catch(err){
        res.status(500).send(err)
    }
}


//get doctor
const findUser =async(req,res)=>{
    try{
        const dept = req.params.dept
       
          const user = await userModel.find({isDoctor: true,dept:dept})
           res.status(200).json({
                message:'showing results',
                length: user.length,
                data: user,
                error:false
          })
       
    }      
    catch(err){ 
        console.log(err)
    }
}


module.exports = {
    register,
    login,
    findUser
}

