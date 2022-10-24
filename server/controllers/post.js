const postModel  = require('../models/Post')

const post = async(req,res)=>{
    try{
        
       //  const image = req.file.filename
         const userId = req.user.user._id
         const newPost = await postModel.create({...req.body,userId})

         res.status(201).json({
            message:"successfully created post",
            data: newPost,
            error: false
         })
        
    }
    catch(err){
        console.log(err)
    }
}

 
const findAllPost = async(req,res)=>{
    try{
         const post = await postModel.find({})
         res.status(200).json({
            message:'Showing results',
            length: post.length,
            data: post,
            error: false
         })
    }
    catch(err){
        console.log(err)
    }
}






module.exports = {
    post,
    findAllPost
}