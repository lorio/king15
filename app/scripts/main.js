 /*jshint devel:true*/ 
/*$(document).ready(function(){
  var count= 3;
	var blog = 'http://blog.basilking.net/?json=1';

	$.getJSON(blog + "&callback=?", function(data){		
		$.each(data, function(i,item){	
			if(i < count) {	
			$("#rss").append("<p><a href='"+item.permalink+"'>"+item.title+"</a></p>");
			}			   
		});
	});
});*/
<script type="text/javascript">// <![CDATA[
  var count= 3;
	var blog = 'http://blog.basilking.net/?json=1';

	$.getJSON(blog + "&callback=?", function(data){		
		$.each(data, function(i,item){	
			if(i < count) {	
			$("#rss").append("<p><a href='"+item.permalink+"'>"+item.title+"</a></p>");		
			}			   
		});
	});
// ]]>
</script>
 