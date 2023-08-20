function $$$(id) {
	return document.getElementById(id);
}
function	Forward(url) {
	window.location.href = url;
}
function	_postback() {
	return void(1);
}
jQuery.fn.exists = function(){ return this.length > 0; }
//----------------------------------------------------------------------------------------------------------------------
function ajaxFunction() {
	var xmlHttp=null;
	try {
		// Firefox, Internet Explorer 7. Opera 8.0+, Safari.
		xmlHttp = new XMLHttpRequest();
	}
	catch (e) {
		// Internet Explorer 6.
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try{
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {
				return false;
			}
		}
	}
}

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param obj
 * @returns {string}
 */
function $query(obj) {
	var query = "";
	$(obj).find("input").each(function(i){
		var t = $(obj).find("input").eq(i);
		if ((t.attr("type") != "checkbox") && (t.attr("type") != "button") && (t.attr("type") != "radio") ) {
			if (t.attr("type") != "password") {
				query += "&"+t.attr("name")+"="+encodeURIComponent(t.val());
			} else {
				query += "&"+t.attr("name")+"="+document.getElementById(t.attr("name")).value;
			}
		}
		else {
			if(t.attr("type") == "checkbox") {
				if (t.is(":checked"))
					query += "&"+t.attr("name")+"="+t.attr("value");
			}
			else if (t.attr("type") == "radio") {
				if (t.is(":checked"))
					query += "&"+t.attr("name")+"="+t.attr("value");
			}
		}
	});
	$(obj).find("textarea").each(function(i) {
		var t = $(obj).find("textarea").eq(i);
		query += "&"+t.attr("name")+"="+encodeURIComponent(t.val());
	});
	$(obj).find("button").each(function(i) {
		var t = $(obj).find("button").eq(i);
		query += "&"+t.attr("name")+"="+encodeURIComponent(t.val());
	});
	$(obj).find("select").each(function(i) {
		var t = $(obj).find("select").eq(i);
		query += "&"+t.attr("name")+"="+encodeURIComponent(t.val());
	});

	return query.substring(1);
}

//----------------------------------------------------------------------------------------------------------------------
function $query_unt(obj) {
	var query = "";
	$(obj).find("input").each(function(i){
		var t = $(obj).find("input").eq(i);
		if((t.attr("type") != "button") && (t.attr("type") != "submit") && (t.attr("type") != "reset") && (t.attr("type") != "hidden")) {
			if ((t.attr("type") != "checkbox") && (t.attr("type") != "radio") ) {
				t.val('');
			} else {
				t.attr("checked", false);
			}
		} else {}
	});
	$(obj).find("textarea").each(function(i) {
		var t = $(obj).find("textarea").eq(i);
		t.val('');
	});
	return true;
}
//----------------------------------------------------------------------------------------------------------------------
function showLoader() {
	$("#_loading").html("<div style=\"position: fixed; top: 50%; right: 0;left: 0; text-align: center; background: transparent; z-index: 999999999;\"><div class=\"windows8\"> <div class=\"wBall\" id=\"wBall_1\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_2\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_3\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_4\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_5\"> <div class=\"wInnerBall\"> </div> </div> </div></div>").show().fadeIn(10);
	block = true;
}

//----------------------------------------------------------------------------------------------------------------------
function closeLoader() {
	$("#_loading").html("").hide().fadeOut(100);
	block = false;
}

//----------------------------------------------------------------------------------------------------------------------
function showResult(type,data) {
	closeLoader();
	$("#"+type+"").html(data).hide().fadeIn(100);
	block = false;
}

//----------------------------------------------------------------------------------------------------------------------
$(document).ready(function() {
	$('img.lazy').Lazy();
	$(window).scroll(function() {
		if($(this).scrollTop() > 50) {
			$('#go-top').stop().animate({
				bottom: '23px'
			}, 150);
		} else {
			$('#go-top').stop().animate({
				bottom: '-50px'
			}, 150);
		}
	});
	$('#go-top').click(function() {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 500, function() {
			$('#go-top').stop().animate({
				bottom: '-50px'
			}, 150);
		});
	});
	$('input[type="number"]').inputSpinner();
	$('.b-pn input[type="text"]').prop('disabled', true);
	$('.auto-number').autoNumeric('init');
});
$(window).load(function() {
	$(".detail-wp img").each(function () {
		var ck = $(this).parent('a').length;
		if($(this).width()>100 && ck==0) {
			$(this).replaceWith('<a class="f-zoom" data-fancybox="photos" href="'+$(this).attr('src')+'">'+$(this)[0].outerHTML +'</a>');
		}
	});
});

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0 && window.innerWidth > 300) {
			$('.menu-tour').addClass('fixed');
		} else {
			$('.menu-tour').removeClass('fixed');
		}
	});
});


$('.sl-banner').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 3000,
	lazyLoad: true,
	items: 1,
});
$('.sl-hoinghi').owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	items: 1,
	responsive: {
		300: {
			dots: false,
		},
		1000: {
			dots: true,
		}

	}
});
$('.structure').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	lazyLoad: true,
	responsive: {
		0:{
			items: 2,
			nav: false
		},
		540:{
			items: 3,
			margin: 70,
			nav: false
		},
		960:{
			items: 4,
			margin: 140
		},
		1100:{
			items: 4,
			margin: 140
		}
	}
});
$('.review-hot').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	margin: 32,
	autoplay: true,
	autoplayTimeout: 3000,
	lazyLoad: true,
	items: 3,
	responsive: {
		300: {
			items: 1,
		},
		1000: {
			items: 3,
		}

	}
});
var swiper = new Swiper(".mySwiper", {
	loop: false,
	spaceBetween: 8,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
	loop: false,
	spaceBetween: 8,
	thumbs: {
		swiper: swiper,
	},
});

