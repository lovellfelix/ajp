'use strict';

//Setting up route
angular.module('albums').config(['$stateProvider',
  function($stateProvider) {
    // Albums state routing
    $stateProvider.
    state('albums', {
      abstract: true,
      url: '/albums',
      template: '<ui-view/>'
    }).
    state('albums.list', {
      url: '',
      templateUrl: 'modules/albums/client/views/list-albums.client.view.html'
    }).
    state('albums.create', {
      url: '/create',
      templateUrl: 'modules/albums/client/views/create-album.client.view.html'
    }).
    state('albums.view', {
      url: '/:albumId',
      templateUrl: 'modules/albums/client/views/view-album.client.view.html'
    }).
    state('albums.edit', {
      url: '/:albumId/edit',
      templateUrl: 'modules/albums/client/views/edit-album.client.view.html'
    });
  }
]);
