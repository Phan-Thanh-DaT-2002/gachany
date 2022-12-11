$("input").attr('readonly', true);

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
var database = localStorage.getItem('database');


var db;
var db_con_lai;
var newUser;
if (database === 'male') {
	var new_user_female = JSON.parse(localStorage.getItem('new_user_female'));
	newUser = new_user_female;
	db = 'http://localhost:3000/dsgacha_nam';
	db_con_lai = 'http://localhost:3000/dsgacha_nu';
	dien_thong_tin(new_user_female);
}
else if (database === 'female') {
	db = 'http://localhost:3000/dsgacha_nu';
	var new_user_male = JSON.parse(localStorage.getItem('new_user_male'));
	newUser= new_user_male;
	db_con_lai ='http://localhost:3000/dsgacha_nam';
	dien_thong_tin(new_user_male);
}

$('#yes').click(function(){
	$('#yes').css('display', 'none');
	$('#no').css('display', 'none');
});

$('#no').click(function(){
	$('#yes').css('display', 'none');
	$('#no').css('display', 'none');
	
		axios.post(db_con_lai,newUser)
		.then(res => {
			return res;
		});
	
});


axios.get(db).then(function (response) {

	let imgs = ``;
	for (var i = 0; i < response.data.length; i++) {
		imgs += `<dd><img src=" ${response.data[i].anh}" /></dd>`;
	}
	document.getElementById('anhs').innerHTML = imgs;

show(response.data[Math.floor(Math.random()*10)]);
})


$(document).ready(function () {
	setInterval(function () {

		var screenHeight = $(document).height();
		var screenWidth = $(document).width();
		var startLeft = getRandomArbitrary(0, screenWidth);
		var timeRun = getRandomArbitrary(4000, 6000);
		var opacityR = Math.random() * (1 - 0.2) + 0.2;
		var sizeR = getRandomArbitrary(10, 40);
		var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
		var snow = document.createElement('span');

		$(snow).addClass('snow-item fa fa-heart').css({
			'position': 'absolute',
			'z-index': 'auto',
			'color': '#ff0000',
			'display': 'block',
			'top': 0,
			'left': startLeft,
			'opacity': opacityR,
			'font-size': sizeR + 'px'
		})
			.appendTo('body')
			.animate({
				'top': screenHeight - sizeR,
				'left': endLeft
			}, {
				duration: timeRun,
				easing: 'linear',
				complete: function () {
					$(this).fadeOut('fast', function () {
						$(this).remove();
					});
				}
			});
	}, 500);
});
window.onload = function () {
	var dds = document.getElementsByTagName('dd');
	var dl = document.getElementsByTagName('dl')[0];
	dl.style.transform = "rotateX(-10deg) rotateY(0deg)";
	for (var i = 0; i < dds.length; i++) {
		var inverted = document.createElement('div');
		var inverteds = document.createElement('div');
		var img = document.createElement('img');
		img.src = dds[i].getElementsByTagName('img')[0].src;
		inverted.appendChild(img);
		inverted.className = 'inverted';
		inverteds.appendChild(inverted)
		inverteds.className = 'inverteds';
		dds[i].appendChild(inverteds);
	}
	deal(dds, dds.length - 1);
	window.onmousedown = function (e) {
		e = e || window.event;
		var mouseX = e.clientX, mouseY = e.clientY;
		var transform = dl.style.transform;
		var rotateX = transform.substr(transform.indexOf('rotateX(') + 8);
		var rotateY = transform.substr(transform.indexOf('rotateY(') + 8);
		rotateX = parseInt(rotateX.substring(0, rotateX.indexOf('deg')));
		rotateY = parseInt(rotateY.substring(0, rotateY.indexOf('deg')));
		// window.onmousemove = function (e) {
		// 	e = e || window.event;
		// 	var x = rotateX - (e.clientY - mouseY);
		// 	var y = rotateY + (e.clientX - mouseX);
		// 	if (x > 360 || x < -360)
		// 		x %= 360;
		// 	if (y > 360 || y < -360)
		// 		y %= 360;
		// 	dl.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
		// }
		// window.onmouseup = function () {
		// 	window.onmousemove = null;
		// }
	}
	function deal(dds, n) {
		var speed = 700;
		var translateZTerminus = 400;
		var angle = 360 / dds.length * n;
		var translateZ = 0;
		var rotateY = 0;
		var time = setInterval(function () {
			translateZ += translateZTerminus / speed * 10;
			rotateY += angle / speed * 10;
			dds[n].style.transform = 'rotateY(' + rotateY + 'deg) translateZ(' + translateZ + 'px)';
			if (rotateY >= angle && translateZ >= translateZTerminus) {
				clearInterval(time);
				dds[n].style.transform = 'rotateY(' + angle + 'deg) translateZ(' + translateZTerminus + 'px)';
				if (n > 0)
					deal(dds, n - 1);
			}
		}, 10);
	}
}

function dien_thong_tin(oject){
	$('#ho_ten').val(oject.ho_ten);
	$('#tuoi').val(oject.tuoi);
	$('#cung_hoang_dao').val(oject.cung_hoang_dao);
	$('#so_dien_thoai').val(oject.so_dien_thoai);
	$('#dia_chi').val(oject.dia_chi);
	$('#so_thich').val(oject.so_thich);
}
function show(dtb){
	$('#ho_ten_dtb').val(dtb.name);
	$('#tuoi_dtb').val(dtb.age);
	$('#cung_hoang_dao_dtb').val(dtb.Cunghoangdao);
	$('#so_dien_thoai_dtb').val(dtb.SDT);
	$('#dia_chi_dtb').val(dtb.diachi);
	$('#so_thich_dtb').val(dtb.Sothich);
	$('#img_dtb').attr('src',dtb.anh);
}

