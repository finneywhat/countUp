$(document).ready(function(){
  $("#formOne").submit(function(event) {
    $("p").hide();
    $("form > p:first-of-type").show();
    $("#output").text("");

    var bigOne = parseInt($("input#bigOne").val());
    var smallOne = parseInt($("input#smallOne").val());
    if (!bigOne || bigOne <= 0 || !smallOne || smallOne <= 0 || smallOne > bigOne) {
      if (!bigOne || bigOne <= 0) {
        $("#bigOneFeedback").show();
      }
      if (!smallOne || smallOne <= 0) {
        $("#smallOneFeedback").show();
      }
      if (smallOne > bigOne) {
        $("#pairFeedback").show();
      }
    }
    else {
      for (var i = smallOne; i <= bigOne; i += smallOne )
       {
        $("#output").append(i + ", ");
        $("#count").show();
      }
    }
    event.preventDefault();
  });
});
