require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
const connectDb  = require("./db/connect");
const authRouter = require("./routes/authRoutes");
const studentInfoRoute = require('./routes/studentInfoRoute')
const companyRoute = require('./routes/companyRoutes')
const internshipRoute = require("./routes/internshipRoute")
const adminRoute = require("./routes/AdminRoutes");
const morgan = require("morgan") ;
const port = process.env.PORT || 8000;
const logger = require("./loggers/app-logger") ;
const passport = require('passport') 
const session = require('express-session')
const serverLogStream = require("./loggers/server-logger") ;
const LOGTYPE = require("./utils/constants/app_constants") ;
const ROUTING = require("./utils/constants/app_constants") ;
// middleware position - static , data parser , dynamic

//query parameters are client side and params are used in backend
app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST","DELETE","PUT"],
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());

app.use(morgan(LOGTYPE.LOG.LOGGER.MORGAN_TYPE,{stream : serverLogStream})) ;

app.use(ROUTING.ROUTE_PATH.AUTH, authRouter);

app.use(ROUTING.ROUTE_PATH.STUDENT,studentInfoRoute);

app.use(ROUTING.ROUTE_PATH.COMPANY,companyRoute); 

app.use(ROUTING.ROUTE_PATH.INTERNSHIP,internshipRoute);

app.use(ROUTING.ROUTE_PATH.ADMIN,adminRoute);

const start = async()=>{
try{
   await connectDb(process.env.MONGO_URI);
   app.listen(port, () => logger.info(`Server running on port ${port}`));

}catch(err){
    console.log(err)
}
}

start();

//use is for installing the middlewares  //middleware are accessories of an app


app.use(session({
    secret:'secret',
    resave:false,   //if true,for every request in the server we want to create a new session id 
    saveUninitialized:false
}))

app.use(passport.initialize())

app.use(passport.session())
// app.use(express.urlencoded({ extended: false }));




// utils will contain the constants 

// create an object and then put all the routes there 

// routes -----> controller -----> repository -----> schemas ----> connection ----> db

// authorization and authentication

// create a folder named - repository in db.