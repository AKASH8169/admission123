const express =require('express')
//console.log(express)
const app = express()
const port = 3000
const web =require('./routing/web')
const connectDB = require('./db/connectdb')



//ejs(html,css)
app.set('view engine','ejs')
//css image link public
app.use(express.static('public'))

//connect db
connectDB()



//routing 
app.use('/',web)





//server start
app.listen(port,console.log("server start localhost:3000"))