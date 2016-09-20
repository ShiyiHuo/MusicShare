"use strict";
/**
 * Created by sdiemert on 2016-05-25.
 */

class DBAdapter{
    
    constructor(user, passwd, dbname, url, port){
        
    }

    /**
     * Connects to the database. 
     * @param callback {function} called when the connection completes.
     *      Takes an error parameter.
     */
    connect(callback){
        throw new Error("interface class, method not callable");
    }

    /**
     * Closes the database connection.
     */
    close(){
        throw new Error("interface class, method not callable");
    }

    /**
     * Queries the database for singer list, language list, style list or a specific song
     *
     * @param callback {function} called when query finishes.
     *      Takes two parameters: 1) error parameter, 2) data returned from query.
     */
    getSingers(callback){
        throw new Error("interface class, method not callable");
    }

    getLanguages(callback) {
        throw new Error("interface class, method not callable");
    }

    getStyles(callback) {
        throw new Error("interface class, method not callable");
    }

    getSong(callback) {
        throw new Error("interface class, method not callable");
    }

    /**
     * Adds a song to the database.
     * 
     * @param task {object} represents the task to be added to the DB.
     * @param callback {function} called when query finishes.
     *      Takes a single error parameter. 
     */
    addSong(task, callback){
        throw new Error("interface class, method not callable");
    }

    /**
     * Remove a Song from the database.  
     * 
     * @param id {number} id of object to remove. 
     * @param callback {function} called when remove is complete.
     */
    removeSong(id, callback){
        throw new Error("interface class, method not callable");
    }
    
}

module.exports = DBAdapter; 