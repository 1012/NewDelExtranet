angular.module('DelmarApp')
	.service('policyService', ['$q', function($q) {
	var policies = [{
      subject: 'AMPS - Process and Structure',
      date: '01-22-2013',
      categories: 'Administrative Procedures',
      region:'Canada',
	  language:'English'
  }, {
      subject: 'Bonds of Indemnity',
      date: '03-14-2013',
      categories: 'Administrative Procedures',
      region:'Canada',
	  language:'English'
  }, {
      subject: 'Collections - National Client Account',
      date: '03-14-2015',
      categories: 'Administrative Procedures',
      region:'Canada',
	  language:'English'
  }, {
      subject: 'Corporate Travel & Reimbursement Voyage daffaires et remboursement',
      date: '03-30-2015',
      categories: 'Administrative Procedures',
      region:'Canada',
	  language: 'French'
  }];

  // Promise-based API
  return {
      loadAllPolicies: function() {
          // Simulate async nature of real remote calls
          return $q.when(policies);
      }
  };
}])