var swiper = new Swiper('.slider_home_', {
    centeredSlides: true,
	effect: 'fade',
	speed: 3000,
    autoplay:
        {
            delay: 5000,
            disableOnInteraction: false,
        },
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
});


$('.rating-h').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	margin: 12,
	responsive: {
		0:{
			items: 1,
			nav: false
		},
		540:{
			items: 2,
			nav: false,
		},
		960:{
			items: 2,
		},
		1100:{
			items: 2,
		}
	}
});
$('.top_hang-h').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	margin: 12,
	responsive: {
		0:{
			items: 2,
			nav: false
		},
		540:{
			items: 3,
			nav: false,
		},
		960:{
			items: 3,
		},
		1200:{
			items: 3,
		}
	}
});
$('.dvk-sl').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	margin: 12,
	responsive: {
		0:{
			items: 2,
			nav: false
		},
		540:{
			items: 3,
			nav: false,
		},
		960:{
			items: 3,
		},
		1200:{
			items: 3,
		}
	}
});
$('.thu_vien-sl').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	margin: 12,
	responsive: {
		0:{
			items: 2,
			nav: false
		},
		540:{
			items: 3,
			nav: false,
		},
		960:{
			items: 3,
		},
		1200:{
			items: 6,
		}
	}
});
$('.top_deal-h').owlCarousel({
	loop: false,
	nav: true,
	dots: false,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	margin: 12,
	responsive: {
		0:{
			items: 2,
			nav: false
		},
		540:{
			items: 3,
			nav: false,
		},
		960:{
			items: 3,
		},
		1200:{
			items: 5,
		}
	}
});
$(function () {
	$(".bb-tour-h .bb-tour-item").slice(0, 5).show();
	$("#loadMoreTour").on('click', function (e) {
		e.preventDefault();
		$(".bb-tour-h .bb-tour-item:hidden").slice(0, 5).slideDown();
		if ($(".bb-tour-h .bb-tour-item:hidden").length == 0) {
			$(".loadMoreTour").addClass('slowsss');
		}
	});
});
$(function () {
	$(".list-gallery .grid-big").slice(0, 4).show();
	$("#loadMorePhoto").on('click', function (e) {
		e.preventDefault();
		$(".list-gallery .grid-big:hidden").slice(0, 4).slideDown();
		if ($(".list-gallery .grid-big:hidden").length == 0) {
			$(".loadMorePhoto").addClass('slowsss');
		}
	});
});
$('.otherproj').owlCarousel({
	loop: false,
	nav: false,
	dots: false,
	margin: 30,
	autoplay: false,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	lazyLoad: true,
	responsive: {
		0:{
			items: 1
		},
		540:{
			items: 2,
		},
		960:{
			items: 3,
		},
		1100:{
			items: 3,
		}
	}
});

function change_timkiem(id) {
	$('#tk_tour').val(id);
	$('.item_tab').removeClass('tk_acti');
	$('#item_tab_'+id).addClass('tk_acti');
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: 'url=change_timkiem&id='+id,
		dataType: "html",
		success: function(data){
			showResult("diemden_tk", data);
		}
	});
	return false;
}

$('#_search').on('change', 'input[name="s_type"]', function () {
	var c = $.trim($(this).val());
	var r = $(this).closest('.s-form').find('.load-nuoc-ngoai');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			'url': 'box_search',
			'type': 'select',
			'choice': c
		},
		dataType: 'html',
		success: function(rs){
			r.html(rs);
		}
	});
	return false;
});
$( function() {
	$( "#booking_date" ).datepicker({
		changeMonth:true,
		changeYear:true,
		minDate: +0,
		dateFormat:'dd-mm-yy'
	});
} );
$( function() {
	$( "#booking_date1" ).datepicker({
		changeMonth:true,
		changeYear:true,
		minDate: +0,
		dateFormat:'dd-mm-yy'
	});
} );
$(function() {
	$('.tour-tn-list').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 25,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		lazyLoad: true,
		responsive: {
			0:{
				items: 1.3,
				nav: false
			},
			420:{
				items: 1.3,
				nav: false
			},
			768:{
				items: 2,
				margin: 16,
				nav: false
			},
			1100:{
				items: 4
			}

		}
	});
});
$(function() {
	$('.slide-t-mb').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 16,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		lazyLoad: true,
		responsive: {
			0:{
				items: 1.3,
				nav: false
			},
			420:{
				items: 1.3,
				nav: false
			},
			768:{
				items: 2,
				nav: false
			},
			1100:{
				items: 4
			}
		}
	});
});
$(function() {
	$('.gallery-list-h').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 25,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		lazyLoad: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			420:{
				items: 1,
				nav: false
			},
			880:{
				items: 1
			},
			1100:{
				items: 1
			}
		}
	});
});

function open_book(id) {
	$.post('/action.php?url=open_book&id='+id, function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}
function open_product(id,type) {
	$.post('/action.php?url=open_product&id='+id+'&type='+type, function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}
function open_hotel(id,type) {
	$.post('/action.php?url=open_hotel&id='+id, function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}
function open_code(id) {
	$.post('/action.php?url=open_code&id='+id, function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}
function open_tienich(id) {
	$.post('/action.php?url=open_tienich&id='+id, function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}
function open_gallery_tn(id, hotel_room_id) {
	$.post('/action.php?url=open_gallery_tn&id='+id+'&hotel_room_id='+hotel_room_id, function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});

		$(function () {
			$('.one-product__slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.one-product__slider_navigation',
				arrows: true,
				dots: false,
				infinite: true,
				focusOnSelect: true,
				fade: true,
				cssEase: 'linear'
			});
// Slider | one-product-slider
			$('.one-product__slider_navigation').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				infinite: true,
				asNavFor: '.one-product__slider',
				focusOnSelect: true,
				centerMode: false,
				vertical: false,
			});
		});
	});
}

