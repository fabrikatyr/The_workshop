'use strict';

app.controller('projectEditController', function projectEditController(localStorage,$scope, $http) {
		
	$scope.add = function(){
        $http({
            method: 'POST',
            url: '/api/project',
            data: JSON.stringify( {newProject: $scope.newProject} ),
            headers: {'Content-Type': 'application/json'},
        })
        .success(function(){
            $scope.$parent.update();
        });
		
		
		// var self = this;

	/* self.add = function(newProject,projects) {
	  
			newProject = angular.copy(newProject);
         
			var newProject = (JSON.stringify(newProject));
		
		 // $rootScope.$apply(function(){ 
			$http.post('/api/project', newProject ).then(function(response) {
				newProject.id = response.data.id;
				});
		
      // }); */
    };
     

  
  createPersistentProperty('project', 'projects', Object);
  


  function createPersistentProperty(localName, storageName, Type) {
    var json = localStorage[storageName];

    self[localName] = json ? JSON.parse(json) : new Type;

    $rootScope.$watch(
        function() { return self[localName]; },
        function(value) {
          if (value) {
            localStorage[storageName] = JSON.stringify(value);
          }
        },
        true);
  }
});
