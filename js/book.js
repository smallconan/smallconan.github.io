var type=1;
var book_id=0;
var pagenum=1;
$.ajax({
    url:"BookServlet",
    type:"post",
    data_type:"json",
    data:{
        "action":"type"
    },
    success:function (data) {
        var jsonObj=JSON.parse(data);
        for (var row in jsonObj){
            $('.type-list').append("" +
                "<li id='"+jsonObj[row].type+"'>"+jsonObj[row].type_name+"</li>\n" );
        }
    }
});
getBookList();/*默认展示计算机类*/
/*响应用户的标签选择*/
$(".type-list").on("click","li",function () {
    pagenum=1;
    type = $(this).attr('id');
    getBookList();
}); //参考OneNote 无法为动态元素绑定JQUERY选择器

/*响应用户的书目选择*/
$(".display-div").on("click","table",function () {
    book_id=$(this).attr('id');
    window.open("detail.html?id="+book_id);
});


$(".display-div").on("click","#pre",function () {
        if (pagenum===1)alert("当前已为首页");
        else{
            pagenum--;
            getBookList();
        }
});
$(".display-div").on("click","#next",function () {
        pagenum++;
        getBookList();
});

function getBookList() {
    $.ajax({
        url:"BookServlet",
        type:"post",
        data_type:"json",
        data:{
            "type":type,
            "action":"list",
            "pagenum":pagenum
        },
        success:function (data) {
            console.log(data);
            if (data!="false"){
                var jsonObj=JSON.parse(data);
                $(".display-div").html("");
                for (var row in jsonObj){
                    $(".display-div").append(
                        " " +
                        "<table class='book_tb' id='"+jsonObj[row].book_id+"'>" +
                        "<tr ><td rowspan='5' width='25%'><img src='"+jsonObj[row].cover+"' width='100' height='100'/></td>" +
                        "<td colspan='2' class='book-title'>"+jsonObj[row].name+"</td></tr>\n" +
                        " <tr><td colspan='2'>作者:"+jsonObj[row].author+"</td></tr>\n" +
                        " <tr><td>"+jsonObj[row].press+"</td></tr>\n" +
                        "<tr><td>"+jsonObj[row].post_time+"</td></tr>"+
                        " <tr><td colspan='2' class='book-price' style='width: 60%'>￥"+jsonObj[row].price+"</td><td><input type='button' value='购买'></td></tr>" +
                        "</table>"
                    )
                }
                $(".display-div").append(" <div class=\"pag\">" +
                    "<ul class=\"pagination\">\n" +
                    "                            <li id='pre'><<</li>\n" +
                    "                            <li class='active'>第 "+pagenum+" 页</li>\n" +
                    "                            <li id='next'>>></li>\n" +
                    "                        </ul>" +
                    "</div>")
            }
            else{
                alert("当前已是最后一页");
                pagenum--;
            }
        }
    });
}






