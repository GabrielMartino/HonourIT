
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

   






      $(document).ready(function(){

        var addfriend = '<a class="col-md-6 add-friend">'+
        '<div class="button-partner">'+
            '<div class="d-flex align-items-center justify-content-between col g-0">'+
               '<div class="col-md-4">'+
                    '<img src="images/img-user1.svg">'+
                '</div>'+
                '<div class="col-md-6 w-100">'+
                  '<div class="card-body d-flex justify-content-start row px-4 ">'+
                    '<h5 class="card-title text3 py-1">Terrance ‘The’ Big Dawg</h5>'+
                    '<p class="card-text task-streak py-1">*Related Task Here*</p>'+
                  '</div>'+
                '</div>'+
                '<div class="col-md-2">'+
                    '<img src="images/icon-plus-yellow.svg">'+
                '</div>'+
              '</div>'+
        '</div>'+
      '</a>'
        
            $(".add-friend").click(function(){
              $('.friends').append(addfriend)
        
            });
          })
