const User=require("../models/user");

const router=require("express").Router();
const {varifyTokeAndAdmin , VarifyTokenAndAuthorization}=require("./verifyToken")

// update user

router.put("/:id", VarifyTokenAndAuthorization, async (req,res)=>{
try{
    const id=req.params.id
    const updates=request.body
    const options={new:true}
    const updatedUser= await User.findByIdAndUpdate()
    res.status(200).json(updatedUser)
}
catch(err){
    res.status(500).json(err)
}




})



module.exports=router