'use strict';

// Flickr controller
angular.module('flickr').controller('FlickrController', ['$http', '$scope', '$stateParams', '$location', 'Authentication',
  function($http, $scope, $stateParams, $location, Authentication) {
    $scope.totalItems = 640;
    $scope.currentPage = 4;

    $scope.setPage = function(pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 1750;
    $scope.bigCurrentPage = 1;


    $scope.photos = [];
    $scope.currentPhoto = null;
    $scope.prevPhoto = null;
    $scope.nextPhoto = null;
    $scope.currentPhotoSrc = '';
    $scope.text = '';
    $scope.modalOpened = null;
    // Search

    $scope.search = function(text, page) {
      var pageNumber = $scope.bigCurrentPage;
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a5e95177da353f58113fd60296e1d250&user_id=9977028%40N07' + '&per_page=30&page=' + pageNumber + '&format=json&nojsoncallback=1';

      //var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a2d9c5c413dad6533e108433780b687&tags='+text+'&per_page=30&page='+page+'&format=json&nojsoncallback=1';
      console.log(url);
      $http.get(url).success(function(data) {
        console.log(data);
        if (data.stat === 'ok') {
          $scope.photos = data.photos;
          $scope.photos = data.photos.photo;
          $scope.currentPage = data.photos.page;
          $scope.pages = data.photos.pages;
          $scope.bigTotalItems = data.photos.total;
          //$scope.paginator();
          $scope.loading = false;

        }

      });




    };


  }
]);
