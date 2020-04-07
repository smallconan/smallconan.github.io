$.ajax({
    url:'https://interface.meiriyiwen.com/article/today?dev=1',
    dataType:'json',
    success:function (data) {
        $("#mw-title").text(data.data.title);
        $("#mw-author").text(data.data.author);
        $("#digest").text(data.data.digest)
        $("#mw-content").html(data.data.content);
    },
    error:function(xhr,textStatus,errorThrown){
        /*错误信息处理*/
        console.log("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
            "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
            errorThrown);
    }
});
$.ajax({
    url: "https://v1.alapi.cn/api/hitokoto",
    type:'post',
    dataType: 'json',
    success:function (data) {
        $("#yiyan").html("【一言】："+data.data.hitokoto+"\n" +
            "<span style=\"text-align: right\">--"+data.data.creator+'《'+data.data.from+'》'+"</span>")
    }
})
