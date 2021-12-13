//adding slider jquery for the team member section
$(document).ready(function () {
  $("#reviews_slider_content").lightSlider({
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        },
      },
    ],
  });
});

//auto background in the home page
var currentIndex = 1;
var totalCount = 4;

setInterval(function () {
  if (currentIndex > totalCount) currentIndex = 1;

  $(".home_section").css(
    "background-image",
    "url(./img/bg/bg" + currentIndex++ + ".jpg)"
  );
}, 10000);

//adding a class for the header after scrolling
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar ");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//to hide the navbar collapse after click in the mobile mode
$(".my_link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
