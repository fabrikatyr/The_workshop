/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('customersApp', ['ngResource','ui.bootstrap','google-chart-sample','material-chart','revenue-chart']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        
        .when('/projects',
            {
                controller: 'projectsController',
                templateUrl: '/views/projects.html'
            })
         .when('/materials',
            {
                controller: 'materialsController',
                templateUrl: '/views/materials.html'
            })
         .when('/activities',
            {
                controller: 'activityController',
                templateUrl: '/views/activities.html'
            })
         .when('/projectdetail',
            {
                controller: 'projectdetailController',
                templateUrl: '/views/projectdetail.html'
            })
         .when('/dashboard',
            {
				controller: 'projectdetailController',
				controller: 'projectdetailController',
                templateUrl: '/views/dashboard.html'
            })
        .otherwise({ redirectTo: '/projects' });
});




