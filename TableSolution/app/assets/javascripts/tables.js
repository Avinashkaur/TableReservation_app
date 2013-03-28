$(document).ready( function() {
  $("#unassigned tr td").each(function(){
    $(this).draggable({
      helper: "clone",
      stack: '#unassigned tr td',
      cursor: 'move',
      revert: true
    });
  });

  
  // $length = $("#floor_image_div .slot").length;
  // for ( i = 1; i <= $length; i++) {
  //   $("#floor_image_div #slot" + i).droppable({
  //     accept: '#unassigned tr td',
  //     drop: handleTableDrop,
  //     hoverClass: "hovered"
  //   });
  // }

  

  $("#floor_image_div").delegate("div[class=table_pic]", "mousedown", function(){
    $(this).draggable({
      stack: '#floor_image_div .table_pic',
      cursor: 'move',
      revert: true,
      // stop: function(event, ui) {
      //   console.log($(this).closest("div"))
      // }
    });
  });

  

  $("#floor_image_div .slot").each(function() {
    $(this).droppable({
      accept: "#unassigned tr td, #floor_image_div .table_pic",
      drop: handleTableDrop,
      hoverClass: "hovered"
    });
  });

  function handleTableDrop(event, ui) {
        
    if (!($(ui.draggable).hasClass("table_pic"))) {
      $(ui.draggable).closest('tr').detach().css({top: 0,left: 0});
      table_value = $(ui.draggable).closest('tr').find("td:first-child").text();
      
    }
    else {
      table_value = $(ui.draggable).find('label').text();
      $dragged_id = $(ui.draggable).closest('.slot').attr("id");
      $dropped_id = $(this).attr("id");
      if ($dragged_id != $dropped_id) {
        $(ui.draggable).closest('.slot').droppable("enable");
      }
      $(ui.draggable).remove();
    }

    $newDiv = $("<div>").addClass("table_pic") 
    $newDiv.append($("<label>").text(table_value));
    $newDiv.appendTo($(this));
    $(ui.draggable).draggable({"revert": false });
    $(this).droppable("disable");
      
    var $newPosX = $(this).offset().left - $(this).closest('#floor_image_div').offset().left;
    var $newPosY = $(this).offset().top - $(this).closest('#floor_image_div').offset().top;
      // $newDiv.css("left", $newPosX);
      // $newDiv.css("top", $newPosY);
    
    }
});

