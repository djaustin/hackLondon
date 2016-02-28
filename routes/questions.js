var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb"

router.get('/new', function(req, res, next) {
  var question = req.query.question;
  var options = req.query.options;
  client.connect(url, function(err, db) {
    if (!err){
      console.log("Connected to server!");
      var coll = db.collection('questions');
      var optionObjs = []
      options.forEach(opt => {
        optionObjs.push({
          "text": opt,
          "votes": 0
        })
      })
      coll.insert({
        "title": question,
        "options": optionObjs
      })

      db.close();
    } else {
      console.log(err);
    }
  })

  console.log('/public/index.html')
  res.redirect('/')
})

module.exports = router;

