if (typeof $ != "undefined") {;
	$(function() {
		var width = $(window).width();
		var win = $(window);
		var isIE = !!window.ActiveXObject;
		var isIE6 = isIE && !window.XMLHttpRequest;
		var isIE8 = isIE && !!document.documentMode;
		var isIE7 = isIE && !isIE6 && !isIE8;

		// funhead
		if (width > 800) {
			(function() {
				var win = $(window);
				var header = $("#header");
				if (header.length > 0 && header.hasClass("tofixed")) {
					var headerTop = header.offset().top,
						headerHeight = header.height(),
						headerFixedTop = headerTop + headerHeight;
					var headerWrap = $("#headerWrap");
					headerWrap.length > 0 ? function() {
						headerWrap.height(headerHeight);
					}() : 0;
					win.on("load scroll resize", function() {
						$(this).scrollTop() >= headerFixedTop ? function() {
							!header.hasClass("header_fixed") ? header.addClass("header_fixed") : 0;
						}() : function() {
							header.removeClass("header_fixed")
						}();
						if (isIE6) {
							var scrollT = $(this).scrollTop();
							scrollT >= headerFixedTop ? function() {
								header.css({
									"top": scrollT + "px"
								});
							}() : function() {
								header.css({
									"top": "0px"
								});
							}();
						};
					});
				};
			})();
		}
		// end funhead

		// ftool
		(function() {
			var ftool = $("#ftool"),
				ftoolTop = $("#ftoolTop");
			ftoolTop.click(function(e) {
				e.preventDefault();
				$("html,body").animate({
					scrollTop: 0
				}, 500);
			});
			$(window).on("DOMContentLoaded scroll resize", function() {
				$(this).scrollTop() == 0 ? ftoolTop.stop(true, true).fadeOut() : ftoolTop.fadeIn();
				$(this).scrollTop() < 320 ? ftool.stop(true, true).fadeOut() : ftool.fadeIn();
			});
			// ie6
			if (isIE6) {
				$(window).scroll(function() {
					$("#ftool").css({
						"top": $(this).scrollTop() + 200
					});
				});
			};
		})();
		// end ftool

	});

};
// end jq

document.addEventListener("touchstart", function() {}, true);
var $$ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
Element.prototype.off = Element.prototype.removeEventListener;
var ForEach = function(array, fn) {
	[].forEach.call(array, fn);
};

function disableScroll(e) {
	e.preventDefault();
}

// slide
if (typeof TouchSlide == "function") {
	TouchSlide({
		slideCell: "#focusvideo",
		mainCell: ".bd",
		effect: "leftLoop",
		autoPlay: true,
		delayTime: 500,
		interTime: 5000
	});
};
// end slide



document.addEventListener("DOMContentLoaded", function() {


});



function callSidemenu() {
	var $$html = document.querySelector("html");
	var sidemenu = document.getElementById("sidemenu");
	if ($$html.classList.contains("show_sidemenu")) {
		$$html.classList.remove("show_sidemenu");
		$$html.off("touchmove", disableScroll);
	} else {
		$$html.classList.add("show_sidemenu");
		$$html.on("touchmove", disableScroll);
		sidemenu ? sidemenu.on("touchmove", function(e) {
			e.stopPropagation()
		}) : 0;
	}
}

function hideSidemenu() {
	var $$html = document.querySelector("html");
	$$html.classList.remove("show_sidemenu");
	$$html.off("touchmove", disableScroll);
}


$(function() {
	$('.nav img').click(function() {
		$('.nav dl').slideToggle();
	});
})
