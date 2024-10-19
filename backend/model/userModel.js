const mongoose = require('mongoose');
const { Schema } = mongoose;

//  creating schema
const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    email:{
        type : String,
        unique : true,
        required : true

    }, 
    age:{
        type : Number ,
    }

} , {timestamps : true})

// creating model              user collection hve the userschema like structure
exports.user = mongoose.model('user', userSchema);