function sendMail(type, id) {
	var dataList = $query('#'+id);
	showLoader();
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: 'url='+type+'&'+dataList,
		dataType: "html",
		success: function(data){
			closeLoader();
			$query_unt('#'+id);
			alert(data);
		}
	});
	return false;
}
function sendMailReload(type, id) {
	var dataList = $query('#'+id);
	showLoader();
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: 'url='+type+'&'+dataList,
		dataType: "html",
		success: function(data){
			closeLoader();
			$query_unt('#'+id);
			alert(data);
			setTimeout(function () {
				window.location.reload();
			}, 5000);
		}
	});
	return false;
}

$(function() {
	$('.search-tour-k .search-detail').on('change', 'select[name="diemdi"]', function () {
		var el = $(this);
		var diemdi = el.val();
		var price = $('.list-group-item.airline-p.active').attr('data-price');
		var chude = $('.tour-cd.active').attr('data-chude');

		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_tour&price=' + price + '&diemdi=' + diemdi  + '&chude=' + chude,
			dataType: "html",
			success: function (data) {
				// window.history.pushState(null, data.r3, data.r2);
				$('.content-product').html(data);
			}
		});
	});
	$('.container').on('click', '.airline-p', function () {
		var el = $(this);
		var price = $(el).attr('data-price');
		var diemdi = $(".s_diemdi option:selected").val();
		var chude = $('.tour-cd.active').attr('data-chude');console.log(chude);

		$(el).closest('.list-group').find('.airline-p.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_tour&price=' + price + '&diemdi=' + diemdi  + '&chude=' + chude,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
	$('.tour-cd').click(function () {
		var el = $(this);
		var chude = $(el).attr('data-chude');
		var price = $('.list-group-item.airline-p.active').attr('data-price');
		var diemdi = $(".s_diemdi option:selected").val();

		$(el).closest('.list-group').find('.airline-h.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_tour&price=' + price + '&diemdi=' + diemdi  + '&chude=' + chude,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
});


$(function() {

	// Vars
	var modBtn  = $('#modBtn4'),
		modal   = $('#modal4'),
		close   = modal.find('.close'),
		modContent = modal.find('.modal-content');

	// open modal when click on open modal button
	modBtn.on('click', function() {
		modal.css('display', 'block');
		modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
	});

	// close modal when click on close button or somewhere out the modal content
	$(document).on('click', function(e) {
		var target = $(e.target);
		if(target.is(modal) || target.is(close)) {
			modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
				modal.css('display', 'none');
				next();
			});
		}
	});

});
$(function() {

	// Vars
	var modBtn  = $('#modBtn1'),
		modal   = $('#modal1'),
		close   = modal.find('.close'),
		modContent = modal.find('.modal-content');

	// open modal when click on open modal button
	modBtn.on('click', function() {
		modal.css('display', 'block');
		modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
	});

	// close modal when click on close button or somewhere out the modal content
	$(document).on('click', function(e) {
		var target = $(e.target);
		if(target.is(modal) || target.is(close)) {
			modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
				modal.css('display', 'none');
				next();
			});
		}
	});

});

$('.link-a-close').click(function() {
    $('#modal4').css('display', 'none');
});
$('.close').click(function() {
    $('#modal4').css('display', 'none');
});
var lastScrollTop = 0;
$(window).scroll(function(event){
	if($( window ).width() < 961)
	{
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			if(st > 50)
			{
				$('.header').css('display','none');
				// $('.togger-mobile').css('display','none');
				$('.menu-tour').css('opacity','0');
			}
		} else {
			$('.header').css('display','block');
			// $('.togger-mobile').css('display','block');
			$('.menu-tour').css('opacity','1');
		}
		lastScrollTop = st;
	}
});

$(document).ready(function(){

	$("div.ten_lt").click(function()
	{

		$(this).next("div.noi_dung_lichtrinh").slideToggle(300).siblings("div.noi_dung_lichtrinh").slideUp(100);


	});
})

$("#GO1").click(function() {
	$('html, body').animate({scrollTop: $("#TO1").offset().top - 150}, 500);
});
$("#GO2").click(function() {
	$('html, body').animate({scrollTop: $("#TO2").offset().top - 150}, 500);
});
$("#GO3").click(function() {
	$('html, body').animate({scrollTop: $("#TO3").offset().top - 150}, 500);
});
$("#GO4").click(function() {
	$('html, body').animate({scrollTop: $("#TO4").offset().top - 150}, 500);
});
$("#GO5").click(function() {
	$('html, body').animate({scrollTop: $("#TO5").offset().top - 150}, 500);
});


jQuery(window).scroll(function(){
	var HeightB = jQuery(".banner").height();
	var HeightAll = HeightB-10;
	HeightWindow = parseInt($(window).scrollTop());
	var Height1 = jQuery("#TO1").height();
	var Height2 = jQuery("#TO2").height();
	var Height3 = jQuery("#TO3").height();
	var Height4 = jQuery("#TO4").height();
	var Height5 = jQuery("#TO5").height();

	if(HeightWindow < Height1 + HeightAll){
		jQuery("#GO1").addClass("active");
	}else{jQuery("#GO1").removeClass("active");}

	if(HeightWindow > Height1 + HeightAll){
		jQuery("#GO2").addClass("active");
	}else{jQuery("#GO2").removeClass("active");}

	if(HeightWindow > Height2 + Height1 + HeightAll){
		jQuery("#GO3").addClass("active");
		jQuery("#GO2").removeClass("active");
	}else{jQuery("#GO3").removeClass("active");}

	if(HeightWindow > Height3 + Height2 + Height1 + HeightAll){
		jQuery("#GO4").addClass("active");
		jQuery("#GO3").removeClass("active");
	}else{jQuery("#GO4").removeClass("active");}

	if(HeightWindow > Height4 + Height3 + Height2 + Height1 + HeightAll){
		jQuery("#GO5").addClass("active");
		jQuery("#GO4").removeClass("active");
	}else{jQuery("#GO5").removeClass("active");}
})

