var app = angular.module('myApp', []);

        app.controller('myCtrl', function($scope){
            $scope.name = "Vinh";
            $scope.person = person;
            $scope.people = value;
        });

        app.controller('secondCtrl', function($scope){
            $scope.name = "The";
        });


var person = {
    firstname   : 'Ly',
    lastname    : 'Vinh',
    id          : '100976525',
    major       : 'software',
    units       : ['EEE20001', 'PHY10001', 'PHY10004']
};

var value = [
    {
      "Name" : "Alfreds Futterkiste",
      "Country" : "Germany"
    },
    {
      "Name" : "Berglunds snabbköp",
      "Country" : "Sweden"
    },
    {
      "Name" : "Centro comercial Moctezuma",
      "Country" : "Mexico"
    },
    {
      "Name" : "Ernst Handel",
      "Country" : "Austria"
    },
    {
      "Name" : "The Vinh Ly",
      "Country" : "Viet Nam"
    }
  ];