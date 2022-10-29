
$(document).ready(function(){
    $(".honour").click(function(){
      


      if ($(".honour").attr("src") == "images/icon-honour.svg") {
 
        $(this).attr("src", "images/icon-honour-selected.svg");
        $(".honourvalue").html("27");

      } 
         else  {

 
          $(this).attr("src", "images/icon-honour.svg");
          $(".honourvalue").html("26");
      }
    });
  })


  $(document).ready(function(){

var chadimage = '<button class="button-toimage chad-image">'+
'<img src="images/icon-bin.svg" class="remove-image">'+
'</button>'

    $("#add-image").click(function(){
      $('#images').append(chadimage)

    });
  })

  $(document).ready(function(){

  
    
        $(".remove-image").click(function(){
          $(this).closest('.chad-image').remove();
    console.log('work dammit');
        });
      })