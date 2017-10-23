$(document).ready(function() {
  var addVal = function (a, b, c, d, e) {
    return a + b + c + d + e;
  };
  $("form#tracker").submit(function(event) {
    var a = parseInt($("select#jobtitleInput").val());
    var b = parseInt($("select#mobileorwebInput").val());
    var c = parseInt($("select#startupInput").val());
    var d = parseInt($("select#csharporphpInput").val());
    var e = parseInt($("select#jokeInput").val());
    var totalVal = addVal(a, b, c, d, e);
    if (totalVal >= 1 && totalVal <= 4) {
      $("#javaResult").fadeIn();
      $("#tracker").fadeOut();
    }
    else if (totalVal >= 5 && totalVal <= 9) {
      $("#rubyResult").fadeIn();
      $("#tracker").fadeOut();
    }
    else if (totalVal >= 10 && totalVal <= 12) {
      $("#phpResult").fadeIn();
      $("#tracker").fadeOut();
    }
    else if (totalVal >= 13 && totalVal <= 17) {
      $("#cSharpResult").fadeIn();
      $("#tracker").fadeOut();
    }
    event.preventDefault();
  });

});
