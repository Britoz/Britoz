var app = angular.module('index-App',[]);

    app.controller('middleInfor-ctrl', function($scope, $http){
        
    });

    app.controller('secondRightDiv-ctrl', function($scope, $http){
        $http({
            method  : "get",
            url     : "Model/leftData.php"
        }).then(function mySuccess(response){
            $scope.popular_post = response.data.popular_post;
        });
    });

    app.controller('leftMenu-ctrl', function($scope, $http){

        var people_face ="";
        var people_background = "";
        $http({
            method  : "get",
            url     : "Model/staff_data.php" 
        }).then(function mySuccess(response){
            $scope.staff_face = {
                "background-image" : response.data.staff_img[0].img
            };
            $scope.img_link = {
                "background-image" : response.data.staff_img[0].background
            };
        });
    });