const route  = require('express').Router()
const upload = require('../middlewares/multer')
const {userVerify}     = require('../middlewares/VerifyToken')

//user route
const {register,login,findUser} = require('../controllers/user')

route.post('/user/register',upload.single('image'),register)
route.post('/user/login',login)
route.get('/user/find/:dept',findUser)


//post route
const {post,findAllPost}  = require('../controllers/post')
route.post('/post',userVerify,upload.single('image'),post)
route.get('/post/findAll',findAllPost)





module.exports  = route

