var $ = require('./libs/jquery.min.js');
var str_project = require("./templates/project.string");
var Swiper = require("./libs/swiper.min.js");

var body = document.body;
body.innerHTML = str_project + body.innerHTML;

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
	//按钮
	$(".project-btn").on("click",function(){
		if($(this).hasClass('project-btn-right')){
			$(this).removeClass('project-btn-right').addClass('project-btn-left');
			$(".project-list").animate({right:"-14%"}, 500);
			$(".project-detail").animate({left:"0px"}, 500);
		}else{
			$(this).removeClass('project-btn-left').addClass('project-btn-right');
			$(".project-list").animate({right:"0px"}, 500);
			$(".project-detail").animate({left:"-14%"}, 500);
		}
	});
    //案例列表遮罩
    $(".project-list-pic ul li a .project-list-layer").hover(
		function () {
			$(this).stop().animate({"opacity":"0"}, 500);
		},
		function () {
			if($(this).hasClass('.layer-active')){

			}else{
				$(this).stop().animate({"opacity":"1"}, 500);
			}
		}
	);
	//手机详情轮播
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        roundLengths : true, 
        effect : 'fade',
		fade: {
		  crossFade: true,
		},
		autoplay : 2000,
		autoplayDisableOnInteraction : false,
    });
	//案例详情Ajax
	function getDetailPor(pro_id){
        $.ajax({
            type: "get",
            // url: controller+'/Ajax/getdetail/id/'+pro_id,
            url:"./data/project.json",
            dataType: "json",
            data:{id:pro_id},
            success: function(json){
            	$(".project-detail-content p").html(' ');
                $(".project-detail-title img").attr({src : json[pro_id].title+''});
                $(".project-detail-content p").html(json[pro_id].text+'');
                $(".swiper-wrapper .swiper-slide").remove();
                var oImg = json[pro_id].img_swiper;
              	for( var i in oImg){
              		$(".swiper-wrapper").append('<div class="swiper-slide">'+
                                '<img src="'+oImg[i]+'">'+
                            '</div>');
              	};
              	swiper.update(true);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log("XMLHttpRequest.status:"+XMLHttpRequest.status);
                console.log("XMLHttpRequest.readyState:"+XMLHttpRequest.readyState);
                console.log("textStatus:"+textStatus);
            }
        });
    };
	$(".project-list-pic ul li a").on("click",function(){
		$(".project-list-layer").removeClass('layer-active');
		$(this).find(".project-list-layer").addClass('layer-active');
		var pro_id = $(this).attr("data-pro");
		getDetailPor(pro_id);
	});
};

    