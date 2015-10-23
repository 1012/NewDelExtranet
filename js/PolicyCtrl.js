angular
	.module('DelmarApp')
	.controller('PolicyCtrl', ['$scope', 'policyService', '$timeout','$log', function($scope, policyService, $timeout, $log) {
	var allPolicies = [];
  
//  $scope.selected = null;
  $scope.policies = allPolicies;
  $scope.orderProp = 'date';
 // $scope.selectPolicy = selectPolicy;
  /*$scope.toggleSidenav = toggleSidenav;*/
  
  loadPolicies();
  
  //*******************
  // Internal Methods
  //*******************
  function loadPolicies() {
    policyService.loadAllPolicies()
      .then(function(policies){
        allPolicies = policies;
        $scope.policies = [].concat(policies);
//        $scope.selected = $scope.policies[0];
      })
  }
  
  /*function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }*/
  
  function selectPolicy(policy) {
    $scope.selected = angular.isNumber(policy) ? $scope.policies[policy] : policy;
    /*$scope.toggleSidenav('left');*/
  }
}])

