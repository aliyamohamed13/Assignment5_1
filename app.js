const express = require('express');
const shortid = require('shortid');
const path = require('path');
const cors=require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Message = require('./models/message')
const router = express.Router();
const port = process.env.PORT || 9000;
// const dotenv = require('dotenv').config();


const app = express();

// mongoose.connect('mongodb://localhost/messages', { useNewUrlParser: true});
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/messages', { useNewUrlParser: true});


const db = mongoose.connection
db.on('error', (error) => console);

mongoose.Promise = global.Promise;

// app.use(express.static(path.join(__dirname, 'client/build')));
// if (process.env.NODE__ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => { res.sendfile(path.join(__dirname = 'client/build/index.html')); })
// }
// app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

app.use(cors());
app.use(bodyParser.json());

router.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build" )));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html")); //relative path
});
app.listen(port, (req, res) => { console.log("server for app started on " + { port }) })

// let messages =   [{
//     "id": shortid.generate(), 
//     "text": "Hello!"
//   },
//   {
//     "id": shortid.generate(),
//     "text": "How are you?!"
//   }
// ]

//clear all button implementation
//for every message in the database, remove that message and return that
app.put('/', async (req, res, next) => {
  try {
    const messages = await Message.find();
    let emptyArr = messages.forEach(element => {
      element.remove()
    })
    console.log(emptyArr)
    res.json(emptyArr);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});



//this is when we're adding a new message, body is what we're sent and we just want the text
//make a new message with that text and save it to the db
app.post('/', async (req, res) => {
  const message = new Message({
    text: req.body.text
  })
  try {
    const newMessage = await message.save()
    res.status(201).json(newMessage)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
  // messages.push(req.body);
});




app.get('/', async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});


let j = bodyParser.json();
// app.put('/', j, function(req, res, next) {
//   let something = [];
//   messages = something;
//   res.json(messages);
// });





module.exports = app;
