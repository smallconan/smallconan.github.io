var deng=$("#mw-deng");//灯框
var deng_type=$("#deng-type");//灯的状态
var read=$(".read");//读 页面
deng.hover(function () {
    deng.css({"cursor":"pointer"});
    if(deng_type.attr("xlink:href")==="#icon-deng"){
        deng.attr({"title":"关灯"});
    }else
        deng.attr({"title":"开灯"});
}, function () {});
deng.click(function () {
    if(deng_type.attr("xlink:href")==="#icon-deng"){//关灯
        $("#deng-type").attr({"xlink:href":"#icon-dengju"});
        read.removeClass("read-light");
        read.addClass("read-black");
    }else{
        deng_type.attr({"xlink:href":"#icon-deng"});
        read.addClass("read-light");
        read.removeClass("read-black");
    }

});