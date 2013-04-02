$(document).ready(function() {
  
  

  $("#tags").autocomplete({
  	appendTo: "#search_box",
  	source: getCustomerNames()  	
  });




showNames();

});

var getCustomerNames = function() {
	arr = [];
	$("#cust_list ul li").each(function() {
      arr.push($(this).text());
	});

	return arr;
}

var clearList = function() {
	$("#cust_list ul").html("");
}

var showNames = function() {
	$("#tags").change(function() {
		// clearList();
		names = getCustomerNames();
		names.each(function() {
			console.log($(this));

		});

	});
}