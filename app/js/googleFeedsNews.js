
'use strict';

google.load("feeds", "1");
    function initialize() {
	 var feed = new google.feeds.Feed("http://blog.delmarcargo.com/category/English/feed/");
		 feed.setNumEntries(3);
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
	
