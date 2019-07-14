var express = require('express');
var router = express.Router();
const PORT = 4000;
const cors=require("cors");
app.use(cors());


var messages = [
  {
    "id": "1",
    "text": "Hello!"
  },
  {
    "id": "1",
    "text": "How are you?!"
  }
]
app.listen()
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json')
  // res.send(JSON.stringify(messages));
  res.json(messages);
});

module.exports = router;
