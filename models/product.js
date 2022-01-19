const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
productName:{type:String,required:true },
productPrice:{type:Number,required:true },
productColor:{type:String,required:true },
productSize:{type:String,required:true },
productDescription:{type:String,required:true },
productImage:{type:String,required:true }

},
{timestamps:true})


module.exports=mongoose.model("Product",productSchema) 