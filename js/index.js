
$(document).ready(function(){
    $(".honour").click(function(){
      


      if ($(".honour").attr("src")) {
        $(".honour").attr("src", "images/icon-honour-selected.svg");
      } 
         else {
          $(".honour").attr("src", "images/icon-honour.svg");
      }
    });

    

  });
