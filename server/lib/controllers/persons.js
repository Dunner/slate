// lib/controllers/persons.js

var mongoose = require('mongoose'),
    Person = mongoose.model('Person');

// List of person
exports.query = function(req, res) {
  Person.find().sort('-createdAt').exec(function(err, persons) {
    if (err) return res.json(500, err);
    res.json(persons);
  });
};

// Show a person
exports.show = function(req, res) {
  Person.findOne({ 'slug': req.params.slug }).exec(function(err, person) {
    if (err) return res.json(500, err);
    res.json(person);
  });
};

// Create a person
exports.create = function(req, res) {
  var person = new Person(req.body);
  person.save(function(err) {
    if (err) return res.json(500, err);
    res.json(person);
  });
};
