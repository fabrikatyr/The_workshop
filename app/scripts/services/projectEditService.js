'use strict';

app.service('projectEditService', function NewProject(localStorage, $rootScope, $http /* alert */) {
   var self = this;
   
  self.add = function(newProject) {
  
      self.project = {
		newProject = angular.copy(newProject);
        item.qty = 1;
        self.newProject.push(newProject);
      };
    }
	
	
	 var topID = projects.length + 1;
        projects.push({
            id: topID,
            projectName: projectName,
            unitquantity: unitquantity, 
            unitprice: unitprice, 
            duedate: duedate, 
            startdate: startdate,
            fabprocess: fabprocess
        });
  

 */
  createPersistentProperty('project', 'newproject', Array);
  /* createPersistentProperty('restaurant', 'fmCartRestaurant', Object); */
  /* self.payment = {}; // don't keep CC info in localStorage */


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