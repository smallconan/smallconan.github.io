$(function () {
    $.ajax({
        url:"UserServlet",
        type:"post",
        dataType:"json",
        data: {
            "action": "hasLogined"
        },
        success:function(data){//处理返回的信息，true则跳转，false则提示密码错误
            if(data==true){
               showheader();
            } else
            {
                $(".head-container").append(
                    "<div class=\"row\">\n" +
                    "        <div class=\"header-right\">\n" +
                    "            <ul>\n" +
                    "                <li><a id=\"register-page\" href=\"register.html\">注册</a></li>\n" +
                    "                <li><a id=\"login-page\" href=\"login.html\">登录</a></li>\n" +
                    "                <li><a  href=\"index.html\">主页</a></li>\n" +
                    "                <li><a href=\"dailyarticle.html\">每日一文</a></li>\n" +
                    "                <li><a href=\"OnlineBookStore.html\">学习</a></li>\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "        <div class=\"header-left\" >\n" +
                    "            <a href=\"index.jsp\"><img src=\"imgs/special_photo_bg.png\" height=\"40\" width=\"40\" style=\"padding-top: 5px\"></a>\n" +
                    "        </div>\n" +
                    "    </div>"
                );
            }
        },
        error:function(xhr,textStatus,errorThrown){
            /*错误信息处理*/
            console.log("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
                "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
                errorThrown);
        }
    });
});

$(".head-container").on("mouseover","#person-page",function () {
    $(".sub-menu").css({"display":"block"})
});
$(".head-container").on("mouseout","#person-page",function () {
    $(".sub-menu").css({"display":"none"})
});

function showheader() {
    $(".head-container").append(
        "<div class=\"row\">\n" +
        "        <div class=\"header-right\">\n" +
        "            <ul>\n" +
        "                <li id=\"person-page\">\n" +
        "                    <a href=\"javascript:void(0)\" >我的</a>\n" +
        "                    <div class=\"sub-menu\" id=\"sub-menu-li\">\n" +
        "                        <a href=\"person.jsp\">个人中心</a>\n" +
        "                        <a href=\"javascript:void(0)\" onclick=\"logout()\">退出登录</a>\n" +
        "                    </div>\n" +
        "                </li>\n" +
        "                <li><a  href=\"index.jsp\">主页</a></li>\n" +
        "                <li><a href=\"dailyarticle.html\">每日一文</a></li>\n" +
        "                <li><a href=\"OnlineBookStore.html\">学习</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"header-left\" >\n" +
        "            <a href=\"index.jsp\"><img src=\"imgs/special_photo_bg.png\" height=\"40\" width=\"40\" style=\"padding-top: 5px\"></a>\n" +
        "        </div>\n" +
        "    </div>"
    );
}

function logout() {
        $.ajax({
                url: "UserServlet",
                type:"post",
                data: {
                    "action":"logout"
                },
                success:function (data) {
                    alert("注销成功");
                   window.location.reload();
                }
        });
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

function info_check(type,toCheck) {
    var pn_patt=/^1[0-9]{10}$/;
    var ps_patt=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,14}$/;
    if (type==="phone_number"){
        return pn_patt.test(toCheck);
    }
    if (type==="password"){
        return ps_patt.test(toCheck);
    }
}