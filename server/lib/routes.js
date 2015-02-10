// lib/routes.js

'use strict';
var middleware = require('./middleware'),
    index = require('./controllers/index'),
    sounds = require('./controllers/sounds'),
    persons = require('./controllers/persons'),
    stream = require('./controllers/stream'),
    UserController = require('./controllers/upload');

module.exports = function(app) {
  // Server API Routes
  // -------
  // Sounds
  // -------
  app.get('/api/sounds', sounds.query);
  app.get('/api/sounds/:slug', sounds.show);
  app.post('/api/sounds/:slug', sounds.create);
  // -------
  // Persons
  // -------
  app.get('/api/persons', persons.query);
  app.get('/api/persons/:slug', persons.show);
  app.post('/api/persons/:slug', persons.create);
  // -------
  // Stream
  // -------
  app.get('/api/stream/:filename', stream.stream);
  // -------
  // Upload
  // -------
  app.post('/api/user/uploads', multipartyMiddleware, UserController.uploadFile);
 
  // -------
  // Other
  // -------
  // 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });


  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/views/*', index.views);
  app.get('/*', index.index);
};