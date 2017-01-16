//...................................
//...................................
// http://www.dev-point.com/
// Copyrights (2006-2013)
//...................................
//...................................

function Share() {
if (document.getElementById('share').checked) {
var currentlink = location.href ;
var facebooksharecontent = document.getElementById('vB_Editor_QR_textarea').value ; 
var facebooksharelink = (decodeURI('https://www.facebook.com/dialog/feed?app_id=145634995501895&display=popup&caption=' + facebooksharecontent + '&link=' + currentlink + '&redirect_uri=https://www.facebook.com/me'));
window.open(facebooksharelink,'','width=400,height=200')
} else {
            
        }
}