/*每日一文*/
$.ajax({
    url:'https://interface.meiriyiwen.com/article/today?dev=1',
    dataType:'json',
    async:true,
    success:function (data) {
        $("#mw-title").text(data.data.title);
        $("#mw-author").text(data.data.author);
        $("#digest").text(data.data.digest);
        $("#mw-content").html(data.data.content);
    },
    error:function(xhr,textStatus,errorThrown){
        /*错误信息处理*/
        console.log("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
            "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
            errorThrown);
    }
});
/*一言*/
$.ajax({
    url: "https://v1.alapi.cn/api/hitokoto",
    type:'post',
    dataType: 'json',
    async:true,
    success:function (data) {
        $("#yiyan").html("【一言】："+data.data.hitokoto+"\n" +
            "<span style='text-align: right;font-style: italic'>——"+data.data.from+"</span>")
    }
});
/*知乎日报*/
$.ajax({
    url:"https://v1.alapi.cn/api/zhihu/latest",
    type:'post',
    dataType:'json',
    success:function (data) {
        for (var i=0;i<3;i++){
            $("#zhihu-daily").append(" <div  class=\"zhihu-box\" >\n" +
                "                    <div class=\"card\" >\n" +
                "                        <div class=\"card-body\">\n" +
                "                            <h4 class=\"card-title\">"+data.data.stories[i].title+"</h4>\n" +
                "                            <h5 class=\"card-subtitle\">"+data.data.stories[i].hint+"</h5>\n" +
                "                            <button><a href='"+data.data.stories[i].url+"' target='_blank'>阅读</a></button>\n" +
                "                        </div>\n" +
                "                        <img alt='图片加载失败 请刷新重试' class=\"image-bottom\" src=\""+data.data.stories[i].images[0]+"\">\n" +
                "                    </div>\n" +
                "                </div>")
        }

    },
    error:function(xhr,textStatus,errorThrown){
        /*错误信息处理*/
        console.log("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
            "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
            errorThrown);
    }
});
/*微博热搜*/
$.ajax({
    url:"https://v1.alapi.cn/api/new/wbtop",
    dataType:'json',
    success:function (data) {
        for(var i=0;i<51;i++)
        {
            $("#re-sou").append(" <tr>\n" +
                "                                <td>"+i+"</td>\n" +
                "                                <td><a target='_blank' href='https://s.weibo.com/weibo?q="+data.data[i].hot_word+"'>"+data.data[i].hot_word+"</a></td>\n" +
                "                                <td>"+data.data[i].hot_word_num+"</td>\n" +
                "                            </tr>")
        }
    },
    error:function(xhr,textStatus,errorThrown){
        /*错误信息处理*/
        console.log("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
            "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
            errorThrown);
    }
});