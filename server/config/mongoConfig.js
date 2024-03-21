const mongoose = require('mongoose')

mongoose.connect(process.env.DB)

const db = mongoose.connection

db.once('open' , ()=>{
    console.log('Atlas Connected !')
})

db.on('error' , ()=>{
    console.log('something went wrong')
})