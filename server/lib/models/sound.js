// models/sound.js

var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    Schema   = mongoose.Schema;

var soundSchema = new Schema({
    name : String,
    slug : String,
    person: String,
    filename: String,
    createdAt: Date,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Sound', soundSchema);

