$(document).ready(function() {
  $('.mfp-iframe').magnificPopup({
    type: 'image',
    // other options
    closeMarkup: '<button class="mfp-close"/></button>'
  });
  $('.images-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true
    },
    closeMarkup: '<button class="mfp-close"/></button>'
    // other options
  });
  var rellax = new Rellax('.rellax', {
    horizontal: true,
    wrapper: 'main',
    vertical: false,
    speed: -5,
    center: true,
    //Disable vertical Parallax Scrolling     vertical:false
  });
});