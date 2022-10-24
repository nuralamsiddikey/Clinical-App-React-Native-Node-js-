const jwt = require("jsonwebtoken");

const userVerify = (req, res, next) => {
  const authHeader = req.headers.token;

  
  if (authHeader) {
    const token = authHeader
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
             if (err) res.status(403).json("Token is not valid!");
              req.user = user;
               next();
    });
  } else {
    return res.status(401).json({
           warning:"you are not authenticated!"
    });
  }
};


const doctorVerify = (req,res,next)=>{
    userVerify(req,res,()=>{
        if(req.user.user.isDoctor === true){
             next()
        }
    })
}



module.exports = {
    userVerify,
    doctorVerify
   
}