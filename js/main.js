'use strict';


(function ($) {
  $("#offCanvasMenu").html(`
    <div class="canvas-close">
      <i class="fa fa-close"></i>
      </div>
      <div class="canvas-search search-switch">
      <i class="fa fa-search"></i>
      </div>
      <nav class="canvas-menu mobile-menu">
      <ul>
      <li class="active"><a href="./index.html">Home</a></li>
      <li><a href="./about-us.html">About Us</a></li>
      <li><a href="./services.html">Services</a></li>
      <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
      <li><a href="./gallery.html">Gallery</a></li>
      <li><a href="./contact.html">Contact</a></li>
      </ul>
      </nav>
      <div id="mobile-menu-wrap"></div>
      <div class="canvas-social">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-youtube-play"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  `)

  $("#headerMenu").html(`
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
            <div class="logo">
            <a href="./index.html">
                <img src="img/logo.png" alt="">
            </a>
            </div>
        </div>
        <div class="col-lg-6">
            <nav class="nav-menu">
            <ul>
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./about-us.html">About Us</a></li>
                <li><a href="./services.html">Services</a></li>
                <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                <li><a href="./gallery.html">Gallery</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
            </nav>
        </div>
        <div class="col-lg-3">
            <div class="top-option">

            <div class="to-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube-play"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
            </div>
            </div>
        </div>
        </div>
        <div class="canvas-open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  `)

  $("#fullFooterSection").html(`
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="fs-about">
            <div class="fa-logo">
              <a href="#"><img src="img/logo.png" alt=""></a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore dolore magna aliqua endisse ultrices gravida lorem.</p>
            <div class="fa-social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-youtube-play"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa  fa-envelope-o"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6">
          <div class="fs-widget">
            <h4>Useful links</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6">
          <div class="fs-widget">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Subscribe</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="fs-widget">
            <h4>Tips & Guides</h4>
            <div class="fw-recent">
              <h6><a href="#">Physical fitness may help prevent depression, anxiety</a></h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
            <div class="fw-recent">
              <h6><a href="#">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="copyright-text">
            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All rights reserved Max Performance <a
                href="https://colorlib.com" target="_blank">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  `)

  /*------------------
      Preloader
  --------------------*/
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
      Background Set
  --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  //Canvas Menu
  $(".canvas-open").on('click', function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $('.search-switch').on('click', function () {
    $('.search-model').fadeIn(400);
  });

  $('.search-close-switch').on('click', function () {
    $('.search-model').fadeOut(400, function () {
      $('#search-input').val('');
    });
  });

  //Masonary
  $('.gallery').masonry({
    itemSelector: '.gs-item',
    columnWidth: '.grid-sizer',
    gutter: 10
  });

  /*------------------
      Navigation
  --------------------*/
  $(".mobile-menu").slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: true
  });

  /*------------------
      Carousel Slider
  --------------------*/
  var hero_s = $(".hs-slider");
  hero_s.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false
  });

  /*------------------
      Team Slider
  --------------------*/
  $(".ts-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*------------------
      Testimonial Slider
  --------------------*/
  $(".ts_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true
  });

  /*------------------
      Image Popup
  --------------------*/
  $('.image-popup').magnificPopup({
    type: 'image'
  });

  /*------------------
      Video Popup
  --------------------*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  /*------------------
      Barfiller
  --------------------*/
  $('#bar1').barfiller({
    barColor: '#ffffff',
    duration: 2000
  });
  $('#bar2').barfiller({
    barColor: '#ffffff',
    duration: 2000
  });
  $('#bar3').barfiller({
    barColor: '#ffffff',
    duration: 2000
  });

  $('.table-controls ul li').on('click', function () {
    var tsfilter = $(this).data('tsfilter');
    $('.table-controls ul li').removeClass('active');
    $(this).addClass('active');

    if (tsfilter == 'all') {
      $('.class-timetable').removeClass('filtering');
      $('.ts-meta').removeClass('show');
    } else {
      $('.class-timetable').addClass('filtering');
    }
    $('.ts-meta').each(function () {
      $(this).removeClass('show');
      if ($(this).data('tsmeta') == tsfilter) {
        $(this).addClass('show');
      }
    });
  });

})(jQuery);