'use strict';
angular
	.module('DelmarApp')
	.config(function($mdThemingProvider) {
		// $mdThemingProvider.definePalette('DelmarPalette',{
			// '50': 'ffedee',
			// '100': 'ffcdd2',
			// '200': 'f3f7fa',
			// '300': 'e3e3e3',
			// '400': 'ef5350',
			// '500': 'f44336',
			// '600': 'e53935',
			// '700': 'd32f2f',
			// '800': '004685',
			// '900': 'b71c1c',
			// 'A100': 'ee3d42'
			// 'A200': 'ff5252'
			// 'A400': 'ff1744',
			// 'A700': 'd50000',
			// 'contrastDefaultColor': 'light', //whether, by default, text (contrast) on this palette should be dark or light
			// 'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
			// '200', '300', '400', 'A100],
			// 'contrastLightColors': undefined //could also specify this if default was 'dark'
		// });
		$mdThemingProvider.theme('default')
			.primaryPalette('grey', {
			'default':'300', // by default use shade 400 (500)from the pink palette for primary intentions
			'hue-1' : '50', // use shade 100 (200)for the <code>md-hue-1</code> class
			'hue-2' : '800', // use shade 600 (800)for the <code>md-hue-2</code> class
			'hue-3' : 'A100' // use shade A100 (100)for the <code>md-hue-3</code> class
		})
		.accentPalette('blue', {
		'default' : '900' // use shade 200 for default, and keep all the other shades the same
		})
		.warnPalette('red', {
		  'default' : '600'
		})
		.backgroundPalette('grey');
  })	