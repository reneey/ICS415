$(document).ready(function() {

  $("#faq dd").hide();
  $("#faq dt").click(function () {
    $(this).next("#faq dd").slideToggle();
    $(this).toggleClass("expand");
  });
});


function getLinks(){
  var url = $("#input").val();
  $.get(url, function(data, status){
    var links = $(data).find("a");
    var count = 0;
    for(var i = 0; i < links.length; i++){
        count++;
    }
    $("hr:last").after("|" + "# of links found on page: " + "|" + count + "|, ");
  });
}