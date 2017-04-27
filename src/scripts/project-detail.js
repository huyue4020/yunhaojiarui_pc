var $ = require('./libs/jquery.min.js');
var str_pro_detail = require("./templates/project-detail.string");
var Swiper = require("./libs/swiper.min.js");

var body = document.body;
body.innerHTML = str_pro_detail + body.innerHTML;

window.onload = function(){
	//案例选择高亮
    $('.case a span').on("click",function(){
        $('.case a span').removeClass('case-active');
        $(this).addClass('case-active');
    });
    $(".list li").on("click",function(){
        $(this).addClass('list-active').siblings('li').removeClass('list-active');
    });
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
            url:"./data/project.json",
            dataType: "json",
            data:{id:pro_id},
            success: function(json){
                $(".project-detail-title h2").html('').append(json[pro_id].name);
                $(".project-detail-content p").html('').append(json[pro_id].text);
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
    }
	$(".list li").on("click",function(){
        var pro_id = $(this).attr("data-list");
        getDetailPor(pro_id);
    });
    //垂直居中
    function getHalf(par,child){
        //par :父元素
        //child ： 子元素
        return (parseInt(par.css("height"))/2-parseInt(child.css("height"))/2);
    };
    $(".project-detail-pic").css("marginTop",getHalf($(".project-detail-pic"),$(".swiper-container"))+"px");
    $(".project-detail-text").css("marginTop",getHalf($(".pro-right"),$(".project-detail-text"))+"px");
    $('.pro-left-box').css("marginTop",getHalf($(".pro-left"),$(".pro-left-box")));
    $(window).resize(function(){
        $(".project-detail-pic").css("marginTop",getHalf($(".project-detail-pic"),$(".swiper-container"))+"px");
        $(".project-detail-text").css("marginTop",getHalf($(".pro-right"),$(".project-detail-text"))+"px");
        $('.pro-left-box').css("marginTop",getHalf($(".pro-left"),$(".pro-left-box")));
    });
    
};

    