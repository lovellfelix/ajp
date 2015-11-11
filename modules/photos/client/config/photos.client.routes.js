'use strict';

//Setting up route
angular.module('photos').config(['$stateProvider',
  function($stateProvider) {
    // Photos state routing
    $stateProvider.
    state('photos', {
      abstract: true,
      url: '/photos',
      template: '<ui-view/>'
    }).
    state('photos.list', {
      url: '',
      templateUrl: 'modules/photos/client/views/list-photos.client.view.html'
    }).
    state('photos.create', {
      url: '/create',
      templateUrl: 'modules/photos/client/views/create-photo.client.view.html'
    }).
    state('photos.view', {
      url: '/:photoId',
      templateUrl: 'modules/photos/client/views/view-photo.client.view.html'
    }).
    state('photos.edit', {
      url: '/:photoId/edit',
      templateUrl: 'modules/photos/client/views/edit-photo.client.view.html'
    });
  }
]);
