$(function () {
    $.ajax({
        url:"BookServlet",
        type:"post",
        data_type:"json",
        data:{
            "id":getQueryVariable("id"),
            "action":"id"
        },
        success:function (data) {
            var jsonObj=JSON.parse(data);
            console.log(data);
            $(".sub-contain-block").append("" +
                "<div class=\"book-detail-img\">\n" +
                "<img src='"+jsonObj["cover"]+"' width=\"300\" height=\"400\">\n" +
                "</div>\n" +
                "<div class=\"book-detail-info\">\n" +
                "       <p class=\"book-title\">"+jsonObj["name"]+"</p>\n" +
                "       <p>作者:"+jsonObj["author"]+"</p>\n" +
                "       <p>出版社:"+jsonObj["press"]+"</p>\n" +
                "       <p>出版日期:"+jsonObj["post_time"]+"</p>\n" +
                "       <p>ISBN号:"+jsonObj["book_id"]+"</p>\n" +
                "       <p>简介:</p>\n" +
                "       <p class=\"book-price\">￥"+jsonObj["price"]+"</p>\n" +
                " </div>")
        }
    });
});

