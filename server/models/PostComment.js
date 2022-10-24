const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postCommentSchema = new Schema ({
    postId:{
        type: String
    },
    userId:{
        type: String
    },
    comment:{
        type: String
    }
})

module.exports = mongoose.model('PostComment',postCommentSchema)