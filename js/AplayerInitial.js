var m_cover="";
var m_name="";
var author="";
$.ajax({
    url:"https://v1.alapi.cn/api/music/detail",
    type:"post",
    data:{
      "ids":2063206669
    },
    dataType:'json',
    success:function (data) {
        m_cover=data.data.songs[0].al.picUrl;
        m_name=data.data.songs[0].name;
        author=data.data.songs[0].ar.name;
    }
});
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: '星空叙事曲',
        artist: author,
        url: m_cover,
        cover: m_cover
    }]
});