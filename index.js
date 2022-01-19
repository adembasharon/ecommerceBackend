const mongoose=require("mongoose");
const dotenv=require("dotenv");
const express=require("express");
const userRoutes=require("./routes/user");
const productRoutes=require("./routes/product");
const authRoutes=require("./routes/auth")
const cartRoutes=require("./routes/cart")
const orderRoutes=require("./routes/order")

const app=express()

const PORT=5000||process.env.PORT;
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DBconnected")
})
.catch((err)=>{
    console.log(err)
})
app.listen(PORT,()=>{
    console.log(`sever is running on ${PORT}`)
});
app.use(express.json());
 app.use("/api/user",userRoutes);

app.use("/api/cart",cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/product",productRoutes);
app.use("/api/auth",authRoutes)