import express from 'express'// create server
import cors from 'cors'
import 'dotenv/config'// to enable env to store secret key or API key 
import connectDB from './config/mongodb.js'
//import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'

//App config 

const app = express()
const port= process.env.PORT|| 4000

connectDB()
//connectCloudinary


//middlewares 
//request is passed here as json
app.use (express.json())
app.use(cors())

//API end points 
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("api working")//port 4000 open panna display 
})

//start express server
app.listen(port,()=>console.log('server started on port :' + port))

