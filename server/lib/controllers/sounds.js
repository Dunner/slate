// lib/controllers/sounds.js

var mongoose = require('mongoose'),
    Sound = mongoose.model('Sound');

// List of sound
exports.query = function(req, res) {
  Sound.find().sort('-createdAt').exec(function(err, sounds) {
    if (err) return res.json(500, err);
    res.json(sounds);
  });
};

// Show a sound
exports.show = function(req, res) {
  Sound.findOne({ 'slug': req.params.slug }).exec(function(err, sound) {
    if (err) return res.json(500, err);
    res.json(sound);
  });
};

// Create a sound
exports.create = function(req, res) {
  var sound = new Sound(req.body);
  sound.save(function(err) {
    if (err) return res.json(500, err);
    res.json(sound);
  });
};
