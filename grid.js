
$(document).ready(function() {

  createGrid(25);

  
  $(".grid").hover(function(){

    $(this).css("background-color", "red");
    
  });


  function createGrid(num) {

    for(var i = 0; i <num*num; i++) {

      var nextDiv = $('<div/>', {text:'', 'class': 'grid'});
      nextDiv.height(800/num).width(800/num);
      $("#wrapper").append(nextDiv);

    }
  }


});


