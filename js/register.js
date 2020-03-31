var checknum=0;
$("#r_username").blur(function () {

    if ($("#r_username").val() == "") {
        $("#r_username").focus();//如果用户不输入用户名，就一直停留在这里
        return;
    }
    $.ajax({
        url:"UserServlet",
        type:"post",
        dataType:"json",
        data:{
            "r_username":$('#r_username').val(),
            "action":"check"
        },
        beforeSend:function(){
            $('#r_username').css({"background":"url(imgs/load.png) 335px 8px no-repeat"});
        },
        success:function(data){//处理返回的信息，true则跳转，false则提示密码错误
            if(data==false){
                $('#r_username').css({"background":"url(imgs/existence.png) 335px 8px no-repeat"});
            }else{
                $('#r_username').css({"background":"url(imgs/ok.png) 335px 8px no-repeat"});
                checknum++;
            }
        },
        error:function(xhr,textStatus,errorThrown){
            /*错误信息处理*/
            $("#info-status").css({"background":"url(imgs/warning.png) 335px 8px no-repeat"});
            $("#info-status").show();
            $("#info-status").html("服务器出错,请稍后再试");
        }
    })
});

$("#r_password").blur(function () {
    if (!info_check("password",$("#r_password").val())){
        $('#r_password').css({"background":"url(imgs/existence.png) 335px 8px no-repeat"});
        checknum--;
    }else{
        $('#r_password').css({"background":"url(imgs/ok.png) 335px 8px no-repeat"});
        checknum++;
    }
});

$("#r_password2").blur(function () {
    if ($("#r_password").val() !== $("#r_password2").val()){
        $("#info").show();
        $("#info").html("两次输入密码不一致");
    }
    else{
        $("#info").hide();
        checknum++;
    }
});


$("#r_phonenumber").blur(function () {
    if(!info_check("phone_number",$("#r_phonenumber").val())){
        $('#r_phonenumber').css({"background":"url(imgs/existence.png) 335px 8px no-repeat"});
    }else{
        $('#r_phonenumber').css({"background":"url(imgs/ok.png) 335px 8px no-repeat"});
        checknum++;
    }
});

$('#submit').click(function(){//点击登录按钮事件，执行登录验证
    if ($("#check").prop('checked')){
        if (checknum===4){
            $.ajax({
                url:"UserServlet",
                type:"post",
                dataType:"json",
                data:{
                    "r_username":$('#r_username').val(),
                    "r_password":$('#r_password').val(),
                    "r_phonenumber":$("#r_phonenumber").val(),
                    "action":"register"
                },
                beforeSend:function(){
                },
                success:function(data){
                    if(data==false){
                        $("#info-status").show();
                        $("#info-status").html("账户名已存在,请更换");
                    }else{
                        window.location.href = 'login.html';
                    }
                },
                error:function(xhr,textStatus,errorThrown){
                    /*错误信息处理*/
                    $("#info-status").show();
                    $("#info-status").html("服务器出错,请稍后再试");
                }
            });
        }
        else{
            $("#info-status").show();
            $("#info-status").html("请修改\\完善错误信息");
        }
    }
    else{
        alert("请同意用户协议和隐私协议");
    }
});