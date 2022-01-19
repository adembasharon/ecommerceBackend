const { verify } = require("jsonwebtoken");
const User=require("../models/user");

const router=require("express").Router();
const {verifyTokeAndAdmin , verifyTokenAndAuthorization}=require("./verifyToken")


// update user

router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{
try{
    const id=req.params.id
    const updates=req.body
    const options={new:true}
    const updatedUser= await User.findByIdAndUpdate(id,updates,options)
    res.status(200).json(updatedUser)
}
catch(err){
    res.status(500).json(err)
}
})



// delete

router.delete("/:id",verifyTokeAndAdmin,async(req,res)=>{
try{
    res.status(200).json("user sucessfully deleted")
return await User.findByIdAndDelete(req.params.id)

}
catch(err){
res.status(404).json("Record not Found")
}})


// find by id
router.get("/find/:id",verifyTokenAndAuthorization, async(req,res)=>{


    try{ 
        

        const user=await User.findById(req.params.id)
        const {password,...others}=user._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(404).json(err)

    }
})

 
// find all users
router.get("/",verifyTokenAndAuthorization, async(req,res)=>{


    try{ 
        const user=await User.find()
        res.status(200).json(user)
    }
    catch(err){
        res.status(404).json(err)

    }
})













module.exports=router