'use strict';
angular
	.module('DelmarApp')
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('grey', {
			'default':'800', // by default use shade 400 (500)from the pink palette for primary intentions
			'hue-1' : '100', // use shade 100 (200)for the <code>md-hue-1</code> class
			'hue-2' : '900', // use shade 600 (800)for the <code>md-hue-2</code> class
			'hue-3' : 'A100' // use shade A100 (100)for the <code>md-hue-3</code> class
		})
		.accentPalette('cyan', {
		'default' : '600' // use shade 200 for default, and keep all the other shades the same
		})
		.warnPalette('indigo', {
		  'default' : '500'
		})
		.backgroundPalette('grey');
  })	