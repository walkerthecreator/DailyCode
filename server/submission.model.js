

const mongoose = require('mongoose')


const submissionSchema = new mongoose.Schema({

    username : {
        type : String ,
        required : true
    } ,
    code : {
        type : String ,
        required : true
    } ,
    language : {
        type : String ,
        required : true
    } ,
    stdin : String 
} , {
    timestamps : true   
})

const Submission = mongoose.model('submission' , submissionSchema )

module.exports = Submission