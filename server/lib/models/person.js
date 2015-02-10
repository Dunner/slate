// models/person.js

var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    Schema   = mongoose.Schema;

var personSchema = new Schema({
    name : String,
    slug : String,
    createdAt: Date,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Person', personSchema);

