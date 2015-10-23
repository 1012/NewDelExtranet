'use strict';
angular
	.module('DelmarApp')
	.service('MainSidenavService', ['$http', '$log', '$timeout', '$q',  function($http, $log, $timeout, $q  ) {
	var maintools = [{
      name: 'News',
    //  templateUrl: 'Notices.html'
      content: 'Notices.html'
	  }, {
      name: 'Admin'
     // templateUrl: '',
     // content: ''      	 
  }, {
      name: 'DelCom'
    //  templateUrl: '',
    //  content: ''
      
  }, {
      name: 'DelCRM'
     // templateUrl: '',
     // content: ''      	 
  }, {
      name: 'DelBI'
     // templateUrl: '',
     // content: ''      	 
	 }, {
      name: 'DelDocs'
     // templateUrl: '',
     // content: ''      	 
	}, {
      name: 'Accounts'
     // templateUrl: '',
    //  content: ''      	 
	  }, {
      name: 'Finance'
     // templateUrl: '',
     // content: ''      	 
	  }, {
      name: 'Brokerage'
     // templateUrl: '',
     // content: ''      	 
	  }, {
      name: 'Freight'
     // templateUrl: '',
     // content: ''      	 
	  }, {
      name: 'Sales'
    //  templateUrl: '',
    //  content: ''  
}, {
      name: 'HR'
    //  templateUrl: '',
    //  content: ''
}, {
      name: 'Links'
     // templateUrl: '',
     // content: ''      	 	  
  }];

  // Promise-based API
  return {
      loadAllTools: function() {
          // Simulate async nature of real remote calls
          return $q.when(maintools);
      }
  };
}])