$("#about").click(function() {
  $("#aboutbox").show();
  $("#portfoliobox").show();
  $("#contactbox").show();
});
$("#portfolio").click(function() {
  $("#aboutbox").hide();
  $("#projects").show();
  $("#contactbox").hide();
});
$("#contacts").click(function() {
  $("#aboutbox").hide();
  $("#projects").hide();
  $("#contactbox").show();
});
