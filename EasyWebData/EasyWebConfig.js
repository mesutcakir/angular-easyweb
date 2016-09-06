angular.module('EasyWeb',["ngSanitize"])
.controller("EasyWebController",["$scope","$http",
function($scope,$http){
  $http.get("EasyWebData/Index.json").success(function(data){
        $scope.Model = data;
    });
}])

.controller("EasyWebHeadController",["$scope","$http",
function($scope,$http){
  $http.get("EasyWebData/Head.json").success(function(data){
        $scope.Model = data;
    });
}]);
