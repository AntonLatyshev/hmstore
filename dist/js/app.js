/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _markupMenu = __webpack_require__(1);

	var _header = __webpack_require__(3);

	var _header2 = _interopRequireDefault(_header);

	var _carousel = __webpack_require__(4);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _pluso = __webpack_require__(5);

	var _pluso2 = _interopRequireDefault(_pluso);

	var _tabs = __webpack_require__(6);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _catalog = __webpack_require__(7);

	var _catalog2 = _interopRequireDefault(_catalog);

	var _popup = __webpack_require__(8);

	var _popup2 = _interopRequireDefault(_popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _markupMenu.markupMenu)(window.document);


	$(function () {
	  (0, _header2.default)();
	  (0, _carousel2.default)();
	  (0, _pluso2.default)();
	  (0, _tabs2.default)();
	  (0, _catalog2.default)();
	  (0, _popup2.default)();
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.markupMenu = markupMenu;

	var _files = __webpack_require__(2);

	var _files2 = _interopRequireDefault(_files);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function markupMenu(document) {
	  var nav = document.createElement('div');
	  var style = document.createElement('style');
	  var button = document.createElement('button');
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(button);
	  wrapper.appendChild(nav);
	  wrapper.className = 'helper-nav-wrapper';
	  button.innerHTML = "Open pages list";
	  button.className = 'helper-nav-button';
	  nav.className = 'helper-nav';
	  style.innerHTML = '.helper-nav a:hover {\n      color:#fff;\n      background-color:#000;\n    }\n    .helper-nav a {\n      display:block;\n      color: #000;\n      padding: 3px;\n      margin:0\n    }\n    .helper-nav-button {\n      background: #000;\n      color: #fff;\n      padding: 5px;\n      font-weight: 300;\n      font-size: 12px;\n      border: none;\n      border-radius: 3px 0 0 0;\n      cursor: pointer;\n    }\n    .helper-nav-wrapper {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      font-family: monospace;\n      z-index: 9999;\n      text-align: right;\n      font-size: 14px;\n    }\n    .helper-nav {\n      text-align: left;\n      background-color: #fff;\n      border: 1px solid #000;\n      padding: 3px;\n      boxShadow: 0 0 40px 0 rgba(0,0,0,.2);\n      max-height: 300px;\n      overflow-y: auto;\n    }\n    @media all and (max-width:1024px) {\n      .helper-nav {\n        height: 160px;\n        overflow-y: scroll;\n      }\n    }';
	  document.head.appendChild(style);
	  if (_files2.default[0] !== 'dev') {
	    console.warn('Art Lemon production');
	    return;
	  }
	  for (var i = 1; i < _files2.default.length; i++) {
	    nav.innerHTML += '<a href="/' + _files2.default[i] + '">' + i + '-' + _files2.default[i] + '</a>';
	  }
	  document.body.appendChild(wrapper);
	  var flag = localStorage.getItem('flag') ? JSON.parse(localStorage.getItem('flag')) : false;
	  var display = flag ? 'block' : 'none';
	  var btnText = flag ? 'Close pages list' : 'Open pages list';
	  nav.style.display = display;
	  button.innerHTML = btnText;

	  function toggleNav() {
	    if (flag) {
	      nav.style.display = 'none';
	      button.innerHTML = 'Open pages list';
	    } else {
	      nav.style.display = 'block';
	      button.innerHTML = 'Close pages list';
	    }
	    flag = !flag;
	    localStorage.setItem('flag', flag);
	  }
	  document.addEventListener('keyup', function (e) {
	    if (e.type === 'keyup' && e.ctrlKey && e.keyCode === 88) {
	      toggleNav();
	    }
	  });
	  button.addEventListener('click', toggleNav);
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ["dev", "index.html"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var header = function header() {

	  $('.header__link.parent').on('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();

	    var $this = $(this),
	        item = $this.closest('.header__item'),
	        list = $this.closest('.header__menu'),
	        links = list.find('.header__link.parent'),
	        items = list.find('.header__item');
	    $('.search-form').removeClass('active');
	    if (!item.hasClass('active')) {
	      $('.header__menu').find('.header__item').removeClass('active');
	      items.removeClass('active');
	      item.addClass('active');
	    } else {
	      item.removeClass('active');
	    }
	  });

	  $('.header__item.search').on('click', function (e) {
	    e.stopPropagation();
	    $('.search-form').addClass('active');
	    setTimeout("$('.search-form').find('input').eq(0).focus();", 100);
	    $('.header__item').removeClass('active');
	  });
	  $('body').on('click', function () {
	    $('.search-form').removeClass('active');
	    $('.header__item').removeClass('active');
	  });
	  $('.dropdown').on('click', function (e) {
	    e.stopPropagation();
	  });

	  $('.hamburger').on('click', function () {
	    $('.popup.mobile').toggleClass('active');
	  });

	  $(window).on('load resize', function () {
	    if ($(window).width() <= 750) {
	      $('.nav').appendTo('.header__bottom.mobile');
	      $('.header__menu.nav-menu').appendTo('.box-mobile');
	    } else if ($(window).width() > 750) {
	      $('.header__top .header__holder').prepend($('.header__menu.nav-menu'));
	      $('.header__bottom .header__holder').append($('.nav'));
	      $('.popup.mobile').removeClass('active');
	    }
	  });
	  $(window).on('load resize', function () {
	    if ($(window).width() <= 509) {
	      $('.header__logo').prependTo('.header__top .header__holder');
	    } else if ($(window).width() > 509) {
	      $('.header__logo').prependTo('.header__middle .header__holder');
	    }
	  });
	};
	exports.default = header;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var carousel = function carousel() {

	  $('.slider').slick({
	    slidesToShow: 4,
	    responsive: [{
	      breakpoint: 1140,
	      settings: {
	        slidesToShow: 3
	      }
	    }, {
	      breakpoint: 860,
	      settings: {
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 568,
	      settings: {
	        slidesToShow: 1
	      }
	    }]
	  });

	  $('.big-slider').slick({
	    arrows: false,
	    fade: true,
	    asNavFor: '.mini-slider'
	  });
	  $('.mini-slider').slick({
	    vertical: true,
	    verticalSwiping: true,
	    slidesToShow: 7,
	    asNavFor: '.big-slider',
	    focusOnSelect: true,
	    responsive: [{
	      breakpoint: 670,
	      settings: {
	        vertical: false,
	        verticalSwiping: false
	      }
	    }, {
	      breakpoint: 590,
	      settings: {
	        vertical: false,
	        verticalSwiping: false,
	        slidesToShow: 6
	      }
	    }, {
	      breakpoint: 430,
	      settings: {
	        vertical: false,
	        verticalSwiping: false,
	        slidesToShow: 4
	      }
	    }]
	  });
	};
	exports.default = carousel;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pluso = function pluso() {

	  (function () {
	    if (window.pluso) if (typeof window.pluso.start == "function") return;
	    if (window.ifpluso == undefined) {
	      window.ifpluso = 1;
	      var d = document,
	          s = d.createElement('script'),
	          g = 'getElementsByTagName';
	      s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
	      s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
	      var h = d[g]('body')[0];
	      h.appendChild(s);
	    }
	  })();
	};
	exports.default = pluso;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tabs = function tabs() {

	  $('.tabs-controls__link').on('click', function (e) {
	    e.preventDefault();

	    var $this = $(this),
	        item = $this.closest('.tabs-controls__item'),
	        contentItem = $('.tabs-list__item'),
	        itemPosition = item.data('class');

	    contentItem.filter('.tabs-list__item_' + itemPosition).add(item).addClass('active').siblings().removeClass('active');
	  });
	};
	exports.default = tabs;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var catalog = function catalog() {

	  $('.catalog__link').on('click', function (e) {
	    e.preventDefault();

	    var $this = $(this),
	        item = $this.closest('.catalog__item'),
	        list = $this.closest('.catalog__list'),
	        items = list.find('.catalog__item'),
	        content = item.children('.catalog__insert'),
	        otherContent = list.find('catalog__insert');

	    item.toggleClass('active');
	    content.toggleClass('active');
	  });
	};
	exports.default = catalog;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var popup = function popup() {

	  $('.feedback__btn').on('click', function () {
	    $('.popup.feedback').addClass('active');
	    setTimeout("$('.popup__holder').find('input').eq(0).focus();", 100);
	  });

	  $('.popup, .popup__close').on('click', function () {
	    $('.popup').removeClass('active');
	  });

	  $('.popup__holder').on('click', function (e) {
	    e.stopPropagation();
	  });

	  $('input[type="tel"]').mask('+38 (099) 999-99-99');
	};
	exports.default = popup;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map