'use strict';
angular
	.module('DelmarApp')
		.controller('AppCtrlDelmar', ['$scope', 'MainSidenavService', '$mdSidenav', '$location', '$http', '$timeout', '$q', '$log', function($scope, MainSidenavService, $mdSidenav,$location,$http, $timeout, $q, $log)

 {
 
  var allMaintools = [];
  var self = this;
  
  $scope.selected = null;
  $scope.maintools = allMaintools;
  $scope.selectMaintool = selectMaintool;
  $scope.toggleSidenav = toggleSidenav;
  
  
  
  loadMaintools();
  
	$scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-left'
      };
	 
	self.simulateQuery = false;
	self.isDisabled    = false;
	//list of 'languages' value/display objects
	self.languages      = loadAllLanguages();
	self.querySearch    = querySearch;
	self.selectedItemChange = selectedItemChange;
	self.searchTextChange = searchTextChange;
	
	$scope.myDate = new Date();

      $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());

      $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
	
	
    $scope.todos = [
      {
    
        what: 'USA - Transpacific Ocean Freight Carriers Announce a General Rate Increase for September 1, 2015',
        who: '08-11-2015',
        when: '3:08PM',
        notes: "Internal",
		language: "English"
      },
      {
    
        what: 'Canada Import – August 1 Transpacific GRI Update',
        who: '08-05-2015',
        when: '3:08PM',
        notes: "Internal",
		language: "French"
      },
      {
    
        what: 'Los Angeles & Long Beach PierPass Traffic Mitigation Fee to Increase',
        who: '07-31-2015',
        when: '3:08PM',
        notes: "Internal",
		language: "Spanish"
      },
      {
    
        what: 'U.S. Customs Provides GSP Renewal Refund Guidance',
        who: '07-22-2015',
        when: '3:08PM',
        notes: "Internal",
		Language: "English"
      },
      {
    
        what: 'USA Import - Transpacific Ocean Freight Carriers Announce August GRI and Postpone July PSS',
        who: '07-16-2015',
        when: '3:08PM',
        notes: "Internal",
		Language: "French"
      },
    ];
	
  
  $scope.toggleSearch = false;   
  
  $scope.user ={
	 salutation: '',
	 firstName: '',
	 lastName: '',
	 title: '',
	 department: '',
	 accountName: '',
	 address: '',
	 city: '',
	 state: '',
	 postalCode: '',
	 country: '',
	 officePhone: '',
	 mobile: '',
	 fax: '',
	 email: '',
	 website: '',
	 referredBy: '',
	 leadSource: '',
	 description: ''
  };
  
      
  
  // $scope.headers = [
    // {
      // name:'',
      // field:'thumb'
    // },{
      // name: 'Name', 
      // field: 'name'
    // },{
      // name:'Description', 
      // field: 'description'
    // },{
      // name: 'Last Modified', 
      // field: 'last_modified'
    // }
  // ];
    
  //*******************
  // Internal Methods
  //*******************
  /**
  *Search for languages ... use $timeout to simulate
  *remote dataservice call.
  */
 /*  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
*/  
  function querySearch (query){
	var results = query?self.languages.filter(createFilterFor(query)): self.languages,
			deferred;
		if (self.simulateQuery){
		deferred = $q.defer();
		$timeout(function () { deferred.resolve(results);}, Math.random() * 1000, false);
		return deferred.promise;
		} else {
		return results;
		}
	}
	function searchTextChange(text) {
		$log.info('Text changed to ' + text);
	}
	function selectedItemChange(item) {
		$log.info('Item changed to' + JSON.stringify(item));
	}
	/**
	*Build 'languages' list of key/value pairs
	*/
	function loadAllLanguages(){
		var allLanguages = 'Chinese, English, French, Portuguese, Spanish';
		return allLanguages.split(/, +/g).map(function (language){
			return{
				value: language.toLowerCase(),
				display: language
				};
			});
		}
	/**
	* Create filter function for a query string
	*/
/*	function createFilterFor(query){
		var lowercaseQuery = angular.lowercase(query);
		return function filterFn(language) {
		return (language.value.indexOf(lowercaseQuery) === 0);
		};
	}*/
	
	 function loadMaintools() {
	MainSidenavService.loadAllTools()
      .then(function(maintools){
        allMaintools = maintools;
        $scope.maintools = [].concat(maintools);
        $scope.selected = $scope.maintools[0];
     })
  }
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectMaintool(maintool) {
    $scope.selected = angular.isNumber(maintool) ? $scope.maintools[maintool] : maintool;
    $scope.toggleSidenav('left');
  }
}])

	