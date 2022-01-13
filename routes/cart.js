const router=require("express").Router();
const Cart=require("../models/cart");


router.post("/addCart" , async (req,res)=>{
const productAddedToCart=new Cart({
cartProductName:req.body.cartProductName,
cartProductType:req.body.cartProductType,
cartProductPrice:req.body.cartProductPrice,
cartProductTotal:req.body.cartProductTotal,
cartProductColor:req.body.cartProductColor

})
try{
const addedToCart=await productAddedToCart.save()
res.status(202).json(addedToCart)

}
catch(err){
res.status(404).json(err)
}


})
module.exports=router;
