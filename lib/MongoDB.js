"use strict";
/**
 * You must implement the methods in this
 * file to interact with the Mongo database.
 * 
 * Created by sdiemert on 2016-05-25.
 */

// See https://github.com/mongodb/node-mongodb-native for details.
var MongoClient = require("mongodb").MongoClient;
var DBAdapter   = require("./DBAdapter");


class MongoDB extends DBAdapter {

    constructor(u, p, db, host, port) {
        super(u, p, db, host, port);

        this._user   = u;
        this._passwd = p;
        this._dbname = db || "timerdb";
        this._host   = host || "localhost";
        this._port   = port || 27017;

        this._db = null;

    }

    /**
     * Connects to the database.
     * @param callback {function} called when the connection completes.
     *      Takes an error parameter.
     */
    connect(callback) {
        
        var that = this; 

        MongoClient.connect(
            "mongodb://" + this._host + ":" + this._port + "/" + this._dbname,
            function (err, db) {

                if (err) {
                    console.log("ERROR: Could not connect to database.");
                    that._db = null;
                    callback(err);
                } else {
                    console.log("INFO: Connected to database.");
                    that._db = db;
                    callback(null);
                }

            }
        );

    }

    /**
     * Closes the connection to the database.
     */
    close() {
        this._db.close();
    }
    
    
    /**
     * Queries the database for all tasks and returns them via the callback
     * function.
     *
     * @param callback {function} called when query finishes.
     *      Takes two parameters: 1) error parameter, 2) data returned from query.
     */
    // See https://github.com/mongodb/node-mongodb-native for details.
    getSingers(callback) {
        //get the documents collection
        var collection=this._db.collection('documents');
        //find all documents
        collection.find({}).toArray(function(err,docs) {
            console.log("Found the following records");
            console.dir(docs);
                if (err) {
                    callback(err, null);
                } else {
                    callback(null,docs);
                }
            
        });
    }


    getLanguages(callback) {
        //get the documents collection
        var collection=this._db.collection('documents');
        //find all documents
        collection.find({}).toArray(function(err,docs) {
            console.log("Found the following records");
            console.dir(docs);
                if (err) {
                    callback(err, null);
                } else {
                    callback(null,docs);
                }
            
        });
    }



    getStyles(callback) {
        //get the documents collection
        var collection=this._db.collection('documents');
        //find all documents
        collection.find({}).toArray(function(err,docs) {
            console.log("Found the following records");
            console.dir(docs);
                if (err) {
                    callback(err, null);
                } else {
                    callback(null,docs);
                }
            
        });
    }



    getSong(callback) {
        //get the documents collection
        var collection=this._db.collection('documents');
        //find all documents
        collection.find({}).toArray(function(err,docs) {
            console.log("Found the following records");
            console.dir(docs);
                if (err) {
                    callback(err, null);
                } else {
                    callback(null,docs);
                }
            
        });
    }

    /**
     * Adds a task to the database.
     *
     * @param task {object} represents the task to be added to the DB.
     * @param callback {function} called when query finishes.
     *      Takes a single error parameter.
     */
    // See https://github.com/mongodb/node-mongodb-native for details.
    addSong(task, callback) {
        //get the documents collection
        var collection=this._db.collection('documents');
        //insert a document
        collection.insert(task, function(err) {
            console.log("Inserted one task into the document collection.");
                if (err) {
                    callback(err);
                } else {
                    callback(null);
                }
        });
    }

    /**
     * Remove a task from the database.
     *
     * @param id {number} id of object to remove.
     * @param callback {function} called when remove is completed.
     */
    // See https://github.com/mongodb/node-mongodb-native for details.
    removeSong(id, callback) {
        var collection=this._db.collection('documents');
        collection.deleteOne({id: id}, function(err,result) {
            console.log("Removed the document with the field a equal to id");
                if (err) {
                    callback(err,null);
                } else {
                    callback(null,result);
                }
        });
    }

}

module.exports = MongoDB; 
