$(document).ready(function () {
  $(".navbar-togglr").on("click", (e) => {
    e.preventDefault();
    $(".navbar-collapse").removeClass("show");
  });

  $("#home-click").on("click", () => {
    $("#portfolio").hide();
    $("#contact").hide();
    $("#profile").show();
    $(".navbar-collapse").removeClass("show");
  });

  $("#portfolio-click").on("click", () => {
    $("#profile").hide();
    $("#contact").hide();
    $("#portfolio").show();
    $(".navbar-collapse").removeClass("show");
  });
  $("#contact-click").on("click", () => {
    if ($("#contact").css("display") == "none") {
      $("#profile").hide();
      $("#portfolio").hide();
      $("#contact").show();
      $(".navbar-collapse").removeClass("show");
      //$(".navbar-toggler").addClass("collapsed");
    }
  });
});
