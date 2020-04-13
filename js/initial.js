var mySwiper1 = new Swiper('#sc1', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    noSwiping:true
});
var swiper = new Swiper('#sc2', {
    direction: 'vertical',
    noSwiping:true
});
var is_swiper=document.getElementById("sc1");
/*监听鼠标滑轮事件*/
$('#home-page').on('mousewheel', function(event) {
    if(event.deltaY<0)
    mySwiper1.slideNext(400,true);
});
/*$("#home-page").on(('mouseover'),function () {
    $("body").css({"overflow":"hidden"})
});
$("#home-page").on('mouseout',function () {
    $("body").css({"overflow":"auto"})
});*/
$('#read').on('mousewheel',function (event) {
    if (!mouse_is_in(event,$("#mw"))){
        if(event.deltaY>0)
            mySwiper1.slidePrev(400,true);
    }
});
layui.use('element', function() {
        var $ = layui.jquery
            , element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
    }
);