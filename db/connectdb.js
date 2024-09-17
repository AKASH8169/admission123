const mongoose = require('mongoose')
const connectDB =()=>{

    return mongoose.connect('mongodb://127.0.0.1:27017/adimmisonPortal1')
    .then(()=>{
        console.log('connect db')
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports=connectDB
