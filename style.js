//Carousel settings
$('.carousel').carousel({
  interval: 3000,
  pause: false
});

//Smooth scroling and hiding hamburger menu after click
$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();

  var speed = 300;

  if ($("#collapsibleNavbar").is(":visible") && $(".navbar-toggler").is(":visible")) {
    $('.navbar-collapse').collapse('toggle');
    speed = 750;
  }

  var target = this.hash;
  var $trget = $(target);
  var newTop = $trget.offset().top - 90;
  $('html, body').animate({
    scrollTop: newTop
  }, speed, 'swing', function() {
    window.location.hash = newTop;
  });
});

//Donate tooltip
$(document).ready(function() {
  $('[data-toggle="tooltipDonate"]').tooltip();
});
