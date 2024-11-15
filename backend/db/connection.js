const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.mongoDB_URI).then(() => {
 console.log('connection Established')
}).catch(()=>{
console.log('Connection to DB Failed')
})