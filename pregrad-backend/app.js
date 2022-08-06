require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
const connectDb  = require("./db/connect");
const authRouter = require("./routes/authRoutes");
const studentInfoRoute = require('./routes/studentInfoRoute')
const companyRoute = require('./routes/companyRoutes')
const port = process.env.PORT || 8000;

const passport = require('passport') 
const session = require('express-session')


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


app.use(express.json());

app.use(session({
    secret:'secret',
    resave:false,   //if true,for every request in the server we want to create a new session id 
    saveUninitialized:false
}))

app.use(passport.initialize())

app.use(passport.session())
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use("/", authRouter);

app.use("/student",studentInfoRoute)

app.use('/company',companyRoute)


