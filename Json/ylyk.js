/*
Application: YLYK
Development by 伟人, made by 不忘初心丶
*/

var body = $response.body.replace(/"title":"未开通会员"/g, '"title":"已开通会员"').replace(/"type":"not_yet"/g, '"type":"10"').replace(/"isLock":"1"/g, '"isLock":"0"').replace(/"courseStatus":"lock"/g, '"courseStatus":"unlock"').replace(/"canRead":"0"/g, '"canRead":"1"').replace(/"buyButtonStatus":"1"/g, '"buyButtonStatus":"0"').replace(/"canListen:"0"/g, '"canListen:"1"');
$done({ body });
