var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb"

router.get('/new', function(req, res) {
  var question = req.query.question;
  var options = req.query.options;
  client.connect(url, function(err, db) {
    if (!err){
      console.log("Connected to server!");
      console.log();
      var coll = db.collection('questions')
      coll.insert({
        "title": question,
        "options": options
      })

      db.close();
    } else {
      console.log(err);
    }
  })

})
