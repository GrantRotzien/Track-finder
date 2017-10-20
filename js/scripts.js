$(document).ready(function) {
  $("form#language").submit(function(event) {
    var questionA = parseInt($("input#a").val());
    var questionB = parseInt($("input#c").val());
    var questionC = parseInt($("input#c").val());
    var questionD = parseInt($("input#d").val());
    var questionE = parseInt($("input#e").val());
    var totalQuestionVal = addVal(questionA, questionB, questionC, questionD, questionE);
    if (totalQuestionVal >=5 && totalQuestionVal <=7) {
      $("javaResult").hide();
      $("phpResult").hide();
      $("rubyResult").show();

    }
    if (a) {
      var totalVal = +1


    }
  }

}
