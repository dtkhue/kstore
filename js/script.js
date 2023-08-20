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
	$("#_loading").html("<div style=\"position: fixed; top: 50%; right: 50%; text-align: center; background: transparent; z-index: 999999999;\"><div class=\"windows8\"> <div class=\"wBall\" id=\"wBall_1\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_2\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_3\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_4\"> <div class=\"wInnerBall\"> </div> </div> <div class=\"wBall\" id=\"wBall_5\"> <div class=\"wInnerBall\"> </div> </div> </div></div>").show().fadeIn(10);
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
	$(".olala-vp360").each(function () {
		$(this).html('');
		$(this).Valiant360();
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > 50) {
			$('#f_cart').stop().animate({
				bottom: '150px'
			}, 100);
			$('#go-top').stop().animate({
				bottom: '70px'
			}, 150);
		} else {
			$('#f_cart').stop().animate({
				bottom: '-70px'
			}, 100);
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
	$('.auto-number').autoNumeric('init');
	//---
	$('#b_register').click(function(e) {
		showLoader();
		$.ajax({
			url:'/action.php',
			type: 'POST',
			data: 'url=m_register',
			dataType: 'html',
			success: function(data){
				showResult('b_modal', data);
				$('#b_modal').modal();
			}
		});
		return false;
	});
	//---
	$(".sendsocial").click((function(e) {
		e.preventDefault();
		var t = '';
		switch ($(this).attr("rel")) {
			case "facebook":
				t = "https://www.facebook.com/sharer.php?u=" + $(this).attr("data-href") + "&p[title]=" + encodeURI($(this).attr("data-title"));
				break;
			case "fbhome":
				t = "https://www.facebook.com/sharer.php?u=https://" + window.location.host;
				break;
			case "twitter":
				t = "https://twitter.com/share?url=" + $(this).attr("data-href") + "&title=" + encodeURI($(this).attr("data-title"));
				break;
			case "gplus":
				t = "https://plus.google.com/share?url=" + $(this).attr("data-href")
		}
		return "" === t || window.open(t, "", "_blank,resizable=yes,width=800,height=450").focus(), !1
	})), $(".sendmail").attr("href", "mailto:email@domain.com?subject=" + window.encodeURIComponent(document.title) + "&body=" + window.encodeURIComponent(window.location.toString())), $(".sendprint").click((function(e) {
		var t = $(this).attr("data-href");
		e.preventDefault(), window.open(t, "_blank", "height=500,width=800,status=yes,location=no,menubar=no,resizable=yes,scrollbars=yes,titlebar=yes,top=50,left=100", !0)
	}));
});
$(window).load(function() {
	$(".detail-wp img").each(function () {
		if($(this).width()>100) {
			$(this).replaceWith('<label class="mx-img">'+$(this)[0].outerHTML +'</label>');
		}
	});
});
(function($,W,D) {
	var JQUERY4U = {};
	JQUERY4U.UTIL = {
		setupFormValidation: function() {
			$.validator.setDefaults({
				ignore: ':hidden:not(.selectpicker)',
				errorPlacement: function (error, element) {
					if ($(element).is('.selectpicker')) {
						element.next().after(error);
					} else {
						error.insertAfter(element);
					}
				}
			});
			$.validator.messages.required = 'Vui lÃ²ng nháº­p trÆ°á»ng báº¯t buá»™c nÃ y.';
			$("#_contact").validate({
				rules: {
					email: {
						required: true,
						email: true
					},
					messages: {
						required: 'Vui lÃ²ng nháº­p trÆ°á»ng báº¯t buá»™c nÃ y.'
					}
				},
				messages: {
					email	: 'Vui lÃ²ng nháº­p Email há»£p lá»‡.'
				},
				submitHandler: function(f) {
					sendForm('#_contact', 'contact');
				}
			});
			$("#_register").validate({
				rules: {
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name	: 'Vui lÃ²ng nháº­p Há» vÃ  tÃªn.',
					tel		: 'Vui lÃ²ng nháº­p Sá»‘ Ä‘iá»‡n thoáº¡i'
				},
				submitHandler: function(f) {
					sendForm('#_register', 'register');
				}
			});
		}
	};

	$(D).ready(function($) {
		JQUERY4U.UTIL.setupFormValidation();
	});
})(jQuery, window, document);

function sendForm(fm, type) {
	var btn = $('button.btn-send[type="submit"]');
	$(btn).addClass('b-active');
	$(btn).attr('disabled', 'disabled');
	$(btn).next('.btn').hide();
	var dataList = new FormData($(fm)[0]);
	dataList.append("url", type);
	$.ajax({
		url: '/action.php',
		type: 'POST',
		data: dataList,
		dataType: 'json',
		success: function(rs){
			$query_unt(fm);
			if (rs.pcs === true) {
				$.modal.close();
				$(btn).next('.btn').remove();
				$(btn).removeClass('b-active').addClass('b-finished').attr('disabled', 'disabled');
				if(rs.link) {
					alert(rs.msg, function() {
						window.location.href = rs.link;
					});
				} else {
					alert(rs.msg);
				}
			} else {
				alert(rs.msg, function() {
					$(btn).removeClass('b-active');
					$(btn).removeAttr('disabled');
					$(btn).next('.btn').show();
				});
			}
		},
		cache: false,
		contentType: false,
		processData: false
	});
	return false;
}