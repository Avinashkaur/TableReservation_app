// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery-1.9.1.js
//= require jquery-ui.js
//= require jquery.fancybox.js
//= require jquery.fancybox.pack.js
//= require jquery.mousewheel-3.0.6.pack.js
//= require jquery.fancybox-buttons.js
//= require jquery.fancybox-media.js
//= require jquery.fancybox-thumbs.js

$(document).ready(function() {
  check_url();
});
var check_url = function() {
  var doc_location = $(location).attr("href");
  if ((/tables/).test(doc_location)) {
    $("#tabs ul #tables_tab").find("a").addClass("active");
  }
  else if ((/reservations/).test(doc_location)) {
    $("#tabs ul #reservations_tab").find("a").addClass("active");
  }
}