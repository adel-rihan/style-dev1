//...................................
//...................................
// http://www.dev-point.com/
// Copyrights (2006-2013)
//...................................
//...................................

function setValues()
{
var url = new String(window.location);
var post = url.match(/\&post=(.+)/)[1];
var convertor =  post.replace(/%0A/g, '[br][/br]');
var decoder = decodeURIComponent(convertor);
if (post.length>0) { 
document.getElementById('vB_Editor_QR_textarea').value= decoder;
document.getElementById('vB_Editor_QR_textarea').style.visibility='hidden';
document.getElementById('sharebody').style.display='block';
document.getElementById('waitx').style.display='block';
(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; 
    }
})(jQuery);
$('#menu').goTo();



}
else { }
}