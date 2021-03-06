'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Photo Schema
 */
var PhotoSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Photo name',
    trim: true
  },
  flickrUrl: {
    type: String,
    default: '',
    required: 'Please fill Flickr Url',
    trim: true
  },
  price: {
    type: String,
    default: '',
    required: 'Please fill price',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  album: {
    type: Schema.ObjectId,
    ref: 'Album'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Photo', PhotoSchema);
