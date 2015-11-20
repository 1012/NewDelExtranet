angular
	.module('DelmarApp')
	.controller('PolicyCtrl', ['$scope', '$http', '$timeout', '$q','$log', function($scope, $http, $timeout, $q, $log) 
{	
 $http.get("http://www.delmarcargo.com/apps/test/policies.jsp")
	.success(function(data){
		 $scope.policiesData = data.policies;
		 });
	$scope.limit = 5;
	$scope.predicate = 'date';
	
	 $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data = [];
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }
    for (var i=0; i<100; i++) {
        $scope.data.push("Item "+i);
    }
}])



