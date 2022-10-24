const blogModel = require('../models/Blog')

const createBlog = async(req,res)=>{
    try{
           const doctorId = req.user.user._id
           const newBlog = await blogModel.create({...req.body,doctorId})
           res.status(201).json({
                message:'Successfully created blog',
                data: newBlog,
                error: false
           })
    }
    catch(err){
        console.log(err)
    }
}


const getBlog = async(req,res)=>{
    try{
          const blog = await blogModel.find({})
          res.status(200).json({
              message:"Showing results",
              length: blog.length,
              data: blog,
              error: false
          })
    }
    catch(err){
        console.log(err)
    }
}



module.exports = {
    createBlog,
    getBlog
}