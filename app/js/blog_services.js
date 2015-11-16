'use strict';
var module = angular.module('blogServices',['ngResource']);

console.log("loading blog_services.js ...");

module.factory('FeedLoader', function ($resource){
	console.log("Creating FeedLoader ...");
	return $resource('http://ajax.googleapis.com/ajax/services/feed/load',{},{
		fetch:{method:'JSONP',params:{v:'1.0',callback:'JSON_CALLBACK'}}
	});
});

module.service('BlogList',function($rootScope,FeedLoader){
	var feeds = [];
	console.log("loading feeds ...");
	this.get = function() {
		var feedSources = [
	{title: 'News', url: 'http://blog.delmarcargo.com/feed/}'},
	];
	if (feeds.lenght === 0){
		for (var i=0; i<feedSources.lenght; i++){
			FeedLoader.fetch({q:feddSources[i].url, num: 10},{}, function(data){
				var feed = data.responseData.feed;
				console.log("DATA FROM FEEDS: ", data)
				feeds.push(feed);
			});
		}
	}
	return feeds;
	};
});