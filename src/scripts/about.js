var $ = require('./libs/jquery.min.js');
var str_about = require("./templates/about.string");

var body = document.body;
body.innerHTML = str_about + body.innerHTML;

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
};
	