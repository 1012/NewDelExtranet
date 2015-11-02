'use strict';

/* jasmine specs for controllers go here */

describe('AppCtrlDelmar', function() {
	
	beforeEach(module('DelmarApp'));

  it("should to display and control the menu", inject(function($controller) {
	var scope ={},
		ctrl= $controller('AppCtrlDelmar',{$scope:scope});
	expect(scope.phones.length).toBe(3);
  }));

});
