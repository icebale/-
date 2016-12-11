$(function() {
	$(".choose-box>li").click(function() {
		var _index = $(this).index()
			//					$(this).children().eq(0).addClass('active');
			//					$(this).siblings().children().eq(0).removeClass('active');
		for(var i = 0; i < $(".choose").length; i++) {
			$(".choose").eq(i).removeClass('active')
		}
		$(".choose").eq(_index).addClass('active')
		$(".left-pic>img").eq(_index).fadeIn().addClass('active').siblings().hide().removeClass('active')
		$(".right-pic>img").eq(_index).fadeIn().addClass('active').siblings().hide().removeClass('active')
	})
	$(window).on('resize', function() {
		//		console.log($(window).width())
		if($(window).width() < 1200) {
			$("#smallnav").addClass('paddingT')
		} else {
			$("#smallnav").removeClass('paddingT')
		}
	})
	$(window).scroll(function() {
		var scrollT = $(this).scrollTop();
		console.log(scrollT)
			//		if(scrollT > 50 && scrollT < 300) {
			//			$(".big-section").eq(0).animate({'padding-top': '150px'},200,'swing')
			//		} else {
			//			$(".big-section").eq(0).animate({'padding-top': '50px'},500,'swing')
			//		}
		if(scrollT > 200) {
			$(".Backtop").fadeIn();
		} else {
			$(".Backtop").fadeOut();
		}

		var navH = $("#bignav").height()
		var cha = navH - scrollT;
		if(cha == 0 || cha < 0 || $(window).width() < 1200) {
			$("#bignav").removeClass('navbar-fixed-top').hide();
			$("#smallnav").css({
				'padding': 0
			}).addClass('navbar-fixed-top')
			$("#xx1>a").fadeIn()
			$(".big-section").eq(0).animate({
				'padding-top': '250px'
			}, 100, 'swing')
		} else {
			$("#bignav").addClass('navbar-fixed-top').fadeIn();
			$("#smallnav").css({
				'padding-top': 100
			}).removeClass('navbar-fixed-top')
			$("#xx1>a").hide()
			$(".big-section").eq(0).animate({
				'padding-top': '50px'
			}, 100, 'swing')
		}

		//		var offT = $(".title").eq(1).offset().top - scrollT;
		//		var winH = $(window).height();
		//		var baifen = offT / winH;
		//		console.log(baifen)
		//		if(baifen > 0.3 && baifen < 0.6) {
		//			$(".title").eq(1).removeClass('scroll-up1').addClass('scroll-down1')
		//
		//		} else if(baifen > 0.6) {
		//			$(".title").eq(1).removeClass('scroll-down1').addClass('scroll-up1')
		//		} else {
		//			$(".title").eq(1).removeClass('scroll-up1 scroll-down1')
		//		}

		updown($(".title").eq(0))
		updown($(".title").eq(1))
	})

	function updown(text) {
		var offT = text.offset().top - $(window).scrollTop();
		var winH = $(window).height();
		var baifen = offT / winH;
		console.log(baifen)
		if(baifen > 0.01 && baifen < 0.5) {
			text.removeClass('scroll-down1').addClass('scroll-up2')
		} else if(baifen > 0.5) {
			text.removeClass('scroll-up2').addClass('scroll-down1')
		} else {
			text.removeClass('scroll-up2 scroll-down1')
		}
	}
	$(".phone").on('mouseover', function() {
		//		alert($(this).index())
		if($(this).index() / 2 == 0) {
			$(this).children().eq(0).addClass('active1')
		} else {
			$(this).children().eq(0).addClass('active2')
		}

	})
	$(".phone").on('mouseout', function() {
		$(this).children().eq(0).removeClass('active1 active2')
	})
})