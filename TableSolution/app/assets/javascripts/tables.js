$(document).ready( function() {
  $("#unassigned tr").each(function(){
    $(this).draggable({
      stack: '#unassigned tr',
      cursor: 'move',
      revert: true
      // stop: function(event, ui) {

      // }
    });
  });

  $("#floor_image_div #slot_container").delegate("div", "click", function(){
    $(this).draggable();
  });

  $( "#floor_image_div" ).droppable({
    accept: '#unassigned tr',
    drop: handleTableDrop
  });

  function handleTableDrop( event, ui ) {
      if (!($(ui.draggable).hasClass("table_pic"))) {
        table_value = $(ui.draggable).find("td:first-child").text();
        $newDiv = $("<div></div>").addClass("table_pic")
        $newDiv.append($("<label></label>").text(table_value));
            
        var $newPosX = ui.offset.left - $(this).offset().left;
        var $newPosY = ui.offset.top - $(this).offset().top;
        $newDiv.css("left", $newPosX);
        $newDiv.css("top", $newPosY);
        $newDiv.appendTo($(this));
      }
      console.log($(ui.draggable).position())
 
    }
});

