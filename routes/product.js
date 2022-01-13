const router=require("express").Router();
 const Product=require("../models/product")

 router.post("/new", async(req,res)=>{
const newProduct=new Product({
productName:req.body.productName,
productSize:req.body.productSize,
productColor:req.body.productColor,
productPrice:req.body.productPrice,
productImage:req.body.productImage ,
productDescription:req.body.productDescription

})
try{
    const savedProduct=await newProduct.save()
    res.status(201).json(savedProduct)
}
catch(err){
res.status(404).json(err)
}




 })

 module.exports=router;