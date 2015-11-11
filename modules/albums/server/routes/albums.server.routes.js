'use strict';

module.exports = function(app) {
  var albums = require('../controllers/albums.server.controller');
  var albumsPolicy = require('../policies/albums.server.policy');

  // Albums Routes
  app.route('/api/albums').all()
    .get(albums.list).all(albumsPolicy.isAllowed)
    .post(albums.create);

  app.route('/api/albums/:albumId').all(albumsPolicy.isAllowed)
    .get(albums.read)
    .put(albums.update)
    .delete(albums.delete);

  // Finish by binding the Album middleware
  app.param('albumId', albums.albumByID);
};
