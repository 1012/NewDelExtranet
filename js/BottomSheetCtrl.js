'use strict'
var self = this;
app.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
  $scope.showGridBottomSheet = function($event){
	$scope.alert = '';
	$mdBottomSheet.show({
		templateUrl: 'bottom-sheet-grid-template.html',
		controller: 'GridBottomSheetCtrl',
		targetEvent: $event
	}).then(function(clickedItem){
		$scope.alert = clickedItem.name + 'clicked!';
	});
	};
})
app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share-arrow' },
    { name: 'Upload', icon: 'upload'},
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print'},
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
app.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet){
	$scope.items = [
	{name: 'Country', icon: 'country'},
	{name: 'Date', icon: 'date'},
	{name: 'Holiday Name', icon: 'holiday'},
	{name: 'Description', icon: 'description'},
	];
	$scope.listItemClick = function($index){
		var clickedItem = $scope.items[$index];
		$mdBottomSheet.hide(clickedItem);
	};
})