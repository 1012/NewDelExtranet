
'use strict';

 
    // function injectScript(url) {
      // var scriptElement = document.createElement('script');
      // scriptElement.setAttribute('type', 'text/javascript');
      // scriptElement.setAttribute('src', url);
      // document.getElementsByTagName('head')[0].appendChild(scriptElement);
    // }
    // function handleResponse(response) {
	   // // console.log(response);
	    // var text = '',
		      // item;
	    // for (var i = 0, k = 4; i < k; i++) { //only shows 3 results
		    // item = response.query.results.item[i];
			// text += '<li><a href="' + item.link.href + '">' + item.title + '</a><p>'+ item.pubDate +'</p><p>'  + item.category + '</p><p>' + item.description + '</p></li>';
	    // }
	    // document.getElementById('feed').innerHTML = text;
    // }
    // document.addEventListener("DOMContentLoaded", function() {
	    // // https://developer.yahoo.com/yql/console/
	    // // select * from feednormalizer where url='http://news.ycombinator.com/rss' and output='atom_1.0'
		// //select * from rss where url='http://blog.delmarcargo.com/feed/' 
	    // injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fblog.delmarcargo.com%2Ffeed%2F'%20and%20category%3D%22English%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse");  
    // }, false );
 
  
 google.load("feeds", "1");
     function initialize() {
	  var feed = new google.feeds.Feed("http://blog.delmarcargo.com/category/English/feed/");
	//  var feed = new google.feeds.Feed("http://www.delmarcargo.com/apps/mobile/news");
		  feed.setNumEntries(2);
       feed.load(function(result) {
         if (!result.error) {
           var container = document.getElementById("feed");
           for (var i = 0; i < result.feed.entries.length; i++) {
             var entry = result.feed.entries[i];
             var div = document.createElement("div");
			 var h3 = document.createElement("h3");
			 var h4 = document.createElement("h4");
			 var h5 = document.createElement("h5");
			 var h6 = document.createElement("h6");
			 var p = document.createElement("p");
			 var a = document.createElement("a");
			 var href = document.createElement("href")
             div.appendChild(document.createTextNode(entry.title));
			 a.setAttribute('class','gfg-listentry gfg-listentry-odd');
			 a.setAttribute('href',entry.link);
			 h4.appendChild(document.createTextNode(entry. title));
			 h3.appendChild(document.createTextNode(entry.publishedDate));
			 h5.appendChild(document.createTextNode(entry.author));
			 h6.appendChild(document.createTextNode(entry.categories));
			 p.appendChild(document.createTextNode(entry.contentSnippet));	
			 container.appendChild(a).appendChild(h4).appendChild(h3).appendChild(h5).appendChild(h6).appendChild(p);		
           }
         }
       });
     }
     google.setOnLoadCallback(initialize);
	  google.setOnLoadCallback(OnLoad);
	  google.setOnLoadCallback(handler);
	
