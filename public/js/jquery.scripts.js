

	/* On Ready Event */
  $(document).ready(function() {

    //console.log("*********************");
    //console.log("Ready");

    $('.preloader').fadeIn(500);
    
  });

  /* On Load Event */
  $(window).load(function() {
    
    //console.log("Load");
    //console.log("*********************");

    // Animations *************************************************************************
    $('.locales').removeClass('cloak-locales');
    
    $('.preloader').delay(1000).fadeOut(1500);

    //vimeo full screen embed
    function resizeIframe() {
      $('.container-video').css( 'height', ( $(window).height() - $('.navbar').height() ) );
    }
    $(window).resize(function() {
      resizeIframe();
    });
    
  });