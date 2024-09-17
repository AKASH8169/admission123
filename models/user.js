const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        require:true


    },
    email:{
        type:String,
        require:true


    },
    password:{
        type:String,
        require:true


    },
    role:{
        type:String,
        default:"user"


    },

})
const UserModel =mongoose.model('user',UserSchema)
module.exports=UserModel