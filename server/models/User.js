const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    dept:{
       type:String
    },
    designation:{
        type: String
    },
    desc:{
        type: String
    },
    image:{
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    postId:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, { timestamps: true })

module.exports  = mongoose.model('User',userSchema)