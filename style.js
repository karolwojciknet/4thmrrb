$('.carousel').carousel({
  interval: 3000,
  pause: false
});

$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $trget = $(target);
  var newTop = $trget.offset().top - 90;
  $('html, body').animate({
    scrollTop: newTop
  }, 300, 'swing', function() {
    window.location.hash = newTop;
  });
});

$(document).ready(function() {
  $('[data-toggle="tooltipDonate"]').tooltip();
});
