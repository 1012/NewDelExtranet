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

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
	.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
	});
	
	
// angular
	// .module('DelmarApp')
	// .controller('PolicyCtrl', ['$scope', 'policyService', '$timeout','$log', function($scope, policyService, $timeout, $log) {
	// var allPolicies = [];
  
// //  $scope.selected = null;
  // $scope.policies = allPolicies;
  // $scope.orderProp = 'date';
 // // $scope.selectPolicy = selectPolicy;
  // /*$scope.toggleSidenav = toggleSidenav;*/
  
  // loadPolicies();
  
  // //*******************
  // // Internal Methods
  // //*******************
  // function loadPolicies() {
    // policyService.loadAllPolicies()
      // .then(function(policies){
        // allPolicies = policies;
        // $scope.policies = [].concat(policies);
// //        $scope.selected = $scope.policies[0];
      // })
  // }
  
  // /*function toggleSidenav(name) {
    // $mdSidenav(name).toggle();
  // }*/
  
  // function selectPolicy(policy) {
    // $scope.selected = angular.isNumber(policy) ? $scope.policies[policy] : policy;
    // /*$scope.toggleSidenav('left');*/
  // }
// }])
	

