var appid='20200406000413024';
var key='VjUVwIbmDYtYuxBSwo5U';
var salt = (new Date).getTime();
var query = 'apple';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh';
var str1 = appid + query + salt +key;
var sign = MD5(str1);
$.ajax({
    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    type: 'post',
    dataType: 'jsonp',
    data: {
        q: query,
        appid: appid,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    },
    success: function (data) {
        console.log(data);
    }
});