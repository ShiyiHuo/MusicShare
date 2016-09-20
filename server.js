"use strict";

var express    = require("express");
var bodyParser = require("body-parser");

// The server currently uses an in memory
// data store. You must implement the required
// functionality in ./lib/storage.js and 
// switch out this variable. 
var Storage = require('./lib/MongoDB');


var app = express();

var db = new Storage(null, null, 'musicShare');

// use the parse to get JSON objects out of the request. 
app.use(bodyParser.json());

// server static files from the public/ directory.
app.use(express.static('public'));

/**
 * get singer list from db
 */
app.get("/singerlist", function (req, res) {
    console.log("GET Request to: /singerlist");
    
     db.getSingers(function(err, data){
         if(err){
            res.status(500).send();
        }else{
            res.status(200).json(data);
        } 
     });
    
});

/**
 * get language list from db
 */
app.get("/languagelist", function (req, res) {
    console.log("GET Request to: /languagelist");
    
     db.getLanguages(function(err, data){
         if(err){
            res.status(500).send();
        }else{
            res.status(200).json(data);
        } 
     });
    
});

/**
 * get style list from db
 */
app.get("/stylelist", function (req, res) {
    console.log("GET Request to: /stylelist");
    
     db.getStyles(function(err, data){
         if(err){
            res.status(500).send();
        }else{
            res.status(200).json(data);
        } 
     });
    
});


/**
 * get a song from db
 */
app.get("/getSong", function (req, res) {
    console.log("GET Request to: /getSong");
    
     db.getSong(function(err, data){
         if(err){
            res.status(500).send();
        }else{
            res.status(200).json(data);
        } 
     });
    
});

/**
 * Adds a song to db
 */
app.post("/addSong", function (req, res) {

    console.log("POST Request to: /addSong");
    
    db.addSong(req.body, function(err){
        if(err){
            res.status(500).send();
        }else{
            res.status(200).send();
        }
    });
    
    res.status(200).send();
});

/**
 * Removes a song from db
 */
app.post("/removeSong", function (req, res) {
    
    console.log("POST Request to: /removeSong");
    console.log(req.body);

    db.removeSong(req.body.id, function(err){
        if(err){
            res.status(500).send();
        }else{
            res.status(200).send();
        }
    });

});




app.listen(process.env.PORT || 3000, function () {
    
    console.log("Listening on port 3000");
    
    db.connect(function(){
        // some message here....
    });
    
});