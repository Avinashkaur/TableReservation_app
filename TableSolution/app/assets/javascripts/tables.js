$(document).ready( function() {

  $("#unassigned tr td").each(function(){
    $(this).draggable({
      helper: "clone",
      stack: '#unassigned tr td',
      cursor: 'move',
      revert: true
    });
  });

  $("#floor_image_div .table_pic").each(function() {
    $(this).position({
      of: "#floor_image_div"
    });
  });


  function create_table_div(table_class, label_value, appendToElement) {
    table_div = $("<div>").addClass(table_class).append($("<label>").text(label_value)).appendTo(appendToElement);
    table_div
  }

  $("#floor_image_div").delegate("div[class=table_pic]", "mousedown", function(){
    $(this).draggable({
      stack: '#floor_image_div .table_pic',
      cursor: 'move',
      revert: true,
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
      record_id = $(ui.draggable).closest('tr').attr("obj_id");
    }
    else {
      record_id = $(ui.draggable).attr("obj_id");
      table_value = $(ui.draggable).find('label').text();
      $dragged_id = $(ui.draggable).closest('.slot').attr("id");
      $dropped_id = $(this).attr("id");
      if ($dragged_id != $dropped_id) {
        $(ui.draggable).closest('.slot').droppable("enable");
      }
      $(ui.draggable).remove();
    }

    // $newDiv = $("<div>").attr("obj_id", record_id).addClass("table_pic");
    $newDiv = create_table_div("table_pic", table_value, $(this));
    $newDiv.attr("obj_id", record_id);
    // $newDiv.append($("<label>").text(table_value));
    // $newDiv.appendTo($(this));
    $(ui.draggable).draggable({"revert": false });
    $(this).droppable("disable");
      
    var newPosX = $(this).offset().left - $(this).closest('#floor_image_div').offset().left;
    var newPosY = $(this).offset().top - $(this).closest('#floor_image_div').offset().top;

    floor_id = $("#floor_heading select option:selected").attr("f_id");

    $.ajax({
      url: "/tables/" + record_id,
      method: "put",
      data: {"table" : {"id" : record_id, "floor_id" : floor_id, "floor_x_location" : newPosX, "floor_y_location" : newPosY} },
      beforeSend: function() {
        alert("sending");
      }
    });
  }

  show_tables();
});