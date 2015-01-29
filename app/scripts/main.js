/* jshint devel:true */
$(document).ready(function(){
  var count= 3;
	var blog = 'http://blog.basilking.net/?feed=json';

	$.getJSON(blog + "&callback=?", function(data){		
		$.each(data, function(i,item){	
			if(i < count) {	
			$("#rss").append("<p><a href='"+item.url+"'>"+item.title+"</a></p>");
			}			   
		});
	});
});

 