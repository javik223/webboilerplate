/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sckrollmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sckrollmenu */ \"./src/js/sckrollmenu.js\");\n/* harmony import */ var _sckrollmenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sckrollmenu__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// import { TimelineMax } from \"gsap\";\n\n$(document).ready(function () {\n  // Initialize onscroll animation plugin\n  AOS.init({\n    useClassNames: true\n  });\n  var s = skrollr.init({\n    smoothScrolling: true,\n    // smoothScrollingDuration: 600,\n    // // edgeStrategy: 'ease',\n    // easing: 'swing',\n    // // scale: 6,\n    forceHeight: false\n    // mirror: true,\n    // mobileDeceleration: 0.05\n  });\n\n  skrollr.menu.init(s, {\n    animate: true\n    // scale: 2\n  });\n\n  // Carousel\n  $(\".quotes-carousel\").slick({\n    infinite: true,\n    slidesToShow: 1,\n    dots: true,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    adaptiveHeight: true,\n    // arrows: false,\n    prevArrow: $(\".quotes-carousel__arrows .icon-arrow-left\"),\n    nextArrow: $(\".quotes-carousel__arrows .icon-arrow-right\")\n  });\n\n  $(\".around-town\").slick({\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    dots: true,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    prevArrow: $(\".around-town__arrows .icon-arrow-left\"),\n    nextArrow: $(\".around-town__arrows .icon-arrow-right\"),\n    adaptiveHeight: true,\n    centerMode: true\n  });\n\n  // Navigation Menu\n  var menu = $('.menu');\n  var hamburgerMenu = menu.find('.hamburger-menu');\n  var nav = menu.find('.nav');\n  var navElements = nav.find(\"li\");\n  var navVisible = false;\n\n  menu.on('click', function () {\n    hamburgerMenu.toggleClass('animate');\n    if (!navVisible) {\n      showNav();\n    } else {\n      hideNav();\n    }\n  });\n\n  // Show navigation Menu on Entering the page\n  // setTimeout(() => {\n  //   hamburgerMenu.toggleClass('animate');\n  //   navVisible = true;\n  //   showNav();\n  // }, 2000);\n\n\n  // Setup Navigation animation\n  var navPlayhead = new TimelineMax({\n    yoyo: true,\n    paused: true\n  });\n\n  navPlayhead.set(nav, {\n    autoAlpha: 1\n  });\n\n  navPlayhead.staggerFromTo(navElements, 0.6, {\n    autoAlpha: 0,\n    y: \"-20%\"\n  }, {\n    autoAlpha: 1,\n    y: \"0%\"\n  }, 0.1);\n\n  var showNav = function () {\n    navVisible = true;\n    navPlayhead.timeScale(1);\n    navPlayhead.play();\n  };\n\n  var hideNav = function () {\n    navVisible = false;\n    navPlayhead.timeScale(2);\n    navPlayhead.reverse();\n  };\n\n  let elemToShowWhiteNav = [\".landing\", \".gallery\", \".amputees-united\"];\n  let elemToShowBlueNav = [\".the-book\", \".bio\", \".contact\"];\n\n  for (const elem of elemToShowWhiteNav) {\n    showWhiteNav(elem);\n  }\n  for (const elem of elemToShowBlueNav) {\n    showBlueNav(elem);\n  }\n\n  function showBlueNav(elem) {\n    var waypoint = new Waypoint({\n      element: document.querySelector(elem),\n      handler: function (direction) {\n        hamburgerMenu.removeClass('animate');\n        hideNav();\n        if (direction === 'down') {\n          menu.addClass(\"alt\");\n        } else {\n          menu.removeClass(\"alt\");\n        }\n      }\n    });\n  }\n\n  function showWhiteNav(elem) {\n\n    var waypoint2 = new Waypoint({\n      element: document.querySelector(elem),\n      handler: function (direction) {\n        hamburgerMenu.removeClass('animate');\n        hideNav();\n        if (direction === 'down') {\n          menu.removeClass(\"alt\");\n        } else {\n          menu.addClass(\"alt\");\n        }\n      }\n    });\n  }\n\n  // function getInstagramInfo(instagram_handle) {\n  //   const instagram_url = `https://www.instagram.com/${instagram_handle}/?__a=1`;\n  //   return fetch(instagram_url, {\n  //       // mode: \"cors\",\n  //       method: \"GET\",\n  //       headers: {\n  //         // \"User-Agent\": \"Mozilla/4.0\",\n  //         // \"Access-Control-Allow-Headers\": \"*\"\n  //       }\n  //     })\n  //     .then(function (response) {\n  //       // console.log(response);\n  //       return response;\n  //     })\n\n  // }\n\n  // let instagram_handles = $(\".js-instagram-handle\");\n  // for (let i = 0; i < instagram_handles.length; i++) {\n  //   const element = $(instagram_handles[i]);\n  //   const handle = element.attr('instagram-handle')\n  //   getInstagramInfo(handle).then(data => console.log(data));\n  // }\n\n  // let controller = new ScrollMagic.Controller();\n\n  // let tweenTheBook = new TimelineMax()\n  // tweenTheBook\n  //   .set(\".the-book\", {\n  //     position: \"relative\"\n  //   })\n  // tweenTheBook\n  //   .from(\".the-book\", 1, {\n  //     y: \"5\",\n  //     autoAlpha: 0,\n  //     scale: 0.6\n  //   })\n  //   .fromTo(\".the-book .image\", 1, {\n  //     y: \"10%\",\n  //     autoAlpha: 0,\n  //     delay: 0.5\n  //   }, {\n  //     y: \"0%\",\n  //     autoAlpha: 1\n  //   })\n\n\n  // Scenes\n  // let tweenTheBookScene = new ScrollMagic.Scene({\n  //     triggerElement: \".the-book\",\n  //     offset: -200\n  //   })\n  //   .setTween(tweenTheBook)\n  //   .addTo(controller)\n\n  // let scene = new ScrollMagic.Scene({\n  //     triggerElement: \".book-preview\",\n  //   })\n  //   .setTween($(\".preview\").parent(), 1, {\n  //     scale: 1.2\n  //   })\n  //   .addTo(controller);\n\n  $(\".event-gallery\").justifiedGallery({\n    rowHeight: 120,\n    margins: 3\n  });\n  $(\".event-gallery\").lightGallery();\n  $(\".around-town\").lightGallery({\n    thumbnail: true,\n    selector: '.around-town__item'\n  });\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/sckrollmenu.js":
/*!*******************************!*\
  !*** ./src/js/sckrollmenu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! skrollr-menu 1.0.3 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */\n(function (t, e) {\n  \"use strict\";\n\n  var n = 500,\n      a = \"sqrt\",\n      o = 1,\n      r = \"data-menu-top\",\n      i = \"data-menu-offset\",\n      u = \"data-menu-duration\",\n      c = \"data-menu-ignore\",\n      l = e.skrollr,\n      s = e.history,\n      f = !!s.pushState,\n      h = function (e) {\n    return e !== t && e ? \"A\" === e.tagName.toUpperCase() ? e : h(e.parentNode) : !1;\n  },\n      p = function (t) {\n    if (1 === t.which || 0 === t.button) {\n      var e = h(t.target);\n      e && m(e) && t.preventDefault();\n    }\n  },\n      m = function (n, a) {\n    var o;\n    if (y) {\n      if (n.hostname !== e.location.hostname) return !1;\n      if (n.pathname !== t.location.pathname) return !1;\n      o = n.hash;\n    } else o = n.getAttribute(\"href\");\n    if (!/^#/.test(o)) return !1;\n    if (!a && null !== n.getAttribute(c)) return !1;\n    var l, h;\n    if (h = T ? T(n) : n.getAttribute(r), null !== h) l = /p$/.test(h) ? h.slice(0, -1) / 100 * t.documentElement.clientHeight : +h * k;else {\n      var p = t.getElementById(o.substr(1));\n      if (!p) return !1;\n      l = v.relativeToAbsolute(p, \"top\", \"top\");\n      var m = p.getAttribute(i);\n      null !== m && (l += +m);\n    }\n    f && N && !a && s.pushState({\n      top: l\n    }, \"\", o);\n    var d = parseInt(n.getAttribute(u), 10),\n        q = A(v.getScrollTop(), l);\n    return isNaN(d) || (q = d), E && E(o, l), S && !a ? v.animateTo(l, {\n      duration: q,\n      easing: b\n    }) : g(function () {\n      v.setScrollTop(l);\n    }), !0;\n  },\n      d = function () {\n    if (e.location.hash && t.querySelector) {\n      var n = t.querySelector('a[href=\"' + e.location.hash + '\"]');\n      n || (n = t.createElement(\"a\"), n.href = e.location.hash), m(n, !0);\n    }\n  },\n      g = function (t) {\n    e.setTimeout(t, 1);\n  };\n  l.menu = {}, l.menu.init = function (r, i) {\n    v = r, i = i || {}, b = i.easing || a, S = i.animate !== !1, A = i.duration || n, T = i.handleLink, k = i.scale || o, y = i.complexLinks === !0, E = i.change, N = i.updateUrl !== !1, \"number\" == typeof A && (A = function (t) {\n      return function () {\n        return t;\n      };\n    }(A)), l.addEvent(t, \"click\", p), f && l.addEvent(e, \"popstate\", function (t) {\n      var e = t.state || {},\n          n = e.top || 0;\n      g(function () {\n        v.setScrollTop(n);\n      });\n    }, !1), d();\n  }, l.menu.click = function (t) {\n    m(t);\n  };\n  var v, b, A, S, T, k, y, E, N;\n  g(function () {\n    e.location.hash && e.scrollTo(0, 0);\n  });\n})(document, window);\n\n//# sourceURL=webpack:///./src/js/sckrollmenu.js?");

/***/ })

/******/ });