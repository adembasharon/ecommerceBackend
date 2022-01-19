const router=require("express").Router();
 const Product=require("../models/product");
const { verifyTokeAndAdmin,verifyTokenAndAuthorization } = require("./verifyToken");

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
    console.log(newProduct)
    res.status(201).json(savedProduct)
}
catch(err){
res.status(404).json(err)
}




 })

//  update product
router.put("/:id", verifyTokeAndAdmin, async (req,res)=>{
    try{
        const id=req.params.id

        const updates=req.body
        const options={new:true}
        const updatedProduct= await Product.findByIdAndUpdate(id,updates,options)
        res.status(200).json(updatedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
    })
    
// delete product
router.delete("/:id",verifyTokeAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("product deleted")
    return await Product.findByIdAndDelete(req.params.id)
    
    }
    catch(err){
    res.status(404).json("Product not Found")
    }})
    

    // find product by id

    router.get("/find/:id",verifyTokenAndAuthorization, async(req,res)=>{


        try{ 
            
    
            const product=await Product.findById(req.params.id)
            const {password,...others}=product._doc
            res.status(200).json(others)
        }
        catch(err){
            res.status(404).json(err)
    
        }
    })
    
// FIND
router.get("/",verifyTokenAndAuthorization, async(req,res)=>{


    try{ 
        const product=await Product.find()
        res.status(200).json(product)
    }
    catch(err){
        res.status(404).json(err)

    }
})






    












 module.exports=router;