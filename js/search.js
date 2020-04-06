$(function () {
    var icon=$(".search_ico");
    var bar=$(".search_bar");
    var inputs=$("#search");
    icon.click(function () {
        if(!bar.hasClass('search_open'))//检测是否为展开状态
        {
            $(".search_bar").addClass('search_open');
            bar.attr("title","");
            inputs.focus();
        } else{/*是展开状态*/
            alert("搜索");
            inputs.val("");
            bar.removeClass('search_open')
        }
    });
    $(".close").click(function () {
        bar.removeClass('search_open');
    })
});
