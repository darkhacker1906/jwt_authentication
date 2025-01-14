 const Auth=require('../models/auth')
 const { sign } = require('jsonwebtoken');
 const handleSignup=async (req, res) => {
    const data = req.body;
    const user = await Auth.findOne({ email: data.email });
    if (user) {
      res.status(400).json({
        message: "Email id is not available",
      });
    }
    try{
      const result = await Auth.create({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        res.status(200).json({
          message: "Signup successful",
          statusCode: 200,
          userId: result._id,
        });
    }catch(err){
      console.log(err);
      res.status(500).json({
          message:"Database error",
          statusCode:500,
      })
    }
  };
  const handleLogin= async(req, res) => {
    const data=req.body;
    try{
      const user=await Auth.findOne({email:data.email,password:data.password});
      if(user){
        const token= sign({
          id: user._id,
          name: user.name,
          email: user.email,
        },
        "Abhi@1906",
      )
          res.status(200).json({
              token,
              statusCode:200
          })
      }
      else{
        res.status(400).json({
          error:"User not found",
          statusCode:400,
        })
      }
    }
    catch(err){
       res.status(500).json({
          error:"Internal error",
          statusCode:500
       })
    }
}
  module.exports={handleSignup,handleLogin}