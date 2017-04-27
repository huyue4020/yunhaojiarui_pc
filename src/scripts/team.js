var $ = require('./libs/jquery.min.js');
var str_team = require("./templates/team.string");
var Swiper = require("./libs/swiper.min.js");

var body = document.body;
body.innerHTML = str_team + body.innerHTML;

window.onload = function(){
	// 导航隐藏显示
	$(".nav-btn").on("click",function(){
		if($(".nav .nav-box ul").css("left")=="0px"){
			$(".nav .nav-box ul").stop().animate({left:"674px"}, 500);
		}else{
			$(".nav .nav-box ul").stop().animate({left:"0px"}, 500);
		}
	});
	//导航active
	$(".nav-box ul li a").on("click",function(){
		$(this).parents("li").addClass('nav-active').siblings('li').removeClass('nav-active');
	});
	//swiper
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
		roundLengths : true //防止文字模糊
    });
	//team
	$(".team-container ul li").eq(0).on("click",function(){
		if($(".team-detail1").css("display")=="none"){
			$(".team-detail1").show().stop().animate({left:"31%"}, 500);
			$(".team-detail2").stop().animate({left:"33.3%"}, 500).hide();
			$(".team-detail3").stop().animate({left:"66.6%"}, 500).hide();
			$(".team-container ul li").eq(0).stop().animate({left:"0px"}, 500);
			$(".team-container ul li").eq(1).stop().animate({left:"60%"}, 500);
			$(".team-container ul li").eq(2).stop().animate({left:"93%"}, 500);
		}else{
			$(".team-detail1").stop().animate({left:"0px"}, 500).hide();
			$(".team-container ul li").eq(0).stop().animate({left:"0px"}, 500);
			$(".team-container ul li").eq(1).stop().animate({left:"33.3%"}, 500);
			$(".team-container ul li").eq(2).stop().animate({left:"66.6%"}, 500);
		}
	});
	$(".team-container ul li").eq(1).on("click",function(){
		if($(".team-detail2").css("display")=="none"){
			$(".team-detail1").stop().animate({left:"0px"}, 500).hide();
			$(".team-detail2").show().stop().animate({left:"63.3%"}, 500);
			$(".team-detail3").stop().animate({left:"66.6%"}, 500).hide();
			$(".team-container ul li").eq(0).stop().animate({left:"0px"}, 500);
			$(".team-container ul li").eq(1).stop().animate({left:"32.3%"}, 500);
			$(".team-container ul li").eq(2).stop().animate({left:"91%"}, 500);
		}else{
			$(".team-detail2").stop().animate({left:"33.3%"}, 500).hide();
			$(".team-container ul li").eq(0).stop().animate({left:"0px"}, 500);
			$(".team-container ul li").eq(1).stop().animate({left:"33.3%"}, 500);
			$(".team-container ul li").eq(2).stop().animate({left:"66.6%"}, 500);
		}
	});
	$(".team-container ul li").eq(2).on("click",function(){
		if($(".team-detail3").css("display")=="none"){
			$(".team-detail1").stop().animate({left:"0px"}, 500).hide();
			$(".team-detail2").stop().animate({left:"33.3%"}, 500).hide();
			$(".team-detail3").show().stop().animate({left:"70.6%"}, 500);
			$(".team-container ul li").eq(0).stop().animate({left:"-26.3%"}, 500);
			$(".team-container ul li").eq(1).stop().animate({left:"7%"}, 500);
			$(".team-container ul li").eq(2).stop().animate({left:"40.3%"}, 500);
		}else{
			$(".team-detail3").stop().animate({left:"66.6%"}, 500).hide();
			$(".team-container ul li").eq(0).stop().animate({left:"0px"}, 500);
			$(".team-container ul li").eq(1).stop().animate({left:"33.3%"}, 500);
			$(".team-container ul li").eq(2).stop().animate({left:"66.6%"}, 500);
		}
	});
};
	