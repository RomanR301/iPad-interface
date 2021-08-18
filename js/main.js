$(document).ready(function() {
  $('.mfp-iframe').magnificPopup({
    type: 'image',
    closeMarkup: '<button class="mfp-close"/></button>'
  });
  var rellax = new Rellax('.rellax', {
    horizontal: true,
    wrapper: 'main',
    vertical: false,
    speed: -5,
    center: true,
  });

  $(document).on('click', '.footer-logo', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('.main-gallery').animate({scrollLeft: (target.offset().top)});
            return false;
        }
    }
  });

});



'use strict';

(function($) {

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('.main-gallery').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('figure a').click(function(event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.85,
        showHideOpacity: true
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));