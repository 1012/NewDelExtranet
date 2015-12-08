 'use strict';
     function injectScript(url) {
       var scriptElement = document.createElement('script');
       scriptElement.setAttribute('type', 'text/javascript');
       scriptElement.setAttribute('src', url);
       document.getElementsByTagName('head')[0].appendChild(scriptElement);
     }
     function handleResponse(response) {
	   // console.log(response);
	     var text = '',
		       item;
	     for (var i = 0, k = 4; i < k; i++) { //only shows 3 results
		     item = response.query.results.item[i];
			 text += '<li><a href="' + item.link.href + '"><h4>' + item.title + '</h4><h3>'+ item.pubDate +'</h3></li></a>';
	     }
	     document.getElementById('main-content').innerHTML = text;
     }
     document.addEventListener("DOMContentLoaded", function() {
	     // https://developer.yahoo.com/yql/console/
	     // select * from feednormalizer where url='http://news.ycombinator.com/rss' and output='atom_1.0'
		 //select * from rss where url='http://blog.delmarcargo.com/feed/' 
	     injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fwww.officeholidays.com%2Frss%2Frss.xml'&format=json&diagnostics=true&callback=handleResponse");  
     }, false );
  