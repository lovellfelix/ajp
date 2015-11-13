'use strict';

//Setting up route
angular.module('flickr').config(['$stateProvider',
  function($stateProvider) {
    // Flickrs state routing
    $stateProvider.
    state('flickr', {
      abstract: true,
      url: '/flickr',
      template: '<ui-view/>'
    }).
    state('flickr.list', {
      url: '',
      templateUrl: 'modules/flickr/client/views/list-flickr.client.view.html'
    });
  }
]);
