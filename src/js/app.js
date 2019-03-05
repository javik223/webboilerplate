import "./sckrollmenu";

// import { TimelineMax } from "gsap";

$(document).ready(function () {
  // Initialize onscroll animation plugin
  AOS.init({
    useClassNames: true
  });
  var s = skrollr.init({
    smoothScrolling: true,
    // smoothScrollingDuration: 600,
    // // edgeStrategy: 'ease',
    // easing: 'swing',
    // // scale: 6,
    forceHeight: false,
    // mirror: true,
    // mobileDeceleration: 0.05
  });

  skrollr.menu.init(s, {
    animate: true,
    // scale: 2
  });

  // Carousel
  $(".quotes-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    // arrows: false,
    prevArrow: $(".quotes-carousel__arrows .icon-arrow-left"),
    nextArrow: $(".quotes-carousel__arrows .icon-arrow-right"),
  });

  $(".around-town").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $(".around-town__arrows .icon-arrow-left"),
    nextArrow: $(".around-town__arrows .icon-arrow-right"),
  });

  // Navigation Menu
  var menu = $('.menu');
  var hamburgerMenu = menu.find('.hamburger-menu');
  var nav = menu.find('.nav');
  var navElements = nav.find("li");
  var navVisible = false;


  menu.on('click', function () {
    hamburgerMenu.toggleClass('animate');
    if (!navVisible) {
      showNav();
    } else {
      hideNav();
    }
  });


  // Show navigation Menu on Entering the page
  // setTimeout(() => {
  //   hamburgerMenu.toggleClass('animate');
  //   navVisible = true;
  //   showNav();
  // }, 2000);


  // Setup Navigation animation
  var navPlayhead = new TimelineMax({
    yoyo: true,
    paused: true
  });

  navPlayhead.set(nav, {
    autoAlpha: 1
  });

  navPlayhead.staggerFromTo(navElements, 0.6, {
    autoAlpha: 0,
    y: "-20%"
  }, {
    autoAlpha: 1,
    y: "0%"
  }, 0.1);


  var showNav = function () {
    navVisible = true;
    navPlayhead.timeScale(1);
    navPlayhead.play();
  }

  var hideNav = function () {
    navVisible = false;
    navPlayhead.timeScale(2);
    navPlayhead.reverse();
  }

  let elemToShowWhiteNav = [".landing", ".gallery", ".amputees-united"];
  let elemToShowBlueNav = [".the-book", ".bio", ".contact"]

  for (const elem of elemToShowWhiteNav) {
    showWhiteNav(elem);
  }
  for (const elem of elemToShowBlueNav) {
    showBlueNav(elem);
  }

  function showBlueNav(elem) {
    var waypoint = new Waypoint({
      element: document.querySelector(elem),
      handler: function (direction) {
        hamburgerMenu.removeClass('animate');
        hideNav();
        if (direction === 'down') {
          menu.addClass("alt");
        } else {
          menu.removeClass("alt");
        }
      }
    })
  }

  function showWhiteNav(elem) {



    var waypoint2 = new Waypoint({
      element: document.querySelector(elem),
      handler: function (direction) {
        hamburgerMenu.removeClass('animate');
        hideNav();
        if (direction === 'down') {
          menu.removeClass("alt");
        } else {
          menu.addClass("alt");
        }
      }
    })
  }

  // function getInstagramInfo(instagram_handle) {
  //   const instagram_url = `https://www.instagram.com/${instagram_handle}/?__a=1`;
  //   return fetch(instagram_url, {
  //       // mode: "cors",
  //       method: "GET",
  //       headers: {
  //         // "User-Agent": "Mozilla/4.0",
  //         // "Access-Control-Allow-Headers": "*"
  //       }
  //     })
  //     .then(function (response) {
  //       // console.log(response);
  //       return response;
  //     })

  // }

  // let instagram_handles = $(".js-instagram-handle");
  // for (let i = 0; i < instagram_handles.length; i++) {
  //   const element = $(instagram_handles[i]);
  //   const handle = element.attr('instagram-handle')
  //   getInstagramInfo(handle).then(data => console.log(data));
  // }

  // let controller = new ScrollMagic.Controller();

  // let tweenTheBook = new TimelineMax()
  // tweenTheBook
  //   .set(".the-book", {
  //     position: "relative"
  //   })
  // tweenTheBook
  //   .from(".the-book", 1, {
  //     y: "5",
  //     autoAlpha: 0,
  //     scale: 0.6
  //   })
  //   .fromTo(".the-book .image", 1, {
  //     y: "10%",
  //     autoAlpha: 0,
  //     delay: 0.5
  //   }, {
  //     y: "0%",
  //     autoAlpha: 1
  //   })


  // Scenes
  // let tweenTheBookScene = new ScrollMagic.Scene({
  //     triggerElement: ".the-book",
  //     offset: -200
  //   })
  //   .setTween(tweenTheBook)
  //   .addTo(controller)

  // let scene = new ScrollMagic.Scene({
  //     triggerElement: ".book-preview",
  //   })
  //   .setTween($(".preview").parent(), 1, {
  //     scale: 1.2
  //   })
  //   .addTo(controller);

  $(".event-gallery").justifiedGallery({
    rowHeight: 120,
    margins: 3
  });
  $(".event-gallery").lightGallery();
  // $(".around-town").lightGallery();
})