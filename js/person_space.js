var where;
$(function () {
    where = getQueryVariable("ac");
    if (where ==false){
        $.ajax({
            url:"PersonalServlet",
            type:"post",
            dataType:"json",
            data: {
                "action": "getUser"
            },
            beforeSend:function(){
            },

            success:function(data){
                if(data!=null){
                   $(".sub-contain-block").html(" <ul class=\"mb-bar\">\n" +
                       "                <li><a href=\"person.jsp?mod=space\">我的</a></li>\n" +
                       "            </ul>\n" +
                       "                <table>\n" +
                       "                    <tr>\n" +
                       "                        <td name=\"u-img\" rowspan=\"2\"><img src=\"imgs/special_photo_bg.png\"></td>\n" +
                       "                        <td style=\"font-size: 1.2em\" id=\"username\">"+data["name"]+"</td>\n" +
                       "                    </tr>\n" +
                       "                    <tr>\n" +
                       "                        <td>个性签名</td>\n" +
                       "                    </tr>\n" +
                       "                </table>\n" +
                       "                <div id=\"u-ul\">\n" +
                       "                    <ul>\n" +
                       "                        <li style=\"float: left;font-size: 1.5em\">个人资料<li>\n" +
                       "                        <li style=\"float: right\" id=\"edit\"><a href=\"person.jsp?mod=space&ac=gh_head\"><img src=\"imgs/edit.png\"></a></li>\n" +
                       "                    </ul>\n" +
                       "                </div>\n" +
                       "                <div class=\"person-info-div\" >\n" +
                       "                    <div class=\"person-info-block\">\n" +
                       "                        UID:<span id=\"UID\" >"+data["id"]+"</span>\n" +
                       "                    </div>\n" +
                       "                    <div class=\"person-info-block\">\n" +
                       "                        性别:<span id=\"gender\">男</span><br>\n" +
                       "                    </div>\n" +
                       "                    <div class=\"person-info-block\">\n" +
                       "                        手机号:<span id=\"phone-number\">"+data["phonenumber"]+"</span><br>\n" +
                       "                    </div>\n" +
                       "                </div>\n"
                   )
                }
            },
            error:function(xhr,textStatus,errorThrown){
                /*错误信息处理*/
                console.log("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
                    "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
                    errorThrown);
            }
        });
    }
    if (where =="gh_head"){
        $(".sub-contain-block").html("" +
            " <ul class=\"mb-bar\">\n" +
            "<li><a href=\"person.jsp?mod=space\">我的</a></li>\n" +
            "<li><a href=\"person.jsp?mod=space&ac=gh_head\">修改</a></li>\n" +
            " </ul>\n" +
            " <div class=\"person-edit-choice\">\n" +
            "     <h2 class=\"title-bar-short\">设置</h2>\n" +
            "     <ul>\n" +
            "          <li><a href=\"person.jsp?mod=space&ac=gh_head\">修改头像</a></li>\n" +
            "          <li><a href=\"person.jsp?mod=space&ac=gh_info\">修改个人资料</a></li>\n" +
            "     </ul>\n" +
            "</div>\n" +
            " <div class=\"person-edit-display\">\n" +
            "     <h2 class=\"title-bar-long\">修改项</h2>\n" +
            "          <div id=\"edit-div\">\n" +
            "                <h3>当前我的头像</h3>\n" +
            "               <img src=\"imgs/special_photo_bg.png\" width=\"150\" height=\"150\">\n" +
            "               <h3>设置新的头像</h3><p>设置后刷新查看</p>\n" +
          "<form method=\"post\" action='' enctype=\"multipart/form-data\">\n" +
            "    选择一个文件:\n" +
            "    <input type=\"file\" name=\"uploadFile\" />\n" +
            "    <br/><br/>\n" +
            "    <input type=\"submit\" value=\"上传\" onclick='upload()' />\n" +
            "</form>" +
            "</form>"+
            "                    </div>\n" +
            "                </div>")
    }
    if (where =="gh_info"){
        $(".sub-contain-block").html(" <ul class=\"mb-bar\">\n" +
            "                    <li><a href=\"person.jsp?mod=space\">我的</a></li>\n" +
            "                    <li><a href=\"person.jsp?mod=space&ac=gh_head\">修改</a></li>\n" +
            "                </ul>\n" +
            "                <div class=\"person-edit-choice\">\n" +
            "                    <h2 class=\"title-bar-short\">设置</h2>\n" +
            "                    <ul>\n" +
            "                        <li><a href=\"person.jsp?mod=space&ac=gh_head\">修改头像</a></li>\n" +
            "                        <li><a href=\"person.jsp?mod=space&ac=gh_info\">修改个人资料</a></li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "                <div class=\"person-edit-display\">\n" +
            "                    <h2 class=\"title-bar-long\">修改项</h2>\n" +
            "                    <div id=\"edit-div\">\n"+
            "<table>\n" +
            "            <tr ><td class=\"tdl\">手机号</td><td><input type=\"text\" id=\"phone_umber\" class=\"input-item_nr\"><div class=\"showerror\">错误</div></td></tr>\n" +
            "        <tr ><td class=\"tdl\">个性签名</td><td><input type=\"text\" id=\"person-sig\" class=\"input-item_nr\"><div class=\"showerror\">错误</div></td></tr>\n" +
            "        </table>"+
            "                    </div>\n" +
            "                </div>")
    }
});

function upload() {
    $.ajax({
        url:"/Upload",
        type:"post",
        data:{
        },
        success:function (data) {
            alert("上传成功")
        },
        error:function(xhr,textStatus,errorThrown){
           alert("状态码"+xhr.status+"<br>"+"状态:"+xhr.readyState+"<br>"+
                "错误信息:"+xhr.statusText+"<br>"+"返回响应信息："+xhr.responseText+"请求状态："+textStatus+
                errorThrown);
           alert("错误")
        }
    })
}
