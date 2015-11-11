'use strict';

// Configuring the Albums module
angular.module('albums').run(['Menus',
  function(Menus) {
    // Add the Albums dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Albums',
      state: 'albums',
      type: 'dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'albums', {
      title: 'List Albums',
      state: 'albums.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'albums', {
      title: 'Create Album',
      state: 'albums.create'
    });
  }
]);
