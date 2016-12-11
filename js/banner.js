$('.slider-box').on('mousemove', function(e) {
	$('.slider').css({
		"transition": "none"
	})
	var e = e || window.event;
	var x = -($('.slider').position().left - e.clientX + $('.slider').width() / 2) / 40;
	var y = ($('.slider').position().top - e.clientY - $(document).scrollTop() + $('.slider').height() / 2) / 25 - 1;
	var z = 14;
	console.log(e.clientX + ';' + e.clientY)
	console.log(x + ';' + y)
	var rotate = "rotateX(" + y + "deg) rotateY(" + x + "deg)";
	$('.slider').css({
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

	//	if(y<0){
	//		z=-20
	//	}

	var shadow = y + "px " + Math.abs(x) + "px " + z + "px #666";
	$('.slider').css({
		"box-shadow": shadow
	})
	var gaodu1 = x * speed1;
	var gaodu2 = x * speed5;
	var gaodu3 = -x * speed3;
	$('.gaodu1').css('left', gaodu1)
	$('.gaodu2').css('left', gaodu2)
	$('.gaodu2').css('left', gaodu2)
		//$('.slider').on('mouseout',function(){
		//
})