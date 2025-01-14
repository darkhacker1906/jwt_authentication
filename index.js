const express = require("express");
const app = express();
const PORT = 8002;
var cors = require("cors");
const authRoute=require('./routes/auth');
const Auth = require("./models/auth");
// middleware plugin for the formdata
app.use(express.urlencoded({ extended: false }));
const { handleConnectMongoDb } = require("./connection");
handleConnectMongoDb();
// middleware for json data
app.use(express.json()); 
app.use((req,res,next)=>{
   console.log("Hello from middleware 1");
  //  return res.end("Hey after end");
   next();
})
app.use((req,res,next)=>{
  console.log("Hello from middleware 2");
  // return res.end("Hey after second end");
  next();
})
app.use(cors());
app.use('/',authRoute);


app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
