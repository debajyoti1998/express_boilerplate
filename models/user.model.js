const mongoose=require("mongoose");
const toJSON=require("./plugin/toJson")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        private: true
    }


})
UserSchema.plugin(toJSON)
const User = mongoose.model('saveUser',UserSchema);
module.exports=User;