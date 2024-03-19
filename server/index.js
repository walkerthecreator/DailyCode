const express = require('express')
let app = express()
const cors = require('cors')
const { Query , InsertQuery } = require('./config')

app.use(cors())
app.use(express.json())

app.get('/' , (req ,res ) =>{
    return res.send('welcome')
})

app.get('/view' , async (req , res) => {
    try{
        let data = await Query('SELECT * FROM USER')
        return res.status(201).json({ data })
    }
    catch(err){
        console.error("oops" , err)
        return res.status(501).json({ message : "something went wrong" })
    }
})

app.post('/add-new-submission' , async (req ,res) => {
    try{
        const { username , code , language , stdin } = req.body
        let data = await InsertQuery('INSERT INTO user (name, type , source, stdin) VALUES (?, ?, ?, ?)' , [username , language , code , stdin])
        console.log("data" , data)
        return res.status(201).json({ data })
    }
    catch(err){
        console.error("oops" , err)
        return res.status(501).json({ message : "something went wrong" })
    }
}) 

app.listen(4000 , ()=>{
    console.log('server started on 4000')
})