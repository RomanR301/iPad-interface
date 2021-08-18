$(document).ready(function() {
  $('.mfp-iframe').magnificPopup({
    type: 'image',
    // other options
    closeMarkup: '<button class="mfp-close"/></button>'
  });
  // $('.images-container').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   gallery:{
  //     enabled:true
  //   },
  //   closeMarkup: '<button class="mfp-close"/></button>'
  //   // other options
  // });
  var rellax = new Rellax('.rellax', {
    horizontal: true,
    wrapper: 'main',
    vertical: false,
    speed: -5,
    center: true,
    //Disable vertical Parallax Scrolling     vertical:false
  });

});


// var pswpElement = document.querySelectorAll('.pswp')[0];

// // build items array
// var items = [
//     {
//         src: 'https://placekitten.com/600/400',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'https://placekitten.com/1200/900',
//         w: 1200,
//         h: 900
//     }
// ];

// // define options (if needed)
// var options = {
//     // optionName: 'option value'
//     // for example:
//     index: 0 // start at first slide
// };

// // Initializes and opens PhotoSwipe
// var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

// // openPhotoSwipe();

// $(document).on('click', 'figure', function() {
//   openPhotoSwipe();
// })


'use strict';

/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */

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