$('.xemtheman2').click(function() {
	$('.ktda-p2').toggleClass('css_hidden');
	$(".xemtheman2").text(($(".xemtheman2").text() == 'Xem thêm') ? 'Thu gọn' : 'Xem thêm').fadeIn();
	$('.xemtheman2').toggleClass('css_posi');

});

if($('.ktda-testheightp1b' ).height() < 67)
{
	$('.xemtheman2').addClass('hidden');
}

$('.container').on('click', '.hoinghi-r-item ', function () {
	var el = $(this);
	let id = $(this).attr('data-value');
	$(el).closest('.list-hoinghi-r').find('.hoinghi-r-item.active').removeClass('active');
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: 'url=load_hoinghi&id='+id,
		dataType: "html",
		success: function(data){
			$(el).addClass('active');
			$('.item-hoinghi-l').html(data);
			$('.sl-hoinghi').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				margin: 0,
				autoplay: false,
				autoplayTimeout: 3000,
				lazyLoad: true,
				items: 1,
				responsive: {
					300: {
						dots: false,
					},
					1000: {
						dots: true,
					}

				}
			});
		}
	});
}).on('click', '.click-tour-k', function () {
	var el = $(this);
	let id = $(this).attr('data-value');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'load_price_tour_k',
			id: id
		},
		cache: false,
		async: false,
		dataType: 'json',
		success: function(rs) {
			$('#gia').html(rs.msg.gia);
			$('#giatreem').html(rs.msg.giatreem);
			$('#_price').html(rs.msg.gia_format);
			$('.load-treem').html(rs.msg.giatrem_format);
			$('.load-nglon').html(rs.msg.gianguoilon_format);
			$('input[name="nguoilon"]').val(1);
			$('input[name="treem"]').val(0);
			$('input[name="price-tour"]').val(rs.msg.gia);
			$('input[name="price-child-tour"]').val(rs.msg.giatreem);
			$('input[name="name-tour-k"]').val(rs.msg.name_tour_k);
			$('input[name="date_departure"]').val(rs.msg.date_departure);
			$('select[name="date_departure"]').val(rs.msg.date_departure);
		},
	});
}).on('change', 'select[name="date_departure"]', function () {
	var el = $(this);
	let id = $(this).find(':selected').attr('data-id')
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'load_price_tour_k',
			id: id
		},
		cache: false,
		async: false,
		dataType: 'json',
		success: function(rs) {
			$('#gia').html(rs.msg.gia);
			$('#giatreem').html(rs.msg.giatreem);
			$('#_price').html(rs.msg.gia_format);
			$('.load-treem').html(rs.msg.giatrem_format);
			$('.load-nglon').html(rs.msg.gianguoilon_format);
			$('input[name="nguoilon"]').val(1);
			$('input[name="treem"]').val(0);
			$('input[name="price-tour"]').val(rs.msg.gia);
			$('input[name="price-child-tour"]').val(rs.msg.giatreem);
			$('input[name="name-tour-k"]').val(rs.msg.name_tour_k);
			$('input[name="date_departure"]').val(rs.msg.date_departure);
			$('select[name="date_departure"]').val(rs.msg.date_departure);
		},
	});
});
$('.input-date').datetimepicker({
	lang:'vi',
	timepicker: false,
	format:'d/m/Y'
});

$('input[name="date_departure"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('input[name="date_departure"]').val(q);
});
$('input[name="nguoilon"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('input[name="qty_ald"]').val(q);
});
$('input[name="treem"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('input[name="qty_chil"]').val(q);
});



//Hàm đọc và hiện thị thông tin
function displayVals() {
	var nguoilonValues =   $( "#nguoilon" ).val();
	var treemValues =   $( "#treem" ).val();
	var giaValues =   $( "#gia" ).html();
	var giatreemValues =   $( "#giatreem" ).html();
	var d = Number(nguoilonValues);
	var a = Number(treemValues);
	var u = Number(giaValues);
	var n = Number(giatreemValues);

	$('#_price').html(( u*d + n*a).toLocaleString("da-DK"));
}

//Bắt sự kiện thi thay đổi giá trị
$( "#nguoilon, #treem, #embe" ).change( displayVals );

displayVals();

$('.pd-tab-nav').on('click', 'ul > li > a[href^="#"]',function (e) {
	e.preventDefault();
	var ul		= $(this).closest('ul');
	var li		= $(this).closest('li');
	var hash 	= $(this).prop('hash').replace('#','');
	if(!li.hasClass('active')) {
		ul.find('li.active').removeClass('active');
		li.addClass('active');
		$('.pd-tab-panel').find('.pd--s-panel.active').removeClass('active');
		$('.pd-tab-panel').find('#' + hash).addClass('active');
	} else {
		return false;
	}
});
$('.slide-category-hotel').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin: 0,
	autoplay: false,
	autoplayTimeout: 3000,
	lazyLoad: true,
	items: 1
});

$(function() {
	$('.slide-code-hotel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 40,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		lazyLoad: true,
		responsive: {
			0:{
				items: 1,
			},
			420:{
				items: 1,
			},
			768:{
				items: 2,
			},
			1100:{
				items: 3
			}
		}
	});
});

