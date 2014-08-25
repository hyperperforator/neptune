(function ($) {
  $(document).ready(function () {
    $(window).scroll(function() {
    var s = $(window).scrollTop(),
        opacityVal = (s / 150.0);
    $('.blurred-image').css('opacity', opacityVal);

    if (($('.border').offset().top - $(window).scrollTop()) < 20) { //<---mark the $(this).offset().top of current object
          $('.inner').stop().fadeTo(300, 0); //<----fadeOut the current obj
      } else {
          $('.inner').stop().fadeTo('fast', 1); //<----fadeIn the current obj
      }

});

  });
})(jQuery);
