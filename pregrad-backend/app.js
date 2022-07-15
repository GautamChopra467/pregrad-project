require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
const connectDb  = require("./db/connect");
const authRouter = require("./routes/authRoutes");
const studentInfoRoute = require('./routes/studentInfoRoute')
const port = process.env.PORT || 8000;


const start = async()=>{
try{
   await connectDb(process.env.MONGO_URI)
   app.listen(port, () => console.log(`Server running on port ${port}`));

}catch(err){
    console.log(err)
}
}

start()

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST","DELETE","PUT"],
    credentials:true
}));

app.use(cookieParser())

app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

app.use("/", authRouter);
app.use("/student",studentInfoRoute)



