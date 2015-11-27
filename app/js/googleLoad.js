function load() {
	var feed ="http://blog.delmarcargo.com/feed/";
	var options ={ 
		numResults : 3,
		displayTime : 100000,
		fadeOutTime : 500,
		scrollOnFadeOut : false,
		horizontal : false,
		stacked : true,
		sortByDate : true,
		}
	new GFdynamicFeedControl(feed, "feedGadget", options);
}
google.load("feeds", "1");
google.setOnLoadCallback(load);