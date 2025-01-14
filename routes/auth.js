const express = require('express');
const router = express.Router();
const { handleSignup, handleLogin } =require('../controllers/auth');
router.post("/login", handleLogin);
router.post("/signup", handleSignup);

module.exports=router;
