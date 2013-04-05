$(document).ready( function() {

  $("#floor_image_div").delegate("div[class=table_pic]", "mousedown", function(){
    $(this).draggable({
      stack: '#floor_image_div .table_pic',
      cursor: 'move',
      revert: true
    });
  });
  
  $("#floor_heading #floor").change(function() {
    var f_id = $(this).val();
    $.ajax({
      url: "/floors/" + f_id,
      method: "get",
      dataType: "script"
    });
  });

  outsideAreaDroppable();
  makeDraggableTr();
  appendTablesToSlot();
  makeDroppable();
  disableDroppable();
});

var disableDroppable = function() {
  $("#floor_image_div").find(".table_pic").parent(".slot").each(function() {
    $(this).droppable("disable");
  });
}

var appendTablesToSlot = function () {
  $(".slot").each(function() {
    xloc = $(this).offset().left - $(this).closest('#floor_image_div').offset().left;
    yloc = $(this).offset().top - $(this).closest('#floor_image_div').offset().top;
    $(this).attr("loc", xloc.toString() + yloc);
  });

  $(".table_pic").each(function() {
    slot_div = $("div[loc=" + $(this).attr("loc") + "]");
    $(this).appendTo(slot_div);
    $(this).remove();
  });
}

var makeDroppable = function() {
  $("#floor_image_div .slot").each(function() {
    $(this).droppable({
      accept: "#unassigned tr td, #floor_image_div .table_pic",
      hoverClass: "hovered",
      drop: handleTableDrop
    });
  });
}

var handleTableDrop = function(event, ui) {

  if (!($(ui.draggable).hasClass("table_pic"))) {
    $(ui.draggable).closest('tr').detach().css({top: 0,left: 0});
    table_value = $(ui.draggable).closest('tr').find("td:first-child").text();
    record_id = $(ui.draggable).closest('tr').attr("obj_id");
  }
  else {
    record_id = $(ui.draggable).attr("obj_id");
    table_value = $(ui.draggable).find('label').text();
    dragged_id = $(ui.draggable).closest('.slot').attr("id");
    dropped_id = $(this).attr("id");
    if (dragged_id != dropped_id) {
      $(ui.draggable).closest('.slot').droppable("enable");
    }
    $(ui.draggable).remove();
  }

  $newDiv = $("<div>").attr("obj_id", record_id).addClass("table_pic");
  
  $newDiv.append($("<label>").text(table_value));
  $newDiv.appendTo($(this).closest('.slot'));
  $(ui.draggable).draggable({"revert": false });
  $(this).droppable("disable");
    
  var newPosX = $(this).offset().left - $(this).closest('#floor_image_div').offset().left;
  var newPosY = $(this).offset().top - $(this).closest('#floor_image_div').offset().top;

  floor_id = $("#floor_heading select option:selected").val();

  $.ajax({
    url: "/tables/" + record_id,
    method: "put",
    data: {"table" : {"id" : record_id, "floor_id" : floor_id, "floor_x_location" : newPosX, "floor_y_location" : newPosY} }
  });
}

var makeDraggableTr = function() {
  $("#unassigned tr").delegate("td", "mousedown", function(){
    $(this).draggable({
      helper: "clone",
      stack: '#unassigned tr td',
      cursor: 'move',
      revert: true
    });
  });
}


var outsideAreaDroppable = function() {
  $(".unassignTable").each(function() {
    $(this).droppable({
      accept: "#floor_image_div .table_pic",
      drop: function(event, ui) {
        if (confirm("Are you sure you want to unassign table?")) {
          $(ui.draggable).draggable({ "revert": false });
          table_id = $(ui.draggable).attr("obj_id");
          $(ui.draggable).remove();
          $.ajax ({
            url: "/tables/" + table_id,
            method: "put",
            data: {"table" : {"floor_id": null , "floor_x_location": null, "floor_y_location": null}, "id": table_id},
          });
        }
      }
    });
  });
}