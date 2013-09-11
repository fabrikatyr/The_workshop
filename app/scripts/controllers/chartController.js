'use strict';

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['google-chart-sample']);
});
google.load('visualization', '1', {packages: ['corechart']});

angular.module('revenue-chart', ['googlechart.directives']).controller("revenueChart", function ($scope) {

    var chart1 = {};
    chart1.type = "AreaChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:400px; width:100%;";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "date"},
        {id: "revenue-id", label: "Revenue", type: "number"},
        {id: "spend-id", label: "Spend", type: "number"},
        {id: "unit-id", label: "Units", type: "number"}
    ], "rows": [
        {c: [
            {v: "Date(2013,8,28)"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"}
        ]},
        {c: [
            {v: "Date(2013,8,30)"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12}
        ]},
        {c: [
            {v: "Date(2013,8,31)"},
            {v: 24},
            {v: 5},
            {v: 11}

        ]}
    ]};

    chart1.options = {
        "title": "Revenue and Unit forecast",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxes": {0:{
            "title": "€ EUR", "gridlines": {"count": 10}},
            1:{"title": "Units sold", "gridlines": {"count": 10}}
        },
        "hAxis": {
            "title": "Date"
        },
        "series":{
                0:{"targetAxisIndex":0},
                1:{"targetAxisIndex":0},
                2:{"targetAxisIndex":1}
            }
        };
    

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

angular.module('material-chart', ['googlechart.directives']).controller("materialshareChart", function ($scope) {

   var chart1 = {};
    chart1.type = "PieChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:400px; width:100%;";
    chart1.data = {"cols": [
        {id: "material", label: "Material", type: "string"},
        {id: "materialvalue", label: "materialvalue", type: "number"},
        
    ], "rows": [
        {c: [
            {v: "Wood"},
            {v: 19, f: "42 items"}
            
        ]},
        {c: [
            {v: "Paper"},
            {v: 13},
            
        ]},
        {c: [
            {v: "Gold"},
            {v: 24}
            

        ]}
    ]};

    chart1.options = {
        "title": "Material Value",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "", "gridlines": {"count": 10}
        },
        "hAxis": {
            "title": ""
        }
    };  

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

angular.module('google-chart-sample', ['googlechart.directives']).controller("projectcostChart", function ($scope) {

   var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:400px; width:100%;";
chart1.data = {"cols": [
        {id: "month", label: "Project", type: "string"},
        {id: "revenue-id", label: "Design", type: "number"},
        {id: "spend-id", label: "Laser cutting", type: "number"},
        {id: "unit-id", label: "Assembly / Finishing", type: "number"}
    ], "rows": [
        {c: [
            {v: "Figure"},
            {v: 19 },
            {v: 12},
            {v: 7}
        ]},
        {c: [
            {v: "Statue"},
            {v: 13},
            {v: 1},
            {v: 12}
        ]},
        {c: [
            {v: "Toy"},
            {v: 24},
            {v: 5},
            {v: 11}

        ]},
         {c: [
            {v: "Necklace"},
            {v: 4},
            {v: 30},
            {v: 6}
        ]}
       
    ]};

    chart1.options = {
        "title": "Project Cost",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "EUR €", "gridlines": {"count": 10}
        },
        "hAxis":{"title": "Project Name"}
    };  

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});



