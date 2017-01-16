function showmenu() {
	if (document.getElementById('accountinfo').style.display == 'block') { document.getElementById('accountinfo').style.display = 'none' }
	if (document.getElementById('settingsmenu').style.display == 'block') { document.getElementById('settingsmenu').style.display = 'none' }
	var menust = document.getElementById('appmenu');
	if (menust.style.display == 'block') { menust.style.display = 'none' }
	else if (menust.style.display == 'none') { menust.style.display = 'block' }
}

function showaccountinfo() {
	
	if (document.getElementById('appmenu').style.display == 'block') { document.getElementById('appmenu').style.display = 'none' }
	if (document.getElementById('settingsmenu').style.display == 'block') { document.getElementById('settingsmenu').style.display = 'none' }
	if (document.getElementById('accountinfo').style.display == 'block') { document.getElementById('accountinfo').style.display = 'none' }
	else if (document.getElementById('accountinfo').style.display == 'none') { document.getElementById('accountinfo').style.display = 'block' }
	
	
}

function showsettings() {
	
	if (document.getElementById('appmenu').style.display == 'block') { document.getElementById('appmenu').style.display = 'none' }
	if (document.getElementById('accountinfo').style.display == 'block') { document.getElementById('accountinfo').style.display = 'none' }
	if (document.getElementById('settingsmenu').style.display == 'block') { document.getElementById('settingsmenu').style.display = 'none' }
	else if (document.getElementById('settingsmenu').style.display == 'none') { document.getElementById('settingsmenu').style.display = 'block' }
	
	
}