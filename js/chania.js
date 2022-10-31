$(document).ready(function(){
	$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});

	//햄버거 아이콘 클릭
	$("header button").click(function(){
		$("#black").fadeIn("slow");  //아이디가 black인 요소가 서서히 나타나게 함. fadeIn("fast")혹은 fadeIn("slow")혹은 fadeIn(숫자)로 작성할 수 있음
		$("nav").animate({left:0}, "slow");  //slow이면 0.6초 정도?
	});

	//메뉴 항목 클릭
	$("nav a").click(function(){
		$("#black").fadeOut("fast");
		$("nav").animate({left:"-61%"}, "slow");  //처음 설정(=css설정)으로 돌아가는 것
	});
	
	//페이드 애니메이션 ((자동기능))
	setInterval(fade, 1800);  /// 1.8초마다 함수를 트리거한다.
	let i = 2;
	function fade() {
		$("figure img").eq(i).fadeOut(1500);
		i--;
		if(i == -1) {
			$("figure img").eq(i).fadeIn(1000);  //1초(=1000)동안 fadeIn되게 함
			i=2;
		}
	}

	/*미션1. 왼쪽 방향으로 자동 슬라이드. 슬라이드 이미지는 화면 가운데. 각 이미지 크기 600픽셀
	setInterval(leftAuto, 1500);  //1000은 1초를 의미. autoSlide와 leftAuto 모두 임의로 정한 이름
	let i = 2;
	function leftAuto() {
		$("figure img").animate({right: "600px"}, 1000, function(){
			$("figure img").append($("figure img").eq(i));  //append는 뒤에 추가하겠다는 것
			i--;
			if(i == -1) {
				$("figure img").eq(i).fadeIn(1000);
				i=2;
			}
			$("figure img").css("right", 0);
		});
	}  미션 여기다 하는 게 아니었음*/
});////////////////end