$(function() {
	$('.container').on('click', '.type-room', function () {
		var el = $(this);
		var type_room = $(el).attr('data-typer');
		var price = $('.list-group-item.price-meeeting.active').attr('data-price');
		var hangks = $('.hangks.active').attr('data-hangks');
		$(el).closest('.list-group').find('.type-room.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_meeting&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
	$('.container').on('click', '.price-meeeting', function () {
		var el = $(this);
		var price = $(el).attr('data-price');
		var type_room = $(".type-room.active").attr('data-typer');
		var hangks = $('.hangks.active').attr('data-hangks');

		$(el).closest('.list-group').find('.price-meeeting.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_meeting&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
	$('.container').on('click', '.hangks', function () {
		var el = $(this);
		var hangks = $(el).attr('data-hangks');
		var price = $('.list-group-item.price-meeeting.active').attr('data-price');
		var type_room = $(".type-room.active").attr('data-typer');


		$(el).closest('.list-group').find('.hangks.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_meeting&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
});

$(function() {
	$('.container').on('click', '.type-room', function () {
		var el = $(this);
		var type_room = $(el).attr('data-typer');
		var price = $('.list-group-item.price-nhahang.active').attr('data-price');
		var hangks = $('.hangks.active').attr('data-hangks');
		$(el).closest('.list-group').find('.type-room.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_nhahang&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
	$('.container').on('click', '.price-nhahang', function () {
		var el = $(this);
		var price = $(el).attr('data-price');
		var type_room = $(".type-room.active").attr('data-typer');
		var hangks = $('.hangks.active').attr('data-hangks');

		$(el).closest('.list-group').find('.price-nhahang.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_nhahang&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
	$('.container').on('click', '.hangks', function () {
		var el = $(this);
		var hangks = $(el).attr('data-hangks');
		var price = $('.list-group-item.price-nhahang.active').attr('data-price');
		var type_room = $(".type-room.active").attr('data-typer');


		$(el).closest('.list-group').find('.hangks.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_nhahang&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.content-product').html(data);
			}
		});
	});
});

$('.menu-hotel-hnn ul li').click(function(){
  var el = $(this);
  var id = $(el).attr('data-id');
  $(el).closest('.menu-hotel-hnn').find('ul li.active').removeClass('active');
  $.ajax({
      url: '/action.php',
      type: 'POST',
      data: 'url=load_khach_san&id='+id,
      dataType: "html",
      success: function (data) {
          $(el).addClass('active');
          $('.hnn-hotel-item').html(data);
      }
  });
});

 var show5 = document.getElementById("show5");
var hide5 = document.getElementById("hide5");
var state5 = true;
show5.onclick = function () {
    if (state5 == false) {
        hide5.setAttribute("style", " display:none");
        state5 = true;
    } else {
        hide5.setAttribute("style", " display:block");
        state5 = false;
    }
}
var show6 = document.getElementById("show6");
var hide6 = document.getElementById("hide6");
var state6 = true;
show6.onclick = function () {
    if (state6 == false) {
        hide6.setAttribute("style", " display:none");
        state6 = true;
    } else {
        hide6.setAttribute("style", " display:block");
        state6 = false;
    }
}



// $('input[name="time_den"]').change(function () {
// 	var e = $(this);
// 	var q = e.val();
// 	var d =  $('input[name="time"]').val();
// 	$('input[name="so_dem"]').val(daysdifference(q, d));
// });
// $('input[name="time"]').change(function () {
// 	var e = $(this);
// 	var q = e.val();
// 	var d =  $('input[name="time_den"]').val();
// 	$('input[name="so_dem"]').val(daysdifference(q, d));
// });

// function daysdifference(firstDate, secondDate) {
// 	var startDay = new Date(firstDate);
// 	var endDay = new Date(secondDate);
//
// 	var millisBetween = startDay.getTime() - endDay.getTime();
// 	var days = millisBetween / (1000 * 3600 * 24);
//
// 	return Math.round(Math.abs(days));
// }

$('input[name="time_den"]').change(function () {

	var e = $(this);
	var q = e.val();
	var d =  $('input[name="time"]').val();

	var msMinute = 60 * 1000;
		var msDay = 60 * 60 * 24 * 1000;

		var start = d; // October 12
		var statarr = start.split('-');

		var end = q; // December 15
		var endarr = end.split('-');

		var dstart = new Date(statarr[1] + '/' + statarr[0] + '/' + statarr[2]).getTime();
		var dend = new Date(endarr[1] + '/' + endarr[0] + '/' + endarr[2]).getTime();

		var diff = parseInt(dend - dstart);

		difference = Math.floor(diff / msDay);
	$('input[name="so_dem"]').val(difference);
	$('input[name="sodem-b"]').val(difference);
	$('.time-den-ht').html(q);
	$('input[name="ngaytrap"]').val(q);
	$('input[name="sodem-f"]').val(difference);
    displayValsKs();

});
$('input[name="time"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('.time-ht').html(q);
	$('input[name="ngaynhanp"]').val(q);
    displayValsKs();
});
$('.close-select-h6').click(function() {
	$('#modal4').css('display', 'none');
});

$('input[name="songuoilon"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('.songuoilon').html(q);
	$('.solugngllon').html(q);
	$('input[name="songuoilon-f"]').val(q);
});
$('input[name="sotreem"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('.sotreem').html(q);
	$('input[name="sotreem-f"]').val(q);
});
$('input[name="sophong"]').change(function () {
	var e = $(this);
	var q = e.val();
	$('.sophong').html(q);
	$('input[name="sophong-b"]').val(q);
	$('input[name="sophong-f"]').val(q);
    displayValsKs();
});


//Hàm đọc và hiện thị thông tin
function displayValsKs() {

	var giamcode =   $( 'input[name="add_code_f"]' ).val();
	var giaValues =   $( "#gia" ).html();
	var ptnglon =   $( "#ptnglon" ).html();
	var pthutreem =   $( "#pthutreem" ).html();
	var u = Number(giaValues);
	var c = Number(giamcode);
	var nl = Number(ptnglon);
	var te = Number(pthutreem);

	if ( u - c + nl + te > 0) {
		$('#tongtongtt').html((u - c + nl + te).toLocaleString("da-DK"));
	}else{
		$('#tongtongtt').html('(Liên hệ)');
	}

}

displayValsKs();

$('input[name="ma_giam"]').change(function(){
	var e = $(this);
	var q = e.val();
	var totalprice =   $( "#gia" ).html();
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: 'url=check_code&q='+q,
		dataType: "json",
		success: function(rs){
			closeLoader();
			if (rs.pcs === true) {
				$('.checkcode').val(rs.msg.code);
				$('#sluonggiam').html('- ' + (totalprice*rs.msg.sluong/100).toLocaleString("da-DK"));

				$('input[name="add_code_f"]').val(totalprice*rs.msg.sluong/100);
				$('#sluonggiam').css('display','block');
				var totalpriceK =   $( 'input[name="add_code_f"]' ).val();

				$('#tongtongtt').html((totalprice - totalpriceK ).toLocaleString("da-DK"));
				displayValsKs()

			} else {
				alert(rs.msg);
				$('.checkcode').val('');
				$('#sluonggiam').html('');
				$('input[name="add_code_f"]').val('');
				$('#tongtongtt').html((totalprice).toLocaleString("da-DK"));
				displayValsKs()
			}
		}
	});
	return false;
});

$(document).ready(function(){
	$("#dat_phong").click(function(){
	$(".trinputform1").css('display', 'block');
	});
});
$(document).ready(function(){
	// $("#xuathoadon").click(function(){
	// 	$(".xuathd").css('display', 'block');
	// });
	$('#xuathoadon').on('change', function(){
		if($(this).is(":checked")){
			$('.xuathd').show();
		}
		else{
			$('.xuathd').hide();
		}
	});
});

function delay(fn, ms) {
	let timer = 0
	return function(...args) {
		clearTimeout(timer)
		timer = setTimeout(fn.bind(this, ...args), ms || 0)
	}
}

$(function() {
	$('.container').on('click', '.type-room2', function () {
		var el = $(this);
		var type_room = $(el).attr('data-typer');
		var price = $('.list-group-item.price-hotel.active').attr('data-price');
		var hangks = $('.hangks2.active').attr('data-hangks');
		var hotel_menu = $('.search-remove-h').val();

		$(el).closest('.list-group').find('.type-room2.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_khachsan&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks+ '&hotel_menu=' + hotel_menu,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.search-tour-list').html(data);
			}
		});
	});
	$('.container').on('click', '.price-hotel', function () {
		var el = $(this);
		var price = $(el).attr('data-price');
		var type_room = $(".type-room2.active").attr('data-typer');
		var hangks = $('.hangks2.active').attr('data-hangks');
		var hotel_menu = $('.search-remove-h').val();

		$(el).closest('.list-group').find('.price-hotel.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_khachsan&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks+ '&hotel_menu=' + hotel_menu,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.search-tour-list').html(data);
			}
		});
	});
	$('.container').on('click', '.hangks2', function () {
		var el = $(this);
		var hangks = $(el).attr('data-hangks');
		var price = $('.list-group-item.price-hotel.active').attr('data-price');
		var type_room = $(".type-room2.active").attr('data-typer');
		var hotel_menu = $('.search-remove-h').val();

		$(el).closest('.list-group').find('.hangks2.active').removeClass('active');
		$(el).closest('.list-group').find('span.glyphicon.glyphicon-ok').remove();
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_khachsan&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks+ '&hotel_menu=' + hotel_menu,
			dataType: "html",
			success: function (data) {
				$(el).addClass('active');
				$(el).append("<span class='glyphicon glyphicon-ok'></span>");
				$('.search-tour-list').html(data);
			}
		});
	});



	$('.container').on('click', '.order-search-hotel', function () {
		var el = $(this);
		var order = $(el).attr('data-order');
		var hangks = $('.hangks2.active').attr('data-hangks');
		var price = $('.list-group-item.price-hotel.active').attr('data-price');
		var type_room = $(".type-room2.active").attr('data-typer');
		var hotel_menu = $('.search-remove-h').val();
		showLoader();
		$(el).closest('.list-group').find('.order-search-hotel.active').removeClass('active');
		$.ajax({
			url: '/action.php',
			type: 'POST',
			data: 'url=search_khachsan&price=' + price + '&type_room=' + type_room  + '&hangks=' + hangks+'&order='+order+ '&hotel_menu=' + hotel_menu,
			dataType: "html",
			success: function (data) {
				closeLoader()
				$(el).addClass('active');
				$('.search-tour-list').html(data);
			}
		});
	});
	$('#hT_search').keyup(delay(function (e) {
		search_tukhoasp(this.value);
	}, 500));
});
$('.header').on('click', '.search .b-search', function() {
	$('.form-search').toggleClass('show');
});
$(function() {
	$('.container').find('.tp-timer').each(function(index, el) {
		var countTo = parseInt($(el).attr('rel'));
		$(el).countdown(countTo, function(event) {
			var $this = $(this);
			switch(event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "weeks":
				case "daysLeft":
					$this.find('span.'+event.type).html(event.value);
					break;
				case "finished":
					break;
			}
		});
	});
});

