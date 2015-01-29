/* $(function() {
        var path = "http://blog.specialapple.com/?feed=rss2";
        
        $.get("getfile.php", {u:path}, function(data){
          
          var xmlDoc = $.parseXML(data);
          
          var content = $(xmlDoc);
          
          var aside = $("aside");
          content.find("item").each(function(){
            var curr = $(this);
            var title = curr.children("title").text();
            var desc = curr.children("description").text();
            var url = curr.children("link").text();
            
            var rssItem = $("<div/>", {
              class : "rssItem"
            }).appendTo(aside);
            
            $("<a href='"+url+"' target='_blank'><h1>"+title+"</\h1><\/a>").appendTo(rssItem);
            rssItem.append("<p>" + desc + "<\/p>");
          });
        });
      });*/