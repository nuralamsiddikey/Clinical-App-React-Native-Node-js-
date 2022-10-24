const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const blogSchema = new Schema({
   desc:{
     type: String
   },
   doctorId:{
     type: Schema.Types.ObjectId,
     ref:'User'
   }
})

module.exports  = mongoose.model('Blog',blogSchema)