$('.container').on('click', '.item_date', function () {
	var el = $(this);
	var id = $(el).attr('data-id');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: 'url=load_flash&id='+id,
		dataType: "html",
		success: function (data) {
			$('.hnn-hotel-item').html(data);
		}
	});
});
// var hg0 = jQuery('.info_wrapper').height(); console.log(hg0);
// if(hg0 > 267){
// 	$('.room-main-des').removeClass('show')
// }else{
// 	$('.room-main-des').addClass('show')
// }
//

$('.wedding-view-more-arrow').click(function(){
	$('.room-main-des').addClass('show')
	$('.wedding-view-more-arrow').addClass('css_hidden')
	$('.view-more-arrow-fix').removeClass('css_hidden')
});
$('.view-more-arrow-fix').click(function(){
	$('.room-main-des').removeClass('show')
	$('.view-more-arrow-fix').addClass('css_hidden')
	$('.wedding-view-more-arrow').removeClass('css_hidden')

});

function search_tukhoasp(tu) {
	if(tu!=='') {
		$('.bg-close').css('display','block');
		$.ajax({
			url:'/action.php',
			type: 'POST',
			data: 'url=search_tukhoa&tu='+tu,
			dataType: 'html',
			async: false,
			success: function(data){
				$('.remove-search').css('display','block');
				showResult1("show_auto_timsp", data);
			}
		});
	}
	return false;
}
function showResult1(type,data) {
	closeLoader();
	$("#"+type+"").html(data).hide().fadeIn(0);
	block = false;
}

