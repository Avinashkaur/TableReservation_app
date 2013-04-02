$(document).ready(function() {

	$("#datepicker").datepicker();
  
  $("#tags").autocomplete({
  	appendTo: "#search_box",
  	source: getCustomerNames()
  	
  });
  showNames();
  makeNamesDraggable();

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
	$("#search_box").delegate("#tags" , "keydown", function(e) {
		key = e.charCode || e.keyCode || 0;
		value = $(this).val();
		len = value.trim().length;

		if ((key == 13) && (len != 0)) {
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
			stack: "#cust_list ul li",
			revert: true
		});
	});

}