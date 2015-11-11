'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  path = require('path'),
  mongoose = require('mongoose'),
  Photo = mongoose.model('Photo'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Photo
 */
exports.create = function(req, res) {
  var photo = new Photo(req.body);
  photo.user = req.user;

  photo.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(photo);
    }
  });
};

/**
 * Show the current Photo
 */
exports.read = function(req, res) {
  res.jsonp(req.photo);
};

/**
 * Update a Photo
 */
exports.update = function(req, res) {
  var photo = req.photo;

  photo = _.extend(photo, req.body);

  photo.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(photo);
    }
  });
};

/**
 * Delete an Photo
 */
exports.delete = function(req, res) {
  var photo = req.photo;

  photo.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(photo);
    }
  });
};

/**
 * List of Photos
 */
exports.list = function(req, res) {
  Photo.find().sort('-created').populate('user', 'displayName').exec(function(err, photos) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(photos);
    }
  });
};

/**
 * Photo middleware
 */
exports.photoByID = function(req, res, next, id) {
  Photo.findById(id).populate('user', 'displayName').exec(function(err, photo) {
    if (err) return next(err);
    if (!photo) return next(new Error('Failed to load Photo ' + id));
    req.photo = photo;
    next();
  });
};