$('#wrapper').on('click', '.item_tk', function () {
	var el = $(this);
	var search_hl_name = $(el).attr('data-name');
		$('input[name=s_type]').val(search_hl_name);
		$('.show_auto_timsp').css('display','none');
});
function myFunction() {
	$('.search-remove-h').val('');
	$('.show_auto_timsp').css('display','none');
}
$(function(){
	$('.heading-title').click(function(){
		$('.heading-table').toggleClass('active');
	})
});


function fb_logout() {
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'account',
			type: 'fb_logout'
		},
		async: false,
		cache: false,
		dataType: 'html',
		success: function() {
			window.history.go(-1);
		},
		error: function() {
			alert('Lỗi kết nối hệ thống, vui lòng kiểm tra lại.');
		}
	});
	return false;
}

function register() {
    $.post('/action.php?url=register', function(html) {
        $('#_modal').html(html).modal();
        $("#_modal").modal({
            escapeClose: false,
            showClose:true
        });
    });
}
function login() {
	$.post('/action.php?url=login', function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}
function forgot() {
	$.post('/action.php?url=forgot', function(html) {
		$('#_modal').html(html).modal();
		$("#_modal").modal({
			escapeClose: false,
			showClose:true
		});
	});
}

function loadreg1(type) {
	var email = $('input[name="r_email"]').val();
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: {
			url: type,
			type: 'reg',
			email: email
		},
		dataType: "html",
		success: function(data){
			$('.send_detail-staff').html(data);
		}
	});
	return false;
}

function hnn_register(fm) {
	var btn = $('button.btn-send[type="submit"]');
	$(btn).addClass('b-active');
	$(btn).attr('disabled', 'disabled');
	$(btn).prev('label.error').remove();
	var dataList = new FormData($(fm)[0]);
	dataList.append("url", 'account');
	dataList.append("type", 'register');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: dataList,
		dataType: 'json',
		success: function(rs){
			if (rs.pcs === true) {
				$(btn).before('<label class="success">' + rs.msg + '</label>');
				$(btn).removeClass('b-active').addClass('b-finished');
				setTimeout(function () {
					window.location.reload();
				}, 3000);
			} else {
				$(btn).before('<label class="error">' + rs.msg + '</label>');
				$(btn).removeClass('b-active');
				$(btn).removeAttr('disabled');
			}
		},
		cache: false,
		contentType: false,
		processData: false
	});
	return false;
}

function hnn_login(fm) {
	var btn = $('button.btn-send[type="submit"]');
	$(btn).addClass('b-active');
	$(btn).attr('disabled', 'disabled');
	var dataList = new FormData($(fm)[0]);
	dataList.append("url", 'account');
	dataList.append("type", 'login');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: dataList,
		dataType: 'json',
		success: function(rs){
			if (rs.pcs === true) {
				window.location.reload();
			} else {
				$(btn).before('<label class="error">' + rs.msg + '</label>');
				$(btn).removeClass('b-active');
				$(btn).removeAttr('disabled');
			}
		},
		cache: false,
		contentType: false,
		processData: false
	});
	return false;
}
function hnn_logout() {
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'account',
			type: 'logout'
		},
		async: false,
		cache: false,
		dataType: 'html',
		success: function() {
			window.location.reload();
		},
		error: function() {
			alert('Lỗi kết nối hệ thống, vui lòng kiểm tra lại.');
		}
	});
	return false;
}
function hnn_forgot(fm) {
	var btn = $('button.btn-send[type="submit"]');
	$(btn).addClass('b-active');
	$(btn).attr('disabled', 'disabled');
	var dataList = new FormData($(fm)[0]);
	var cpass = parseInt(dataList.get('f_cpass'));
	dataList.append("url", 'account');
	dataList.append("type", 'forgot');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: dataList,
		dataType: 'json',
		success: function(rs){
			if (rs.pcs === true) {
				if(cpass===1) {
					$(btn).before('<label class="success">' + rs.msg + '</label>');
					$(btn).removeClass('b-active').addClass('b-finished');
					setTimeout(function () {
						window.location.href = rs.href;
					}, 3000);
				} else {
					$(btn).closest(fm).html(rs.msg);
				}
			} else {
				$(btn).before('<label class="error">' + rs.msg + '</label>');
				$(btn).removeClass('b-active');
				$(btn).removeAttr('disabled');
			}
		},
		cache: false,
		contentType: false,
		processData: false
	});
	return false;
}
function hnn_account(fm) {
	var btn = $('button.btn-send[type="submit"]');
	$(btn).addClass('b-active');
	$(btn).attr('disabled', 'disabled');
	$(btn).prev('label.error').remove();
	$(btn).next('.btn').hide();
	var dataList = new FormData($(fm)[0]);
	dataList.append("url", 'account');
	dataList.append("type", 'update');
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: dataList,
		dataType: 'json',
		success: function(rs){
			if (rs.pcs === true) {
				$(btn).next('.btn').remove();
				$(btn).removeClass('b-active').addClass('b-finished');
				$(btn).before('<label class="success">' + rs.msg + '</label>');
			} else {
				$(btn).before('<label class="error">' + rs.msg + '</label>');
				$(btn).removeClass('b-active');
				$(btn).removeAttr('disabled');
				$(btn).next('.btn').show();
			}
		},
		cache: false,
		contentType: false,
		processData: false
	});
	return false;
}

