$(function() {
	var speed1 = 1,speed2 = 1.5,speed3 = 2,speed4 = 0.8; speed5 = 0.6;
	$('.carousel-inner').on('mousemove', function(e) {
		$('.item').css({
			"transition": "all 0.5s ease"
		})
		var e = e || window.event;
		var x = -($('.item').position().left - e.clientX + $('.item').width() / 2) / 60;
		var y = ($('.item').position().top - e.clientY - $(document).scrollTop() + $('.item').height() / 2) / 40 - 1;
		var z = 14;
		//				console.log(e.clientX + ';' + e.clientY)
		//				console.log(x + ';' + y)
		var rotate = "rotateX(" + y + "deg) rotateY(" + x + "deg)";
		$('.item').css({
			"transform": rotate
		})
		if(x < 0 && y < 0) {
			y = Math.abs(y);
			z = Math.abs(x);
			x = Math.abs(y) * 2 - Math.abs(x);
		} else if(x < 0 && y > 0) {
			y = Math.abs(y) - 3
		} else if(x > 0 && y < 0) {
			y = -Math.abs(y) - 3;
			x = Math.abs(y) * 3 - Math.abs(x) * 2;
			//				z=Math.abs(y)*3 - Math.abs(x);
		} else if(x > 0 && y > 0) {
			y = -(Math.abs(y) - 3)
			z = Math.abs(x);
		}


		var shadow = y + "px " + Math.abs(x) + "px " + z + "px rgba(0,0,0,.6)";
		$('.item').css({
			"box-shadow": shadow
		})
		var gaodu1 = x * speed1;
		var gaodu2 = x * speed5;
		$('.gaodu1').css('top', gaodu1)
		$('.gaodu2').css('top', gaodu2)
	})
	$('.carousel-inner').on('mouseout', function() {
		$('.item').css({
			"transition": "all 1s ease"
		})
		$('.item').css({
			"transform": 'none'
		})

		$('.item').css({
			"box-shadow": 'none'
		})
			//
	})

	
})