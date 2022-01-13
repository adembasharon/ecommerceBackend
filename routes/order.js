const router=require("express").Router();
const Order=require("../models/order");


router.post("/ordertest" , async (req,res)=>{
const orderProduct=new Order({
orderName:req.body.orderName,
orderType:req.body.orderType,
orderTotal:req.body.orderTotal,

})
try{
const addedOrder=await orderProduct.save()
res.status(202).json(addedOrder)

}
catch(err){
res.status(404).json(err)
}


})
module.exports=router;
