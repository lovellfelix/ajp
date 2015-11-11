'use strict';

// Configuring the Photos module
angular.module('photos').run(['Menus',
  function(Menus) {
    // Add the Photos dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Photos',
      state: 'photos',
      type: 'dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'photos', {
      title: 'List Photos',
      state: 'photos.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'photos', {
      title: 'Create Photo',
      state: 'photos.create'
    });
  }
]);
