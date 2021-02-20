var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path1 = '/user.htm';
const path2 = '/book.htm';
if (url.indexOf(path1) != -1) {
	obj.data["vip"] = "1";
	obj.data["nickName"] = "999";
	body = JSON.stringify(obj);
 }

if (url.indexOf(path2) != -1) {
var body = $response.body.replace(/"isFree":"0"/g, '"isFree":"1"');
 }
$done({body});