(function($) {
	
    // $('.nav__list').find('li').each(function(i, ojb) {
    //     $(this).addClass('nav__list-item');
    // });	

    // $('.nav__list li').find('a').each(function(i, ojb) {
    //     $(this).addClass('hover-target animsition-link');
    // });	

    // $('.nav__content .nav__list li.menu-item-has-children > a').each(function(i, ojb) {
    //     $(this).removeClass('animsition-link');
    // });

    // $('.nav__content .nav__list li.current-menu-item').each(function(i, ojb) {
    //     $(this).addClass('active-nav');
    // });

    // $('.nav__content .nav__list li.current-menu-parent').each(function(i, ojb) {
    //     $(this).addClass('active-nav');
    // });
    
    // $('.nav__content .nav__list .menu-item-has-children').find('ul').each(function(i, ojb) {
    //     $(this).addClass('sub-links collapse');
    // });

	// $('.nav__content .nav__list li.menu-item-has-children > a').on('click', function(){
	// 	$(this).removeAttr('href');
	// 	var element = $(this).parent('li');
	// 	if (element.hasClass('show')) {
	// 		element.removeClass('show');
	// 		element.find('ul').slideUp(200);
	// 	}
	// 	else {
	// 		element.addClass('show');
	// 		element.children('ul').slideDown(200);
	// 	}
	// });
    // $('.custom-footer-lines').find('a').each(function(i, ojb) {
    //     $(this).addClass('hover-target animsition-link');
    // });	

    // $('.sidebar-box .widget').find('a').each(function(i, ojb) {
    //     $(this).addClass('hover-target');
    // });	
		
	//Page cursors
    // document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    //     t.style.left = n.clientX + "px", 
	// 	t.style.top = n.clientY + "px", 
	// 	e.style.left = n.clientX + "px", 
	// 	e.style.top = n.clientY + "px", 
	// 	i.style.left = n.clientX + "px", 
	// 	i.style.top = n.clientY + "px"
    // });
    // var t = document.getElementById("cursor"),
    //     e = document.getElementById("cursor2"),
    //     i = document.getElementById("cursor3");
    // function n(t) {
    //     e.classList.add("hover"), i.classList.add("hover")
    // }
    // function s(t) {
    //     e.classList.remove("hover"), i.classList.remove("hover")
    // }
    // s();
    // for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    //     o(r[a])
    // }
    // function o(t) {
    //     t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    // }
		
		
	//Parallax & fade on scroll	
	// function scrollBanner() {
	//   $(document).on('scroll', function(){
	// 	var scrollPos = $(this).scrollTop();
	// 	$('.parallax-fade-top').css({
	// 	  'top' : (scrollPos/2)+'px',
	// 	  'opacity' : 1-(scrollPos/300)
	// 	});
	// 	$('.parallax-top-shadow').css({
	// 	  'top' : (scrollPos/-2)+'px'
	// 	});
	// 	$('.parallax-top').css({
	// 	  'top' : (scrollPos/2.2)+'px'
	// 	});
	//   });    
	// }
	// scrollBanner();	
	
	
	// /* Scroll Animation */
	// window.scrollReveal = new scrollReveal();	

	
	/* Swiper */
    var swiper = new Swiper('.swiper-container', {
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true,
			dragSize: '19',
		},
		slidesPerView: 'auto',
		resistance: true,
		resistanceRatio: 0,
		speed: 800,
		autoplay: false,
		mousewheel: true,
		freeMode: true,
		grabCursor: true,
		touchStartPreventDefault: false,
		breakpoints: {
			// when window width is <= 1200px
			1200: {
				freeMode: false,
			}
		}		
    });	
	// $('#hero-slider').on('mousedown touchstart', function(event) {				
	// 	$('body').addClass('scale-up');
	// });				
	// $('#hero-slider').on('mouseup touchend', function(event) {				
	// 	$('body').removeClass('scale-up');
	// });

	
	//Navigation
	// var app = function () {
	// 	var body = undefined;
	// 	var menu = undefined;
	// 	var menuItems = undefined;

	// 	var init = function init() {
	// 		body = document.querySelector('body');
	// 		menu = document.querySelector('.menu-icon');
	// 		menuItems = document.querySelectorAll('.nav__list-item');

	// 		applyListeners();
	// 	};

	// 	var applyListeners = function applyListeners() {
	// 		menu.addEventListener('click', function () {
	// 			return toggleClass(body, 'nav-active');
	// 		});
	// 	};

	// 	var toggleClass = function toggleClass(element, stringClass) {
	// 		if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
	// 	};

	// 	init();
	// }();

	
 
})(jQuery); 