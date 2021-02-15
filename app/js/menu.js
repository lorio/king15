$(function(){
        
         
        $(".btn").click(function(){
          var curr = $(this);
          //  curr.siblings(".content").slideUp();
          var content = curr.next();
          
          
          content.slideDown()
                 .siblings(".content")
                 .slideUp();
        });
      });

