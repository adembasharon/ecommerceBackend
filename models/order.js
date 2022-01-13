const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
orderName:{type:String,unique:true,required:true },
orderTotal:{type:String,unique:true,required:true },
orderType:{type:String,unique:true,required:true }

},
{timestamps:true})


module.exports=mongoose.model("order",orderSchema) 