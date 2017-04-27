var $ = require('./libs/jquery.min.js');
var str_jobs = require("./templates/jobs.string");
var Swiper = require("./libs/swiper.min.js");

var body = document.body;
body.innerHTML = str_jobs + body.innerHTML;

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
    //有内容的格子加上小手
    $(".jobs-text-list-box .jobs-text-list li").not(".jobs-list-black").css("cursor","pointer");
    //招聘列表点击详情
    $(".jobs-text-list-box .jobs-text-list li").not(".jobs-list-black").on("click",function(){
    	$(".jobs-text-list-box .jobs-text-list li").removeClass('jobs-list-active');
    	$(this).addClass('jobs-list-active');
    	$(".jobs-text-list-box").removeClass('animated fadeIn').addClass('animated fadeOut').hide();
    	$(".swiper-container").removeClass('animated fadeOut').addClass('animated fadeIn').show();
    });
    $(".close-btn").on("click",function(){
    	$(".swiper-container").removeClass('animated fadeIn').addClass('animated fadeOut').hide();
    	$(".jobs-text-list-box").removeClass('animated fadeOut').addClass('animated fadeIn').show();
    });
    //detail Ajax
    function getDetail(job_id){
        $.ajax({
            type: "get",
            url: controller+'/Ajax/getdetail/id/'+job_id,
            dataType: "json",
            data:{id:job_id},
            success: function(json){
                $(".jods-detail h3").html(json.name);
                $(".jods-detail-duty").html(' ');
                $(".jods-detail-ask").html(' ');
                $(".jods-detail-duty").append(json.duty);
                $(".jods-detail-ask").append(json.ask);
                
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log("XMLHttpRequest.status:"+XMLHttpRequest.status);
                console.log("XMLHttpRequest.readyState:"+XMLHttpRequest.readyState);
                console.log("textStatus:"+textStatus);
            }
        });
    };
    $(".jobs-text-list-box .jobs-text-list li").not(".jobs-list-black").on("click",function(){
        var job_id = $(this).attr("data-jobs");
        getDetail(job_id);
         
    });
};
	