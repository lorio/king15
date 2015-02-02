 /*jshint devel:true*/ 
  var count = 3;
	var blog = 'http://www.blog.basilking.net/feed/json';
	$.ajaxSetup({ dataType: "jsonp" });
	$.getJSON(blog + '?callback=?', function (data){		
		$.each(data, function(i,item){	
			if(i < count) {	
			$('#rss').append("<p><a href='"+item.permalink+"'>"+item.title+"</a></p>");		
			}			   
		});
	});

 