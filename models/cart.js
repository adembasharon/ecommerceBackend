const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
cartProductName:{type:String,unique:true,required:true },
cartProductPrice:{type:String,unique:true,required:true },
cartProductColor:{type:String,unique:true,required:true },
cartProductTotal:{type:String,unique:true,required:true },
cartProductType:{type:String,unique:true,required:true }

},
{timestamps:true})


module.exports=mongoose.model("Cart",cartSchema) 