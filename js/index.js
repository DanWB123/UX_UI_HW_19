console.log("hit");

// Step 1: Hide a div
$('#button1').on("click", function(){
  $('.hideMe').slideToggle();
});

// $(".btn").hover(function(){
//   $(".line").addClass("line-extend");
// });

$( ".btn" ).hover(
  function() {
    $(this).find(".line").addClass("line-extend");
  }, function() {
    $(this).find(".line").removeClass("line-extend");
  }
);