function sendOrder(type, id) {
	showLoader();
	var dataList = $query('#'+id);
	$.ajax({
		url:'/action.php',
		type: 'POST',
		data: 'url='+type+'&'+dataList,
		dataType: 'json',
		success: function(data){
			closeLoader();
			$query_unt('#'+id);
			window.location.href = data.link;
			return false;

		}
	});
	return false;
}
$(function() {
	mobiscroll.setOptions({
		locale: mobiscroll.localeVi,
		theme: 'ios',
		themeVariant: 'light'
	});

	var now = new Date(),
		week = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
	var min = new Date(),
		max = new Date(min.getFullYear(), min.getMonth() + 6, min.getDate());

	mobiscroll.datepicker('#start', {
		controls: ['calendar'],
		dateFormat: 'DD/MM/YYYY',
		select: 'range',
		startInput: '#start',
		endInput: '#end',
		invalid: [
			new Date(now.getFullYear(), now.getMonth())
		],
		inRangeInvalid: true,
		min: min,
		max: max
	});

});

$('.s-select.ks1').click(function(e) {
	$('.xp__guests__inputs-container').show();
	e.stopPropagation();
});
$(document).click(function(){
	$(".xp__guests__inputs-container").hide();
});

$('.container').on('click', '.remove-hotel-views', function () {
	showLoader();
	var tr = $(this).closest('.bb-ks-item.hotel-l');
	var v = parseInt($(this).attr('data-value'));
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'views_hotel',
			type: 'delete',
			code: v
		},
		cache: false,
		async: false,
		dataType: 'json',
		success: function(rs) {
			$.bootstrapGrowl(rs.msg, {
				type: 'danger',
				align: 'right',
				width: 'auto'
			});
			tr.remove();
			closeLoader();
		},
	});
});

$('.booking-room').on('change', 'select[name="qty"]', function () {
	showLoader();
	var e = $(this);
	var q = parseInt(e.val());
	var v = parseInt(e.find(':selected').data('id'));
	var b = parseInt(e.find(':selected').data('buffet'));
	var id = $('input[name="ids"]').val();

	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'cart',
			type: 'add',
			code: v,
			qty: q,
			buffet: b,
			hotel_id : id
		},
		cache: false,
		async: false,
		dataType: 'json',
		success: function(rs) {
			if (rs.pcs === true) {
				$('.nummber-price').html(rs.count);
				$('.p-r').html(rs.msg.total_asti);
				$('.p-r-asti').html(rs.msg.total);
				$('.total-asti-t').html(rs.msg.total_asti);
				$('.salel-asti').html(rs.msg.add_code);
				if (rs.msg.phuthunlon != 0) {
					$('.ptnlon-asti').html(rs.msg.phuthunlon);
					$('.ptnglon').css('display', 'flex');
				}else{
					$('.ptnglon').css('display', 'none');
				}
				if (rs.msg.phuthutem != 0) {
					$('.pttem-asti').html(rs.msg.phuthutem);
					$('.pthutreem').css('display', 'flex');
				}else{
					$('.pthutreem').css('display', 'none');
				}

				$('.plus-night span').html(rs.msg.free_night);
				$('.box-chua-tomtat').html(rs.msg.note_buffer);
				if (rs.msg.type_mar > 0) {
					$('.plus-night').css('display', 'block');
				} else {
					$('.plus-night').css('display', 'none');
				}
				$('select[name="qty"]').css('border', '1px solid #0079D3');
				// $('.select-number-room').css('border', '1px solid #C4C4C4');
				closeLoader();
			} else {
				$.bootstrapGrowl(rs.msg, {
					type: 'danger',
					align: 'right',
					width: 'auto'
				});
			}
		},
		error: function() {
			closeLoader();
			$.bootstrapGrowl("<i class='fa fa-exclamation-circle fa-fw'></i> Lỗi kết nối hệ thống, vui lòng kiểm tra lại.", {
				type: 'danger',
				align: 'right',
				width: 'auto'
			});
		}
	});
});
$('.search-banner').on('click', '.change-search', function () {
	var start = $('input[name="t-start"]').val();
	var end = $('input[name="t-end"]').val();
	var adults = $('input[name="adults"]').val();
	var children = $('input[name="children"]').val();
	var age = $("select[name='age[]']")
		.map(function(){return $(this).val();}).get();
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: {
			url: 'get_session',
			start: start,
			end: end,
			adults: adults,
			children: children,
			age: age
		},
		cache: false,
		async: false,
		dataType: 'json',
		success: function(rs) {

		}
	});

});
$(function() {
	$('#b_frm').on('submit', function (e) {
		var v = false;
		$('select[name="qty"] :selected').each(function () {
			if ($(this).val() > 0) v = true;
		});
		if (!v) {
			// $('.select-number-room').css('border', '1px solid red');
			$('select[name="qty"]').css('border', '1px solid red');
			e.preventDefault();
		}
	});
})

$(function(){
	$('.togger-mobile').click(function(){
		$(this).toggleClass('open');
	})
});


window.fbAsyncInit = function() {
	FB.init({
		appId      : '814883816390893',
		cookie     : true,
		xfbml      : true,
		version    : 'v15.0'
	});
	FB.AppEvents.logPageView();
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fbLogin(){
	FB.login(function(response){
		if(response.authResponse){
			fbAfterLogin();
		}
	});
}

function fbAfterLogin(){
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {   // Lo
			FB.api('/me?fields=name,email', function(response) {
				jQuery.ajax({
					url: '/action.php',
					type: 'POST',
					data: {
						url: 'account',
						name: response.name,
						id: response.id,
						email: response.email,
						type: 'fb_login'
					},
					success:function(result){
						window.location.reload();
					}
				});
			});
		}
	});
}