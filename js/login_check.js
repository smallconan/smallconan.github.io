$("#account").focusin(function () {
    $("#info").css({"visibility":"hidden"});
});
$('#submit').click(function(){//点击登录按钮事件，执行登录验证
    $.ajax({
        url:"UserServlet",
        type:"post",
        dataType:"json",
        data: {
            "username": $('#account').val(),
            "password": $('#secret').val(),
            "action": "login"
        },

        beforeSend:function(){
            $('#submit').val("登录中");
        },

        success:function(data){//处理返回的信息，true则跳转，false则提示密码错误
            if(data==false){
                $("#info").css({"visibility":""});
                $("#submit").val("登录");
            }else{
                window.location.href = 'index.jsp';
                $.cookie("status","logined",{expires:0.5,path:'/'});
            }
        },
        error:function(xhr,textStatus,errorThrown){
            /*错误信息处理*/
            $("#info").html("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
                "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
                errorThrown);
        }
    });
});