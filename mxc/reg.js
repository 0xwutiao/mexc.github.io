var num = 2;
var mypage = 'https://www.huobi.ec/zh-cn/topic/invited/?invite_code=xus23';//下载链接
var pissoff = '您好,请先点击“火币注册”，完成注册再下载使用火币APP';
allow = Array();
allow[num] = 2;
function gotoit(link){
if (link != num){
allow[link] = 2;
} else {
for (i=1;i<=num;i++){
if (allow[i] != 2){
i = num + 1;
lemmeIn = 0;
} else {
lemmeIn = 1;
}
}
if (lemmeIn == 1){
window.location = mypage;
} else {
alert(pissoff);
}
}
}
//--->