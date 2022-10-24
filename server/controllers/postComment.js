const Post = require('../models/Post')
const PostComment = require('../models/PostComment')

const postComment = async(req,res)=>{
           try{
                const {
                    postId,
                    comment
                } = req.body

         const post = await Post.findOne({_id: postId})              
                const loggedUser = req.user.user

                if(loggedUser.isDoctor == true || post.userId == loggedUser._id){
                      const newComment = await PostComment.create({
                                 postId: postId,
                                 userId: loggedUser._id,
                                 comment: comment

                            })

                            res.status(201).json({
                                 message:"successfully created comment",
                                 error: false
                            })

                }

           }
           catch(err){
              res.status(500).json({
                 error: err.message
              })
           }
}

module.exports = {postComment}