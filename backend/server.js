import express from 'express'  // 	Initializes the server 
import cors from 'cors' // 	Allows cross-origin requests
import 'dotenv/config'  //Loads env variables
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// APP CONFIGURE
const app = express()   // app will be used to define routes, middleware, and start the server
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// MIDDLEWARE
app.use(express.json()) //tells Express to automatically parse JSON data from the request body.
app.use(cors()) //enables CORS so that API can accept requests from different origins

// API ENDPOINT
app.use('/api/admin',adminRouter)   //localhost:4000/api/admin/add-doctor
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING GREAT')
})

app.listen(port,()=>console.log("Server Started",port))