'use strict';
angular
	.module('DelmarApp')
.config(
	[   	  '$stateProvider', '$urlRouterProvider',
      function($stateProvider,    $urlRouterProvider) {
  //
     /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////
	// $urlRouterProvider.otherwise('/News');
      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	//$urlRouterProvider
	// The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
	
	// For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/partials/News")
  //
  // Now set up the states
   //////////
        // Home //
        //////////
  $stateProvider
	 .state('News', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/News',
      templateUrl: 'partials/News.html'
    })
	.state('Admin', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Admin',
      templateUrl: 'partials/Admin.html'
    })
	.state('DelCom', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/DelCom',
      templateUrl: 'partials/Delcom.html'
    })
	.state('DelCRM', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/DelCRM',
      templateUrl: 'partials/Delcrm.html'
    })
	.state('DelBI', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/DelBI',
      templateUrl: 'partials/Delbi.html'
    })
	.state('DelDocs', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/DelDocs',
      templateUrl: 'partials/Deldocs.html'
    })
	.state('Accounts', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Accounts',
      templateUrl: 'partials/accounts.html'
    })
	.state('Finance', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Finance',
      templateUrl: 'partials/finance.html'
    })
	.state('Brokerage', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Brokerage',
      templateUrl: 'partials/Brokerage.html'
    })
	.state('Freight', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Freight',
      templateUrl: 'partials/Freight.html'
    })
	.state('Sales', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Sales',
      templateUrl: 'partials/Sales.html'
    })
	.state('HR', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/HR',
      templateUrl: 'partials/hr.html'
    })
	.state('Links', {
		// Use a url of "/" to set a state as the "index".
      url: '/partials/Links',
      templateUrl: 'partials/links.html'
    })
    .state('state1', {
		// Use a url of "/" to set a state as the "index".
      url: '/state1',
      templateUrl: 'state1.html'
    })
		.state('state1.list', {
		url: '/list',
		templateUrl: 'state1.list.html',
		controller: function($scope) {
			$scope.items = ["A", "List", "Of", "Items"];
		}
		})
    .state('state2', {
      url: '/state2',
      templateUrl: 'state2.html'
    })
		.state('state2.list', {
		url: '/list',
		templateUrl: 'state2.list.html',
		controller: function($scope) {
			$scope.things = ["A", "Set", "Of", "Things"];
		}
		})
}])