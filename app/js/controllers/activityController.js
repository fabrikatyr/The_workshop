app.controller('activityController', function ($scope, activitiesService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.activities = activitiesService.getActivities();
    }

    $scope.insertActivity = function () {
        var activityName = $scope.newActivity.activityName;
        var activitydescriptor = $scope.newActivity.activitydescriptor;
        var costperhour = $scope.newActivity.costperhour;
        var activitymaterial = $scope.newActivity.activitymaterial;
        activitiesService.insertActivity(activityName ,activitydescriptor,costperhour,activitymaterial);
        $scope.newActivity.activityName='';
        $scope.newActivity.activitymaterial='';
        $scope.newActivity.costperhour='';
        $scope.newActivity.activitydescriptor='';
       
    };

    $scope.deleteActivity = function (id) {
        activitiesService.deleteActivity(id);
    };

});

//This controller retrieves data from the activitiesService and associates it with the $scope
//The $scope is bound to the order view
app.controller('ActivityOrdersController', function ($scope, $routeParams, activitiesService) {
    $scope.Activity = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab ActivityID off of the route        
        var ActivityID = ($routeParams.ActivityID) ? parseInt($routeParams.ActivityID) : 0;
        if (ActivityID > 0) {
            $scope.Activity = activitiesService.getActivity(ActivityID);
        }
    }

});

//This controller retrieves data from the activitiesService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('OrdersController', function ($scope, activitiesService) {
    $scope.activities = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.activities = activitiesService.getactivities();
    }
});



//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a Activity. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('activityChildController', function ($scope) {
    $scope.orderby = 'activityName';
    $scope.reverse = false;
    $scope.stockTotal = 0.00;

    init();

    function init() {
        
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        
            var total = 0.00;
            alert(Activity[1]);
            for (var i = 0; i < $scope.Activity.length; i++) {
                var order = $scope.activities[i].unitcost;
                total += activities.stockTotal;
            }
            $scope.stockTotal = total;
        
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
