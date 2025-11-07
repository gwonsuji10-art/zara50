$(function(){
    let numAc = $("article").length;
    let widSec = 200 * numAc;
    let widTotal = widSec + 600;

    $("section").width(widTotal);
    
    // ✅ body 높이를 더 늘려서 슬로건 표시 공간 확보
    $("body").height(widSec + 400);

    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();

        // 가로 스크롤 이동
        $("section").css("left", -scroll);

        // ✅ 스크롤이 끝에 도달했을 때 슬로건 나타나기
        let showPoint = widSec - 2000; // 카드 거의 끝날 지점 (조정 가능)
        if(scroll > showPoint){
            $(".txt").fadeIn(800);
        } else {
            $(".txt").fadeOut(400);
        }
    });

    // 이하 원래 코드 그대로 유지
    $("article h2").click(function(e){
        e.preventDefault();
        let index = $(this).parent().index();
        let imgSrc = $(this).children("a").attr("href");
        let posAc = 200 * index;

        $("article").removeClass("on");
        $(this).parent().addClass("on");
        $(this).siblings("p").children("img").attr("src", imgSrc);
        $("html, body").stop().animate({"scrollTop" : posAc}, 500);
    });

    $("section span").click(function(){
        $("article").removeClass("on");
    });

    $("#navi li").click(function(){
        let i = $(this).index();
        let posNavi = 1000 * i;
        let $th = $(this);
        $("#navi li, article").removeClass("on");
        $("html, body").stop().animate({"scrollTop" : posNavi}, 500, function(){
            $th.addClass("on");
        });
    });
});
