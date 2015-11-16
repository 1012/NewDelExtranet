'use strict';
	// var feeds = [];
	// google.load("feeds", "1");
	// function initialize() {
      // var feed = new google.feeds.Feed("http://blog.delmarcargo.com/feed/");
      // feed.load(function(result) {
        // if (!result.error) {
          // var container = document.getElementById("feed");
          // for (var i = 0; i < result.feed.entries.length; i++) {
            // var entry = result.feed.entries[i];
            // var div = document.createElement("div");
            // div.appendChild(document.createTextNode(entry.title));
            // container.appendChild(div);
          // }
        // }
      // });
    // }
	// google.setOnLoadCallback(initialize);
	

	
// var feeds = [];

angular
	.module('DelmarApp')
	.factory('FeedLoader', function ($resource) {
        return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
            fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
        });
    });
	.service('FeedList', function ($rootScope, FeedLoader, $q) {
        this.get = function() {
           var deffered = $q.defer();
            var feedSources = [
            {title: 'News', url: 'http://blog.delmarcargo.com/feed/'},
            {title: 'Precision Nutrition', url: 'http://www.precisionnutrition.com/feed'},
            {title: 'Girls Gone Strong', url: 'http://www.girlsgonestrong.com/feed/'},
        ];
        if (feeds.length === 0) {
            for (var i=0; i<feedSources.length; i++) {
                FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
                    var feed = data.responseData.feed;
                    feeds.push(feed);
          deffered.resolve(feeds);
                });
    
            }
        }
       
       return deffered.promise;
    };
});

	.controller('FeedCtrl', ['$scope', 'FeedList', '$http', '$timeout', '$q', '$log', function($scope, FeedList, $http, $timeout, $q, $log){
   FeedList.get().then(function(data){
     
    $scope.feeds = data;
      var findFirstImage = data[0].entries[0].content;
     angular.forEach(data[0].entries, function(value){
       
       
       value.sapleImage =     $(value.content).find('img').eq(0).attr('src');
       console.log(value.sapleImage);
       
     });
      
     
     
   });
    
 
});


	
	
		// .controller('FeedCtrl', function($scope, Item){
			// $scope.items = Item.query({}, function() { // using a JSON service
    // for (var i = 0; i < $scope.items.length; i++) { // the length is 2 here.
        // $scope.items[i].entries = [];
        // console.log(i); // gives '0' and '1' as output in the iterations.
        // var feed = new google.feeds.Feed($scope.items[i].feedUrl);
        // feed.load(function(result) {
            // console.log(i); // gives '2' as output in both the iterations.
            // if (!result.error) {
                // for (var j = 0; j < result.feed.entries.length; j++) {
                    // $scope.items[i].entries[j] = result.feed.entries[j];
                // }
            // }
        // });
    // }
// });
// })
		