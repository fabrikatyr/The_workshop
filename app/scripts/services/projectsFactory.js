'use strict';

app.factory('projectsFactory', function($resource) {
   return $resource('/api/project/:id', {id: '@id'});
   
});

