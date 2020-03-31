$(function () {
    var icon=$(".search_ico");
    var bar=$(".search_bar");
    var inputs=$("#search");
    icon.click(function () {
        if(!bar.hasClass('search_open'))//检测是否为展开状态
        {
            $(".search_bar").addClass('search_open');
            inputs.focus();
        } else{/*是展开状态*/
            alert("搜索");
            inputs.val("");
            bar.removeClass('search_open')
        }
    });
    inputs.blur(function () {
        if(inputs.val()==""){
            bar.removeClass('search_open');
            inputs.val("");
        }
    })
    /*$(".search_ico").click(function(){

        var keys = inputs.val();
        if(keys.length>2){
            inputs.val('');
            $("#myform").submit();
        }else{
            return false;
        }
    });*/
});
