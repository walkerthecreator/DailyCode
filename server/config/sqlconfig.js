const mysql = require('mysql')

const connection = mysql.createConnection({
    host : "localhost", 
    user : "root" ,
    password : "" ,
    database : "tuf"
})


connection.connect((err)=>{
    if(err){
        console.error('Error connecting with Database : ' , err);
        return 
    }
    console.log("Connected with SQL")
})

// const sqlQuery = `SELECT * FROM user`;


function Query(sqlQuery){
    return new Promise((resolve , reject ) =>{

        connection.query(sqlQuery , (error ,result , fields ) => {
            if(error){
                console.log('Error executing query :' , error)
                resolve("")
            }
            resolve(result)
        })
    })
    
}

function InsertQuery(sqlQuery , values){
    return new Promise((resolve , rejected) => {
        connection.query(sqlQuery , values , (err , result) => {
            if(err){
                console.log('Error executing query :' , err)
                rejected('')
            }
            resolve(result)
        })
    })
}

// connection.end()

module.exports = {Query , InsertQuery} 