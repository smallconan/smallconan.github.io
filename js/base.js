$(".blog").click(function () {
  window.open("https://binconan.top/blog")
});
$(".box[title='Minecraft']").click(function () {
  window.open("https://www.mcbbs.net")
});
$(".box[title='bilibili']").click(function () {
  window.open("https://www.bilibili.com/")
});
$(".box[title='YouTube']").click(function () {
  window.open("https://www.youtube.com/")
});
$(".box[title='google']").click(function () {
  window.open("https://translate.google.cn/")
});
$(".box[title='百度网盘']").click(function () {
  window.open("https://pan.baidu.com/")
});
function mouse_is_in(e,div) {
  var x=e.clientX;
  var y=e.clientY;
  var div_x_1 = div.offset().left;
  var div_y_1 = div.offset().top;
  var div_x_2 = div.offset().left+div.outerWidth();
  var div_y_2 = div.offset().top+div.outerHeight();
  return !(x < div_x_1 || x > div_x_2 || y < div_y_1 || y > div_y_2);
}
function text_color() {
  var begin=0Xff0000;
  var gap=0X500;
  var color= new Array(50);
  color[0]=begin;
  for(var i=1;i<50;i++){
   color[i]=color[i-1]+gap;
  }
return color;
}
$(".bing").hover(function () {
    $(".bing-info").show();
},function () {
    $(".bing-info").hide();
});
$(".translate").on('click',function () {
  layui.use('layer', function(){
    var layer = layui.layer;
        layer.open({
          type:1,
          title:'翻译',
          content:'<div class="translate-warp">\n' +
              '    <!--要翻译的文字-->\n' +
              '    <div style="float:left;height: 100%;width: 40%">\n' +
              '       \n' +
              '            <textarea type="text" id="t-value" class="orig "></textarea>\n' +
              '        \n' +
              '    </div>\n' +
              '    <div style="float: left;width: 20%">\n' +
              '        <button type="button" value="翻译">翻译</button>\n' +
              '    </div>\n' +
              '    <!--翻译结果-->\n' +
              '    <div style="float: left;height: 100%;width: 40%">\n' +
              '       \n' +
              '            <textarea id="t-result" class="orig"></textarea>\n' +
              '        \n' +
              '    </div>\n' +
              '</div>',
          area:['60%','60%']
        })
  });
});
