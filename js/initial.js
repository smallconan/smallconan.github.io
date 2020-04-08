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
    nested: true,
    noSwiping:true
});
var is_swiper=document.getElementById("sc1");
/**/
$('#home-page').on('mousewheel', function(event) {
    mySwiper1.slideNext(400,true);
});
$("#home-page").on(('mouseover'),function () {
    $("body").css({"overflow":"hidden"})
});
$("#home-page").on('mouseout',function () {
    $("body").css({"overflow":"auto"})
});
$('#read').on('mousewheel',function (event) {
    if (!mouse_is_in(event,$("#mw"))){
        if(event.deltaY>0)
            mySwiper1.slidePrev(400,true);
    }
})