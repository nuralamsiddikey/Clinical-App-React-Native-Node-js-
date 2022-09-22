const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema({
    title:{
        type    :String,
        required: true
    },
    desc:{
        type   : String,
        required: true
    },
    image:{
        type   : String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
}, { timestamps: true }) 

module.exports  = mongoose.model('Post',postSchema)