const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
productName:{type:String,unique:true,required:true },
productPrice:{type:String,unique:true,required:true },
productColor:{type:String,unique:true,required:true },
productSize:{type:String,unique:true,required:true },
productDescription:{type:String,unique:true,required:true },
productImage:{type:String,unique:true,required:true }

},
{timestamps:true})


module.exports=mongoose.model("Product",productSchema) 