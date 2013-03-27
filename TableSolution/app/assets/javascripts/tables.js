$(document).ready( function() {
  $("#unassigned tr td").each(function(){
    $(this).draggable({
      helper: "clone",
      stack: '#unassigned tr td',
      cursor: 'move',
      revert: true
    });
  });

  // $("#floor_image_div #slot_container").delegate("div", "drag", function(){
  //   $(this).draggable();
  // });

  $length = $("#floor_image_div .slot").length;
  for ( i = 1; i <= $length; i++) {
    $("#floor_image_div #slot" + i).droppable({
      accept: '#unassigned tr td',
      drop: handleTableDrop,
      hoverClass: "hovered"
    });
  }
  

  function handleTableDrop(event, ui) {
    if (!($(ui.draggable).hasClass("table_pic"))) {
      table_value = $(ui.draggable).closest('tr').find("td:first-child").text();
      $newDiv = $("<div></div>").addClass("table_pic")
      $newDiv.append($("<label></label>").text(table_value));
          
      // var $newPosX = event.pageX - $(this).offset().left;
      // var $newPosY = event.pageY - $(this).offset().top;
      // $newDiv.css("left", $newPosX);
      // $newDiv.css("top", $newPosY);
      $newDiv.appendTo($(this));
      
      $(ui.draggable).closest('tr').remove();

    }
    

      
 
    }
});

