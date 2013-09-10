/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the projectsService and associates it with the $scope
//The $scope is ultimately bound to the projects view
app.controller('projectsController', function projectsController($scope,$modal,projectsFactory,$http,$resource){
	
	$scope.projects = 	projectsFactory.query();

	$scope.update = function(){
    $scope.projects = 	projectsFactory.query();
	}
	
	
	

	$scope.open = function (id) {
	
		var modalInstance =   $modal.open({
			templateUrl: '/views/projectEdit.html',
			controller: ModalInstanceCtrl,
			resolve: {
			projects: function () {
			return $scope.projects[id];
        }
      }
    });

		modalInstance.result.then(function (project) {
		$scope.project = project;
		}, function () {
		$log.info('Modal dismissed at: ' + new Date());
		});
  };


var ModalInstanceCtrl = function ($scope, $modalInstance,projects) {
	$scope.projects = projects;
	$scope.selected = {
    project: $scope.projects
  };

  $scope.ok = function () {
  
  var API_URL = '/api/project/' + $scope.projects.id;
  $http({
            method: 'PUT',
            url: API_URL,
            data: JSON.stringify( {
			label : $scope.projects.label,
            projectName: $scope.projects.projectName,
            unitquantity: $scope.projects.unitquantity, 
            unitprice: $scope.projects.unitprice, 
            duedate: $scope.projects.duedate, 
            startdate: $scope.projects.startdate
			} ),
            headers: {'Content-Type': 'application/json'}
        })
        .success(function(){
           
        });
  
    
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
    
  



	$scope.del = function(idx,project){
		//Delete's data from Scope & removes from JSON file
		var id = project.id;
		$scope.projects.splice( idx, 1 );
		
		$http({
			method: 'DELETE',
            url:'/api/project/' + id,
			data: { id:  id } 
        })
        .success(function(){
            $scope.update();
        }); 
	}
	
 }); 


 
app.controller('CollapseDemoCtrl',function ($scope) {
  $scope.isCollapsed = false;
});


app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {
   var modalInstance = $modal.open({
      templateUrl: '/views/projectEdit.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

});


app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.project = project;
  
  $scope.selected = {
    project: $scope.project
  };

  $scope.ok = function () {
   $modalInstance.close($scope.selected.project);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


//This controller retrieves data from the projectsService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('projectdetailController', function ($scope, projectsFactory) {
    $scope.projects = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.projects = projectsFactory;
    }
});



//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a Project. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('projectChildController', function ($scope) {
    $scope.orderby = 'id';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.project && $scope.project.fabprocess) {
            var total = 0.00;
            for (var i = 0; i < $scope.project.fabprocess.length; i++) {
                var costtotal = $scope.project.fabprocess[i].costperhour*$scope.project.fabprocess[i].duration;
                
                total += costtotal.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
