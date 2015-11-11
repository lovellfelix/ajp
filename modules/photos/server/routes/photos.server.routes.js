'use strict';

module.exports = function(app) {
  var photos = require('../controllers/photos.server.controller');
  var photosPolicy = require('../policies/photos.server.policy');

  // Photos Routes
  app.route('/api/photos').all()
    .get(photos.list).all(photosPolicy.isAllowed)
    .post(photos.create);

  app.route('/api/photos/:photoId').all(photosPolicy.isAllowed)
    .get(photos.read)
    .put(photos.update)
    .delete(photos.delete);

  // Finish by binding the Photo middleware
  app.param('photoId', photos.photoByID);
};
