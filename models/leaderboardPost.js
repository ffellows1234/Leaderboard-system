const express = require("express");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//define our schema
const Schema = mongoose.Schema;
const leaderboardSchema = new Schema({
   
    title: String,
    type: String,
    data: {
        type: String,
        default: Date.now()
    }
  
});

//MODEL
const leaderboardPost = mongoose.model('leaderboardPost', leaderboardSchema);

module.exports = leaderboardPost;