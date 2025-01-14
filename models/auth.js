const mongoose=require('mongoose');

const authSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    }
},{timestamps:true})
const Auth= mongoose.model("Auth",authSchema);
module.exports = Auth;