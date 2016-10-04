
$(document).ready(function() {

  createNew();

  var newGridButton = document.getElementById('newGridButton');

  newGridButton.addEventListener('click', function() {
    clearGrid();
    createNew();
  }, false);

  function clearGrid() {
    $("#wrapper").empty();
    $("#wrapper").css({
      "background-color": "white"
    });

  }

  function addFunctionality(color) {

    $(".grid").hover(function(){

    $(this).css("background-color", color);
    
  });

  }

  function createNew() {
    var num = prompt("Enter grid size:");
    createGrid(num);
  }

  function createGrid(num) {

    for(var i = 0; i <num*num; i++) {

      var nextDiv = $('<div/>', {text:'', 'class': 'grid'});
      nextDiv.height(800/num).width(800/num);
      $("#wrapper").append(nextDiv);

    }

    addFunctionality("pink");
    
  
  }


});


