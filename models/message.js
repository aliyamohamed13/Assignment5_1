// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //cretae Schema and model
// const MessageSchema = new Schema({
//     content: {
//         type: String
//         // required: true
//     }
//     // ,
//     // id: {
//     //     type: String 
//     // }
// })

// module.exports = mongoose.model('message', MessageSchema);

const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Message', MessageSchema)