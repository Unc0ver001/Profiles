/*
Application: YLYK
Development by 伟人, made by 不忘初心丶
QX1.0.17:
^https?:\/\/new-app-api\.ylyk\.com\/v1\/(user\/myinfo\/my|goods\/(getAudioCourseGoodsDetail|getAlbumGoodsDetail|getFilterAlbumCourseGoodsList|getAlbumCourseGoodsLiveList|getLiveCourseGoodsDetail)) url script-response-body https://raw.githubusercontent.com/Unc0ver001/Unc0ver/main/Json/ylyk.js
Surge4.4.3:
http-response ^https?:\/\/new-app-api\.ylyk\.com\/v1\/(user\/myinfo\/my|goods\/(getAudioCourseGoodsDetail|getAlbumGoodsDetail|getFilterAlbumCourseGoodsList|getAlbumCourseGoodsLiveList|getLiveCourseGoodsDetail)) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Unc0ver001/Unc0ver/main/Json/ylyk.js
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path1 = '/v1/goods/getAudioCourseGoodsDetail';
const path2 = '/v1/goods/getAlbumGoodsDetail';
const path3 = '/v1/goods/getFilterAlbumCourseGoodsList';
const path4 = '/v1/goods/getAlbumCourseGoodsLiveList';
const path5 = '/v1/goods/getLiveCourseGoodsDetail';
const path6 = '/v1/user/myinfo/my';
if (url.indexOf(path1) != -1) {
	obj.data["canListen"] = "1";
	obj.data["canRead"] = "1";
	body = JSON.stringify(obj);
 }

if (url.indexOf(path2) != -1) {
	body = $response.body.replace(/"buyButtonStatus":"1"/g, '"buyButtonStatus":"0"').replace(/"isFilter":"0"/g, '"isFilter":"1"').replace(/"isFinish":"0"/g, '"isFinish":"1"');
 }

if (url.indexOf(path3) != -1) {
	body = $response.body.replace(/"courseStatus":"lock"/g, '"courseStatus":""');
 }

if (url.indexOf(path4) != -1) {
	body = $response.body.replace(/"isLock":"1"/g, '"isLock":"0"').replace(/"isTry":"0"/g, '"isTry":"1"');
 }

if (url.indexOf(path5) != -1) {
	obj.data["canListen"] = "1";
	body = JSON.stringify(obj);
 }

if (url.indexOf(path6) != -1) {
	body = $response.body.replace(/"title":"未开通会员"/g, '"title":"已开通会员"').replace(/"type":"not_yet"/g, '"type":"10"');
 }
$done({body});