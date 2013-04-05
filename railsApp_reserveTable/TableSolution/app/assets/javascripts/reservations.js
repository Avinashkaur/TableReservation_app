$(document).ready(function() {

	$("#datepicker").datepicker();
  
  $("#tags").autocomplete({
  	appendTo: "#search_box",
  	source: getCustomerNames()
  });

 

  appendTablesToSlots();
  changeFloor();
  
  showNames();
  makeNamesDraggable();
  makeTablesDroppable();
});

var getCustomerNames = function() {
	names = [];
	$("#cust_list ul li").each(function() {
      names.push($(this).text());
	});
	return names;
}

var clearList = function() {
	$("#cust_list ul").html("");
}

var showNames = function() {
	$("#search_box").delegate("#tags" , "keyup", function(e) {
		key = e.charCode || e.keyCode || 0;
		value = $(this).val();
		len = value.trim().length;

		if (len != 0) {
			$("#cust_list ul").find(":not(li[value=" + value + "])").hide();
			$("#cust_list ul").find("li[value=" + value + "]").show();
		}
		else {
			$("#cust_list ul li").each(function() {
				$(this).show();
			});
		}
  });
}

var makeNamesDraggable = function() {
	$("#cust_list ul").delegate("li", "mousedown", function() {
		$(this).draggable({
      helper: "clone",
			stack: "#cust_list ul li",
			revert: true
		});
	});
}

var changeFloor = function() {
	$(".floor_heading_reserve #floor").change(function() {
    var f_id = $(this).val();
    $.ajax({
      url: "/floors/" + f_id,
      method: "get",
      dataType: "script"
    });
  });
}


var appendTablesToSlots = function () {
  $(".r_slot").each(function() {
    xloc = $(this).offset().left - $(this).closest('#floor_image_div_r').offset().left;
    yloc = $(this).offset().top - $(this).closest('#floor_image_div_r').offset().top;
    $(this).attr("loc", xloc.toString() + yloc);
  });

  $(".r_table_pic").each(function() {
    slot_div = $("div[loc=" + $(this).attr("loc") + "]");
    $(this).attr("href", "#popup_reserve").appendTo(slot_div);
    $(this).remove();
  });
}

var makeTablesDroppable = function() {
	$(".r_slot").delegate(".r_table_pic", "mouseenter", function() {
		$(this).droppable({
			accept: "#cust_list ul li",
			hoverClass: "hovered",
			drop: handleCustomerDrop
		});
	});
}


var handleCustomerDrop = function(event,ui) {
  $("#popup_reserve form #name_label").find("label").remove();

  
  cust_name = $(ui.draggable).text();
  table_id = $(this).attr('obj_id');
  $(ui.draggable).draggable({"revert": false });

  $("<label>").text(cust_name + "'s Reservation").addClass("cust_name").appendTo("#name_label");
  

  var cust_id = $(ui.draggable).attr('cust_id');
  $("#popup_reserve form #reservation_customer_id").val(cust_id);
  $("#popup_reserve form #table_id").val(table_id);
  
  $(this).trigger("click").fancybox();
  
  $("#popup_reserve form input[type=text]").val("");
  
  $("#popup_reserve").show();

}