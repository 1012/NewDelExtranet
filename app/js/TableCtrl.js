'use strict'
app.controller('TableCtrl', ['$scope', function($scope){
  $scope.toggleSearch = false;   
  $scope.headers = [
    {
      name:'',
      field:'thumb'
    },{
      name: 'Name', 
      field: 'name'
    },{
      name:'Description', 
      field: 'description'
    },{
      name: 'Last Modified', 
      field: 'last_modified'
    }
  ];
  
  
  $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
  $scope.sortable = ['name', 'description', 'last_modified'];
  $scope.thumbs = 'thumb';
  $scope.count = 3;
}]);

app.directive('mdTable', function () {
  return {
    restrict: 'E',
    scope: { 
      headers: '=', 
      content: '=', 
      sortable: '=', 
      filters: '=',
      customClass: '=customClass',
      thumbs:'=', 
      count: '=' 
    },
    controller: function ($scope,$filter,$window) {
      var orderBy = $filter('orderBy');
      $scope.tablePage = 0;
      $scope.nbOfPages = function () {
        return Math.ceil($scope.content.length / $scope.count);
      },
      	$scope.handleSort = function (field) {
          if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
      };
      $scope.order = function(predicate, reverse) {
          $scope.content = orderBy($scope.content, predicate, reverse);
          $scope.predicate = predicate;
      };
      $scope.order($scope.sortable[0],false);
      $scope.getNumber = function (num) {
      			    return new Array(num);
      };
      $scope.goToPage = function (page) {
        $scope.tablePage = page;
      };
    },
    template: angular.element(document.querySelector('#md-table-template')).html()
  }
});

app.directive('mdColresize', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$evalAsync(function () {
        $timeout(function(){ $(element).colResizable({
          liveDrag: true,
          fixed: true
          
        });},100);
      });
    }
  }
});

app.filter('startFrom',function (){
   return function (input,start) {
	 if (!input || !input.length) { return; }
     start = +start; //parse to int
     return input.slice(start);
   }
 });