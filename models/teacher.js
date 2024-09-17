const mongoose=require('mongoose')
const teacherSchema=mongoose.Schema({
    name:{
        type:String,
        require:true


    },
    email:{
        type:String,
        defult:"teacher"


    },
})
const teacherModel =mongoose.model('teacher',teacherSchema)
module.exports=teacherModel