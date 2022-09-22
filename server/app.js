
//IMPORT EXTERNAL MODULES
const express   = require('express')
const mongoose  = require('mongoose')
const dotenv    = require('dotenv')
var bodyParser = require('body-parser')
var cors = require('cors')

//IMPORT INTERNAL MODULES
const path = require('path')


const app     = express()
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//STATIC FILES
app.use(express.static(path.join(__dirname, 'images')))


//IMPORT ROUTE
const userRouter = require('./routes/index')

//USE ROUTE
app.use('/api',userRouter)

//DBConnection
mongoose.connect(process.env.DB)
.then(()=>console.log('DBConnection successfull!'))
.catch(err=>console.log('DB connection successfull',err))



//SERVER LISTENING
const port = 7000
app.listen(port,()=>{
    console.log(`Backend server is listening at ${port}`)
})