//moongose model to store data in db 
import mongoose from "mongoose";
//creating schemaaaa
const productSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    description:{type:String ,required:true},
    price:{type:Number ,required:true},
    image:{type:Array,required:true},
    category:{type:String ,required:true},
    subCategory:{type:String ,required:true},
    sizes:{type:Array ,required:true},
    bestseller:{type:Boolean},
    date:{type:Number,required:true}
})

//using schema creating model 

const productModel = mongoose.models.product||mongoose.model("product",productSchema)//neew model creaTED

export default productModel;