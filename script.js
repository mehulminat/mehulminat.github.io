$(document).ready(function () {
    document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

    // adding skill cards 
    
    const skillntool = ["Flutter", "Dart", "C++" ,"Python" ,"Java" , "Firebase" , "Android Studio","VS Code" , "GitHub" , "Coreldraw"];
    const achevements = [];
for (var i in skillntool) {
  $(".carousel").append(`<div class="card">
  <div class="box">
      <img src="skill/${skillntool[i]}.jpg" alt="${skillntool[i]}">
      <div class="text">${skillntool[i]}</div>
  </div>
</div>`);
  
}
// console.log(codeforaddition);
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Mobile Apps",
      "Desktop App",
      "Websites",
      "Graphic Designs",
      "Discord Bots",
      "automation script"
    ],
    typeSpeed: 95,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1050,
    autoplayHoverPause: false,
    // autoplaySpeed:500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  var point = 8;
  var spacing = 18.0;
  var maxD = 17;
  window.desktopcheck = function () {
    var check = false;
    if (window.innerWidth > 768) {
      check = true;
    }
    return check;
  };
  if (window.desktopcheck()) {
    point = 11.0;
    spacing = 13.0;
    maxD = 20;
  }
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3060b9,
    backgroundColor: 0x0,
    points: point,
    spacing: spacing,
    maxDistance: maxD,
    showDots: false,
  });
});

(function($) {

    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  var win = $(window);
  
  var allMods = $(".slideanimation");
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });
  
  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });
