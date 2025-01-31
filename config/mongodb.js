import mongoose from "mongoose"

const connectDB= async () =>{
//connect mongoose to the atlas server
mongoose.connection.on('connected',()=>{
    console.log("DB connected ......")//whenver DB is connected 
})
await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}
 export default connectDB;