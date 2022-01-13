const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    console.log(req.headers)
const authHeader=req.headers.token
if(authHeader){
const token = authHeader.split(" ")[1]
jwt.verify(token , process.env.JWT_SEC , (err,user)=>{

    err ? res.status(403).json("Toke is Not Valid") : req.user=user
    next()

})

}else{
    res.status(401).json("User not Authonticated")
}


}


const VarifyTokenAndAuthorization=(req,res,next)=>{
verifyToken((req,res)=>{
if(req.user.id===req.params.id || req.user.isAdmin ){
    next()
 } else{
     res.status(500).json("You Cannot Suport This Task")
 }
})
}

const varifyTokeAndAdmin=()=>{

    verifyToken((req,res)=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(500).json("You Cannot Suport This Task")

        }
    })
}
module.exports={varifyTokeAndAdmin , VarifyTokenAndAuthorization}
