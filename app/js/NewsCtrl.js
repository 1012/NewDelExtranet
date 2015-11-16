'use strict';
angular
	.module('DelmarApp')
		.controller('BlogCtrl', ['$scope', 'BlogList', '$location', '$http', '$timeout', '$q', '$log', function($scope, BlogList, $location,$http, $timeout, $q, $log)

 {  
	 $scope.feeds=BlogList.get();
	 
 }])
  
  // var self = this;
  // var pendingTask;
  // var news_url 
  // var News = [];
    
  // $scope.newsLoaded = false;
  // $scope.userLoaded = false;
  
   // function fetchNews(){
	   // $http.get("http://blog.delmarcargo.com/feed/")
		// .success(function(data){
			// $scope.newsData = data;
			 // loadNews();
		 // });
		 // var loadNews = function() {
		 // $http.get($scope.newsData)
			 // .success(function (data){
				 // $scope.newsData = data;
			 // });
	 // };
	// };
	
	 // $scope.update = function(login){
		 // $scope.searchUser = login;
		 // $scope.change();
		
	 // };
	
	   // $scope.select = function(){
       // this.setSelectionRange(0, this.value.length);
     // };
	
	// $scope.predicate = '-updated_at';
	
	/////////////////////////////////////////////////////////////

	
	
	// $scope.counter = 0;
	
	// if($scope.search === undefined){
	// $scope.search = "Toronto";
		// fetch();
	// };
	
	
	// $scope.change = function() {
		// if(pendingTask){
			// clearTimeout(pendingTask);
		// }
		// pendingTask = setTimeout(fetch, 800);
	// };
	
	// function fetch(){
			// $http.get("https://api.github.com/search/users?q=location:"+$scope.search)
			// .success(function(data2){
				 // $scope.usersData = data2;
				 // loadItems();
			 // });
	// };
	
	// $scope.update = function(users){
		// $scope.search = users.location;
		// $scope.change();
		
	// };
	
	  // $scope.select = function(){
      // this.setSelectionRange(0, this.value.length);
    // };
	
	///////////////////////////////////////////////////////////////////
	
	// var pendingTask2;
	
	// $scope.counter = 0;
	
	// if($scope.search2 === undefined){
	// $scope.search2 = "Python";
		// fetch2();
	// };
	
	
	// $scope.change = function() {
		// if(pendingTask2){
			// clearTimeout(pendingTask2);
		// }
		// pendingTask2 = setTimeout(fetch2, 800);
	// };
	
	// function fetch2(){
	// $scope.items2Loaded = false;
	
	// $http.get("https://api.github.com/search/users?q=location:"+$scope.search+"+language:"+$scope.search2)
		// .success(function(data3){
			// $scope.usersData2 = data3;
			// loadItems2();
		// });
	// }
	
	// $scope.update = function(users){
		// $scope.search2 = users.language;
		// $scope.change();
		
	// };
	
	  // $scope.select = function(){
      // this.setSelectionRange(0, this.value.length);
    // };

  
    
  //*******************
  // Internal Methods
  //*******************
  
  
	
	 // function loadMaintools() {
	// MainSidenavService.loadAllTools()
      // .then(function(maintools){
        // allMaintools = maintools;
        // $scope.maintools = [].concat(maintools);
        // $scope.selected = $scope.maintools[0];
     // })
  // }
  
  // function toggleSidenav(name) {
    // $mdSidenav(name).toggle();
  // }
  
  // function selectMaintool(maintool) {
    // $scope.selected = angular.isNumber(maintool) ? $scope.maintools[maintool] : maintool;
    // $scope.toggleSidenav('left');
  // }
  
 


	