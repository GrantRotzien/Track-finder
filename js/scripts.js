$(document).ready(function() {
  var addVal = function (a, b, c, d, e) {
    return a + b + c + d + e;
  };
  $('form#findtrack').submit(function(event) {
    event.preventDefault();
    var a = parseInt($("select#jobtitleInput").val());
    var b = parseInt($("select#mobileorwebInput").val());
    var c = parseInt($("select#startupInput").val());
    var d = parseInt($("select#csharporphpInput").val());
    var e = parseInt($("select#jokeInput").val());
    var totalVal = addVal(a, b, c, d, e);
    if (totalVal >= 1 && totalVal <= 4) {
      $("javaResult").show();
      $("rubyResult").hide();
      $("phpResult").hide();
      $("csharpResult").hide();
    }
    else if (totalVal >= 5 && totalVal <= 8 {
      $("javaResult").hide();
      $("rubyResult").show();
      $("phpResult").hide();
      $("csharpResult").hide();
    }
    else if (totalVal >= 9 && totalVal <= 14 {
      $("javaResult").hide();
      $("rubyResult").hide();
      $("phpResult").show();
      $("csharpResult").hide();
    }
    else if (totalVal >= 15 && totalVal <= 20 {
      $("javaResult").hide();
      $("rubyResult").hide();
      $("phpResult").hide();
      $("csharpResult").show();




  })
  });

});
