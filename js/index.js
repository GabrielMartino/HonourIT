
$(document).ready(function(){
    $(".honour").click(function(){
      $(".honour").find("img").attr("src", "images/icon-honour-selected.svg");

      if ($(".honour").find("img").attr("src", "images/icon-honour-selected.svg")) {
        console.log('your message');
      } 
         else {
        greeting = "Good evening";
      }
    });

    

  });
